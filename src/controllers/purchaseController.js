import { PurchaseOrderModel, PurchaseReturnModel } from '../models/purchaseModel.js';

// Purchase Orders
export const getAllPurchaseOrders = async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrderModel.find()
      .populate('supplierId', 'name companyName')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: purchaseOrders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching purchase orders',
      error: error.message
    });
  }
};

export const getPurchaseOrderById = async (req, res) => {
  try {
    const purchaseOrder = await PurchaseOrderModel.findById(req.params.id)
      .populate('supplierId', 'name companyName');
    if (!purchaseOrder) {
      return res.status(404).json({
        success: false,
        message: 'Purchase order not found'
      });
    }
    res.json({
      success: true,
      data: purchaseOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching purchase order',
      error: error.message
    });
  }
};

export const createPurchaseOrder = async (req, res) => {
  try {
    const purchaseOrder = new PurchaseOrderModel(req.body);
    await purchaseOrder.save();
    res.status(201).json({
      success: true,
      message: 'Purchase order created successfully',
      data: purchaseOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating purchase order',
      error: error.message
    });
  }
};

export const updatePurchaseOrder = async (req, res) => {
  try {
    const purchaseOrder = await PurchaseOrderModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!purchaseOrder) {
      return res.status(404).json({
        success: false,
        message: 'Purchase order not found'
      });
    }
    res.json({
      success: true,
      message: 'Purchase order updated successfully',
      data: purchaseOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating purchase order',
      error: error.message
    });
  }
};

export const deletePurchaseOrder = async (req, res) => {
  try {
    const purchaseOrder = await PurchaseOrderModel.findByIdAndDelete(req.params.id);
    if (!purchaseOrder) {
      return res.status(404).json({
        success: false,
        message: 'Purchase order not found'
      });
    }
    res.json({
      success: true,
      message: 'Purchase order deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting purchase order',
      error: error.message
    });
  }
};

// Purchase Returns
export const getAllPurchaseReturns = async (req, res) => {
  try {
    const purchaseReturns = await PurchaseReturnModel.find()
      .populate('supplierId', 'name companyName')
      .populate('originalOrderId', 'orderNumber')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: purchaseReturns
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching purchase returns',
      error: error.message
    });
  }
};

export const getPurchaseReturnById = async (req, res) => {
  try {
    const purchaseReturn = await PurchaseReturnModel.findById(req.params.id)
      .populate('supplierId', 'name companyName')
      .populate('originalOrderId', 'orderNumber');
    if (!purchaseReturn) {
      return res.status(404).json({
        success: false,
        message: 'Purchase return not found'
      });
    }
    res.json({
      success: true,
      data: purchaseReturn
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching purchase return',
      error: error.message
    });
  }
};

export const createPurchaseReturn = async (req, res) => {
  try {
    const purchaseReturn = new PurchaseReturnModel(req.body);
    await purchaseReturn.save();
    res.status(201).json({
      success: true,
      message: 'Purchase return created successfully',
      data: purchaseReturn
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating purchase return',
      error: error.message
    });
  }
};

export const updatePurchaseReturn = async (req, res) => {
  try {
    const purchaseReturn = await PurchaseReturnModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!purchaseReturn) {
      return res.status(404).json({
        success: false,
        message: 'Purchase return not found'
      });
    }
    res.json({
      success: true,
      message: 'Purchase return updated successfully',
      data: purchaseReturn
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating purchase return',
      error: error.message
    });
  }
};

export const deletePurchaseReturn = async (req, res) => {
  try {
    const purchaseReturn = await PurchaseReturnModel.findByIdAndDelete(req.params.id);
    if (!purchaseReturn) {
      return res.status(404).json({
        success: false,
        message: 'Purchase return not found'
      });
    }
    res.json({
      success: true,
      message: 'Purchase return deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting purchase return',
      error: error.message
    });
  }
};

