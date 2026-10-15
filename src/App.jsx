import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import QuestionForm from './components/QuestionForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  function handleNameSubmit(event) {
    event.preventDefault()

    if (!name.trim()) {
      return
    }

    setSubmittedName(name.trim())
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="personalisation-section">
          <div className="personalisation-content">
            <p className="section-label">A LITTLE PERSONALISATION</p>

            <h2>
              Your Journey, <span>Your Way.</span>
            </h2>

            <p>
              Tell us your name to personalise your learning experience.
            </p>

            <form
              className="personalisation-form"
              onSubmit={handleNameSubmit}
            >
              <label htmlFor="learner-name">What should we call you?</label>

              <div className="name-input-group">
                <input
                  id="learner-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                  required
                />

                <button type="submit">Personalise</button>
              </div>
            </form>

            {submittedName && (
              <p className="welcome-message" aria-live="polite">
                Welcome, {submittedName}! Ready to build something amazing?
              </p>
            )}
          </div>
        </section>

        <FeatureCards />

        <QuestionForm />
      </main>

      <Footer />
    </>
  )
}

export default App
