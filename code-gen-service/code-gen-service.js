const AIClient = require("./openai-manager");

// Define a route to handle questions
async function generateText(req, res) {
  //   console.log(req);

  console.log("Came here");

  const { model, messages } = req.body;
  try {
    const chatResponse = await AIClient.chatWithOpenAi(model, messages);
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
