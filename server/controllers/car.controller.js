import Car from "../models/Car.js";
import cloudinary from "../utils/cloudinary.js";
import { getDataURI } from "../utils/datauri.js";

export const allCars = async (_, res) => {
    try {
        let cars = await Car.find({}).sort({ createdAt: -1 });
        res.send({
            suc: true,
            cars
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const specificCar = async (req, res) => {
    try {
        const { carId } = req.params;
        if (!carId) {
            return res.send({
                suc: false,
                msg: "Car Invalid"
            });
        }

        const car = await Car.findById(carId);
        if (!car) {
            return res.send({
                suc: false,
                msg: "Car not found"
            });
        }

        res.send({
            suc: true,
            car
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const addCar = async (req, res) => {
    let { make, model, year, color, licensePlate, pricePerDay } = req.body;
    try {
        if (!make || !model || !year || !color || !licensePlate || !pricePerDay) {
            return res.send({
                suc: false,
                msg: "Some fields are missing, please fill it properly"
            });
        }

        let image = req.file;
        let cloudResponse;

        if (image) {
            let fileuri = getDataURI(image);
            cloudResponse = await cloudinary.uploader.upload(fileuri);

            await Car.create({
                make,
                model,
                year,
                color,
                licensePlate,
                image: cloudResponse.url,
                pricePerDay,
            });
        } else {
            await Car.create({
                make,
                model,
                year,
                color,
                licensePlate,
                pricePerDay,
            });
        }

        res.send({
            suc: true,
            msg: "Car Details Uploaded"
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const updateCar = async (req, res) => {
    let { make, model, year, color, licensePlate, pricePerDay } = req.body;
    try {
        const { carId } = req.params;
        if (!carId) {
            return res.send({
                suc: false,
                msg: "Car Invalid"
            });
        }

        const car = await Car.findById(carId);
        if (!car) {
            return res.send({
                suc: false,
                msg: "Car not found"
            });
        }

        let image = req.file;
        let cloudResponse;

        if (image) {
            let fileuri = getDataURI(image);
            cloudResponse = await cloudinary.uploader.upload(fileuri);

            car.image = cloudResponse.url;
        }

        if (make) car.make = make;
        if (model) car.model = model;
        if (year) car.year = year;
        if (color) car.color = color;
        if (licensePlate) car.licensePlate = licensePlate;
        if (pricePerDay) car.pricePerDay = pricePerDay;

        await car.save();

        res.send({
            suc: true,
            msg: "Car Details Updated"
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const deleteCar = async (req, res) => {
    try {
        const { carId } = req.params;
        if (!carId) {
            return res.send({
                suc: false,
                msg: "Car Invalid"
            });
        }

        const car = await Car.findById(carId);
        if (!car) {
            return res.send({
                suc: false,
                msg: "Car not found"
            });
        }

        await Car.deleteOne({ _id: carId });

        res.send({
            suc: true,
            msg: "Car Details Deleted"
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const availableRentalCars = async (_, res) => {
    try {
        let cars = await Car.find({ status: 'available' }).sort({ createdAt: -1 });

        res.send({
            suc: true,
            cars
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const updateCarStatus = async (req, res) => {
    let { status } = req.body;
    try {
        const { carId } = req.params;
        if (!carId) {
            return res.send({
                suc: false,
                msg: "Car Invalid"
            });
        }

        const car = await Car.findById(carId);
        if (!car) {
            return res.send({
                suc: false,
                msg: "Car not found"
            });
        }

        if(status) car.status = status;
        await car.save();

        res.send({
            suc: true,
            msg: "Car Status Updated"
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};
