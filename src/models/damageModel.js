import mongoose from "mongoose";

const damageSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true
        },
        productName: {
            type: String,
            required: true
        },
        damageDate: {
            type: Date,
            required: true
        },
        damageType: {
            type: String,
            enum: ['Physical Damage', 'Water Damage', 'Breakage', 'Fire Damage', 'Theft', 'Expired'],
            required: true
        },
        damagedQuantity: {
            type: Number,
            required: true
        },
        unitCost: {
            type: Number,
            required: true
        },
        reportedBy: {
            type: String,
            required: true,
            enum: ['Rajesh Kumar', 'Amit Patel', 'Meera Joshi', 'Priya Singh', 'Sunita Patel']
        },
        warehouse: {
            type: String,
            required: true,
            enum: ['Main Warehouse', 'Electronics Warehouse', 'Furniture Warehouse', 'North Warehouse', 'South Warehouse']
        },
        status: {
            type: String,
            enum: ['Pending', 'Approved', 'Rejected'],
            default: 'Pending'
        },
        notes: {
            type: String
        }
    },
    { timestamps: true }
);

const DamageModel = mongoose.model('Damage', damageSchema);
export default DamageModel;
