const express = require("express");
const bodyParser = require("body-parser");

// Import the external route handler
const genAIManager = require("./modules/gen-ai/gen-ai-manager");

const app = express();
const port = 3000; // You can choose any port that is available

app.use(bodyParser.json());

// Route POST requests to '/generate' to the genAIManager module
app.post("/generate", genAIManager.generateText);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
