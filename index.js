import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoURI = "mongodb://localhost:27017/Backend";
mongoose.connect(mongoURI)
  .then(() => {
    console.log(" Connected to MongoDB");
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
  });


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});
const teacherSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
});

const User = mongoose.model("User", userSchema);
const Teacher = mongoose.model("Teacher", teacherSchema);


app.post("/user", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = new User({ name, email, phone });
    await newUser.save();

    console.log("Saved user:", name, email, phone);
    res.send("User saved to MongoDB");
  } catch (err) {
    console.error(" Error saving user:", err);
    res.status(500).send("Server error");
  }
});

app.post("/teacher", async (req, res) => {
  try {
    const { name, email, subject } = req.body;
    const newTeacher = new Teacher({ name, email, subject });
    await newTeacher.save();

    console.log("Saved teacher:", name, email, subject);
    res.send("Teacher saved to MongoDB");
  } catch (err) {
    console.error(" Error saving teacher:", err);
    res.status(500).send("Server error");
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});























/*

app.get("/api/user", (req, res) => {
  const user = {
    name: "Priyashree",
    email: "priyashree661@gmail.com",
    mob: "9142759710",
  };
  res.status(200).json({ status: true, message: "data received", data: user });
});






import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const mongoURI='mongodb://localhost:27017/Backend'
mongoose.connect(mongoURI, {
})
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
app.post("/user", async (req, res) => {
  try {
    const { name, email } = req.body;

    // Save to MongoDB
    const newUser = new User({ name, email });
    await newUser.save();

    console.log("Saved user:", name, email);
    res.send("✅ User saved to MongoDB");
  } catch (err) {
    console.error("❌ Error saving user:", err);
    res.status(500).send("Server error");
  }
});
const PORT =process.env.PORT || 5000;

app.get("/api/user",(req,res)=>{
   const user={
     name:"Priyashree",
     email:"priyashree661@gamil.com",
     mob:"9142759710"
   };
    res.status(200).json({status:"true",message:"data received",data:user});
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})*/