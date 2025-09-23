import mongoose from "mongoose";

const openingstockSchema= new mongoose.Schema({
    OStockid:{
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
    Opqty:{
    type:Number
    },
    Opstkvlu:{
        type:Number
    },
    DateOEtry:{
        type:String
    }
});
const Opstock=mongoose.model("OpeningStock",openingstockSchema);
export default Opstock;
