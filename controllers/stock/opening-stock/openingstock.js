import Opstock from "../../../models/stock/opening-stock/openingstock.js";

export const showOpstock=async(req,res)=>{
  try {
    const deliresult = await  Opstock.find();

    // deliresult is an array; check length if you want to detect "no data"
    if (deliresult.length === 0) {
      return res.status(200).json({
        status: false,
        message: "No Opning Stock data in database",
        data: []   // or omit data, or send empty array
      });
    }

    // if data exists
    return res.status(200).json({status: true,
      message: "Opning Stock successfully fetched",
      data: deliresult
    });
  } catch (error) {
    console.error("Error fetching Opning Stock:", error);
    return res.status(500).json({status: false,message:error.message});
  }
};

export const storeOpstock=async(req,res)=>{
    const { OStockid,Pid,Pname,Opqty, Opstkvlu,DateOEtry}=req.body;
    const result=await Opstock.insertOne({ OStockid,Pid,Pname,Opqty, Opstkvlu,DateOEtry})
    if(!result){
        return res.status(500),json({status:false,message:"some error occured please try again"})
    }
    else{
    return res.status(200).json({status:"true",message:" Inserted Successfully"});
    }
}

export const deleteOpstock=async(req,res)=>{
  const id = req.params.id;

  try {
    const result = await Opstock.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Opening Stock  not found"});
    } 
    else {
      return res.status(200).json({ message: "Opening Stock  deleted" , Data: result });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const updateOpstock=async(req,res)=>{
    const id=req.params.id;
         const updateData = req.body;
     const result =await Opstock.findByIdAndUpdate(id, updateData,  {
        new: true, 
         runValidators: true
     });
      return res.status(200).json({ status :"true",message: "Opening Stock found",id:id, Data: result });
} 
