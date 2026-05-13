const links = [
  { href: '#about', label: 'About' },
  { href: '#what-i-do', label: 'What I Do' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-cream/80 border-b border-warm-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="font-serif text-lg tracking-wide text-ink">
          AA
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-xs uppercase tracking-widest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="nav-link md:hidden text-xs uppercase tracking-widest"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
