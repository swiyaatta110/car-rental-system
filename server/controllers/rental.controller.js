import Rental from "../models/Rental.js"
import Car from "../models/Car.js";
import User from "../models/User.js";
import Payment from "../models/Payment.js";

export const newRental = async (req, res) => {
    let { carid, days } = req.body;
    try {
        const userid = req.id;
        const user = await User.findById(userid);

        if (!user) {
            return res.send({
                suc: false,
                msg: "User not found"
            });
        }

        const car = await Car.findById(carid);
        if (!car) {
            return res.send({
                suc: false,
                msg: "Car not found"
            });
        }

        const rent = await Rental.create({
            userid,
            carid,
            days,
            totalPrice: car.pricePerDay * days
        });

        await Payment.create({
            rentalid: rent._id,
            amount: rent.totalPrice,
            userid: userid
        });

        car.status = 'rented';
        await car.save();

        res.send({
            suc: true,
            msg: `Rental Request Successful for ${car.model}`
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const allRentals = async (req, res) => {
    try {
        let userid = req.id;
        const user = await User.findById(userid);

        if (!user) {
            return res.send({
                suc: false,
                msg: "User not found"
            });
        }

        const rentalData = await Rental.find({ userid }).populate('carid');
        res.send({
            suc: true,
            rentalData
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const specificRentalData = async (req, res) => {
    let { rentalId } = req.params;
    try {
        const rental = await Rental.findById(rentalId).populate('carid');
        if (!rental) {
            return res.send({
                suc: false,
                msg: "Rental Invalid"
            });
        }

        res.send({
            suc: true,
            rental
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const updateRentalData = async (req, res) => {
    try {
        let { days } = req.body;
        let { rentalId } = req.params;
        const rental = await Rental.findById(rentalId);

        if (!rental) {
            return res.send({
                suc: false,
                msg: "Rental Invalid"
            });
        }

        const car = await Car.findById(rental.carid);
        if (!car) {
            return res.send({
                suc: false,
                msg: "Car Invalid"
            });
        }

        const payment = await Payment.findOne({ rentalid: rentalId });
        if (!payment) {
            return res.send({
                suc: false,
                msg: "Payment Invalid"
            });
        }

        rental.days = days;
        rental.totalPrice = car.pricePerDay * days;
        await rental.save();

        payment.amount = car.pricePerDay * days;
        await payment.save();

        res.send({
            suc: true,
            msg: "Rental Details Updated"
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const cancelRental = async (req, res) => {
    try {
        let { rentalId } = req.params;
        const rental = await Rental.findById(rentalId);
        if (!rental) {
            return res.send({
                suc: false,
                msg: "Rental Invalid"
            });
        }

        await Payment.deleteOne({ rentalid: rentalId });
        await Car.updateOne({ _id: rental.carid }, { status: 'available' });
        await Rental.deleteOne({ _id: rentalId });

        res.send({
            suc: true,
            msg: "Rental Cancelled"
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const ongoingRentals = async (req, res) => {
    try {
        let userid = req.id;
        const user = await User.findById(userid);

        if (!user) {
            return res.send({
                suc: false,
                msg: "User not found"
            });
        }

        const ongoingRentals = await Rental.find({
            where: {
                userid,
                status: 'ongoing'
            }
        }).populate('carid');

        res.send({
            suc: true,
            ongoingRentals
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const updateRentalStatus = async (req, res) => {
    try {
        let { rentalId } = req.params;
        let { status } = req.body;

        if (!status) {
            return res.send({
                suc: false,
                msg: "Status Invalid"
            });
        }

        const rental = await Rental.findById(rentalId);
        if (!rental) {
            return res.send({
                suc: false,
                msg: "Rental Invalid"
            });
        }

        if (status) rental.status = status;
        await rental.save();

        res.send({
            suc: true,
            msg: "Rental Status Updated"
        })
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
}

export const completedRentals = async (req, res) => {
    try {
        let userid = req.id;
        const user = await User.findById(userid);

        if (!user) {
            return res.send({
                suc: false,
                msg: "User not found"
            });
        }

        const ongoingRentals = await Rental.find({
            where: {
                userid,
                status: 'completed'
            }
        }).populate('carid');

        res.send({
            suc: true,
            ongoingRentals
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};
