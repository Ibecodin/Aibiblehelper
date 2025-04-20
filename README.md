# Bible AI - Local Prompt Interface

This is a lightweight, offline AI web app that uses a local language model (Mistral) via Ollama.
Users type a prompt, and the AI responds. While the model can answer all kinds of prompts, the original idea was to use it for Bible study support,
letting users ask questions about Scripture and get thoughtful answers.

  ## How to Run This Project
      ### Prerequisites
      You will need to install:
      - Node.js: https://nodejs.org/
      - Ollama: https://ollama.com/
      - A local model: This project uses "mistral"
    
      ### Steps to Run
      1. Open a terminal and run the following to start the Mistral model:
           ollama run mistral
      
          Leave that terminal running.
    
      2. In a separate terminal, go to the folder where your server.js file is located, and run:
           node server.js
         
          This will start the backend server on `http://localhost:5000`.
    
      3. Open the `index.html` file in your browser. Type a prompt, click "Send", and see the response from the local AI.

## Project Overview
    1. Project Selection and Motivation:
    We built a simple, local AI interface using Ollama with the idea of creating a tool that could help with Bible study.
    The original plan was to make something that could explain verses, answer questions, or just give insight when reading Scripture.
    That said, once we had it working, we realized it could be used for way more than just Bible content. Anything you ask, it’ll try
    to respond to. But the core idea was always to support personal Bible study without relying on external tools.
    
    2. System Design and Basic Functions
    #What it does:
      - You type a question or prompt
      - Click send
      - The AI responds
      - Done.
    #How it works:
      - Frontend: HTML/CSS/JS
      - Backend: Node.js with Express
      - Prompt gets sent to the server, passed to the Mistral model via Ollama, and the response is sent back to display.

  ## Current Issues / Limitations
    - The app only works locally and requires both Ollama and Node.js
    - If Ollama isn't running or the model isn't pulled, the app won’t work
    - The interface only supports simple one-prompt interactions — no history or memory.

