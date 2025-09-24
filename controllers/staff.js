import Staff from "../../models/staff.js";

export const showstaff=async (req,res)=>{
const result=await Staff.find();
if(!result){
    return res.status(401).json({status:"false",message:"No user in database"})
}
return res.status(200).json({status:true,message:"data fetched successfully",Data:result});
}

export const storestaff=async(req,res)=>{
    const {name,email,phone,department,Salary,designation}=req.body;
if(phone.length!=10){
    return res.status(401).json({status:"false",message:"Phone number length should be exact length of 10 digit"})
}


    if(!name || !email){
        return res.status(403).json({status:"false",message:"name and email are required"});
    }
    
    const result=await Staff.insertOne({name,email,phone,department,Salary,designation})
    if(!result){
        return res.status(500),json({status:false,message:"some error occured please try again"})
    }
    else{
    return res.status(200).json({status:"true","message":"User Inserted Successfully"});
    }
}