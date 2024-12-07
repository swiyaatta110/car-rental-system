import express from 'express';
import { deleteProfile, login, logout, profile, register, rentalHistory, specificRentalHistory, updateProfile } from '../controllers/user.controller.js';
import { userAuth } from '../middlewares/auth.js';
import upload from '../middlewares/multer.js';
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(userAuth, logout);
router.route('/profile').get(userAuth, profile);
router.route('/profile').put(userAuth, upload.single('profilePicture'), updateProfile);
router.route('/rentals').get(userAuth, rentalHistory);
router.route('/rentals/:rentalId').get(userAuth, specificRentalHistory);
router.route('/account').delete(userAuth, deleteProfile);

export default router;