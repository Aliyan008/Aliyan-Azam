const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillGroups = [
  {
    title: 'Programming',
    items: ['Dart', 'Python', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Platforms',
    items: ['Flutter', 'React', 'Firebase', 'Supabase'],
  },
  {
    title: 'Data & Analytics',
    items: ['Python (pandas, numpy)', 'SQL', 'Power BI', 'Excel'],
  },
  {
    title: 'Tools',
    items: ['Git', 'VS Code', 'Android Studio'],
  },
];

const logoUrls = {
  Dart: `${CDN}/dart/dart-original.svg`,
  Python: `${CDN}/python/python-original.svg`,
  JavaScript: `${CDN}/javascript/javascript-original.svg`,
  'HTML/CSS': `${CDN}/html5/html5-original.svg`,
  Flutter: `${CDN}/flutter/flutter-original.svg`,
  React: `${CDN}/react/react-original.svg`,
  Firebase: `${CDN}/firebase/firebase-original.svg`,
  Supabase: `${CDN}/supabase/supabase-original.svg`,
  'Python (pandas, numpy)': `${CDN}/python/python-original.svg`,
  SQL: `${CDN}/postgresql/postgresql-original.svg`,
  'Power BI': '/icons/powerbi.svg',
  Excel: '/icons/excel.svg',
  Git: `${CDN}/git/git-original.svg`,
  'VS Code': `${CDN}/vscode/vscode-original.svg`,
  'Android Studio': `${CDN}/androidstudio/androidstudio-original.svg`,
};

function getLogoForItem(item) {
  if (logoUrls[item]) return logoUrls[item];
  if (item.startsWith('Python')) return logoUrls.Python;
  return undefined;
}

function Skills() {
  return (
    <section id="skills">
      <p className="section-eyebrow">05 — Skills</p>
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3 className="skill-group-title">{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item} className="skill-item">
                  {getLogoForItem(item) ? (
                    <>
                      <img
                        src={getLogoForItem(item)}
                        alt=""
                        className="skill-logo"
                        width="24"
                        height="24"
                      />
                      <span>{item}</span>
                    </>
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
