import Admin from '../models/Admin.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    let { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.send({
                suc: false,
                msg: "Some fields are missing, please fill it properly"
            });
        }

        const checkAdmin = await Admin.findOne({ email });
        if (checkAdmin) {
            return res.send({
                suc: false,
                msg: "Try with different email"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        await Admin.create({
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

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.send({
                suc: false,
                msg: "Admin not found"
            });
        }

        const checkPassword = await bcrypt.compare(password, admin.password);
        if (!checkPassword) {
            return res.send({
                suc: false,
                msg: "Incorrect Password"
            });
        }

        const token = jwt.sign({ adminid: admin._id }, process.env.SECRET_TOKEN, { expiresIn: '1d' });

        res.cookie('token', token, { httpOnly: true, samesite: 'strict' }).send({
            suc: true,
            admin
        })
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