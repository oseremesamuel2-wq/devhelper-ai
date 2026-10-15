function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <a href="#home" className="footer-logo">
        DevHelper <span>AI</span>
      </a>

      <p>
        Learn today. Build tomorrow. Keep growing.
      </p>

      <p className="copyright">
        &copy; {currentYear} DevHelper AI. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
