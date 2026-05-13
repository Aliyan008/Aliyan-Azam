import { motion } from 'framer-motion';
import { Smartphone, Code2, BarChart2, Palette } from 'lucide-react';
import Section from './Section';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Development of applications for Android and iOS using Flutter.',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Building responsive, intuitive interfaces with React and modern web technologies.',
  },
  {
    icon: BarChart2,
    title: 'Data Analysis',
    description:
      'Working with Python (pandas, numpy), SQL, Power BI, and Excel to analyze data and support decisions.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Designing clear, functional user experiences for web and mobile applications.',
  },
];

function WhatIDo() {
  return (
    <Section id="what-i-do">
      <Reveal>
        <SectionLabel number="02" label="What I Do" />
        <h2 className="font-serif text-4xl md:text-5xl text-ink mb-12 leading-tight">
          Things I make.
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.08,
              }}
              className="h-full"
            >
              <div className="h-full bg-card-bg border border-warm-border rounded-md p-6 hover:-translate-y-1 hover:shadow-lg hover:border-sage [transition:all_0.25s_ease]">
                <div className="w-9 h-9 rounded bg-sage-light flex items-center justify-center mb-5">
                  <Icon size={18} className="text-sage" />
                </div>
                <h3 className="font-serif text-xl text-ink mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-sm text-ink-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export default WhatIDo;
