import mongoose from "mongoose";

const StockoutSchema=new mongoose.Schema({
sno:{
    type:Number
},
Stkoutid:{
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
Cusid:{
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
 type:Date
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
const StockOut=mongoose.model("Stockout",StockoutSchema);
export default StockOut;
