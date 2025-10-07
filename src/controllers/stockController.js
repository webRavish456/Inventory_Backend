import StockModel from '../models/stockModel.js';
import ItemModel from '../models/itemModel.js';

// Get all stock transactions
export const getAllStockTransactions = async (req, res) => {
  try {
    const stockTransactions = await StockModel.find()
      .populate('itemId', 'name sku')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: stockTransactions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching stock transactions',
      error: error.message
    });
  }
};

// Get stock transaction by ID
export const getStockTransactionById = async (req, res) => {
  try {
    const stockTransaction = await StockModel.findById(req.params.id)
      .populate('itemId', 'name sku');
    if (!stockTransaction) {
      return res.status(404).json({
        success: false,
        message: 'Stock transaction not found'
      });
    }
    res.json({
      success: true,
      data: stockTransaction
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching stock transaction',
      error: error.message
    });
  }
};

// Create new stock transaction
export const createStockTransaction = async (req, res) => {
  try {
    const stockTransaction = new StockModel(req.body);
    await stockTransaction.save();
    
    // Update item stock
    const item = await ItemModel.findById(stockTransaction.itemId);
    if (item) {
      if (stockTransaction.transactionType === 'Stock In') {
        item.currentStock += stockTransaction.quantity;
      } else if (stockTransaction.transactionType === 'Stock Out') {
        item.currentStock -= stockTransaction.quantity;
      }
      await item.save();
    }
    
    res.status(201).json({
      success: true,
      message: 'Stock transaction created successfully',
      data: stockTransaction
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating stock transaction',
      error: error.message
    });
  }
};

// Update stock transaction
export const updateStockTransaction = async (req, res) => {
  try {
    const stockTransaction = await StockModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!stockTransaction) {
      return res.status(404).json({
        success: false,
        message: 'Stock transaction not found'
      });
    }
    res.json({
      success: true,
      message: 'Stock transaction updated successfully',
      data: stockTransaction
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating stock transaction',
      error: error.message
    });
  }
};

// Delete stock transaction
export const deleteStockTransaction = async (req, res) => {
  try {
    const stockTransaction = await StockModel.findByIdAndDelete(req.params.id);
    if (!stockTransaction) {
      return res.status(404).json({
        success: false,
        message: 'Stock transaction not found'
      });
    }
    res.json({
      success: true,
      message: 'Stock transaction deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting stock transaction',
      error: error.message
    });
  }
};

// Get stock by warehouse
export const getStockByWarehouse = async (req, res) => {
  try {
    const { warehouse } = req.params;
    const stock = await StockModel.find({ warehouse })
      .populate('itemId', 'name sku')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: stock
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching stock by warehouse',
      error: error.message
    });
  }
};

// Get stock by item
export const getStockByItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const stock = await StockModel.find({ itemId })
      .populate('itemId', 'name sku')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: stock
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching stock by item',
      error: error.message
    });
  }
};

