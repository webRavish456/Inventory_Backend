import { ValuationModel, DeadStockModel, COGSModel } from '../models/valuationModel.js';

// Valuation
export const getAllValuations = async (req, res) => {
  try {
    const valuations = await ValuationModel.find()
      .populate('itemId', 'name sku')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: valuations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching valuations',
      error: error.message
    });
  }
};

export const createValuation = async (req, res) => {
  try {
    const valuation = new ValuationModel(req.body);
    await valuation.save();
    res.status(201).json({
      success: true,
      message: 'Valuation created successfully',
      data: valuation
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating valuation',
      error: error.message
    });
  }
};

// Dead Stock
export const getAllDeadStock = async (req, res) => {
  try {
    const deadStock = await DeadStockModel.find()
      .populate('itemId', 'name sku')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: deadStock
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching dead stock',
      error: error.message
    });
  }
};

export const createDeadStock = async (req, res) => {
  try {
    const deadStock = new DeadStockModel(req.body);
    await deadStock.save();
    res.status(201).json({
      success: true,
      message: 'Dead stock record created successfully',
      data: deadStock
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating dead stock record',
      error: error.message
    });
  }
};

// COGS
export const getAllCOGS = async (req, res) => {
  try {
    const cogs = await COGSModel.find()
      .populate('itemId', 'name sku')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: cogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching COGS',
      error: error.message
    });
  }
};

export const createCOGS = async (req, res) => {
  try {
    const cogs = new COGSModel(req.body);
    await cogs.save();
    res.status(201).json({
      success: true,
      message: 'COGS record created successfully',
      data: cogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating COGS record',
      error: error.message
    });
  }
};

