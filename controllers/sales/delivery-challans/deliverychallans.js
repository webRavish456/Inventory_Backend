import Delivery from "../../../models/sales/delivery-challans/deliverychallans.js";

export const showDelichallan=async(req,res)=>{
  try {
    const deliresult = await Delivery.find();

    // deliresult is an array; check length if you want to detect "no data"
    if (deliresult.length === 0) {
      return res.status(200).json({
        status: false,
        message: "No Delivery Challans in database",
        data: []   // or omit data, or send empty array
      });
    }

    // if data exists
    return res.status(200).json({status: true,
      message: "Data fetched successfully",
      data: deliresult
    });
  } catch (error) {
    console.error("Error fetching Delivery Challans:", error);
    return res.status(500).json({status: false,message:error.message});
  }
};

export const storeDelichallan=async(req,res)=>{
    const {Did,Sid,date,address,status,Deliname}=req.body;

    if(!Did || !Sid||!Deliname){
        return res.status(403).json({status:"false",message:"DeliverId, SupplierId and deliveryperson name required"});
    }
    const result=await Delivery.insertOne({Did,Sid,date,address,status,Deliname})
    if(!result){
        return res.status(500),json({status:false,message:"some error occured please try again"})
    }
    else{
    return res.status(200).json({status:"true",message:" Inserted Successfully"});
    }
}

export const deleteDelichallan=async(req,res)=>{
  const id = req.params.id;

  try {
    const result = await Delivery.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Delivery not found"  });
    } else { 
      return res.status(200).json({ message: "Delivery deleted", Data: result});
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const updateDelichallan=async(req,res)=>{
    const id=req.params.id;
         const updateData = req.body;
     const result =await Delivery.findByIdAndUpdate(id, updateData,  {
        new: true, 
         runValidators: true
     });
      return res.status(200).json({ status :"true",message: "Delivery found",id:id, updateData: updateData , Data: result });
} 