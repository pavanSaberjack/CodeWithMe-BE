// routes/codegenRouter.js
const express = require("express");
const router = express.Router();
const codeGenService = require("../modules/code-gen-service/code-gen-service");
const codingStandardRoutes = require("./coding-standard-routes");

// POST request to generate code
router.post("/generate", codeGenService.generateCode);

// Use routers
router.use("/rules", codingStandardRoutes);

module.exports = router;
