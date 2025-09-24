import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
  incomeType: { type: String, required: true },
  date: { type: Date, required: true },
  receivedFrom: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentMode: { type: String, required: true },
  referenceNo: { type: String },
  status: { type: String, enum: ["Received", "Pending"], default: "Received" }
});

const Income = mongoose.model("Income", incomeSchema);

export default Income;
