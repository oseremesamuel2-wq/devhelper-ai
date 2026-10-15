const features = [
  {
    id: 1,
    title: 'HTML',
    subtitle: 'Structure the Web',
    description:
      'Learn to create meaningful web page structures using elements, forms, and semantic HTML.',
    icon: '</>',
    className: 'html-card',
  },
  {
    id: 2,
    title: 'CSS',
    subtitle: 'Design Beautiful Interfaces',
    description:
      'Explore colours, typography, Flexbox, Grid, animations, and responsive web design.',
    icon: '#',
    className: 'css-card',
  },
  {
    id: 3,
    title: 'JavaScript',
    subtitle: 'Bring Websites to Life',
    description:
      'Understand variables, functions, events, and DOM manipulation to build interactive websites.',
    icon: 'JS',
    className: 'javascript-card',
  },
]

function FeatureCards() {
  return (
    <section className="features-section" id="features">
      <div className="section-heading">
        <p className="section-label">YOUR LEARNING TOOLKIT</p>

        <h2>
          Master the <span>Fundamentals</span>
        </h2>

        <p>
          Build a strong foundation with the essential technologies
          behind modern websites.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <article
            className={`feature-card ${feature.className}`}
            key={feature.id}
          >
            <div className="feature-icon" aria-hidden="true">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <h4>{feature.subtitle}</h4>

            <p>{feature.description}</p>

            <a href="#assistant" className="feature-link">
              Learn with AI →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeatureCards
