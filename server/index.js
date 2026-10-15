import express from 'express'
import { GoogleGenAI } from '@google/genai'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

app.get('/', (req, res) => {
  res.send('DevHelper AI backend is running!')
})

app.post('/api/ask', async (req, res) => {
  try {
    const { question } = req.body

    if (!question || typeof question !== 'string' || !question.trim()) {
      return res.status(400).json({
        error: 'Please enter a valid question.',
      })
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: question.trim(),
      config: {
        systemInstruction:
          'You are DevHelper AI, a friendly frontend development tutor. Explain HTML, CSS, JavaScript, and React concepts clearly for beginners. Use short examples when helpful. If a question is unrelated to frontend development, politely guide the user back to frontend learning.',
      },
    })

    res.json({
      answer: response.text,
    })
  } catch (error) {
    console.error('AI request failed:', error)
    console.error('Underlying cause:', error.cause)

    res.status(500).json({
      error: 'Sorry, I could not generate an answer. Please try again.',
    })
  }
})

app.listen(PORT, '0.0.0.0', () => {
  console.log('DevHelper AI backend running on port ${PORT}')
})



