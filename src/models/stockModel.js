import mongoose from "mongoose";

const stockSchema = new mongoose.Schema(
    {
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
            required: true
        },
        itemName: {
            type: String,
            required: true
        },
        sku: {
            type: String,
            required: true
        },
        warehouse: {
            type: String,
            required: true
        },
        transactionType: {
            type: String,
            enum: ['Stock In', 'Stock Out', 'Stock Transfer', 'Adjustment', 'Opening Stock'],
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        },
        batchNumber: {
            type: String
        },
        serialNumber: {
            type: String
        },
        expiryDate: {
            type: Date
        },
        referenceNumber: {
            type: String
        },
        reason: {
            type: String
        },
        fromWarehouse: {
            type: String
        },
        toWarehouse: {
            type: String
        },
        costPrice: {
            type: Number
        },
        totalValue: {
            type: Number
        },
        performedBy: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['Pending', 'Completed', 'Cancelled'],
            default: 'Completed'
        },
        notes: {
            type: String
        }
    },
    { timestamps: true }
);

const StockModel = mongoose.model('Stock', stockSchema);
export default StockModel;

