import mongoose from "mongoose";

const StockinSchema=new mongoose.Schema({
sno:{
    type:Number
},
Stkid:{
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
Suppid:{
    type:String, 
    required: [true, 'id is required'],
    trim: true,
    maxlength: [10, 'Name cannot exceed 10 characters']
},
date:{
 type:String
},
PayStaus:{
    type:String,
    enum:["paid","Unpaid"],
    default:"Unpaid"
},
Status:{
   type:String,
    enum:["Active","InActive"],
    default:"InActive"
}
})
const StockIn=mongoose.model("Stockin",StockinSchema);
export default StockIn;
