import express from 'express';
import { login, logout, register } from '../controllers/admin.controller.js';
import { adminAuth } from '../middlewares/auth.js';
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(adminAuth, logout);

export default router;