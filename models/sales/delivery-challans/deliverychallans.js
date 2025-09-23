import mongoose from "mongoose";

const deliverySchema= new mongoose.Schema({
Did:{
    type:String,
    required: [true, 'id is required'],
    trim: true,
    maxlength: [10, 'Name cannot exceed 10 characters']
},
Sid:{
       type:String,
    required: [true, 'id is required'],
    trim: true,
    maxlength: [10, 'Name cannot exceed 10 characters'] 
},
date:{
type:Date,
},
address:{
type:String,
},
status:{
type:String,
enum:["Approved","Rejected","Pending"],
default:"pending",
},
Deliname:{
    type:String,
    required: [true, 'id is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
}

})
const Delivery=mongoose.model("DeliveryChallans",deliverySchema);

export default Delivery;