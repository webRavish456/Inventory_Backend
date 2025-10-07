import mongoose from "mongoose";

const valuationSchema = new mongoose.Schema(
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
        valuationMethod: {
            type: String,
            enum: ['FIFO', 'LIFO', 'Weighted Average', 'Specific Identification'],
            required: true
        },
        currentStock: {
            type: Number,
            required: true
        },
        averageCost: {
            type: Number,
            required: true
        },
        totalValue: {
            type: Number,
            required: true
        },
        lastUpdated: {
            type: Date,
            default: Date.now
        },
        batchDetails: [{
            batchNumber: String,
            quantity: Number,
            costPrice: Number,
            expiryDate: Date,
            remainingQuantity: Number
        }]
    },
    { timestamps: true }
);

const deadStockSchema = new mongoose.Schema(
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
        currentStock: {
            type: Number,
            required: true
        },
        lastMovementDate: {
            type: Date,
            required: true
        },
        daysSinceLastMovement: {
            type: Number,
            required: true
        },
        costPrice: {
            type: Number,
            required: true
        },
        totalValue: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['Identified', 'Under Review', 'Disposed', 'Transferred'],
            default: 'Identified'
        },
        actionTaken: {
            type: String
        },
        notes: {
            type: String
        }
    },
    { timestamps: true }
);

const cogsSchema = new mongoose.Schema(
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
        period: {
            type: String,
            required: true
        },
        openingStock: {
            type: Number,
            required: true
        },
        purchases: {
            type: Number,
            required: true
        },
        closingStock: {
            type: Number,
            required: true
        },
        cogs: {
            type: Number,
            required: true
        },
        salesQuantity: {
            type: Number,
            required: true
        },
        averageCost: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

const ValuationModel = mongoose.model('Valuation', valuationSchema);
const DeadStockModel = mongoose.model('DeadStock', deadStockSchema);
const COGSModel = mongoose.model('COGS', cogsSchema);

export { ValuationModel, DeadStockModel, COGSModel };

