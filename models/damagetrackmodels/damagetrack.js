import mongoose from "mongoose";



const damagetrackSchema= new mongoose.Schema({

entryid:{
type:String,
required:true
},
writeoffid:{
type:String,
require:true
},
product:{
type:String,
require:true
},

quantity:{
type:Number,
required:true
},
reason:{
type:String,
required:true
},
damageReportDate:{
type:Date,
required:true
},
receipt:{
type:String,
required:true
},
status:{
type:String,
enum:["Approved","Pending","Rejected"],
default:"Approved"
},
 },
 {timestamps:true}
);
const DamageTrack=mongoose.model("DamageTrack",damagetrackSchema);
export default DamageTrack ;
