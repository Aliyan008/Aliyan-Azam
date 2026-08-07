import { useState, useEffect, useRef } from 'react';
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
  const [hasHover, setHasHover] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });
  const cardRef = useRef(null);
  const hasLinks = links.length > 0;
  const number = String(index + 1).padStart(2, '0');

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setHasHover(mq.matches);
    const handler = (e) => setHasHover(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (hasHover || !isExpanded) return;
    function handleOutside(e) {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    }
    document.addEventListener('pointerdown', handleOutside);
    return () => document.removeEventListener('pointerdown', handleOutside);
  }, [hasHover, isExpanded]);

  const handleClick = () => {
    if (hasHover) return;
    setIsExpanded((prev) => !prev);
  };
  const handleMouseEnter = () => { if (hasHover) setIsExpanded(true); };
  const handleMouseLeave = () => { if (hasHover) setIsExpanded(false); };

  const Header = () => (
    <>
      <div className="flex items-center justify-between mb-5">
        <span className="font-serif italic text-xs text-ink-faint">/ {number}</span>
        <span className="text-xs uppercase tracking-widest text-ink-faint">Project</span>
      </div>
      <h3 className="font-serif text-2xl text-ink mb-3 leading-snug">{title}</h3>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {stack.map((tech) => (
          <span key={tech} className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 bg-cream-dark border border-warm-border text-ink-faint rounded-sm">
            {techIcons[tech] && (
              <img src={techIcons[tech]} alt="" width="12" height="12" className="w-3 h-3 object-contain" />
            )}
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  const Footer = () => (
    <>
      {!hasHover && (
        <span className="text-xs uppercase tracking-widest text-ink-faint mb-5">
          {isExpanded ? 'Tap to collapse' : 'Tap for details'}
        </span>
      )}
      <div className="flex flex-wrap items-center gap-2 mt-auto min-h-[28px]">
        {hasLinks && links.map((link) => (
          <LinkIcon key={link.type} type={link.type} url={link.url} />
        ))}
        {!hasLinks && (
          <span className="flex items-center gap-1.5 text-sm text-ink-faint font-medium">
            <Lock size={14} />
            Confidential client project
          </span>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      className="relative"
    >
      {/* Invisible sizer: in normal flow, never absolute, exists only so
          Grid's items-stretch has real content height to match across a row.
          Skipped on mobile since single-column has no row partner. */}
      <div aria-hidden="true" className="hidden sm:flex invisible p-6 flex-col">
        <Header />
        <Footer />
      </div>

      <article
        ref={cardRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`group relative sm:absolute sm:inset-x-0 sm:top-0 w-full bg-card-bg border border-warm-border rounded-md p-6 flex flex-col [transition:transform_0.3s_ease,box-shadow_0.3s_ease,border-color_0.3s_ease] cursor-pointer sm:cursor-default ${
          isExpanded ? 'sm:-translate-y-1 sm:shadow-xl sm:border-sage sm:z-20' : 'sm:z-10'
        }`}
      >
        <Header />
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[400px] opacity-100 mb-3' : 'max-h-0 opacity-0 mb-0'
          }`}
        >
          <p className="font-sans font-light text-sm text-ink-light leading-relaxed text-justify">
            {description}
          </p>
        </div>
        <Footer />
      </article>
    </motion.div>
  );
}

export default ProjectCard;
