import mongoose from "mongoose";


const staffSchema = new mongoose.Schema(
  {
    staffId: { type: String, required: true, trim: true },
    personalDetails: {
      name: { type: String, required: true },
      gender: { type: String, enum: ["Male","Female","Other"], required: true },
      dob: { type: String, required: true },
      mobile: { type: String, required: true, match: /^[0-9]{10}$/ },
      email: { type: String, required: true },
      qualification: { type: String, required: true },
      experience: { type: String, required: true },
      address: { type: String, required: true },
    },
    companyDetails: {
      branchName: { type: String, required: true },
      designation: { type: String, required: true },
      department: { type: String, required: true },
      salary: { type: String, required: true },
      joiningDate: { type: String, default: Date.now },
      availability: { type: String, enum: ["Available", "Unavailable"], default: "Unavailable" },
    },
    bankDetails: {
      accountHolderName: { type: String },
      accountNumber: { type: String },
      bankName: { type: String },
      ifscCode: { type: String },
      bankBranch: { type: String },
      branchLocation: { type: String },
    },
    documents: {
      resume: { type: String, required: true },
      highestQualification: { type: String, required: true },
      panCard: { type: String, required: true },
      aadharCard: { type: String, required: true },
    },
  },
  { timestamps: true }
);


const Staff = mongoose.model("Staff", staffSchema);
 export default Staff;
