import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Camera, Mail, Phone } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[#FF009F] flex items-center justify-center text-white">
            <Camera size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'IBM Plex Sans, IBM Plex Sans Arabic, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>Verzo Studios</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-sm font-medium text-[#0C0C41] hover:text-[#FF009F] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
            className="inline-flex items-center gap-2 rounded-full bg-[#FF009F] px-4 py-2 text-white hover:opacity-90 transition"
          >
            <Rocket size={16} /> Start a Project
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block w-full text-left px-2 py-2 rounded-md text-[#0C0C41] hover:bg-black/5"
              >
                {item.label}
              </button>
            ))}
            <a
              href="mailto:hello@verzoproduction.com"
              className="mt-2 flex items-center gap-2 px-2 py-2 rounded-md bg-[#2A1EFF] text-white"
            >
              <Mail size={16} /> hello@verzoproduction.com
            </a>
            <a
              href="tel:+0000000000"
              className="flex items-center gap-2 px-2 py-2 rounded-md bg-black text-white"
            >
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
