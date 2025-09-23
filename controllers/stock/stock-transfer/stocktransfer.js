import Stransfer from "../../../models/stock/stock-transfer/stocktransfer.js";

export const showStransfer=async(req,res)=>{
  try {
    const deliresult = await  Stransfer.find();

    // deliresult is an array; check length if you want to detect "no data"
    if (deliresult.length === 0) {
      return res.status(200).json({
        status: false,
        message: "No User in database",
        data: []   // or omit data, or send empty array
      });
    }

    // if data exists
    return res.status(200).json({status: true,
      message: "Stock Transfer successfully fetched",
      data: deliresult
    });
  } catch (error) {
    console.error("Error fetching in Stock Transfer:", error);
    return res.status(500).json({status: false,message:error.message});
  }
};

export const storeStransfer=async(req,res)=>{
    const { Tid,Pid,Pname,Qtytranfr,FromLOC,ToLOC,TDate}=req.body;
    const result=await Stransfer.insertOne({ Tid,Pid,Pname,Qtytranfr,FromLOC,ToLOC,TDate})
    if(!result){
        return res.status(500),json({status:false,message:"some error occured please try again"})
    }
    else{
    return res.status(200).json({status:"true",message:" Inserted Successfully"});
    }
}

export const deleteStransfer=async(req,res)=>{
  const id = req.params.id;

  try {
    const result = await Stransfer.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Stock Transfered not found"});
    } 
    else {
      return res.status(200).json({ message: "Stock Transfered  deleted" , Data: result });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const updateStransfer=async(req,res)=>{
    const id=req.params.id;
         const updateData = req.body;
     const result =await Stransfer.findByIdAndUpdate(id, updateData,  {
        new: true, 
         runValidators: true
     });
      return res.status(200).json({ status :"true",message: " Stock Transfered found",id:id, Data: result });
} 
