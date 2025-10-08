import mongoose from "mongoose";

// ================================
// BIN/RACK SCHEMA
// ================================
const binRackSchema = new mongoose.Schema(
    {
        warehouseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Warehouse',
            required: true
        },
        binId: {
            type: String,
            required: true
        },
        rackNumber: {
            type: String,
            required: true
        },
        level: {
            type: String,
            required: true
        },
        zone: {
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
        dimensions: {
            length: Number,
            width: Number,
            height: Number,
            unit: {
                type: String,
                enum: ['cm', 'm', 'ft', 'in'],
                default: 'cm'
            }
        },
        temperature: {
            min: Number,
            max: Number,
            unit: {
                type: String,
                enum: ['Celsius', 'Fahrenheit'],
                default: 'Celsius'
            }
        },
        humidity: {
            min: Number,
            max: Number
        },
        isActive: {
            type: Boolean,
            default: true
        },
        isReserved: {
            type: Boolean,
            default: false
        },
        reservedFor: {
            type: String
        },
        reservedUntil: {
            type: Date
        },
        notes: {
            type: String
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff',
            required: true
        }
    },
    { timestamps: true }
);

// ================================
// WAREHOUSE CAPACITY SCHEMA
// ================================
const warehouseCapacitySchema = new mongoose.Schema(
    {
        warehouseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Warehouse',
            required: true
        },
        totalCapacity: {
            type: Number,
            required: true
        },
        usedCapacity: {
            type: Number,
            default: 0
        },
        availableCapacity: {
            type: Number,
            required: true
        },
        capacityUnit: {
            type: String,
            enum: ['cubic_meters', 'cubic_feet', 'pallets', 'units'],
            default: 'cubic_meters'
        },
        weightCapacity: {
            total: Number,
            used: { type: Number, default: 0 },
            available: Number,
            unit: {
                type: String,
                enum: ['kg', 'tons', 'pounds'],
                default: 'kg'
            }
        },
        zoneCapacities: [{
            zoneName: String,
            totalCapacity: Number,
            usedCapacity: { type: Number, default: 0 },
            availableCapacity: Number
        }],
        rackCapacities: [{
            rackNumber: String,
            totalCapacity: Number,
            usedCapacity: { type: Number, default: 0 },
            availableCapacity: Number
        }],
        binCapacities: [{
            binId: String,
            totalCapacity: Number,
            usedCapacity: { type: Number, default: 0 },
            availableCapacity: Number
        }],
        lastUpdated: {
            type: Date,
            default: Date.now
        },
        alertThreshold: {
            type: Number,
            default: 80 // Percentage
        },
        isAlertTriggered: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff',
            required: true
        }
    },
    { timestamps: true }
);

// ================================
// WAREHOUSE SETUP SCHEMA
// ================================
const warehouseSetupSchema = new mongoose.Schema(
    {
        warehouseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Warehouse',
            required: true
        },
        setupType: {
            type: String,
            enum: ['New', 'Expansion', 'Relocation', 'Renovation'],
            required: true
        },
        setupDate: {
            type: Date,
            required: true
        },
        completionDate: {
            type: Date
        },
        status: {
            type: String,
            enum: ['Planning', 'In Progress', 'Completed', 'On Hold', 'Cancelled'],
            default: 'Planning'
        },
        zones: [{
            zoneName: String,
            zoneType: {
                type: String,
                enum: ['Storage', 'Receiving', 'Shipping', 'Picking', 'Packaging', 'Quality Control']
            },
            area: Number,
            capacity: Number,
            temperature: {
                min: Number,
                max: Number,
                unit: {
                    type: String,
                    enum: ['Celsius', 'Fahrenheit'],
                    default: 'Celsius'
                }
            },
            humidity: {
                min: Number,
                max: Number
            },
            specialRequirements: [String],
            isActive: { type: Boolean, default: true }
        }],
        equipment: [{
            equipmentType: {
                type: String,
                enum: ['Forklift', 'Pallet Jack', 'Conveyor', 'Racking System', 'Security System', 'Climate Control', 'Lighting']
            },
            equipmentName: String,
            quantity: Number,
            specifications: mongoose.Schema.Types.Mixed,
            installationDate: Date,
            warrantyExpiry: Date,
            maintenanceSchedule: String,
            isActive: { type: Boolean, default: true }
        }],
        safetyFeatures: [{
            featureName: String,
            featureType: {
                type: String,
                enum: ['Fire Safety', 'Security', 'Emergency', 'Environmental', 'Access Control']
            },
            description: String,
            installationDate: Date,
            lastInspection: Date,
            nextInspection: Date,
            isActive: { type: Boolean, default: true }
        }],
        compliance: [{
            complianceType: {
                type: String,
                enum: ['Safety', 'Environmental', 'Quality', 'Security', 'Regulatory']
            },
            complianceName: String,
            certificateNumber: String,
            issuedBy: String,
            issueDate: Date,
            expiryDate: Date,
            isActive: { type: Boolean, default: true }
        }],
        costs: {
            totalCost: Number,
            equipmentCost: Number,
            laborCost: Number,
            materialCost: Number,
            otherCosts: Number,
            currency: {
                type: String,
                default: 'INR'
            }
        },
        notes: {
            type: String
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff',
            required: true
        }
    },
    { timestamps: true }
);

// ================================
// WAREHOUSE SCHEMA (UPDATED)
// ================================
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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff',
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
        }],
        // Additional fields for comprehensive warehouse management
        warehouseType: {
            type: String,
            enum: ['Main', 'Branch', 'Distribution Center', 'Cold Storage', 'Bonded'],
            default: 'Main'
        },
        operatingHours: {
            start: String,
            end: String,
            timezone: {
                type: String,
                default: 'Asia/Kolkata'
            }
        },
        specialFeatures: [{
            feature: String,
            description: String
        }],
        coordinates: {
            latitude: Number,
            longitude: Number
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff',
            required: true
        }
    },
    { timestamps: true }
);

// ================================
// MODELS EXPORT
// ================================
const WarehouseModel = mongoose.model('Warehouse', warehouseSchema);
const BinRackModel = mongoose.model('BinRack', binRackSchema);
const WarehouseCapacityModel = mongoose.model('WarehouseCapacity', warehouseCapacitySchema);
const WarehouseSetupModel = mongoose.model('WarehouseSetup', warehouseSetupSchema);

export default WarehouseModel;
export { BinRackModel, WarehouseCapacityModel, WarehouseSetupModel };

