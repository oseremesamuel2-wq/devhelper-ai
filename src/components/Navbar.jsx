function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        DevHelper <span>AI</span>
      </a>

      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#assistant">AI Assistant</a>
        </li>
      </ul>

      <a href="#assistant" className="navbar-button">
        Get Started
      </a>
    </nav>
  )
}

export default Navbar
