function ProjectCard({
  title,
  description,
  stack,
  playStoreUrl,
  secondaryLink,
  secondaryLabel,
}) {
  return (
    <article className="project-card">
      <header className="project-card-header">
        <h3 className="project-title">{title}</h3>
      </header>
      <p className="project-desc">{description}</p>
      <div className="project-stack">
        {stack.map((tech) => (
          <span key={tech} className="stack-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        {playStoreUrl && (
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link-primary"
          >
            Get on Play Store <span aria-hidden="true">↗</span>
          </a>
        )}
        {secondaryLink && secondaryLabel && (
          <a href={secondaryLink} className="project-link">
            {secondaryLabel} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;

