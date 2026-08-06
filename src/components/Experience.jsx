import Section from './Section';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

const experience = [
  {
    company: 'Metro Agarbatti Company',
    role: 'Full Stack Developer',
    period: 'July 2025 — Present',
    location: 'Karachi, Pakistan',
    points: [
      'Fixed a backend race condition and added offline sync polling in a custom Sales ERP platform used daily by 40+ field reps, cutting 10-15 failed orders a day down to zero and ending recurring user complaints.',
      'Added live location tracking to verify reps were placing orders at the correct shop, reducing false orders and false attendance by over 90%.',
      'Replaced informal WhatsApp based issue reporting with a custom ticketing system for the office sales team, bringing full visibility to bugs and issues that used to go untracked.',
    ],
  },
  {
    company: 'Pakistan Aeronautical Complex',
    role: 'Technical Intern (Systems Analysis)',
    period: '2024',
    location: 'Kamra, Pakistan',
    points: [
      'Observed maintenance and logging procedures for fighter jet systems at a Pakistan Air Force facility, gaining exposure to how technical data is tracked at each stage of maintenance.',
      'Compiled observation reports evaluated by engineering staff on maintenance workflows and data organization.',
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
                  className="font-sans font-light text-sm text-ink-light leading-relaxed pl-5 relative text-justify before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-px before:bg-warm-border"
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
