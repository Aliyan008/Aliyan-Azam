import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function ProjectCard({
  index,
  title,
  description,
  stack,
  playStoreUrl,
  secondaryLink,
  secondaryLabel,
}) {
  const primaryHref = playStoreUrl || secondaryLink;
  const primaryLabel = playStoreUrl ? 'Get on Play Store' : secondaryLabel;
  const showSecondary = playStoreUrl && secondaryLink && secondaryLabel;
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
    >
      <article className="group h-full bg-card-bg border border-warm-border rounded-md p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-sage [transition:all_0.25s_ease]">
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
        <p className="font-sans font-light text-sm text-ink-light leading-relaxed mb-5 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 bg-cream-dark border border-warm-border text-ink-faint rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-auto">
          {primaryHref && (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-sage font-medium hover:gap-2.5 transition-all"
            >
              {primaryLabel}
              <ArrowUpRight size={14} />
            </a>
          )}
          {showSecondary && (
            <a
              href={secondaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-ink-light font-medium hover:text-sage hover:gap-2.5 transition-all"
            >
              {secondaryLabel}
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </article>
    </motion.div>
  );
}

export default ProjectCard;
