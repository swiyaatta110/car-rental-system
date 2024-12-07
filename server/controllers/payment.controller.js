import Payment from "../models/Payment.js";

export const makePayment = async (req, res) => {
    try {
        let { rentalId } = req.body;
        const payment = await Payment.findOne({ rentalid: rentalId });
        if (!payment) {
            return res.send({
                suc: false,
                msg: "Payment Invalid"
            });
        }

        const date = new Date();
        payment.paymentDate = date;
        payment.status = 'paid';
        await payment.save();

        res.send({
            suc: true,
            msg: "Payment Successfull"
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
}

export const specificPayment = async (req, res) => {
    try {
        let { paymentId } = req.params;
        const payment = await Payment.findById(paymentId);

        if (!payment) {
            return res.send({
                suc: false,
                msg: "Payment Invalid"
            });
        }

        res.send({
            suc: true,
            payment
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const allPayments = async (req, res) => {
    try {
        let userid = req.id;
        let payments = await Payment.find({ userid })
            .populate({
                path: 'rentalid',  // First populate the rentalid
                populate: {
                    path: 'carid'   // Then populate the carid within rentalid
                }
            });


        res.send({
            suc: true,
            payments
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const specificPaymentDetails = async (req, res) => {
    try {
        const { rentalId } = req.params;
        const payment = await Payment.findOne({ rentalid: rentalId });

        if (!payment) {
            return res.send({
                suc: false,
                msg: "Payment not found"
            });
        }

        res.send({
            suc: true,
            payment
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const pendingPayments = async (req, res) => {
    try {
        const userid = req.id;
        const pendingPayments = await Payment.find({
            where: {
                userid,
                status: 'pending'
            }
        }).populate('rentalid');

        res.send({
            suc: true,
            pendingPayments
        });
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};
