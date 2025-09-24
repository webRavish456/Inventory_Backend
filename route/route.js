// import express from 'express';
// import { showsupplier, storesupplier } from '../controllers/supplier/supplier';

// export  const routes =express.Router();

// routes.route('/supplier').post(storesupplier).get(showsupplier) 


import express from "express";

// Supplier controllers
import { showsupplier, storesupplier, updatesupplier,
  deletesupplier,} from "../controllers/supplier/supplier.js";

// Expense controllers
import { showexpense, storeexpense, updateexpense,
  deleteexpense, } from "../controllers/finance/expense/expense.js";

// Income controllers
import { showincome, storeincome, updateincome,
  deleteincome, } from "../controllers/finance/income/income.js";

const router = express.Router();

//SUPPLIER ROUTES 
router.get("/supplier", showsupplier);   // Get all suppliers
router.post("/supplier", storesupplier); // Add supplier
router.put("/supplier/:id", updatesupplier);
router.delete("/supplier/:id", deletesupplier);

// EXPENSE ROUTES 
router.get("/expense", showexpense);     // Get all expenses
router.post("/expense", storeexpense);   // Add expense
router.put("/expense/:id", updateexpense);
router.delete("/expense/:id", deleteexpense);


// INCOME ROUTES 
router.get("/income", showincome);       // Get all incomes
router.post("/income", storeincome);     // Add income
router.put("/income/:id", updateincome);
router.delete("/income/:id", deleteincome);

export default router;