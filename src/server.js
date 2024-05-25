const express = require("express");
const bodyParser = require("body-parser");

// Routers
const codegenRouter = require("./routes/codegenRouter");

// Import the external route handler
const genAIManager = require("./modules/gen-ai/gen-ai-manager");

const app = express();
const port = 3000; // You can choose any port that is available

app.use(bodyParser.json());

// Route handler for GET requests to '/'
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Use routers
app.use("/api/codegen", codegenRouter);

// // Route POST requests to '/generate' to the genAIManager module
// app.post("/generate", genAIManager.generateText);

// Middleware to handle 404 (Not Found)
app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
