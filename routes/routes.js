import express from "express";
import { 
  showStaff, storeStaff, updateStaff, deleteStaff, viewStaff 
} from "../controllers/staffcontrollers/staffcontrollers.js";

import { 
  showCustomer, storeCustomer, updateCustomer, deleteCustomer, viewCustomer 
} from "../controllers/customercontrollers/customercontrollers.js";

import { 
  showDamage, storeDamage, updateDamage, deleteDamage, viewDamage 
} from "../controllers/damagetrackcontrollers/damagetrackcontrollers.js";

import uploadStaffFiles from "../uploadfiles/staff.js";
//import uploadReceipt from "../uploadfiles/damagereceipt.js";
import uploadReceipt from "../uploadfiles/damagereceipt.js";

const router = express.Router();

// ================= STAFF ROUTES =================
router.route("/staff").get(showStaff).post(uploadStaffFiles, storeStaff);  

router.route("/staff/:id").get(viewStaff).patch(uploadStaffFiles, updateStaff).delete(deleteStaff);                 

// ================= CUSTOMER ROUTES =================
router.route("/customers").get(showCustomer).post(storeCustomer);                  

router.route("/customers/:id").get(viewCustomer).patch(updateCustomer).delete(deleteCustomer);               

// ================= DAMAGE TRACK ROUTES =================
router.route("/damage").get(showDamage).post(uploadReceipt, storeDamage);     

router.route("/damage/:id").get(viewDamage).put(uploadReceipt, updateDamage).delete(deleteDamage);                 

export default router;
