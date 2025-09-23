import StockOut from "../../../../models/stock/stock-entries/stock-out/stockout.js";

export const showStockOut=async(req,res)=>{
  try {
    const deliresult = await  StockOut.find();

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
      message: "Stock Out successfully fetched",
      data: deliresult
    });
  } catch (error) {
    console.error("Error fetching in Stock Out:", error);
    return res.status(500).json({status: false,message:error.message});
  }
};

export const storeStockOut=async(req,res)=>{
    const { sno,Stkoutid,Pid,Cusid,Pname,Suppid,date,PayStaus,Status}=req.body;
    const result=await StockOut.insertOne({ sno,Stkoutid,Pid,Cusid,Pname,Suppid,date,PayStaus,Status})
    if(!result){
        return res.status(500),json({status:false,message:"some error occured please try again"})
    }
    else{
    return res.status(200).json({status:"true",message:" Inserted Successfully"});
    }
}

export const deleteStockOut=async(req,res)=>{
  const id = req.params.id;

  try {
    const result = await StockOut.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Stock Out not found"});
    } 
    else {
      return res.status(200).json({ message: " Stock Out deleted" , Data: result });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const updateStockOut=async(req,res)=>{
    const id=req.params.id;
         const updateData = req.body;
     const result =await StockOut.findByIdAndUpdate(id, updateData,  {
        new: true, 
         runValidators: true
     });
      return res.status(200).json({ status :"true",message: "Stock Out found",id:id, Data: result });
} 

