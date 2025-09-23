import express from "express";
import { deleteStaff, showStaff, storeStaff, updateStaff } from "../../controllers/staff-controllers/staffcontrollers.js";
const StaffRoutes=express.Router();


StaffRoutes.get("/staff",showStaff)
StaffRoutes.put("/updateStaff/:id",updateStaff)
StaffRoutes.delete("/deleteStaff/:id",deleteStaff)
StaffRoutes.post("/storeStaff",storeStaff)

export default StaffRoutes;