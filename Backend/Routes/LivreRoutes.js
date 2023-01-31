const express = require("express");
const router = express.Router();

const LivreController = require("../Controllers/LivreController");

router.get("/",LivreController.getAllBooks)
router.get("/:id",LivreController.getBookById);
router.post("/",LivreController.AddBook)

router.delete("/:id",LivreController.DeleteBook)
router.put("/:id",LivreController.UpdateBookInfos)

module.exports=router