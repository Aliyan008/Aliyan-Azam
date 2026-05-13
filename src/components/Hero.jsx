import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import resumePdf from '../assets/Aliyan Azam.pdf';

const enter = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

function Hero() {
  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-20 md:pb-28"
    >
      <motion.p {...enter(0)} className="font-sans text-sm text-ink-light mb-6">
        Hi, my name is
      </motion.p>

      <motion.h1
        {...enter(0.1)}
        className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-ink mb-6"
      >
        Aliyan Azam.
      </motion.h1>

      <motion.p
        {...enter(0.25)}
        className="font-sans font-light text-lg md:text-xl text-ink-light max-w-2xl leading-relaxed mb-10"
      >
        I build things for the web and mobile. I'm a{' '}
        <span className="text-sage font-normal">Full-Stack Developer</span>{' '}
        focused on crafting accessible, maintainable applications and turning
        data into clear insights.
      </motion.p>

      <motion.ul
        {...enter(0.35)}
        className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3 mb-12"
      >
        <li className="flex items-center gap-2 text-sm text-ink-light">
          <Mail size={16} className="text-sage" />
          aliyanazam08@gmail.com
        </li>
        <li className="flex items-center gap-2 text-sm text-ink-light">
          <Phone size={16} className="text-sage" />
          +92 342 2711720
        </li>
        <li className="flex items-center gap-2 text-sm text-ink-light">
          <MapPin size={16} className="text-sage" />
          Karachi, Pakistan
        </li>
      </motion.ul>

      <motion.div {...enter(0.45)} className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-ink text-white text-sm font-medium px-6 py-2.5 rounded-sm hover:bg-sage transition-colors"
        >
          View work
          <ArrowUpRight size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/aliyan-azam-273742270"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-warm-border text-ink text-sm px-6 py-2.5 rounded-sm hover:border-ink hover:bg-cream-dark transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={resumePdf}
          download="Aliyan-Azam-Resume.pdf"
          className="inline-flex items-center gap-2 border border-warm-border text-ink text-sm px-6 py-2.5 rounded-sm hover:border-ink hover:bg-cream-dark transition-colors"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
