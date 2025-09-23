import express from 'express';
import { deleteDelichallan, showDelichallan, storeDelichallan, updateDelichallan } from '../controllers/sales/delivery-challans/deliverychallans.js';
import { deleteSalesodr, showSalesodr, storeSalesodr, updateSalesodr } from '../controllers/sales/Sales-order/Salesorder.js';
import { deleteodrTrack, showOdrTrack, storeOdrTrack, updateOdrTrack } from '../controllers/sales/order-tracking/ordertracking.js';
import { deleteSalesrtn, showSalesrtn, storeSalesrtn, updateSalesrtn } from '../controllers/sales/salesreturn/salesreturn.js';
import { deleteBatch, showBatch, storeBatch, updateBatch } from '../controllers/stock/batch-management/batchmanagement.js';
import { deleteOpstock, showOpstock, storeOpstock, updateOpstock } from '../controllers/stock/opening-stock/openingstock.js';
import { deleteStransfer, showStransfer, storeStransfer, updateStransfer } from '../controllers/stock/stock-transfer/stocktransfer.js';
import { deleteStkupdate, showStkupdate, storeStkupdate, updateStkupdate } from '../controllers/stock/stock-update/stockupdate.js';
import { deleteStockIn, showStockIn, storeStockIn, updateStockIn } from '../controllers/stock/stock-entries/stock-in/stockin.js';
import { deleteStockOut, showStockOut, storeStockOut, updateStockOut } from '../controllers/stock/stock-entries/stock-out/stockout.js';

export const routes =express.Router();

//DeliveryChallans
routes.route('/sales/DeliveryChallans').post(storeDelichallan).get(showDelichallan);
routes.route('/sales/DeliveryChallans/:id').put(updateDelichallan).delete(deleteDelichallan);

//OrderTracking
routes.route('/sales/OrderTracking').post(storeOdrTrack).get(showOdrTrack);
routes.route('/sales/OrderTracking/:id').put(updateOdrTrack).delete(deleteodrTrack);

//Sales Order
routes.route('/sales/SalesOrder').post(storeSalesodr).get(showSalesodr);
routes.route('/sales/SalesOrder/:id').put(updateSalesodr).delete(deleteSalesodr);

//Sales Return
routes.route('/sales/SalesReturn').post(storeSalesrtn).get(showSalesrtn);
routes.route('/sales/SalesReturn/:id').put(updateSalesrtn).delete(deleteSalesrtn);

// stock //Batch Management
routes.route('/stockmanagement/batchmanagement').post(storeBatch).get(showBatch);
routes.route('/stockmanagement/batchmanagement/:id').put(updateBatch).delete(deleteBatch);

//Opening Stock
routes.route('/stockmanagement/openingstock').post(storeOpstock).get(showOpstock);
routes.route('/stockmanagement/openingstock/:id').put(updateOpstock).delete(deleteOpstock);

//Stock Transfer
routes.route('/stockmanagement/stocktransfer').post(storeStransfer).get(showStransfer);
routes.route('/stockmanagement/stocktransfer/:id').put(updateStransfer).delete(deleteStransfer);

//Stock Update
routes.route('/stockmanagement/stockupdate').post(storeStkupdate).get(showStkupdate);
routes.route('/stockmanagement/stockupdate/:id').put(updateStkupdate).delete(deleteStkupdate);

//Stock Entries /stock In
routes.route('/stockmanagement/stockentries/StockIn').post(storeStockIn).get(showStockIn);
routes.route('/stockmanagement/stockentries/StockIn/:id').put(updateStockIn).delete(deleteStockIn);

//Stock Entries /stock Out
routes.route('/stockmanagement/stockentries/StockOut').post(storeStockOut).get(showStockOut);
routes.route('/stockmanagement/stockentries/StockOut/:id').put(updateStockOut).delete(deleteStockOut);
