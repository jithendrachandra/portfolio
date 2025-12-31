// Environment setup: Add to .zshrc or .bashrc:
// export GEMINI_API_KEY=YOUR_API_KEY_HERE
// Then reload with: source ~/.zshrc
// Or use .env file with: GEMINI_API_KEY=your_key_here

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { portfolioData } from './src/data/faq.js';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini AI - NEVER expose API key in frontend code or commit to version control
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'models/gemini-2.5-flash' });

// System prompt
const SYSTEM_PROMPT = `You are Jithendra's AI assistant for his portfolio website. Answer any question about his background, education, contact information, skills, achievements, projects, or motivations using only the latest information in the profile data below. Always respond in the third person (use "he", "him", "his", "Jithendra" - NOT "I" or "me"). Be helpful, professional, and concise.

Profile Data:
${JSON.stringify(portfolioData, null, 2)}

If the question cannot be answered with the provided data, politely say so and suggest contacting him directly.`;

// API endpoint for AI responses
app.post('/getAiResponse', async (req, res) => {
  console.log('Received AI request for:', req.body.userInput);
  try {
    const { userInput } = req.body;

    if (!userInput) {
      return res.status(400).json({ error: 'userInput is required' });
    }

    // Create the full prompt
    const fullPrompt = `${SYSTEM_PROMPT}\n\nUser Question: ${userInput}`;

    console.log('Sending prompt to Gemini...');
    // Generate response
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    console.log('Gemini response received');
    res.json({ response: text });
  } catch (error) {
    console.error('Error generating AI response:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});