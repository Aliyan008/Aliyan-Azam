import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

const links = [
  { href: 'mailto:aliyanazam08@gmail.com', label: 'aliyanazam08@gmail.com', iconType: 'lucide', Icon: Mail },
  {
    href: 'https://www.linkedin.com/in/aliyan-azam-273742270',
    label: 'LinkedIn',
    iconType: 'fa',
    faClass: 'fa-brands fa-linkedin',
    external: true,
  },
  {
    href: 'https://github.com/Aliyan008',
    label: 'GitHub',
    iconType: 'img',
    iconSrc: 'https://cdn.simpleicons.org/github',
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
        <p className="font-sans font-light text-white/50 max-w-xl mx-auto mb-3">
          Open to opportunities and collaboration. Reach out via email or find
          me on the links below.
        </p>
        <p className="flex items-center justify-center gap-1.5 text-sm text-white/40 mb-10">
          <MapPin size={14} />
          Based in Karachi, Pakistan · Open to remote opportunities
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              {link.iconType === 'lucide' && <link.Icon size={14} />}
              {link.iconType === 'img' && (
                <img
                  src={link.iconSrc}
                  alt=""
                  width="14"
                  height="14"
                  className="w-3.5 h-3.5 object-contain invert opacity-70"
                />
              )}
              {link.iconType === 'fa' && <i className={`${link.faClass} text-sm`} />}
              <span className="underline underline-offset-4 decoration-white/20 group-hover:decoration-white">
                {link.label}
              </span>
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
