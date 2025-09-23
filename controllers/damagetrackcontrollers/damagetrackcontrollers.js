import DamageTrack from "../../models/damagetrackmodels/damagetrack.js";

// ---------------- CREATE Damage Entry ----------------
export const storeDamage = async (req, res) => {
  try {
    
    
    const contentType = req.headers["content-type"];

    if (!contentType || !contentType.includes("multipart/form-data")) {
      return res.status(400).json({
        status: "false",
        message: "Invalid content type. Use multipart/form-data",
      });
    }
    const { entryid, writeoffid, product, quantity, reason, damageReportDate } = req.body;
    if (!entryid || !writeoffid || !product || !quantity || !reason || !damageReportDate) {
      return res.status(400).json({ status: false, message: "All required fields must be provided" })};
    

    const receipt = req.imageUrls?.image || null;

    const newDamage = new DamageTrack({
      entryid,
      writeoffid,
      product,
      quantity,
      reason,
      damageReportDate,
      receipt, 
    });

    await newDamage.save();

    return res.status(201).json({ status: true, message: "Damage entry created", data: newDamage });
  } catch (error) {
    console.error("Error creating damage entry:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

// ---------------- SHOW all entries (Table view) ----------------
export const showDamage = async (req, res) => {
  try {
    const list = await DamageTrack.find(
      {},
      {
        entryId: 1,
        writeOffId: 1,
        product: 1,
        quantity: 1,
        reason: 1,
        damageReportDate: 1,
        status: 1,
        receipt: 1, 
      }
    );
    return res.status(200).json({ status: true, data: list });
  } catch (error) {
    console.error("Error fetching damage list:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

// ---------------- VIEW single entry ----------------
export const viewDamage = async (req, res) => {
  try {
    const damage = await DamageTrack.findById(req.params.id);
    if (!damage) {
      return res.status(404).json({ status: false, message: "Damage entry not found" });
    }
    return res.status(200).json({ status: true, data: damage });
  } catch (error) {
    console.error("Error viewing damage:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

export const updateDamage= async (req,res)=>{
    const id= req.params.id;
    const {entryid, writeoffid, product, quantity, reason, damageReportDate} = req.body;
    const receipt = req.imageUrls?.image;
    const updatedDamage = await Damage.findByIdAndUpdate(id, {entryid, writeoffid, product, quantity, reason, damageReportDate,receipt},
    {
      new: true,       
      runValidators: true 
    });
    if(!updatedDamage){
        return res.status(404).json({status:"false", message:"Expense not found"})
    }

    return res.status(200).json({status:"true", message:"Expense updated successfully", Data:updatedDamage})
}

/* ---------------- UPDATE entry ----------------
export const updateDamage = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await DamageTrack.findById(id);

    if (!existing) {
      return res.status(404).json({ status: false, message: "Damage entry not found" });
    }
    const receipt = req.imageUrls?.image ;
    //const receipt = req.body.receipt || existing.receipt; 

    const updated = await DamageTrack.findByIdAndUpdate(
      id,
      {
        entryId: req.body.entryId || existing.entryId,
        writeOffId: req.body.writeOffId || existing.writeOffId,
        product: req.body.product || existing.product,
        quantity: req.body.quantity || existing.quantity,
        reason: req.body.reason || existing.reason,
        damageReportDate: req.body.damageReportDate || existing.damageReportDate,
        status: req.body.status || existing.status,
        receipt,
      },
      { new: true, runValidators: true }
    );

    return res.status(200).json({ status: true, message: "Damage entry updated", data: updated });
  } catch (error) {
    console.error("Error updating damage entry:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};*/

// ---------------- DELETE entry ----------------
export const deleteDamage = async (req, res) => {
  try {
    const deleted = await DamageTrack.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ status: false, message: "Damage entry not found" });
    }
    return res.status(200).json({ status: true, message: "Damage entry deleted" });
  } catch (error) {
    console.error("Error deleting damage entry:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};
