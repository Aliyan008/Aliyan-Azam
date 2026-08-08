import { useLenisScroll } from '../lib/LenisProvider';

const links = [
  { href: '#about', label: 'About' },
  { href: '#what-i-do', label: 'What I Do' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

function Nav() {
  const { scrollToId } = useLenisScroll() || {};
  function handleClick(e, href) {
    e.preventDefault();
    scrollToId?.(href.replace('#', ''));
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-cream/80 border-b border-warm-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="font-serif text-lg tracking-wide text-ink"
        >
          AA
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="nav-link text-xs uppercase tracking-widest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="nav-link md:hidden text-xs uppercase tracking-widest"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
