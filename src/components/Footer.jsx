import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

const links = [
  { href: 'mailto:aliyanazam08@gmail.com', label: 'aliyanazam08@gmail.com' },
  {
    href: 'https://www.linkedin.com/in/aliyan-azam-273742270',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://github.com/Aliyan008',
    label: 'GitHub',
    external: true,
  },
];

function Footer() {
  return (
    <footer id="contact" className="max-w-6xl mx-auto px-6 md:px-10 pb-16">
      <Reveal>
        <SectionLabel number="06" label="Contact" />
      </Reveal>
      <div className="bg-ink rounded-md p-10 md:p-16 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-5">
          Let's build something good.
        </h2>
        <p className="font-sans font-light text-white/50 max-w-xl mx-auto mb-10">
          Open to opportunities and collaboration. Reach out via email or find
          me on the links below.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-colors"
            >
              {link.label}
              {link.external && <ArrowUpRight size={14} />}
            </a>
          ))}
        </div>

        <p className="text-xs uppercase tracking-widest text-white/30">
          © {new Date().getFullYear()} Aliyan Azam — Crafted in Karachi
        </p>
      </div>
    </footer>
  );
}

export default Footer;
