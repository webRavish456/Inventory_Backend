import Batch from "../../../models/stock/batch-management/batchmanagement.js";

export const showBatch=async(req,res)=>{
  try {
    const deliresult = await  Batch.find();

    // deliresult is an array; check length if you want to detect "no data"
    if (deliresult.length === 0) {
      return res.status(200).json({
        status: false,
        message: "No Batch Management in database",
        data: []   // or omit data, or send empty array
      });
    }

    // if data exists
    return res.status(200).json({status: true,
      message: "Batch Management successfully fetched",
      data: deliresult
    });
  } catch (error) {
    console.error("Error fetching Batch Management:", error);
    return res.status(500).json({status: false,message:error.message});
  }
};

export const storeBatch=async(req,res)=>{
    const { Bid, Pid,Pname,Bqty,mfgDate,PriceUnit,Splirname,Qstatus}=req.body;
    const result=await Batch.insertOne({ Bid, Pid,Pname,Bqty,mfgDate,PriceUnit,Splirname,Qstatus})
    if(!result){
        return res.status(500),json({status:false,message:"some error occured please try again"})
    }
    else{
    return res.status(200).json({status:"true",message:" Inserted Successfully"});
    }
}

export const deleteBatch=async(req,res)=>{
  const id = req.params.id;

  try {
    const result = await Batch.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Batch not found"});
    } 
    else {
      return res.status(200).json({ message: "Batch deleted" , Data: result });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const updateBatch=async(req,res)=>{
    const id=req.params.id;
         const updateData = req.body;
     const result =await Batch.findByIdAndUpdate(id, updateData,  {
        new: true, 
         runValidators: true
     });
      return res.status(200).json({ status :"true",message: "Batch Updated found",id:id, Data: result });
} 