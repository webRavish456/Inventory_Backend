import Supplier from "../../models/supplier/supplier.js";


//  Show all suppliers
export const showsupplier = async (req, res) => {
  try {
    const result = await Supplier.find();
    if (!result || result.length === 0) {
      return res.status(401).json({ status: false, message: "No suppliers in database" });
    }
    return res.status(200).json({ status: true, message: "Data fetched successfully", Data: result });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

//  Store supplier
export const storesupplier = async (req, res) => {
  try {
    const { supplierName, contactPerson, phone, email, city, state, status } = req.body;

    //  Phone validation
    if (phone && phone.length !== 10) {
      return res.status(401).json({ status: false, message: "Phone number must be 10 digits" });
    }

    // Required fields
    if (!supplierName || !email) {
      return res.status(403).json({ status: false, message: "Supplier Name and Email are required" });
    }

    //  Insert supplier
    const result = await Supplier.create({ supplierName, contactPerson, phone, email, city, state, status });

    if (!result) {
      return res.status(500).json({ status: false, message: "Some error occurred, please try again" });
    } else {
      return res.status(200).json({ status: true, message: "Supplier Inserted Successfully" });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
}; 


// Update Supplier by ID
export const updatesupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Supplier.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Supplier not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Supplier by ID
export const deletesupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Supplier.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Supplier not found" });
    res.json({ message: "Supplier deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};