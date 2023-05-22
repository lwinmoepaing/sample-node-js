const express = require("express");
const router = express.Router();

// Controllers
const UserController = require("../controller/UserController");

router.get("/", UserController.getAllUsers);
router.post("/", UserController.createUser);

module.exports = router;
