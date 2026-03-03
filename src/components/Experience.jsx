const experience = [
  {
    company: 'Metro Milan Aggarbatti',
    role: 'Full Stack Developer',
    period: 'July 2025 — Present',
    location: 'Karachi, Pakistan',
    points: [
      'Full-stack application development: frontend, backend, and database integration.',
      'Flutter for mobile UI and Firebase for authentication.',
      'Data handling, validation, and system optimization.',
    ],
  },
  {
    company: 'Pakistan Aeronautical Complex',
    role: 'Technical Intern (Systems Analysis)',
    period: '2024',
    location: 'Kamra, Pakistan',
    points: [
      'Reviewed maintenance data systems for fighter jets and suggested improvements.',
      'Documented workflows to improve data organization and clarity.',
      'Assisted engineers in organizing technical data for maintenance procedures.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience">
      <p className="section-eyebrow">04 — Experience</p>
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experience.map((job) => (
          <article key={job.company} className="experience-item">
            <div className="experience-header">
              <h3 className="experience-role">{job.role}</h3>
              <p className="experience-company">{job.company}</p>
              <p className="experience-meta">
                {job.period} · {job.location}
              </p>
            </div>
            <ul className="experience-points">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
