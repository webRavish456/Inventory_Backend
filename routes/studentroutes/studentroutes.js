import express from "express";
import { showStudents,storeStudents,deleteStudents,updateStudents } from "../../controllers/studentcontrollers/studentcontroller.js";
import practiceMiddleWare from "../../middleware.js";

const studentrouter = express.Router();
studentrouter.get("/showstudent",practiceMiddleWare,showStudents);
studentrouter.post("/", storeStudents);
studentrouter.patch("/:id", updateStudents);
studentrouter.delete("/:id", deleteStudents);

export default studentrouter;
