import mongoose from "mongoose";

const salesreturnSchema= new mongoose.Schema({
    Rtnid:{
        type:String,
    required: [true, 'id is required'],
    trim: true,
    maxlength: [10, 'Name cannot exceed 10 characters']
    },
    SOid:{
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
    QtyRtrn:{
        type:Number
    },
 Rdate:{
    type:String
 },
 RtnRson:{
type:String
 },
 RefndAmt:{
    type:String
 }
})

const SalesRtn=mongoose.model("SalesReturn",salesreturnSchema)
export default SalesRtn;