// import express from "express";
// import mongoose from "mongoose";
// // import { storestaff, showstaff } from "./controllers/staffcontrollers/staffcontrollers.js";
// import { storesupplier, showsupplier } from "./controllers/supplier.js"; // import supplier controller
// import { storeexpense, showexpense } from "./controllers/expense.js";

// const app = express();

// const PORT = process.env.PORT || 8000;

// const mongourl = "mongodb://127.0.0.1:27017/mydatabase";

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // MongoDB Connection
// mongoose.connect(mongourl, {})
//   .then(() => {
//     console.log('✅ Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('❌ MongoDB connection error:', err);
//   });

// //  Example route
// app.get("/api/person", (req, res) => {
//   const person = {
//     name: "Puja",
//     email: "puja@gamil.com",
//     mob: "0123456789"
//   };
//   res.status(200).json({ status: "true", message: "data fetched succesfully", data: person });
// });

// // //  Staff routes
// // app.get("/staff", showstaff);
// // app.post("/storestaff", storestaff);

// //  Supplier routes
// app.get("/supplier", showsupplier);
// app.post("/storesupplier", storesupplier);

// //Expense routes
// app.get("/expense", showexpense);
// app.post("/storeexpense", storeexpense);


// //  Test route
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello to this about page!");
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on port ${PORT}`);
// });  


// import express from "express";
// import mongoose from "mongoose";
// import supplierRoutes from "./Routes/supplier.js";
// // import expenseRoutes from "./Routes/expense.js"; 
//  import { storeexpense, showexpense } from "./controllers/expense.js";
//  import { storeincome, showincome } from "./controllers/income.js";

// // import staffRoutes from "./Routes/staffs.js";  
// const app = express();
// const PORT = process.env.PORT || 8000;
// const mongourl = "mongodb://127.0.0.1:27017/mydatabase";

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // MongoDB Connection
// mongoose.connect(mongourl, {})
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Example route
// app.get("/api/person", (req, res) => {
//   const person = {
//     name: "Puja",
//     email: "puja@gmail.com",
//     mob: "0123456789"
//   };
//   res.status(200).json({ status: true, message: "Data fetched successfully", data: person });
// });

// // Routes
// app.use("/api/supplier", supplierRoutes);  // Supplier APIs
// // app.use("/api/expense", expenseRoutes);    // Expense APIs
// // app.use("/api/staff", staffRoutes);       // Uncomment when staff ready

// app.get("/expense", showexpense);
//  app.post("/storeexpense", storeexpense);

//  app.get("/income", showincome);
// app.post("/storeincome", storeincome);

// // Test route
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello to this about page!");
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on port ${PORT}`);
// });    



import express from "express";
import mongoose from "mongoose";
import router from "./route/route.js";

const app = express();
const PORT = process.env.PORT || 8000;
const mongourl = "mongodb://127.0.0.1:27017/mydatabase";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes (single entry point)
app.use("/api", router);

// MongoDB connection
mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});  

