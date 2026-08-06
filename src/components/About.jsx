import { motion } from 'framer-motion';
import Section from './Section';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

const stats = [
  { value: '2025', label: 'BS Computer Science, DUET' },
  { value: '1.5+', label: 'Years of experience' },
  { value: '3', label: 'Production systems built and maintained' },
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
            I currently work as a Full Stack Developer, building web and mobile
            applications with a focus on clean architecture and reliable data
            handling.
          </p>
          <p className="font-sans font-light text-ink-light leading-relaxed mb-5">
            On the frontend and mobile side I work with React and Flutter. I
            integrate with REST APIs and use Firebase and Supabase for
            authentication and data management. For data work I use Python and
            SQL along with Power BI and Excel for analysis and reporting.
          </p>
          <p className="font-sans font-light text-ink-light leading-relaxed">
            I also use AI tools throughout my workflow to speed up debugging,
            prototyping and research, while keeping the core logic and decisions
            in my own hands.
          </p>
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
