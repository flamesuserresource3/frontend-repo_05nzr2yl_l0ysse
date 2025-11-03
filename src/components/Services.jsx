import { Film, Camera, Sparkles, Cpu, Zap } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Cinematic Production',
    desc: 'End-to-end commercials, branded films, and campaign assets built for impact and speed.',
  },
  {
    icon: Camera,
    title: 'Photography',
    desc: 'Studio and on-location shoots with premium lighting, retouching, and color workflows.',
  },
  {
    icon: Sparkles,
    title: 'Creative Direction',
    desc: 'Concept, art direction, and visual systems that align brand and story.',
  },
  {
    icon: Cpu,
    title: 'Post & VFX',
    desc: 'Edit, grade, motion design, and seamless VFX built into a streamlined pipeline.',
  },
  {
    icon: Zap,
    title: 'Performance Delivery',
    desc: 'Optimized exports, adaptive formats, and CDN-ready assets for fast experiences.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0C0C41]"
            style={{ fontFamily: 'Clash Display, IBM Plex Sans, IBM Plex Sans Arabic, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}
          >
            Services
          </h2>
          <p className="mt-3 text-[#0C0C41]/70" style={{ fontFamily: 'IBM Plex Sans, IBM Plex Sans Arabic, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
            Modular production built for modern brands.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/5 bg-white p-6 hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-[#2A1EFF]/10 text-[#2A1EFF] flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0C0C41]">{title}</h3>
              <p className="mt-2 text-[#0C0C41]/70">{desc}</p>
              <div className="mt-4 h-1 w-0 bg-[#FF009F] group-hover:w-16 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
