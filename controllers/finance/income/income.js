import Income from "../../../models/finance/income/income.js";

// Store Income (POST)
export const storeincome = async (req, res) => {
  try {
    const income = new Income(req.body);
    await income.save();
    res.status(201).json({
      status: true,
      message: "Income stored successfully",
      data: income
    });
  } catch (err) {
    res.status(400).json({ status: false, message: "Error storing income", error: err });
  }
};

// Show Incomes (GET)
export const showincome = async (req, res) => {
  try {
    const incomes = await Income.find();
    res.status(200).json({
      status: true,
      message: "Incomes fetched successfully",
      data: incomes
    });
  } catch (err) {
    res.status(500).json({ status: false, message: "Error fetching incomes", error: err });
  }
};  


// Update Income by ID
export const updateincome = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Income.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Income not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Income by ID
export const deleteincome = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Income.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Income not found" });
    res.json({ message: "Income deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

