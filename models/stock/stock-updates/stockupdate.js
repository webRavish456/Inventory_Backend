import mongoose from "mongoose";

const StkupdateSchema=new mongoose.Schema({
Trscid:{
    type:String,
    required: [true, 'id is required'],
    trim: true,
    maxlength: [10, 'Name cannot exceed 10 characters']
},
Pid:{
    type:String,
    required: [true, 'id is required'],
    trim: true,
    maxlength: [10, 'Name cannot exceed 10 characters']    
},
Pname:{
    type:String,
    required: [true, 'id is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']   
},
Trsctype:{
    type:String,
    enum:["Online","by Cash"],
    default:"by Cash"
},
Qty:{
    type:Number
},
TrscDate:{
    type:Date
},
BalStck:{
    type:Number
},
Refno:{
    type:String
}
})
const Stkupdate=mongoose.model("StockUpdate",StkupdateSchema);
export default Stkupdate;
