const express = require("express");
const router = express.Router();

// Controllers
const UserController = require("../controller/UserController");

router.get("/", UserController.getAllUsers);
router.post("/", UserController.createUser);
router.post("/update", UserController.updateUser);
router.post("/delete", UserController.deleteUser);
router.get("/test-query", UserController.testQuery);

module.exports = router;
