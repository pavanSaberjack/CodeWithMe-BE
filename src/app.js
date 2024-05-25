// Handler for GET requests
function getGreeting(req, res) {
  res.send("Hello from the server!"); // Sending a simple text response
}

// Handler for POST requests
function postData(req, res) {
  const { name, age } = req.body; // Extract data from request body
  res.json({
    message: `Hello ${name}, you are ${age} years old.`,
    yourData: { name, age },
  });
}

module.exports = { getGreeting, postData };
