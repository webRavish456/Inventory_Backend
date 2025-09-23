import mongoose from "mongoose";

const salesorderSchema= new mongoose.Schema({
    SodrId:{
    type:String, 
    required: [true, 'id is required'],
    trim: true,
    maxlength: [10, 'Name cannot exceed 10 characters']
},
cusId:{
    type:String, 
    required: [true, 'id is required'],
    trim: true,
    maxlength: [10, 'Name cannot exceed 10 characters']  
},
Odate:{
   type:Date,
},
Ddate:{
   type:Date,
},
CusCall:{
type: String,
required: [true, 'Phone number is required'],
match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number']
},
Pname:{
    type:String, 
    required: [true, 'id is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']  
},
Qntyodr:{
    type:Number
},
Cost:{
    type:String
},
Discount:{
    type:String
}
})
const Sales=mongoose.model("SalesOrder",salesorderSchema)

export default Sales;