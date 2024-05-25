const AIService = require("./OpenAI/open-ai-service");

const ai_service = new AIService();

async function generateText(req, res) {
  console.log("in: gen-ai-manager:generateText  Request here: " + req.url);
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
  generateText,
  fetchMoreData,
};