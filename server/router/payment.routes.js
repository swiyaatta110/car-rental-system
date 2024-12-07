import express from 'express';
import { userAuth } from '../middlewares/auth.js';
import { allPayments, makePayment, pendingPayments, specificPayment, specificPaymentDetails } from '../controllers/payment.controller.js';
const router = express.Router();

router.route('/makepayment').post(userAuth, makePayment);
router.route('/:paymentId').get(userAuth, specificPayment);
router.route('/all/pay').get(userAuth, allPayments);
router.route('/rental/:rentalId').get(userAuth, specificPaymentDetails);
router.route('/pending').get(userAuth, pendingPayments);

export default router;