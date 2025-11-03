import { Play, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Frames — Fashion Film',
    img: 'https://images.unsplash.com/photo-1512641406448-6574e777bec6?q=80&w=1400&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Urban Pulse — Brand Launch',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Volt — Tech Product Video',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Monochrome — Editorial',
    img: 'https://images.unsplash.com/photo-1520975922323-0f5a1a7f0ebf?q=80&w=1400&auto=format&fit=crop',
    link: '#',
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-[#0C0C41] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'Clash Display, IBM Plex Sans, IBM Plex Sans Arabic, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}
            >
              Selected Work
            </h2>
            <p className="mt-3 text-white/70">A snapshot of recent productions and campaigns.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#FF009F] px-5 py-2.5 font-medium hover:opacity-90 transition">
            Start a Project
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative block overflow-hidden rounded-2xl">
              <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{p.title}</p>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20"><Play size={16} /></button>
                  <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20"><ExternalLink size={16} /></button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
