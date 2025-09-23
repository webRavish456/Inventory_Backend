import Student from "../../models/studentmodels/student.js";

//view student Data
export const ViewStudent =async(req,res)=>{
    const result=await Student.find();
    const {phno}=req.body;
 if(phno.toString().length !== 10){
        return res.status(403).json({status:true,message:"The digit of phone no should be 10"})
    }
   if (!result){
        return res.status(401).json({status:"false", message:"no user in database"});
    }
    return res.status(200).json({status:true, message:"data fetch Succesfully"});
}
//Read student Data
 export const ReadStudent= async(req,res)=>{
    const {name,rollno,course,email,phno,age,bloodGr}=req.body;
    if(!name||!rollno){
        return res.status(403).json({status:true,message:"Name and rollno are required"})
    }
     if(!age||!bloodGr||!phno){
        return res.status(403).json({status:true,message:"Age ,Phone no. and BloodGr are required"})
    }
    if(phno.toString().length !== 10){
        return res.status(403).json({status:true,message:"The digit of phone no should be 10"})
    }
    const result=await Student.insertOne({name,rollno,course,email,phno,age,bloodGr})
    if(!result){
        return res.status(401).json({status:"false", message:"some error occured Please try again"});
    }
    else{
        return res.status(200).json({status:"true", message:"data stored succesfullyin database"});
    }
}
//update Students
export const UpdateStudent= async(req,res)=>{
    const id=req.params.id;
    const UpdateData= req.body;
    const result= await Student.findByIdAndUpdate(id,UpdateData,{
        new:true,
        runValidators:true
    });
     return res.status(200).json({status:"true",message:"update successfully",id:id,UpdateData:UpdateData,Data:result})

}
//delete student data
export const DeleteStudent= async(req,res)=>{
    const id=req.params.id;
    const deleteData= req.body;
    const result=await Student.findByIdAndDelete(id,deleteData,{
        new:true,
        runvalidators:true,
    });
    return res.status(200).json({status:true,message:"deleted these data succesfully",id:id,deleteData:deleteData})
}
