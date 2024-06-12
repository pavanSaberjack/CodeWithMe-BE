// routes/codegenRouter.js
const express = require("express");
const router = express.Router();
const genAIManager = require("../modules/gen-ai/gen-ai-manager");
const codingStandardRoutes = require("./codingStandardRoutes");

// POST request to generate code
router.post("/generate", genAIManager.generateCode);

// Use routers
router.use("/rules", codingStandardRoutes);

module.exports = router;
