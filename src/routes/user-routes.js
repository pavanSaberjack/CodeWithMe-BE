const express = require("express");
const router = express.Router();
const userService = require("../modules/user/user-service");

// POST /users/register - Register user and return token
router.post("/register", userService.register);

// POST /users/login - Authenticate user and return token
router.post("/login", userService.login);

module.exports = router;
