import { motion } from 'framer-motion';
import Section from './Section';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillGroups = [
  {
    title: 'Programming',
    items: ['Dart', 'Python', 'JavaScript'],
  },
  {
    title: 'Frameworks & Platforms',
    items: ['Flutter', 'React', 'Firebase', 'Supabase'],
  },
  {
    title: 'Data & Analytics',
    items: ['Python (pandas, numpy)', 'SQL', 'Power BI', 'Excel'],
  },
  {
    title: 'Tools',
    items: ['Git', 'VS Code', 'Android Studio'],
  },
];

const logoUrls = {
  Dart: `${CDN}/dart/dart-original.svg`,
  Python: `${CDN}/python/python-original.svg`,
  JavaScript: `${CDN}/javascript/javascript-original.svg`,
  Flutter: `${CDN}/flutter/flutter-original.svg`,
  React: `${CDN}/react/react-original.svg`,
  Firebase: `${CDN}/firebase/firebase-original.svg`,
  Supabase: `${CDN}/supabase/supabase-original.svg`,
  'Python (pandas, numpy)': `${CDN}/python/python-original.svg`,
  SQL: `${CDN}/postgresql/postgresql-original.svg`,
  'Power BI': '/icons/powerbi.svg',
  Excel: '/icons/excel.svg',
  Git: `${CDN}/git/git-original.svg`,
  'VS Code': `${CDN}/vscode/vscode-original.svg`,
  'Android Studio': `${CDN}/androidstudio/androidstudio-original.svg`,
};

function getLogoForItem(item) {
  if (logoUrls[item]) return logoUrls[item];
  if (item.startsWith('Python')) return logoUrls.Python;
  return undefined;
}

function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionLabel number="05" label="Skills" />
        <h2 className="font-serif text-4xl md:text-5xl text-ink mb-12 leading-tight">
          Tools of the trade.
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: index * 0.08,
            }}
            className="bg-card-bg border border-warm-border rounded-md p-6 hover:border-sage hover:shadow-lg [transition:all_0.25s_ease]"
          >
            <h3 className="text-xs uppercase tracking-widest text-ink-faint mb-5">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const logo = getLogoForItem(item);
                return (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 text-xs px-2.5 py-1 bg-cream-dark border border-warm-border text-ink-light rounded-sm"
                  >
                    {logo && (
                      <img
                        src={logo}
                        alt=""
                        width="14"
                        height="14"
                        className="w-3.5 h-3.5 object-contain"
                      />
                    )}
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
