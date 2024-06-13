const AIService = require("./open-ai/open-ai-service");

const ai_service = new AIService();

async function generateCode(req, res) {
  console.log("in: gen-ai-manager:generateText  Request here: " + req.url);

  if (!req.body.messages) {
    return res.status(400).send("message is required");
  }

  try {
    const chatResponse = await ai_service.generateText(req, res);
    res.json({ response: chatResponse });
  } catch (error) {
    console.error("API Error:", error.message);
    res.status(500).send("Failed to fetch response from OpenAI");
  }
}

// Another function to handle a different GET request
function fetchMoreData(req, res) {
  const url = "https://api.example.com/more-data";
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error("Error fetching more data:", error);
      res.status(500).send("Failed to fetch more data");
    });
}

// Export the functions
module.exports = {
  generateCode,
  fetchMoreData,
};
