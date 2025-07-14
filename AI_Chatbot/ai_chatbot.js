//Initialise the chatGPT api, prompt user for a message continue the conversation until the user ends it 

import OpenAI from "openai"; // This imports the OpenAI API client and the configuration class from the openai npm package.
import { createRequire } from 'module'; //This allows you to use require() inside an ES Module (because normally require only works in CommonJS).
const require = createRequire(import.meta.url) //This line actually creates a require() function inside your ES module file.
require('dotenv').config() //This loads environment variables from a .env file into process.env.

//Step 1 - Initialise the api 

const OPENAI_SECRET_KEY = process.env.OPENAI_SECRET_KEY

// const configuration = new configuration({
//     apiKey: OPENAI_SECRET_KEY
// })

const openai = new OpenAI({
    apiKey: OPENAI_SECRET_KEY
})

//Step 2 - Create context for the API (give it some personality)

const context = 'You are an aspired software enginneering students who wants to solve problems by building full stack applications for business but you feel stuck because of your major and student job you are doing on the side. Your name is softy'
const model = 'gpt-3.5-turbo'

//Step 3 - define the function to retrieve the API message based on user input 
let messages = [
    {
        'role': 'user',
        'content': 'give me some advice'
    }
]
// Define an asynchronous function that sends a message to the OpenAI API
async function sendPrompt(input) {

  // Create an array of messages to send to the API
  // Start with a "system" message to define the assistant's behavior
  const currentMessage = [
    {
      "role": "system", // Sets the role of this message (used to guide the assistant's behavior)
      "content": context // `context` likely contains a predefined instruction like "You are a helpful assistant"
    },

    // Spread in previous messages (user and assistant chat history)
    // This helps the model continue the conversation
    ...messages
  ];

  // Send a request to the OpenAI Chat API with the model and messages
  const completion = await openai.chat.completions.create({
    model,     // The model you're using, e.g., 'gpt-3.5-turbo'
    messages: currentMessage   // The full conversation array sent to the API
  });

  // You could return or use the response from here (not shown in this snippet)

  console.log(completion)
}

//Step 4 - Create a run function that request a user input 

async function run() {
    await sendPrompt()


}

run()