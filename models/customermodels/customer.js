import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    
    customerId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    contactNo: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/, 
    },
    gstNo: {
      type: String,
      match: /^([0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1})?$/,
    },
    panNo: {
      type: String,
      match: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    
    customerType: {
      type: String,
      enum: ["Individual", "Business", "Enterprise"],
    },
    industry: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
    },
    paymentTerms: {
      type: String, 
    },
    billingAddress: {
      type: String,
    },
    shippingAddress: {
      type: String,
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);
 export default Customer;
