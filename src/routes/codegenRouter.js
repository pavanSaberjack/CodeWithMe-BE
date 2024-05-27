// routes/codegenRouter.js
const express = require("express");
const router = express.Router();
const genAIManager = require("../modules/gen-ai/gen-ai-manager");

// POST request to generate code
router.post("/generate", genAIManager.generateCode);

module.exports = router;
