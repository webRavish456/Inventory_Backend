import Sales from "../../../models/sales/sales-orders/salesorder.js";

export const showSalesodr = async (req, res) => {
  try {
    const deliresult = await Sales.find();

    // deliresult is an array; check length if you want to detect "no data"
    if (deliresult.length === 0) {
      return res.status(200).json({
        status: false,
        message: "No sales orders in database",
        data: []   // or omit data, or send empty array
      });
    }

    // if data exists
    return res.status(200).json({status: true,
      message: "Data fetched successfully",
      data: deliresult
    });
  } catch (error) {
    console.error("Error fetching sales orders:", error);
    return res.status(500).json({status: false,message:error.message});
  }
};
//Server error while fetching sales orders


export const storeSalesodr=async(req,res)=>{
    const { SodrId,cusId,Odate,Ddate,CusCall,Pname,Qntyodr,Cost,Discount}=req.body;
    const result=await Sales.insertOne({ SodrId,cusId,Odate,Ddate,CusCall,Pname,Qntyodr,Cost,Discount})
    if(!result){
        return res.status(500),json({status:false,message:"some error occured please try again"})
    }
    else{
    return res.status(200).json({status:"true",message:" Inserted Successfully"});
    }
}

export const deleteSalesodr=async(req,res)=>{
  const id = req.params.id;

  try {
    const result = await Sales.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Delivery not found"});
    } 
    else {
      return res.status(200).json({ message: "Delivery deleted" , Data: result });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const updateSalesodr=async(req,res)=>{
    const id=req.params.id;
         const updateData = req.body;
     const result =await Sales.findByIdAndUpdate(id, updateData,  {
        new: true, 
         runValidators: true
     });
      return res.status(200).json({ status :"true",message: "Delivery found",id:id, updateData: updateData , Data: result });
} 