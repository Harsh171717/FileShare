import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb+srv://harshdwivedi28:Harsh289@cluster0.olehojq.mongodb.net/`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database Connected Successfully!');
    } catch (error) {
        console.log('Error while connecting with the database: ', error.message);
    }
}

export default DBConnection;