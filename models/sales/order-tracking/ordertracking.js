import mongoose from "mongoose";

const ordertrackingSchema= new mongoose.Schema({
Tid:{
    type:String,
    required: [true, 'id is required'],
    trim: true,
    maxlength: [10, 'Name cannot exceed 10 characters']
},
odr:{
    type:String,
    required: [true, 'id is required'],
    trim: true,
},
status:{
type:String,
enum:["Approved","Rejected","Pending"],
default:"pending",
},

date:{
type:Date,
},

address:{
type:String,
},
})
const OdrTrack=mongoose.model("OrderTracking",ordertrackingSchema);

export default OdrTrack;