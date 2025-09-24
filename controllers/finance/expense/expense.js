// import Expense from "../models/expense.js";

// //  Store Expense
// export const storeexpense = async (req, res) => {
//   try {
//     const newExpense = new Expense(req.body);
//     const savedExpense = await newExpense.save();
//     res.status(201).json({
//       status: true,
//       message: "Expense stored successfully",
//       data: savedExpense,
//     });
//   } catch (error) {
//     res.status(400).json({ status: false, message: error.message });
//   }
// };

// //  Show All Expenses
// export const showexpense = async (req, res) => {
//   try {
//     const expenses = await Expense.find();
//     res.status(200).json({
//       status: true,
//       message: "Expenses fetched successfully",
//       data: expenses,
//     });
//   } catch (error) {
//     res.status(500).json({ status: false, message: error.message });
//   }
// };  


import Expense from "../../../models/finance/expense/expense.js";

// Show all expenses
export const showexpense = async (req, res) => {
  try {
    const result = await Expense.find();
    if (!result.length) {
      return res.status(404).json({ status: false, message: "No expenses found" });
    }
    res.status(200).json({ status: true, message: "Expenses fetched", data: result });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// Store expense
export const storeexpense = async (req, res) => {
  try {
    const { expenseType, date, paidTo, amount, paymentMode, referenceNo, status } = req.body;

    if (!expenseType || !paidTo || !amount || !paymentMode) {
      return res.status(400).json({ status: false, message: "Required fields missing" });
    }

    const result = await Expense.create({
      expenseType, date, paidTo, amount, paymentMode, referenceNo, status
    });

    res.status(201).json({ status: true, message: "Expense Inserted Successfully", data: result });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};



// Update Expense by ID
export const updateexpense = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Expense.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Expense not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Expense by ID
export const deleteexpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Expense.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Expense not found" });
    res.json({ message: "Expense deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};