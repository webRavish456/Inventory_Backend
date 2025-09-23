import Stkupdate from "../../../models/stock/stock-updates/stockupdate.js";


export const showStkupdate=async(req,res)=>{
  try {
    const deliresult = await  Stkupdate.find();

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
      message: "Stock Update successfully fetched",
      data: deliresult
    });
  } catch (error) {
    console.error("Error fetching in Stock Update:", error);
    return res.status(500).json({status: false,message:error.message});
  }
};

export const storeStkupdate=async(req,res)=>{
    const { Trscid,Pid,Pname,Trsctype,Qty,TrscDate,BalStck,Refno}=req.body;
    const result=await Stkupdate.insertOne({ Trscid,Pid,Pname,Trsctype,Qty,TrscDate,BalStck,Refno})
    if(!result){
        return res.status(500),json({status:false,message:"some error occured please try again"})
    }
    else{
    return res.status(200).json({status:"true",message:" Inserted Successfully"});
    }
}

export const deleteStkupdate=async(req,res)=>{
  const id = req.params.id;

  try {
    const result = await Stkupdate.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Updated Stock  not found"});
    } 
    else {
      return res.status(200).json({ message: "updated Stock deleted" , Data: result });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const updateStkupdate=async(req,res)=>{
    const id=req.params.id;
         const updateData = req.body;
     const result =await Stkupdate.findByIdAndUpdate(id, updateData,  {
        new: true, 
         runValidators: true
     });
      return res.status(200).json({ status :"true",message: " Stock Updated",id:id, Data: result });
} 