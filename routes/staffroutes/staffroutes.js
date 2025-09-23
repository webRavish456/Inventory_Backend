import express from "express";
import { deleteStaff, showStaff, storeStaff, updateStaff } from "../../controllers/staffcontrollers/staffcontrollers.js";
import uploadStaffFiles from "../../uploadfiles/staff.js";

const staffrouter = express.Router();

staffrouter.get("/", showStaff);
staffrouter.post("/", storeStaff);
staffrouter.delete("/:id", deleteStaff);
staffrouter.patch("/:id", updateStaff);

export default staffrouter;