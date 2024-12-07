import mongoose from "mongoose";

export const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URL).then((_) => console.log("DB CONNECTED")).catch(err => {
            console.error(err.message, "DB NOT CONNECTED");
            process.exit(1);
        });
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};