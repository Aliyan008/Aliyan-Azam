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
    id: 'food',
    title: 'Food Delivery Application',
    description:
      'Food delivery platform with real-time tracking and a streamlined ordering experience.',
    stack: ['Flutter', 'Firebase'],
    playStoreUrl: null,
    secondaryLink:
      'https://www.linkedin.com/posts/aliyan-azam-273742270_flutter-mobiledevelopment-fooddeliveryapp-activity-7197976428959686656-JDkp',
    secondaryLabel: 'View Project',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Application',
    description:
      'Full-featured e-commerce platform with secure payment integration and product management.',
    stack: ['Flutter', 'Firebase'],
    playStoreUrl: null,
    secondaryLink:
      'https://www.linkedin.com/posts/aliyan-azam-273742270_flutter-ecommerce-shoestoreapp-activity-7197978083621031936-wz1k',
    secondaryLabel: 'View Project',
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
