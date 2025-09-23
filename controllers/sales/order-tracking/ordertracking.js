import OdrTrack from "../../../models/sales/order-tracking/ordertracking.js";

export const showOdrTrack=async(req,res)=>{
  try {
    const deliresult = await  OdrTrack.find();

    // deliresult is an array; check length if you want to detect "no data"
    if (deliresult.length === 0) {
      return res.status(200).json({
        status: false,
        message: "No Order Track in database",
        data: []   // or omit data, or send empty array
      });
    }

    // if data exists
    return res.status(200).json({status: true,
      message: "Order Track successfully",
      data: deliresult
    });
  } catch (error) {
    console.error("Error fetching Order Track:", error);
    return res.status(500).json({status: false,message:error.message});
  }
};

export const storeOdrTrack=async(req,res)=>{
    const {Tid,odr,status,date,address}=req.body;

    if(!Tid || !odr ){
        return res.status(403).json({status:"false",message:"Tracking Id and OrderItem name required"});
    }
    const result=await OdrTrack.insertOne({Tid,odr,status,date,address})
    if(!result){
        return res.status(500),json({status:false,message:"some error occured please try again"})
    }
    else{
    return res.status(200).json({status:"true",message:" Inserted Successfully"});
    }
}

export const deleteodrTrack=async(req,res)=>{
  const id = req.params.id;

  try {
    const result = await OdrTrack.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({status:"false", message: "Order Track not found"  });
    } else {  
      return res.status(200).json({status:true,message: "Order Track deleted", Data: result });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const updateOdrTrack=async(req,res)=>{
    const id=req.params.id;
         const updateData = req.body;
     const result =await OdrTrack.findByIdAndUpdate(id, updateData,  {
        new: true, 
         runValidators: true
     });
      return res.status(200).json({ status :"true",message: "Order Track Updated",id:id, updateData: updateData , Data: result });
} 