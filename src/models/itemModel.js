import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
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
        SKUcode: {
            type: String,
            required: true,
            unique: true
        },
        type: {
            type: String,
            required: true
        },
        Barcode: {
            type: String,
            unique: true
        },
        category: {
            type: String,
            required: true
        },
        subCategory: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        unitOfMeasure: {
            type: String,
            required: true,
            enum: ['Pieces', 'Kg', 'Liter', 'Box', 'Pack', 'Meter', 'Gram']
        },
        description: {
            type: String,
            required: true
        },
        purchasePrice: {
            type: Number,
            required: true
        },
        sellingPrice: {
            type: Number,
            required: true
        },
        discountPercent: {
            type: Number,
            default: 0
        },
        taxRate: {
            type: Number,
            required: true
        },
        hsnCode: {
            type: String,
            required: true
        },
        warehouseName: {
            type: String,
            required: true
        },
        batchNumber: {
            type: String
        },
        serialNumber: {
            type: String
        },
        productImageUrl: {
            type: String
        },
        hasVariants: {
            type: Boolean,
            default: false
        },
        variants: [{
            id: String,
            variantName: String,
            sku: String,
            price: Number,
            discountPrice: Number,
            stock: Number,
            attributes: mongoose.Schema.Types.Mixed
        }],
        stock: {
            type: Number,
            default: 0
        },
        minStock: {
            type: Number,
            default: 0
        },
        maxStock: {
            type: Number,
            default: 1000
        },
        status: {
            type: String,
            enum: ['Active', 'Inactive', 'Discontinued'],
            default: 'Active'
        }
    },
    { timestamps: true }
);

const ItemModel = mongoose.model('Item', itemSchema);
export default ItemModel;
