import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ['Manager', 'Supervisor', 'Operator', 'Admin']
        },
        department: {
            type: String,
            required: true,
            enum: ['Warehouse', 'Sales', 'Purchase', 'Finance', 'IT', 'HR']
        },
        warehouse: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['Active', 'Inactive'],
            default: 'Active'
        },
        joiningDate: {
            type: Date,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

const StaffModel = mongoose.model('Staff', staffSchema);
export default StaffModel;

