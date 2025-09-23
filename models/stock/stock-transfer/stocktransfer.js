import mongoose from "mongoose";

const StkTransferSchema=new mongoose.Schema({
 Tid:{
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
 Qtytranfr:{
    type:Number
 },
 FromLOC:{
type:String
 },
 ToLOC:{
type:String
 },
  TDate:{
type:Date
 }
})

const Stransfer=mongoose.model("StockTransfer",StkTransferSchema);
export default Stransfer;
