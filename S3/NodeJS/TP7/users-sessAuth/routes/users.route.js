const usersController = require("../controllers/users.controller");
const express = require("express");
var router = express.Router();

router.get("/", usersController.home);
router.get("/login", usersController.login);
router.post("/login", 
    usersController.authentificateUser, 
    usersController.redirectView);

module.exports = router;


