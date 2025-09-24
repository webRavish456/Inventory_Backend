import mongoose from "mongoose";

const staffSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    department:{
        type:String
    },
    degination:{
        type:String
    },
    salary:{
        type:String
    }
})

const Staff=mongoose.model("Staff",staffSchema);

export default Staff;