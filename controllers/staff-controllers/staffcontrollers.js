import Staff from "../../models/staffmodels/staff.js";

export const showStaff=async (req,res)=>{
const result=await Staff.find();
if(!result){
    return res.status(401).json({status:"false",message:"No user in database"})
}
return res.status(200).json({status:true,message:"data fetched successfully",Data:result});
}

export const storeStaff=async(req,res)=>{
    const {name,sallary,department,position}=req.body;

    if(!sallary || !department){
        return res.status(403).json({status:"false",message:"sallary and department required"});
    }
    const result=await Staff.insertOne({name,sallary,department,position})
    if(!result){
        return res.status(500),json({status:false,message:"some error occured please try again"})
    }
    else{
    return res.status(200).json({status:"true",message:"Staff Inserted Successfully"});
    }
}

export const deleteStaff=async(req,res)=>{
  const id = req.params.id;

  try {
    const result = await Staff.findByIdAndDelete(id);
    if (!result) {
      return res.status(200).json({ message: "Staff deleted", Data: result });
    } else {
      return res.status(404).json({ message: "Staff not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
export const updateStaff=async(req,res)=>{
    const id=req.params.id;
         const updateData = req.body;
     const result = await Staff.findByIdAndUpdate(id, updateData,  {
        new: true, 
         runValidators: true
     });
      return res.status(200).json({ status :"true",message: "Staff found",id:id, updateData: updateData , Data: result });
} 