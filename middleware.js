function practiceMiddleWare(req,res,next){
    const {age}=req.query;
    console.log(age);
    if(age<=18){
        return res.status(401).json({status:true,message:"You can not access this"});
       
    }
    else{
         console.log("Middleware called");
        next();
    }
    

}
 export default practiceMiddleWare;

