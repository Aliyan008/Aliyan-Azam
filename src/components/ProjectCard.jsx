import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Globe } from 'lucide-react';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const techIcons = {
  React: `${CDN}/react/react-original.svg`,
  Flutter: `${CDN}/flutter/flutter-original.svg`,
  Firebase: `${CDN}/firebase/firebase-original.svg`,
  Supabase: `${CDN}/supabase/supabase-original.svg`,
  PostgreSQL: `${CDN}/postgresql/postgresql-original.svg`,
  PHP: `${CDN}/php/php-original.svg`,
  JavaScript: `${CDN}/javascript/javascript-original.svg`,
  CSS: `${CDN}/css3/css3-original.svg`,
  'Power BI': '/icons/power-bi-icon.svg',
  Excel: '/icons/icons8-excel.svg',
  'GitHub Actions': `${CDN}/githubactions/githubactions-plain.svg`,
  Docker: `${CDN}/docker/docker-original.svg`,
  MySQL: `${CDN}/mysql/mysql-original.svg`,
};

const linkMeta = {
  github: { icon: null, label: 'View on GitHub', img: 'https://cdn.simpleicons.org/github' },
  playstore: { icon: null, label: 'Get on Play Store', img: 'https://cdn.simpleicons.org/googleplay' },
  live: { icon: Globe, label: 'Visit live site' },
};

function LinkIcon({ type, url }) {
  const meta = linkMeta[type];
  if (!meta) return null;
  const Icon = meta.icon;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="group/link relative flex items-center justify-center w-7 h-7 rounded-full bg-cream-dark border border-warm-border text-ink-faint opacity-60 hover:opacity-100 hover:text-sage hover:border-sage transition-all"
    >
      {Icon ? (
        <Icon size={13} />
      ) : (
        <img src={meta.img} alt="" width="13" height="13" className="w-[13px] h-[13px] object-contain grayscale opacity-70" />
      )}
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-ink text-cream px-2 py-1 rounded opacity-0 group-hover/link:opacity-100 transition-opacity hidden md:block">
        {meta.label}
      </span>
    </a>
  );
}

function ProjectCard({ index, title, description, stack, links = [] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasLinks = links.length > 0;
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      className="relative h-[200px]"
    >
      <article
        onClick={() => setIsExpanded((prev) => !prev)}
        className={`group absolute inset-x-0 top-0 bg-card-bg border border-warm-border rounded-md p-6 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-sage hover:z-20 [transition:transform_0.3s_ease,box-shadow_0.3s_ease,border-color_0.3s_ease] cursor-pointer md:cursor-default ${
          isExpanded ? 'z-20 shadow-xl' : 'z-10'
        }`}
      >
        <div className="flex items-center justify-between mb-5">
          <span className="font-serif italic text-xs text-ink-faint">
            / {number}
          </span>
          <span className="text-xs uppercase tracking-widest text-ink-faint">
            Project
          </span>
        </div>

        <h3 className="font-serif text-2xl text-ink mb-3 leading-snug">
          {title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 bg-cream-dark border border-warm-border text-ink-faint rounded-sm"
            >
              {techIcons[tech] && (
                <img
                  src={techIcons[tech]}
                  alt=""
                  width="12"
                  height="12"
                  className="w-3 h-3 object-contain"
                />
              )}
              {tech}
            </span>
          ))}
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[400px] opacity-100 mb-3' : 'max-h-0 opacity-0 mb-0'
          } md:group-hover:max-h-[400px] md:group-hover:opacity-100 md:group-hover:mb-3`}
        >
          <p className="font-sans font-light text-sm text-ink-light leading-relaxed text-justify">
            {description}
          </p>
        </div>

        <span className="text-xs uppercase tracking-widest text-ink-faint mb-5 md:hidden">
          {isExpanded ? 'Tap to collapse' : 'Tap for details'}
        </span>

        <div className="flex flex-wrap items-center gap-2 mt-auto min-h-[28px]">
          {hasLinks &&
            links.map((link) => (
              <LinkIcon key={link.type} type={link.type} url={link.url} />
            ))}
          {!hasLinks && (
            <span className="flex items-center gap-1.5 text-sm text-ink-faint font-medium">
              <Lock size={14} />
              Confidential client project
            </span>
          )}
        </div>
      </article>
    </motion.div>
  );
}

export default ProjectCard;
