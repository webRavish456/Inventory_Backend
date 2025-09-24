import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  expenseType: { type: String, required: true },
  date: { type: Date, required: true },
  paidTo: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentMode: { type: String, required: true },
  referenceNo: { type: String },
  status: { type: String, default: "Pending" },
}, { timestamps: true });

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;