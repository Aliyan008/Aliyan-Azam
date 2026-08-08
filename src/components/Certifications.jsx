import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

const certifications = [
  {
    id: 'flutter-course',
    date: 'September 2022',
    title: 'Flutter Application Development',
    issuer: 'Hazza Institute of Information and Technology',
    meta: '4-month course, no certificate issued',
    description: 'A hands-on introduction to building mobile applications with Flutter, covering core widgets and layout composition, navigation between multiple screens, building responsive UI that adapts across different device sizes, and an introduction to state management for handling dynamic, interactive app behavior.',
  },
  {
    id: 'prompting-essentials',
    date: 'June 2025',
    title: 'Google Prompting Essentials',
    issuer: 'Google, via Coursera',
    meta: 'Specialization, 4 courses',
    description: 'Covered structured prompt design, applying prompting techniques to speed up everyday work tasks like data analysis and presentation building, and using AI as a creative and analytical partner rather than just a search tool.',
    verifyUrl: 'https://coursera.org/verify/specialization/TBP78VJ825A8',
  },
  {
    id: 'data-analytics',
    date: 'June 2025',
    title: 'Google Data Analytics',
    issuer: 'Google, via Coursera',
    meta: 'Professional Certificate, 8 courses',
    description: 'Covered the full analytics workflow end to end, cleaning messy datasets, writing SQL queries to answer business questions, and building visualizations in Tableau, capped off with a final capstone project analyzing a real dataset from raw data to presented insights.',
    verifyUrl: 'https://coursera.org/verify/professional-cert/2E36YY9BYRPP',
  },
];

function Certifications() {
  return (
    <Section id="certifications">
      <Reveal>
        <SectionLabel number="06" label="Certifications" />
        <h2 className="font-serif text-4xl md:text-5xl text-ink mb-12 leading-tight">
          Credentials.
        </h2>
      </Reveal>

      <div className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-warm-border" />

        <div className="flex flex-col gap-10">
          {certifications.map((cert, index) => (
            <div key={cert.id} className="relative">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
              >
                <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-sage border-4 border-cream" />
                <span className="text-xs uppercase tracking-widest text-ink-faint">
                  {cert.date}
                </span>
                <h3 className="font-serif text-xl text-ink mt-1 mb-1 leading-snug">
                  {cert.title}
                </h3>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 + 0.15 }}
                className="font-sans text-sm text-sage mb-2"
              >
                {cert.issuer} · {cert.meta}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 + 0.3 }}
              >
                <p className="font-sans font-light text-sm text-ink-light leading-relaxed mb-2 max-w-2xl text-justify">
                  {cert.description}
                </p>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-sage font-medium hover:gap-2.5 transition-all"
                  >
                    Verify Certificate
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Certifications;
