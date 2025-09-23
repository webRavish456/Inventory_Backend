import StockIn from "../../../../models/stock/stock-entries/stock-in/stockin.js";

export const showStockIn=async(req,res)=>{
  try {
    const deliresult = await  StockIn.find();

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
      message: "Stock In successfully fetched",
      data: deliresult
    });
  } catch (error) {
    console.error("Error fetching in Stock In:", error);
    return res.status(500).json({status: false,message:error.message});
  }
};

export const storeStockIn=async(req,res)=>{
    const { sno,Stkid,Pid,Pname,Suppid,date,PayStaus,Status}=req.body;
    const result=await StockIn.insertOne({ sno,Stkid,Pid,Pname,Suppid,date,PayStaus,Status})
    if(!result){
        return res.status(500),json({status:false,message:"some error occured please try again"})
    }
    else{
    return res.status(200).json({status:"true",message:" Inserted Successfully"});
    }
}

export const deleteStockIn=async(req,res)=>{
  const id = req.params.id;

  try {
    const result = await StockIn.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Stock In not found"});
    } 
    else {
      return res.status(200).json({ message: " Stock In deleted" , Data: result });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const updateStockIn=async(req,res)=>{
    const id=req.params.id;
         const updateData = req.body;
     const result =await StockIn.findByIdAndUpdate(id, updateData,  {
        new: true, 
         runValidators: true
     });
      return res.status(200).json({ status :"true",message: "Stock In found",id:id, Data: result });
} 
