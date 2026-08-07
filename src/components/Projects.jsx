import Section from './Section';
import SectionLabel from './SectionLabel';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

const projects = [
  {
    id: 'erp-admin',
    title: 'Sales ERP Admin Panel',
    description:
      'A centralized operations platform built with React and Supabase, handling order tracking, role-based access control (RBAC), and a structured ticket logging system for issue management. Implemented Supabase Row Level Security (RLS) policies and access control mechanisms as part of a full security audit, hardening the platform against unauthorized data access. Architected and developed independently, currently deployed in production for two active clients.',
      stack: ['React', 'Supabase', 'MySQL', 'GitHub Actions'],
    links: [],
  },
  {
    id: 'field-sales-app',
    title: 'Field Sales Mobile App',
    description:
      'Replaced a manual paper-based ordering workflow, where field reps filled out paper bills that office staff later transcribed into Excel, with a Flutter application supporting real-time order sync and offline queuing. Implemented API integration with structured error handling and retry logic to ensure reliable data transfer between the app and backend. Added live GPS-based location tracking for attendance verification and order validation, ensuring orders are only logged when placed at the correct location. Used daily by 40+ field reps in production, with security measures in place to protect rep and order data.',
    stack: ['Flutter', 'Firebase', 'PHP', 'MySQL'],
    links: [
      { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.franscent.orderbooking' },
    ],
  },
  {
    id: 'dashboard',
    title: 'Sales Performance Dashboard',
    description:
      'Interactive Power BI dashboard analyzing retail sales performance by customer, country, and time period with KPI tracking and slicers.',
    stack: ['Power BI', 'Excel'],
    links: [
      { type: 'github', url: 'https://github.com/Aliyan008/Sales-Dashboard' },
    ],
  },
  {
    id: 'wordwise',
    title: 'WordWise',
    description:
      'Word puzzle game inspired by Wordle with user authentication, gameplay preferences, and leaderboard flow using Supabase.',
    stack: ['React', 'Supabase', 'GitHub Actions'],
    links: [
      { type: 'github', url: 'https://github.com/Aliyan008/wordwise' },
      { type: 'live', url: 'https://wordwise-orpin.vercel.app/' },
    ],
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-5 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} {...project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
