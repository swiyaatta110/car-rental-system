import express from 'express';
import { adminAuth } from '../middlewares/auth.js';
import { addCar, allCars, availableRentalCars, deleteCar, specificCar, updateCar, updateCarStatus } from '../controllers/car.controller.js';
import upload from '../middlewares/multer.js';
const router = express.Router();

router.route('/allcars').get(allCars);
router.route('/:carId').get(specificCar);
router.route('/newcar').post(adminAuth, upload.single('image'), addCar);
router.route('/:carId').put(adminAuth, upload.single('image'), updateCar);
router.route('/:carId').delete(adminAuth, deleteCar);
router.route('/avail/car').get(availableRentalCars);
router.route('/:carId/status').put(adminAuth, updateCarStatus);

export default router;