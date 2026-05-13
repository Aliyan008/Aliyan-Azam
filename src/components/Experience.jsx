import Section from './Section';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

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
    <Section id="experience">
      <Reveal>
        <SectionLabel number="04" label="Experience" />
        <h2 className="font-serif text-4xl md:text-5xl text-ink mb-12 leading-tight">
          Where I've worked.
        </h2>
      </Reveal>

      <div className="bg-card-bg border border-warm-border rounded-md divide-y divide-warm-border">
        {experience.map((job) => (
          <article
            key={job.company}
            className="group p-8 border-l-2 border-transparent hover:border-sage transition-colors"
          >
            <div className="grid md:grid-cols-[1fr_auto] gap-2 mb-5">
              <div>
                <h3 className="font-serif text-2xl text-ink leading-snug">
                  {job.role}
                </h3>
                <p className="font-sans text-sm text-sage mt-1">
                  {job.company}
                </p>
              </div>
              <p className="text-xs uppercase tracking-widest text-ink-faint md:text-right md:self-start">
                {job.period} · {job.location}
              </p>
            </div>

            <ul className="space-y-2">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="font-sans font-light text-sm text-ink-light leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-px before:bg-warm-border"
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
