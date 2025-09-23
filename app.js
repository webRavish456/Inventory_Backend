import express from "express";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




export function middleWare(req,res,next){
   const {age}=req.query;
   if(age<=18){
    return res.status(401).json({status:"true",message:"this content is not for under 18"});
   }
   else{
   next();
   }
}

