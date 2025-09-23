import mongoose from "mongoose";



const studentSchema=new mongoose.Schema({
 name: {
    type: String,
    required: true,
    trim: true
    },
 age: {
    type: Number,
    
    
  },
 rollNumber: {
    type: String,
    required: true,
    unique: true
  },
 email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    required: true,
    unique: true
  },
  phone: {
    type: String,
    match: [/^[0-9]{10}$/, "Invalid phone number"] 
  },
  department: {
    type: String,
    required: true
  },
  semester: {
    type: Number,
    enum: [1, 2, 3, 4,5,6,7,8],
    required: true
  },
  
  address: {
    type:String,
    required:true
    
  },
   
})
const Student=mongoose.model("Student",studentSchema);
    export default Student;