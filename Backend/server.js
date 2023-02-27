
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose=require("mongoose");
const Admin= require("./Models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const LivreRouter=require("./Routes/LivreRoutes");
const CategorieRouter=require("./Routes/CategorieRoutes");
const AdminRouter=require("./Routes/AdminRoutes");  

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use("/Books",LivreRouter)
app.use("/Admin",AdminRouter)
app.use("/Categorie",CategorieRouter)



require("dotenv").config()
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)

.then(result=>console.log("Connecté Avec Succès"))
.catch(error=>console.log( error.message));


app.listen(7777, () => {
  console.log(`Server is running on port 7777.`);
});