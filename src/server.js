const express = require("express");
const bodyParser = require("body-parser");

// Routers
const codegenRouter = require("./routes/code-gen-routes");
const userRoutes = require("./routes/user-routes");

// Authentication
const auth = require("./middleware/authentication/auth");

// Database
const db = require("./modules/storage/db");

const app = express();
const port = 3000; // You can choose any port that is available

//  Connect to DB
db.connectDB();

app.use(bodyParser.json());

// Route handler for GET requests to '/'
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Define Routes
app.use("/api/users", userRoutes);

// Use routers
app.use("/api/codegen", auth, codegenRouter);

// Middleware to handle 404 (Not Found)
app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
