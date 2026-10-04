import mongoose from 'mongoose'
import { config } from './config.js'

// Connects the server to the configured MongoDB database.
export async function connectDB(){
    await mongoose.connect(config.MONGO_URI);
    console.log("database is connected");
}