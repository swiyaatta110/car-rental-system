import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    carid: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    days: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['ongoing', 'completed', 'cancelled'], default: 'ongoing' },
}, { timestamps: true });

const Rental = mongoose.model('Rental', rentalSchema);
export default Rental;