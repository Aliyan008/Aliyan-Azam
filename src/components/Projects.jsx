import Section from './Section';
import SectionLabel from './SectionLabel';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

const projects = [
  {
    id: 'booking',
    title: 'Order Booking Application',
    description:
      'Full-stack order booking system for bookers and distributors. Replaces manual Excel-based booking with a Flutter mobile app, Firebase Authentication, and a PHP backend connected to SQL.',
    stack: ['Flutter', 'Firebase', 'PHP', 'SQL'],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.franscent.orderbooking',
    secondaryLink: null,
    secondaryLabel: null,
  },
  {
    id: 'wordwise',
    title: 'WordWise',
    description:
      'Word puzzle game inspired by Wordle with user authentication, gameplay preferences, and leaderboard flow using Supabase.',
    stack: ['React', 'JavaScript', 'CSS', 'Supabase'],
    playStoreUrl: null,
    secondaryLink: 'https://wordwise-orpin.vercel.app/',
    secondaryLabel: 'Visit Site',
  },
  {
    id: 'chat',
    title: 'Real-time Chat Application',
    description:
      'Secure messaging app with modern UI/UX and real-time updates.',
    stack: ['Flutter', 'Firebase'],
    playStoreUrl: null,
    secondaryLink:
      'https://www.linkedin.com/posts/aliyan-azam-273742270_flutterdev-firebase-mobileapp-activity-7203792210729877504-p6QB',
    secondaryLabel: 'View Project',
  },
  {
    id: 'dashboard',
    title: 'Sales Performance Dashboard',
    description:
      'Interactive Power BI dashboard analyzing retail sales performance by customer, country, and time period with KPI tracking and slicers.',
    stack: ['Power BI', 'DAX', 'Excel'],
    playStoreUrl: null,
    secondaryLink: 'https://github.com/Aliyan008/Sales-Dashboard',
    secondaryLabel: 'View Project',
  },
];

function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionLabel number="03" label="Projects" />
        <h2 className="font-serif text-4xl md:text-5xl text-ink mb-12 leading-tight">
          Selected work.
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} {...project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
