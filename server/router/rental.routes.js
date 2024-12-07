import express from 'express';
import { adminAuth, userAuth } from '../middlewares/auth.js';
import { allRentals, cancelRental, completedRentals, newRental, ongoingRentals, specificRentalData, updateRentalData, updateRentalStatus } from '../controllers/rental.controller.js';
const router = express.Router();

router.route('/newrental').post(userAuth, newRental);
router.route('/allrentals').get(userAuth, allRentals);
router.route('/:rentalId').get(userAuth, specificRentalData);
router.route('/:rentalId').put(userAuth, updateRentalData);
router.route('/:rentalId').delete(userAuth, cancelRental);
router.route('/:rentalId/status').put(adminAuth, updateRentalStatus);
router.route('/completed').get(userAuth, completedRentals);

// router.route('/on/going').get(userAuth, ongoingRentals);

export default router;