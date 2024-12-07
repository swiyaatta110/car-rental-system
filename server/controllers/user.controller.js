import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getDataURI } from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";
import Rental from "../models/Rental.js";

export const register = async (req, res) => {
    let { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.send({
                suc: false,
                msg: "Some fields are missing, please fill it properly"
            });
        }

        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.send({
                suc: false,
                msg: "Try with different email"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashPassword
        });

        return res.send({
            suc: true,
            msg: "Successfully Registered"
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.send({
                suc: false,
                msg: "Some fields are missing, please fill it properly"
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.send({
                suc: false,
                msg: "User not found"
            });
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.send({
                suc: false,
                msg: "Incorrect Password"
            });
        }

        const token = jwt.sign({ userid: user._id }, process.env.SECRET_TOKEN, { expiresIn: '1d' });
        res.cookie('token', token, { httpOnly: true }).send({
            suc: true,
            user
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const logout = async (_, res) => {
    try {
        res.cookie('token', '').send({
            suc: true,
            msg: "LoggedOut Successfully"
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const profile = async (req, res) => {
    try {
        const user = await User.findById(req.id).select('-password');
        if (!user) {
            return res.send({
                suc: false,
                msg: "User not found"
            });
        }

        res.send({
            suc: true,
            user
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const updateProfile = async (req, res) => {
    let { phoneNumber, name } = req.body;
    try {
        const userid = req.id;
        const user = await User.findById(userid).select('-password');

        if (!user) {
            return res.send({
                suc: false,
                msg: "User not found"
            });
        }

        let profilePicture = req.file;
        if (profilePicture) {
            let fileuri = getDataURI(profilePicture);
            let cloudResponse = await cloudinary.uploader.upload(fileuri);

            user.profilePicture = cloudResponse.url;
        }

        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (name) user.name = name;

        await user.save();

        res.send({
            suc: true,
            user
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const rentalHistory = async (req, res) => {
    try {
        const userid = req.id;
        const user = await User.findById(userid);
        if (!user) {
            return res.send({
                suc: false,
                msg: "User not found"
            });
        }

        const rentalHistory = await Rental.find({ userid: userid }).populate('carid');

        res.send({
            suc: true,
            rentalHistory
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const specificRentalHistory = async (req, res) => {
    try {
        const { rentalId } = req.params;
        if (!rentalId) {
            return res.send({
                suc: false,
                msg: "Rental Invalid"
            });
        }

        const rentalHistory = await Rental.findById(rentalId);

        res.send({
            suc: true,
            rentalHistory
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const deleteProfile = async (req, res) => {
    try {
        const userid = req.id;
        const user = await User.findById(userid);

        if (!user) {
            return res.send({
                suc: false,
                msg: "User not found"
            });
        }

        await Rental.deleteMany({ userid });
        await User.deleteOne({ _id: userid });

        res.cookie('token', '').send({
            suc: true,
            msg: "Account Deleted"
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error
        });
    }
};
