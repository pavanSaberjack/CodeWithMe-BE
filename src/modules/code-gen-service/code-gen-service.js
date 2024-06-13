const CodingStandard = require("../../models/CodingStandard");
const User = require("../../models/CodingStandard");

// Manages connection to GenAI service depending on the configuration, fetching of coding standards from the DB

async function generateCode(req, res) {
  if (!req.body.messages) {
    return res.status(400).send("message is required");
  }

  try {
    let rules = await fetchRules();
    if (!rules) return res.status(400).json({ msg: "Something went wrong" });
    res.json({ rules });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
}

// async function generateCode(req, res) {
//   try {
//     const chatResponse = await ai_service.generateText(req, res);
//     res.json({ response: chatResponse });
//   } catch (error) {
//     console.error("API Error:", error.message);
//     res.status(500).send("Failed to fetch response from OpenAI");
//   }
// }

async function fetchRules() {
  try {
    let rules = await CodingStandard.find();
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
