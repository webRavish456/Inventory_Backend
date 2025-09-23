import mongoose from "mongoose";

const staffSchema=new mongoose.Schema({
    
    name: { 
    type: String, 
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
    sallary:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    position:{
        type:String
    }
})

const Staff=mongoose.model("Staff",staffSchema);

export default Staff;