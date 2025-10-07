import express from 'express';
import { verifyToken } from '../middleware/auth.js';

// Import all controller functions
import {  loginAdmin} from '../controllers/authController.js';
import { getAllStaff, getStaffById, createStaff, updateStaff, deleteStaff } from '../controllers/staffController.js';
import { getAllWarehouses, getWarehouseById, createWarehouse, updateWarehouse, deleteWarehouse, addBinToWarehouse } from '../controllers/warehouseController.js';
import { getAllSuppliers, getSupplierById, createSupplier, updateSupplier, deleteSupplier } from '../controllers/supplierController.js';
import { getAllItems, getItemById, createItem, updateItem, deleteItem, getItemsByCategory, getLowStockItems } from '../controllers/itemController.js';
import { getAllCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer } from '../controllers/customerController.js';
import { getAllStockTransactions, getStockTransactionById, createStockTransaction, updateStockTransaction, deleteStockTransaction, getStockByWarehouse, getStockByItem } from '../controllers/stockController.js';
import { getAllPurchaseOrders, getPurchaseOrderById, createPurchaseOrder, updatePurchaseOrder, deletePurchaseOrder, getAllPurchaseReturns, getPurchaseReturnById, createPurchaseReturn, updatePurchaseReturn, deletePurchaseReturn } from '../controllers/purchaseController.js';
import { getAllSalesOrders, getSalesOrderById, createSalesOrder, updateSalesOrder, deleteSalesOrder, getAllSalesReturns, getSalesReturnById, createSalesReturn, updateSalesReturn, deleteSalesReturn, getAllDeliveryChallans, getDeliveryChallanById, createDeliveryChallan, updateDeliveryChallan, deleteDeliveryChallan } from '../controllers/salesController.js';
import { getAllValuations, createValuation, getAllDeadStock, createDeadStock, getAllCOGS, createCOGS } from '../controllers/valuationController.js';
import { getAllDamageRecords, getDamageRecordById, createDamageRecord, updateDamageRecord, deleteDamageRecord, getDamageRecordsByWarehouse, getDamageRecordsByStatus } from '../controllers/damageController.js';
import { getAllInvoices, getInvoiceById, createInvoice, updateInvoice, deleteInvoice, getInvoicesByCustomer, getInvoicesByPaymentStatus, updatePaymentStatus } from '../controllers/invoiceController.js';
import { getAllExpenses, getExpenseById, createExpense, updateExpense, deleteExpense, getAllIncome, getIncomeById, createIncome, updateIncome, deleteIncome, getExpensesByWarehouse, getIncomeByWarehouse } from '../controllers/financeController.js';
import { getStockSummary, createStockSummary, getItemSales, createItemSales, getStockAging, createStockAging, getValuationReport, createValuationReport, getStockSummaryByWarehouse, getItemSalesByWarehouse, getStockAgingByWarehouse, getValuationReportByWarehouse } from '../controllers/reportController.js';

// Create router instance
export const router = express.Router();

// ================================
// AUTHENTICATION ROUTES
// ================================


router.route('/auth/admin/login').post(loginAdmin);

// ================================
// STAFF MANAGEMENT ROUTES
// ================================

// Staff CRUD operations
router.route('/staff').get(verifyToken, getAllStaff).post(verifyToken, createStaff);
router.route('/staff/:id').get(verifyToken, getStaffById).put(verifyToken, updateStaff).delete(verifyToken, deleteStaff);

// ================================
// WAREHOUSE MANAGEMENT ROUTES
// ================================

// Warehouse CRUD operations
router.route('/warehouses').get(verifyToken, getAllWarehouses).post(verifyToken, createWarehouse);
router.route('/warehouses/:id').get(verifyToken, getWarehouseById).put(verifyToken, updateWarehouse).delete(verifyToken, deleteWarehouse);
router.route('/warehouses/:warehouseId/bins').post(verifyToken, addBinToWarehouse);

// ================================
// SUPPLIER MANAGEMENT ROUTES
// ================================

// Supplier CRUD operations
router.route('/suppliers').get(verifyToken, getAllSuppliers).post(verifyToken, createSupplier);
router.route('/suppliers/:id').get(verifyToken, getSupplierById).put(verifyToken, updateSupplier).delete(verifyToken, deleteSupplier);

// ================================
// ITEM MANAGEMENT ROUTES
// ================================

// Item CRUD operations
router.route('/items').get(verifyToken, getAllItems).post(verifyToken, createItem);
router.route('/items/:id').get(verifyToken, getItemById).put(verifyToken, updateItem).delete(verifyToken, deleteItem);
router.route('/items/category/:category').get(verifyToken, getItemsByCategory);
router.route('/items/low-stock').get(verifyToken, getLowStockItems);

// ================================
// CUSTOMER MANAGEMENT ROUTES
// ================================

// Customer CRUD operations
router.route('/customers').get(verifyToken, getAllCustomers).post(verifyToken, createCustomer);
router.route('/customers/:id').get(verifyToken, getCustomerById).put(verifyToken, updateCustomer).delete(verifyToken, deleteCustomer);

// ================================
// STOCK MANAGEMENT ROUTES
// ================================

// Stock transaction operations
router.route('/stock/transactions').get(verifyToken, getAllStockTransactions).post(verifyToken, createStockTransaction);
router.route('/stock/transactions/:id').get(verifyToken, getStockTransactionById).put(verifyToken, updateStockTransaction).delete(verifyToken, deleteStockTransaction);
router.route('/stock/warehouse/:warehouse').get(verifyToken, getStockByWarehouse);
router.route('/stock/item/:itemId').get(verifyToken, getStockByItem);

// ================================
// PURCHASE MANAGEMENT ROUTES
// ================================

// Purchase Orders
router.route('/purchase/orders').get(verifyToken, getAllPurchaseOrders).post(verifyToken, createPurchaseOrder);
router.route('/purchase/orders/:id').get(verifyToken, getPurchaseOrderById).put(verifyToken, updatePurchaseOrder).delete(verifyToken, deletePurchaseOrder);

// Purchase Returns
router.route('/purchase/returns').get(verifyToken, getAllPurchaseReturns).post(verifyToken, createPurchaseReturn);
router.route('/purchase/returns/:id').get(verifyToken, getPurchaseReturnById).put(verifyToken, updatePurchaseReturn).delete(verifyToken, deletePurchaseReturn);

// ================================
// SALES & ORDER MANAGEMENT ROUTES
// ================================

// Sales Orders
router.route('/sales/orders').get(verifyToken, getAllSalesOrders).post(verifyToken, createSalesOrder);
router.route('/sales/orders/:id').get(verifyToken, getSalesOrderById).put(verifyToken, updateSalesOrder).delete(verifyToken, deleteSalesOrder);

// Sales Returns
router.route('/sales/returns').get(verifyToken, getAllSalesReturns).post(verifyToken, createSalesReturn);
router.route('/sales/returns/:id').get(verifyToken, getSalesReturnById).put(verifyToken, updateSalesReturn).delete(verifyToken, deleteSalesReturn);

// Delivery Challans
router.route('/sales/delivery-challans').get(verifyToken, getAllDeliveryChallans).post(verifyToken, createDeliveryChallan);
router.route('/sales/delivery-challans/:id').get(verifyToken, getDeliveryChallanById).put(verifyToken, updateDeliveryChallan).delete(verifyToken, deleteDeliveryChallan);

// ================================
// INVENTORY VALUATION & COSTING ROUTES
// ================================

// Valuation
router.route('/valuation').get(verifyToken, getAllValuations).post(verifyToken, createValuation);

// Dead Stock
router.route('/valuation/dead-stock').get(verifyToken, getAllDeadStock).post(verifyToken, createDeadStock);

// COGS
router.route('/valuation/cogs').get(verifyToken, getAllCOGS).post(verifyToken, createCOGS);

// ================================
// DAMAGE TRACKING ROUTES
// ================================

// Damage records
router.route('/damage').get(verifyToken, getAllDamageRecords).post(verifyToken, createDamageRecord);
router.route('/damage/:id').get(verifyToken, getDamageRecordById).put(verifyToken, updateDamageRecord).delete(verifyToken, deleteDamageRecord);
router.route('/damage/warehouse/:warehouse').get(verifyToken, getDamageRecordsByWarehouse);
router.route('/damage/status/:status').get(verifyToken, getDamageRecordsByStatus);

// ================================
// INVOICE MANAGEMENT ROUTES
// ================================

// Invoice operations
router.route('/invoices').get(verifyToken, getAllInvoices).post(verifyToken, createInvoice);
router.route('/invoices/:id').get(verifyToken, getInvoiceById).put(verifyToken, updateInvoice).delete(verifyToken, deleteInvoice);
router.route('/invoices/customer/:customerId').get(verifyToken, getInvoicesByCustomer);
router.route('/invoices/payment-status/:paymentStatus').get(verifyToken, getInvoicesByPaymentStatus);
router.route('/invoices/:id/payment-status').put(verifyToken, updatePaymentStatus);

// ================================
// FINANCE MANAGEMENT ROUTES
// ================================

// Expense operations
router.route('/finance/expenses').get(verifyToken, getAllExpenses).post(verifyToken, createExpense);
router.route('/finance/expenses/:id').get(verifyToken, getExpenseById).put(verifyToken, updateExpense).delete(verifyToken, deleteExpense);
router.route('/finance/expenses/warehouse/:warehouse').get(verifyToken, getExpensesByWarehouse);

// Income operations
router.route('/finance/income').get(verifyToken, getAllIncome).post(verifyToken, createIncome);
router.route('/finance/income/:id').get(verifyToken, getIncomeById).put(verifyToken, updateIncome).delete(verifyToken, deleteIncome);
router.route('/finance/income/warehouse/:warehouse').get(verifyToken, getIncomeByWarehouse);

// ================================
// REPORTING & ANALYTICS ROUTES
// ================================

// Stock Summary Report
router.route('/reports/stock-summary').get(verifyToken, getStockSummary).post(verifyToken, createStockSummary);
router.route('/reports/stock-summary/warehouse/:warehouse').get(verifyToken, getStockSummaryByWarehouse);

// Item-Wise Sales Report
router.route('/reports/item-sales').get(verifyToken, getItemSales).post(verifyToken, createItemSales);
router.route('/reports/item-sales/warehouse/:warehouse').get(verifyToken, getItemSalesByWarehouse);

// Stock Aging Report
router.route('/reports/stock-aging').get(verifyToken, getStockAging).post(verifyToken, createStockAging);
router.route('/reports/stock-aging/warehouse/:warehouse').get(verifyToken, getStockAgingByWarehouse);

// Valuation Report
router.route('/reports/valuation').get(verifyToken, getValuationReport).post(verifyToken, createValuationReport);
router.route('/reports/valuation/warehouse/:warehouse').get(verifyToken, getValuationReportByWarehouse);

export default router;

