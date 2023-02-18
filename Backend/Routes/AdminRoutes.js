const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AdminController = require("../Controllers/AdminController");

router.get("/",AdminController.GetAdminsList);
router.get("/:id",AdminController.getAdminByid);
router.post("/",AdminController.AddAdmin);
router.delete("/:id",AdminController.DeleteAdmin);
router.put("/:id",AdminController.UpdateAdminInfos);





module.exports=router