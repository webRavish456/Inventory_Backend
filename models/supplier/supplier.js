import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
  supplierName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
}, { timestamps: true });

const Supplier= mongoose.model("Supplier", supplierSchema);
export default Supplier;