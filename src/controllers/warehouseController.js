import WarehouseModel from '../models/warehouseModel.js';

// Get all warehouses
export const getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await WarehouseModel.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: warehouses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching warehouses',
      error: error.message
    });
  }
};

// Get warehouse by ID
export const getWarehouseById = async (req, res) => {
  try {
    const warehouse = await WarehouseModel.findById(req.params.id);
    if (!warehouse) {
      return res.status(404).json({
        success: false,
        message: 'Warehouse not found'
      });
    }
    res.json({
      success: true,
      data: warehouse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching warehouse',
      error: error.message
    });
  }
};

// Create new warehouse
export const createWarehouse = async (req, res) => {
  try {
    const warehouse = new WarehouseModel(req.body);
    await warehouse.save();
    res.status(201).json({
      success: true,
      message: 'Warehouse created successfully',
      data: warehouse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating warehouse',
      error: error.message
    });
  }
};

// Update warehouse
export const updateWarehouse = async (req, res) => {
  try {
    const warehouse = await WarehouseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!warehouse) {
      return res.status(404).json({
        success: false,
        message: 'Warehouse not found'
      });
    }
    res.json({
      success: true,
      message: 'Warehouse updated successfully',
      data: warehouse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating warehouse',
      error: error.message
    });
  }
};

// Delete warehouse
export const deleteWarehouse = async (req, res) => {
  try {
    const warehouse = await WarehouseModel.findByIdAndDelete(req.params.id);
    if (!warehouse) {
      return res.status(404).json({
        success: false,
        message: 'Warehouse not found'
      });
    }
    res.json({
      success: true,
      message: 'Warehouse deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting warehouse',
      error: error.message
    });
  }
};

// Add bin to warehouse
export const addBinToWarehouse = async (req, res) => {
  try {
    const { warehouseId } = req.params;
    const binData = req.body;
    
    const warehouse = await WarehouseModel.findById(warehouseId);
    if (!warehouse) {
      return res.status(404).json({
        success: false,
        message: 'Warehouse not found'
      });
    }
    
    warehouse.bins.push(binData);
    await warehouse.save();
    
    res.json({
      success: true,
      message: 'Bin added successfully',
      data: warehouse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding bin',
      error: error.message
    });
  }
};

