import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 'booking',
    title: 'Order Booking Application',
    description:
      'Full-stack order booking system for bookers and distributors. Replaces manual Excel-based booking with a Flutter mobile app, Firebase Authentication, and a PHP backend connected to SQL.',
    stack: ['Flutter', 'Firebase', 'PHP', 'SQL'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.franscent.orderbooking',
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
    secondaryLink: 'https://github.com/Aliyan008/wordwise',
    secondaryLabel: 'View Project',
  },
  {
    id: 'ecommerce',
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
    id: 'chat',
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
    <section id="projects">
      <p className="section-eyebrow">03 — Projects</p>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
