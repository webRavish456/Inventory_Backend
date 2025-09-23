import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    name:{
        type:String
    },
    rollno:{
        type:Number,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    phno:{
      type:Number,
      required:true
    },
    age:{
      type:Number,
      required:true
    },
    bloodGr:{
        type:String,
      required:true
    }
})
const Student = mongoose.model("Student",studentSchema);

export default Student;
