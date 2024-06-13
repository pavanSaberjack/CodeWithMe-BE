const AIService = require("./open-ai/open-ai-service");

const ai_service = new AIService();

async function generateCode(rules, code) {
  try {
    const chatResponse = await ai_service.generateText(rules, code);
    return chatResponse;
  } catch (error) {
    console.error("API Error:", error.message);
    throw Error("Failed to fetch response from OpenAI");
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
