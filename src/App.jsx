import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="scroll-smooth bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />

        {/* Contact Section */}
        <section id="contact" className="relative bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#0C0C41]"
                  style={{ fontFamily: 'Clash Display, IBM Plex Sans, IBM Plex Sans Arabic, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}
                >
                  Let’s build something cinematic.
                </h2>
                <p className="mt-4 text-[#0C0C41]/70" style={{ fontFamily: 'IBM Plex Sans, IBM Plex Sans Arabic, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
                  Reach out for bookings, estimates, or collaborations.
                </p>

                <div className="mt-8 space-y-4">
                  <a href="mailto:hello@verzoproduction.com" className="flex items-center gap-3 group">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF009F] text-white"><Mail size={18} /></span>
                    <span className="text-[#0C0C41] group-hover:text-[#FF009F] transition-colors">hello@verzoproduction.com</span>
                  </a>
                  <a href="tel:+0000000000" className="flex items-center gap-3 group">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"><Phone size={18} /></span>
                    <span className="text-[#0C0C41] group-hover:text-black/70 transition-colors">+00 000 000 000</span>
                  </a>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2A1EFF] text-white"><MapPin size={18} /></span>
                    <div className="text-[#0C0C41]">
                      <p>Office Location</p>
                      <p className="text-[#0C0C41]/70 text-sm">Add your city, country</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:hello@verzoproduction.com"
                    className="inline-flex items-center gap-2 rounded-full bg-[#FF009F] px-6 py-3 text-white font-medium hover:opacity-90 transition"
                  >
                    Prefer to Email?
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-[#2A1EFF] text-[#2A1EFF] px-6 py-3 font-medium hover:bg-[#2A1EFF] hover:text-white transition"
                  >
                    <Calendar size={18} /> Book a Consultation
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:opacity-90"><Instagram size={18} /></a>
                  <a href="#" aria-label="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2A1EFF] text-white hover:opacity-90"><Twitter size={18} /></a>
                  <a href="#" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0C0C41] text-white hover:opacity-90"><Linkedin size={18} /></a>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-black/5">
                <iframe
                  title="Verzo Studios Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631550454!3d-37.816279742021785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzU4LjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2s!4v1614032931234!5m2!1sen!2s"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#0C0C41]/70">© {new Date().getFullYear()} Verzo Studios. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@verzoproduction.com" className="flex items-center gap-2 text-sm text-[#0C0C41] hover:text-[#FF009F]"><Mail size={16} /> Email</a>
            <a href="tel:+0000000000" className="flex items-center gap-2 text-sm text-[#0C0C41] hover:text-black"><Phone size={16} /> Call</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
