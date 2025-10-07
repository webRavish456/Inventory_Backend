import mongoose from "mongoose";

const warehouseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        code: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        currentStock: {
            type: Number,
            default: 0
        },
        manager: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['Active', 'Inactive', 'Maintenance'],
            default: 'Active'
        },
        bins: [{
            binId: String,
            rackNumber: String,
            level: String,
            capacity: Number,
            currentStock: { type: Number, default: 0 }
        }]
    },
    { timestamps: true }
);

const WarehouseModel = mongoose.model('Warehouse', warehouseSchema);
export default WarehouseModel;

