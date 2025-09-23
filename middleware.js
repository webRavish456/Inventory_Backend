import express from "express";

const app = express();
const port=3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function countryRestriction(req,res,next){
    const {country}=req.query;
    if(country=="india"){
        return res.status(400).json({status:"true",message:"this content is not available in your country"});
    }
    else{
        next();
    }
}
    app.get("/practice",countryRestriction,(req,res)=>{
        return res.status(200).json({status:"true",message:"recieved"});
    })




app.listen(port,()=>{
  console.log(`server is running on 0300`);
})
