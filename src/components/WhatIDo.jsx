const services = [
  {
    title: 'Mobile Apps',
    description:
      'Development of applications for Android and iOS using Flutter.',
  },
  {
    title: 'Frontend Development',
    description:
      'Building responsive, intuitive interfaces with React and modern web technologies.',
  },
  {
    title: 'Data Analysis',
    description:
      'Working with Python (pandas, numpy), SQL, Power BI, and Excel to analyze data and support decisions.',
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing clear, functional user experiences for web and mobile applications.',
  },
];

function WhatIDo() {
  return (
    <section id="what-i-do">
      <p className="section-eyebrow">02 — What I Do</p>
      <h2 className="section-title">What I Do</h2>
      <div className="what-i-do-grid">
        {services.map((item) => (
          <div key={item.title} className="service-card">
            <h3 className="service-title">{item.title}</h3>
            <p className="service-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatIDo;
