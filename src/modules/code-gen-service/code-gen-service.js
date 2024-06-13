// Services
const genAIService = require("../gen-ai/gen-ai-manager");

// Models
const CodingStandard = require("../../models/CodingStandard");

// Manages connection to GenAI service depending on the configuration, fetching of coding standards from the DB

async function generateCode(req, res) {
  if (!req.body.messages) {
    return res.status(400).send("message is required");
  }

  try {
    // Fetch the rules here
    let rules = await fetchRules();
    if (!rules) return res.status(400).json({ msg: "Something went wrong" });

    try {
      const generatedCode = await genAIService.generateCode(
        rules,
        req.body.messages
      );
      res.json({ response: generatedCode });
    } catch (error) {
      console.error("API Error:", error.message);
      res.status(500).send("Failed to fetch response from OpenAI");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
}

async function fetchRules() {
  try {
    let rules = await CodingStandard.find({}, { rule: 1, _id: 0 });
    if (!rules) throw Error("Something went wrong");
    return rules;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

module.exports = {
  generateCode,
};
