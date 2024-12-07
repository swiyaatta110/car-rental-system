import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    rentalid: { type: mongoose.Schema.Types.ObjectId, ref: 'Rental', required: true },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: String, default: '' },
    status: { type: String, enum: ["paid", "pending"], default: "pending" }
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;