import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import userRoutes from './router/user.routes.js';
import adminRoutes from './router/admin.routes.js';
import carRoutes from './router/car.routes.js';
import rentalRoutes from './router/rental.routes.js';
import paymentRoutes from './router/payment.routes.js';

dotenv.config({});
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/rentals', rentalRoutes);
app.use('/api/payments', paymentRoutes);

app.get('/', (_, res) => {
    res.send({
        suc: true,
        msg: "Welcome to CAR RENTAL Backend"
    });
});

app.get('*', (_, res) => {
    res.send({
        suc: false,
        msg: "Page not found"
    });
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening at PORT ${PORT}`);
});
