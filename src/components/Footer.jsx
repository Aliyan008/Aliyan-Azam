function Footer() {
  return (
    <footer id="contact" className="footer">
      <p className="section-eyebrow">06 — Contact</p>
      <h2 className="section-title">Contact</h2>
      <p className="footer-text">
        Open to opportunities and collaboration. Reach out via email or
        LinkedIn.
      </p>
      <div className="footer-links">
        <a href="mailto:aliyanazam08@gmail.com">aliyanazam08@gmail.com</a>
        <a
          href="https://www.linkedin.com/in/aliyan-azam-273742270"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Aliyan008"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} Aliyan Azam. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
