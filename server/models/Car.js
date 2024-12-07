import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  licensePlate: { type: String, required: true, unique: true },
  image: { type: String, default: '' },
  pricePerDay: { type: Number, required: true },
  status: { type: String, enum: ['available', 'rented', 'maintainence'], default: 'available' },
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);
export default Car;
