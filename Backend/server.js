const express = require("express");
const cors = require("cors");
const app = express();
const mongoose=require("mongoose")
const LivreRouter=require("./Routes/LivreRoutes")

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use("/Books",LivreRouter)


require("dotenv").config()
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)

.then(result=>console.log("Connecté Avec Succès"))
.catch(error=>console.log(process.env.MONGO_URI + error.message));


app.listen(7777, () => {
  console.log(`Server is running on port 7777.`);
});