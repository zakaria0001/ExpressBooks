const express = require("express");
const router = express.Router();
const CategorieController= require("../Controllers/CategorieController");

 router.get("/",CategorieController.GetCategorieList);
 router.post("/",CategorieController.AddCategorie);
 router.delete("/:id",CategorieController.RemoveCategorie);

 module.exports = router;
