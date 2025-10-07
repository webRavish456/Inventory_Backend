import mongoose from "mongoose";
import dotenv from 'dotenv';
import { createAdmin } from "../seedData/createAdmin.js";

dotenv.config();

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const clusterName = process.env.MONGO_CLUSTER_NAME;


const connection_string = `mongodb+srv://${username}:${password}@${clusterName}.porns6t.mongodb.net/inventory?retryWrites=true&w=majority&appName=Inventory`;

export const connectDB = async () => {
  try {
    await mongoose.connect(connection_string, {
      family: 4,
    }).then(async ()=>{  
      await createAdmin();
      console.log('Connection successfull')}
    );
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error.message);
    throw error;
  }
};