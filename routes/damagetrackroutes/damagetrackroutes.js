import express from "express";


import { deleteDamage, showDamage, storeDamage, updateDamage } from "../../controllers/damagetrackcontrollers/damagetrackcontrollers.js";


const damagetrackrouter = express.Router();

damagetrackrouter.get("/", showDamage);
damagetrackrouter.post("/", storeDamage);
damagetrackrouter.delete("/:id", deleteDamage);
damagetrackrouter.patch("/:id", updateDamage);

export default damagetrackrouter;