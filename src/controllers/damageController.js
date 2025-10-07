import DamageModel from '../models/damageModel.js';

// Get all damage records
export const getAllDamageRecords = async (req, res) => {
  try {
    const damageRecords = await DamageModel.find()
      .populate('itemId', 'name sku')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: damageRecords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching damage records',
      error: error.message
    });
  }
};

// Get damage record by ID
export const getDamageRecordById = async (req, res) => {
  try {
    const damageRecord = await DamageModel.findById(req.params.id)
      .populate('itemId', 'name sku');
    if (!damageRecord) {
      return res.status(404).json({
        success: false,
        message: 'Damage record not found'
      });
    }
    res.json({
      success: true,
      data: damageRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching damage record',
      error: error.message
    });
  }
};

// Create new damage record
export const createDamageRecord = async (req, res) => {
  try {
    const damageRecord = new DamageModel(req.body);
    await damageRecord.save();
    res.status(201).json({
      success: true,
      message: 'Damage record created successfully',
      data: damageRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating damage record',
      error: error.message
    });
  }
};

// Update damage record
export const updateDamageRecord = async (req, res) => {
  try {
    const damageRecord = await DamageModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!damageRecord) {
      return res.status(404).json({
        success: false,
        message: 'Damage record not found'
      });
    }
    res.json({
      success: true,
      message: 'Damage record updated successfully',
      data: damageRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating damage record',
      error: error.message
    });
  }
};

// Delete damage record
export const deleteDamageRecord = async (req, res) => {
  try {
    const damageRecord = await DamageModel.findByIdAndDelete(req.params.id);
    if (!damageRecord) {
      return res.status(404).json({
        success: false,
        message: 'Damage record not found'
      });
    }
    res.json({
      success: true,
      message: 'Damage record deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting damage record',
      error: error.message
    });
  }
};

// Get damage records by warehouse
export const getDamageRecordsByWarehouse = async (req, res) => {
  try {
    const { warehouse } = req.params;
    const damageRecords = await DamageModel.find({ warehouse })
      .populate('itemId', 'name sku')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: damageRecords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching damage records by warehouse',
      error: error.message
    });
  }
};

// Get damage records by status
export const getDamageRecordsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const damageRecords = await DamageModel.find({ status })
      .populate('itemId', 'name sku')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: damageRecords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching damage records by status',
      error: error.message
    });
  }
};

