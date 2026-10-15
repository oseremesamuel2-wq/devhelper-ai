import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function QuestionForm() {
  const [question, setQuestion] = useState('')
  const [submittedQuestion, setSubmittedQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    const trimmedQuestion = question.trim()

    if (!trimmedQuestion || loading) {
      return
    }

    setSubmittedQuestion(trimmedQuestion)
    setQuestion('')
    setAnswer('')
    setError('')
    setLoading(true)

    try {
      const response = await fetch('https://devhelper-ai-ps8s.onrender.com/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: trimmedQuestion,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error || 'Something went wrong. Please try again.',
        )
      }

      setAnswer(data.answer)
    } catch (err) {
      setError(
        err.message === 'Failed to fetch'
          ? 'Unable to connect to the server. Please check that the backend is running.'
          : err.message,
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="assistant-section" id="assistant">
      <div className="assistant-content">
        <p className="section-label">YOUR PERSONAL LEARNING SPACE</p>

        <h2>
          Ask. Learn. <span>Build.</span>
        </h2>

        <p className="assistant-description">
          Have a frontend development question? Enter it below
          and take the next step in your learning journey.
        </p>

        <form className="question-form" onSubmit={handleSubmit}>
          <label htmlFor="question">
            What would you like to learn today?
          </label>

          <textarea
            id="question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="e.g. Explain React useState to a beginner..."
            rows="4"
            required
            disabled={loading}
          />

          <button
            type="submit"
            className="ask-button"
            disabled={loading}
          >
            {loading ? 'Generating Answer...' : 'Submit Question →'}
          </button>
        </form>

        {submittedQuestion && (
          <div className="question-result" aria-live="polite">
            <h3>Your question</h3>
            <p>{submittedQuestion}</p>

            {loading && (
              <p className="response-note">
                DevHelper AI is preparing your answer. Please wait...
              </p>
            )}

            {answer && (
              <div className="ai-answer">
                <h3>DevHelper AI's Answer</h3>
                <ReactMarkdown>{answer}</ReactMarkdown>
              </div>
            )}

            {error && (
              <p className="error-message" role="alert">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default QuestionForm
