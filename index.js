import mongoose from "mongoose";
import StudentRouter from "./Route/studentRoutes/stdroute.js";
import StaffRoutes from "./Route/staffroutes/StaffRoutes.js";


import express from "express";
import { routes } from "./Routes/routes.js";
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const mongoURI = 'mongodb://localhost:27017/practice1'; 

mongoose.connect(mongoURI, {
})
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
}); 

app.use("/api",StudentRouter)
app.use("/api",StaffRoutes)


app.use("/api",routes)

app.listen(port,()=>{
  console.log(`server is running on ${port}`);
})

