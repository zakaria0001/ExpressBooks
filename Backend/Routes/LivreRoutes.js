const express = require("express");
const router = express.Router();

const LivreController = require("../Controllers/LivreController");

router.get("/",LivreController.getAllBooks);
router.get("/:id",LivreController.getBookById);
router.get("/Categorie/:Categorie",LivreController.getBooksByCategory);
router.get("/Search/:NomLivre",LivreController.getBooksByName);
router.post("/",LivreController.AddBook);
router.delete("/:id",LivreController.DeleteBook);
router.put("/:id",LivreController.UpdateBookInfos);




module.exports=router   