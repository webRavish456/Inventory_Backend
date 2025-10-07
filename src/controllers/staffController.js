import StaffModel from '../models/staffModel.js';

// Get all staff
export const getAllStaff = async (req, res) => {
  try {
    const staff = await StaffModel.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: staff
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching staff',
      error: error.message
    });
  }
};

// Get staff by ID
export const getStaffById = async (req, res) => {
  try {
    const staff = await StaffModel.findById(req.params.id);
    if (!staff) {
      return res.status(404).json({
        success: false,
        message: 'Staff not found'
      });
    }
    res.json({
      success: true,
      data: staff
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching staff',
      error: error.message
    });
  }
};

// Create new staff
export const createStaff = async (req, res) => {
  try {
    const staff = new StaffModel(req.body);
    await staff.save();
    res.status(201).json({
      success: true,
      message: 'Staff created successfully',
      data: staff
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating staff',
      error: error.message
    });
  }
};

// Update staff
export const updateStaff = async (req, res) => {
  try {
    const staff = await StaffModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!staff) {
      return res.status(404).json({
        success: false,
        message: 'Staff not found'
      });
    }
    res.json({
      success: true,
      message: 'Staff updated successfully',
      data: staff
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating staff',
      error: error.message
    });
  }
};

// Delete staff
export const deleteStaff = async (req, res) => {
  try {
    const staff = await StaffModel.findByIdAndDelete(req.params.id);
    if (!staff) {
      return res.status(404).json({
        success: false,
        message: 'Staff not found'
      });
    }
    res.json({
      success: true,
      message: 'Staff deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting staff',
      error: error.message
    });
  }
};

