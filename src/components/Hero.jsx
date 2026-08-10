import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import resumePdf from '../assets/Aliyan Azam.pdf';
import { useLenisScroll } from '../lib/LenisProvider';

const ROLES = ['Full-Stack Developer', 'Data Analyst'];
const TYPE_SPEED = 70;
const DELETE_SPEED = 40;
const PAUSE_AFTER_TYPE = 1600;
const PAUSE_AFTER_DELETE = 300;

function TypewriterRole() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const currentWord = ROLES[wordIndex];
    let timeout;

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), PAUSE_AFTER_TYPE);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 0);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        timeout = setTimeout(() => {
          setWordIndex((i) => (i + 1) % ROLES.length);
          setPhase('typing');
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex]);

  return (
    <span className="text-sage font-normal">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-sage ml-0.5 align-middle animate-pulse" />
    </span>
  );
}

const enter = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

function Hero() {
  const { scrollToId } = useLenisScroll() || {};

  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-20 md:pb-28 scroll-mt-16"
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
        className="font-sans font-light text-lg md:text-xl text-ink-light max-w-2xl leading-relaxed mb-10 min-h-[7.5rem] md:min-h-[3.5rem]"
      >
        I like building things that actually work, not just demos. I'm a{' '}
        <TypewriterRole /> who cares about the details most people skip.
      </motion.p>

      <motion.div {...enter(0.45)} className="flex flex-wrap gap-3">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToId?.('projects');
          }}
          className="inline-flex items-center gap-2 bg-ink text-white text-sm font-medium px-6 py-2.5 rounded-sm hover:bg-sage transition-colors"
        >
          View work
          <ArrowUpRight size={16} />
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
