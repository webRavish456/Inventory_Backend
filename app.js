import mongoose from "mongoose";
import express from "express";
import router from "./routes/routes.js";

const app = express();
const port = 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/uploadFiles", express.static("uploadFiles"));
app.use("/uploadReceipt",express.static("uploadReceipt"));

const mongoURI = "mongodb://localhost:27017/Backend";
mongoose.connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.use("/api", router);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
















