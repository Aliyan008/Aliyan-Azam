import resumePdf from '../assets/Aliyan Azam.pdf';

function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="hero-intro">Hi, my name is</p>
      <h1 className="hero-name">Aliyan Azam</h1>
      <p className="hero-tagline">
        I build things for the web and mobile. I'm a{' '}
        <strong>Full-Stack Developer</strong> focused on building accessible,
        maintainable applications.
      </p>
      <div className="hero-contact">
        <span>📧 aliyanazam08@gmail.com</span>
        <span>📱 +92 342 2711720</span>
        <span>📍 Karachi, Pakistan</span>
      </div>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">
          View work
        </a>
        <a
          href="https://www.linkedin.com/in/aliyan-azam-273742270"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          LinkedIn
        </a>
        <a
          href={resumePdf}
          download="Aliyan-Azam-Resume.pdf"
          className="btn btn-outline"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
