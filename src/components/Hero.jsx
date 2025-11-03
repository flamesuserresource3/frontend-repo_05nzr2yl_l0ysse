import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0C0C41]"
            style={{ fontFamily: 'Clash Display, IBM Plex Sans, IBM Plex Sans Arabic, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}
          >
            Camera-first creative studio crafting premium visuals.
          </h1>
          <p className="mt-6 text-lg text-[#0C0C41]/80" style={{ fontFamily: 'IBM Plex Sans, IBM Plex Sans Arabic, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
            Verzo Studios blends cinematography, design, and technology to deliver bold stories at blazing performance.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF009F] px-6 py-3 text-white font-medium hover:opacity-90 transition"
            >
              See Our Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#2A1EFF] text-[#2A1EFF] px-6 py-3 font-medium hover:bg-[#2A1EFF] hover:text-white transition"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
