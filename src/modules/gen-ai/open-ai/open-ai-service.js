require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const axios = require("axios");
const AI_service = require("../gen-ai-service");
const prompts = require("./data/prompts");

require("dotenv").config();
console.log(process.env.HELLO); // remove this

// Config: This should be moved to a separate config file
const apiKey = process.env.OPENAI_API_KEY;
const openAIModel = process.env.OPENAI_MODEL;
const role = process.env.OPENAI_API_ROLE;
const endpoint = process.env.OPENAI_END_POINT;

class OpenAIService extends AI_service {
  async generateText(rules, ask) {
    let prompt = this.generatePrompt(rules, ask);

    const { model, messages } = {
      model: openAIModel,
      messages: [
        {
          role: role,
          content: prompt,
        },
      ],
    };
    const chatResponse = await this.#chatWithOpenAI(model, messages);
    return chatResponse;
  }

  async #chatWithOpenAI(model, messages) {
    console.log("in: open-ai-manager:chatWithOpenAI  Request here: ");

    try {
      const response = await axios.post(
        endpoint,
        {
          model: model,
          messages: messages,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.choices[0].message.content; // Assuming we want the message content
    } catch (error) {
      console.error("Error calling OpenAI Chat API:", error.code);
      throw new Error("Failed to communicate with OpenAI");
    }
  }

  generatePrompt(rules, ask) {
    var prompt = prompts["user_persona"];
    for (const rule of rules) {
      prompt = prompt + "\n" + rule.rule;
    }
    prompt = prompt + "\n\n" + ask;
    return prompt;
  }
}

module.exports = OpenAIService;
