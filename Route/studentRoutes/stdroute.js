import express from "express";
const StudentRouter=express.Router();
import { DeleteStudent, ReadStudent, UpdateStudent, ViewStudent } from "../../controllers/studentcontrollers/studentcon.js";
import { middleWare } from "../../app.js";

StudentRouter.get("/viewstudent", middleWare, 
    ViewStudent);
StudentRouter.post("/readstudent",ReadStudent);
StudentRouter.put("/updatestudent/:id",UpdateStudent);
StudentRouter.delete("/deletestudent/:id",DeleteStudent);




export default StudentRouter;