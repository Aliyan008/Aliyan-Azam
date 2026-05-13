import { motion } from 'framer-motion';
import Section from './Section';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

const stats = [
  { value: '2025', label: 'BS Computer Science, DUET' },
  { value: '2+', label: 'Years of experience' },
  { value: '5+', label: 'Projects built' },
];

function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionLabel number="01" label="About" />
        <h2 className="font-serif text-4xl md:text-5xl text-ink mb-8 leading-tight">
          A little about me.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <p className="font-sans font-light text-ink-light leading-relaxed mb-5">
            I graduated from Dawood University of Engineering &amp; Technology
            (DUET) in July 2025 with a Bachelor of Science in Computer Science.
            I work across full-stack development and data analysis — building
            web and mobile applications and turning data into clear insights.
          </p>
          <p className="font-sans font-light text-ink-light leading-relaxed">
            I gained experience in technical documentation and systems analysis
            during my internship at Pakistan Aeronautical Complex, and today I'm
            focused on shipping thoughtful products as a Full-Stack Developer at
            Metro Milan Aggarbatti.
          </p>
          <blockquote className="border-l-2 border-sage pl-5 font-serif italic text-xl text-ink leading-relaxed mt-8">
            I care about the small details — the parts you only notice when
            they're missing.
          </blockquote>
        </div>

        <div className="flex flex-col gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.08,
              }}
              className="bg-card-bg border border-warm-border rounded-md p-6 flex items-baseline gap-5"
            >
              <span className="font-serif text-4xl md:text-5xl text-sage leading-none">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-ink-faint">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default About;
