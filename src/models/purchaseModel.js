import mongoose from "mongoose";

const purchaseOrderSchema = new mongoose.Schema(
    {
        orderNumber: {
            type: String,
            required: true,
            unique: true
        },
        supplierId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Supplier',
            required: true
        },
        supplierName: {
            type: String,
            required: true
        },
        orderDate: {
            type: Date,
            required: true
        },
        expectedDate: {
            type: Date,
            required: true
        },
        items: [{
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
            quantity: {
                type: Number,
                required: true
            },
            unit: {
                type: String,
                required: true
            },
            costPrice: {
                type: Number,
                required: true
            },
            totalAmount: {
                type: Number,
                required: true
            }
        }],
        subtotal: {
            type: Number,
            required: true
        },
        taxAmount: {
            type: Number,
            required: true
        },
        totalAmount: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['Pending', 'Approved', 'Partially Received', 'Completed', 'Cancelled'],
            default: 'Pending'
        },
        warehouse: {
            type: String,
            required: true
        },
        notes: {
            type: String
        },
        createdBy: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const purchaseReturnSchema = new mongoose.Schema(
    {
        returnNumber: {
            type: String,
            required: true,
            unique: true
        },
        originalOrderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PurchaseOrder',
            required: true
        },
        supplierId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Supplier',
            required: true
        },
        supplierName: {
            type: String,
            required: true
        },
        returnDate: {
            type: Date,
            required: true
        },
        items: [{
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
            quantity: {
                type: Number,
                required: true
            },
            unit: {
                type: String,
                required: true
            },
            costPrice: {
                type: Number,
                required: true
            },
            totalAmount: {
                type: Number,
                required: true
            },
            reason: {
                type: String,
                required: true
            }
        }],
        subtotal: {
            type: Number,
            required: true
        },
        taxAmount: {
            type: Number,
            required: true
        },
        totalAmount: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['Pending', 'Approved', 'Completed', 'Cancelled'],
            default: 'Pending'
        },
        warehouse: {
            type: String,
            required: true
        },
        notes: {
            type: String
        },
        createdBy: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const PurchaseOrderModel = mongoose.model('PurchaseOrder', purchaseOrderSchema);
const PurchaseReturnModel = mongoose.model('PurchaseReturn', purchaseReturnSchema);

export { PurchaseOrderModel, PurchaseReturnModel };

