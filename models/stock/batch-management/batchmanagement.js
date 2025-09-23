import mongoose from "mongoose";

const batchmngmntSchema= new mongoose.Schema({
   Bid:{
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
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
   },
Bqty:{
    type:Number
},
mfgDate:{
type:Date
},
PriceUnit:{
type:String
},
Splirname:{
    type:String
},
Qstatus:{
 type:String,
 enum:["Good","Bad","Okay"],
 default:"Okay"
}
})

const Batch= mongoose.model("Batchmanagement",batchmngmntSchema);
export default Batch;
