const express = require("express");
const router = express.Router();
const codingStandardsService = require("../modules/coding-standard/codingStandardService");

router.get("/coding-standards", codingStandardsService.getAll);

router.post("/coding-standards", codingStandardsService.update);

module.exports = router;
