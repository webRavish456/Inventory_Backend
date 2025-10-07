import mongoose from "mongoose";

const salesOrderSchema = new mongoose.Schema(
    {
        orderNumber: {
            type: String,
            required: true,
            unique: true
        },
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        customerName: {
            type: String,
            required: true
        },
        orderDate: {
            type: Date,
            required: true
        },
        deliveryDate: {
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
            sellingPrice: {
                type: Number,
                required: true
            },
            discount: {
                type: Number,
                default: 0
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
        discountAmount: {
            type: Number,
            default: 0
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
            enum: ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
            default: 'Pending'
        },
        paymentStatus: {
            type: String,
            enum: ['Pending', 'Partial', 'Paid'],
            default: 'Pending'
        },
        warehouse: {
            type: String,
            required: true
        },
        shippingAddress: {
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

const salesReturnSchema = new mongoose.Schema(
    {
        returnNumber: {
            type: String,
            required: true,
            unique: true
        },
        originalOrderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SalesOrder',
            required: true
        },
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        customerName: {
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
            sellingPrice: {
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

const deliveryChallanSchema = new mongoose.Schema(
    {
        challanNumber: {
            type: String,
            required: true,
            unique: true
        },
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SalesOrder',
            required: true
        },
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        customerName: {
            type: String,
            required: true
        },
        deliveryDate: {
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
            }
        }],
        deliveryAddress: {
            type: String,
            required: true
        },
        driverName: {
            type: String,
            required: true
        },
        vehicleNumber: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['Dispatched', 'In Transit', 'Delivered', 'Returned'],
            default: 'Dispatched'
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

const SalesOrderModel = mongoose.model('SalesOrder', salesOrderSchema);
const SalesReturnModel = mongoose.model('SalesReturn', salesReturnSchema);
const DeliveryChallanModel = mongoose.model('DeliveryChallan', deliveryChallanSchema);

export { SalesOrderModel, SalesReturnModel, DeliveryChallanModel };

