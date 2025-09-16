import React from "react";
import { HashRouter, Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 grid place-items-center shadow-md">
      <span className="text-white font-bold">HC</span>
    </div>
    <span className="font-semibold text-lg">HealthCare</span>
  </Link>
);

const NavBar = () => {
  const linkBase = "px-3 py-2 rounded-xl text-sm font-medium transition";
  const linkActive = "bg-emerald-50 text-emerald-700";
  const linkIdle = "text-slate-600 hover:bg-slate-50";
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={({isActive})=>`${linkBase} ${isActive?linkActive:linkIdle}`}>Home</NavLink>
            <NavLink to="/services" className={({isActive})=>`${linkBase} ${isActive?linkActive:linkIdle}`}>Services</NavLink>
            <NavLink to="/doctors" className={({isActive})=>`${linkBase} ${isActive?linkActive:linkIdle}`}>Doctors</NavLink>
            <NavLink to="/about" className={({isActive})=>`${linkBase} ${isActive?linkActive:linkIdle}`}>About Us</NavLink>
            <NavLink to="/contact" className={({isActive})=>`${linkBase} ${isActive?linkActive:linkIdle}`}>Contact</NavLink>
          </nav>
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer p-2 rounded-xl hover:bg-slate-50">
                <span className="sr-only">Open menu</span>
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              </summary>
              <div className="absolute right-0 mt-2 w-56 rounded-2xl border bg-white shadow-lg p-2 flex flex-col">
                <Link className={`${linkBase} ${linkIdle}`} to="/">Home</Link>
                <Link className={`${linkBase} ${linkIdle}`} to="/services">Services</Link>
                <Link className={`${linkBase} ${linkIdle}`} to="/doctors">Doctors</Link>
                <Link className={`${linkBase} ${linkIdle}`} to="/about">About Us</Link>
                <Link className={`${linkBase} ${linkIdle}`} to="/contact">Contact</Link>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
};

const Footer = () => (
  <footer className="mt-20 border-t bg-slate-50">
    <Container>
      <div className="py-8 grid gap-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="text-sm text-slate-600 mt-3">Compassionate care powered by modern technology. Book appointments, view specialists, and get in touch — all in one place.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:underline" to="/services">Our Services</Link></li>
            <li><Link className="hover:underline" to="/doctors">Meet the Doctors</Link></li>
            <li><Link className="hover:underline" to="/about">About Us</Link></li>
            <li><Link className="hover:underline" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-slate-600">123 Wellness Ave, Suite 200<br/>MediCity, NY 10001</p>
          <p className="text-sm text-slate-600 mt-2">(555) 123-4567<br/>care@healthcare.example</p>
        </div>
      </div>
      <div className="py-6 text-xs text-slate-500 border-t">© {new Date().getFullYear()} HealthCare Clinic. All rights reserved.</div>
    </Container>
  </footer>
);

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-50 to-cyan-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 py-16 items-center">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Care you trust, access you deserve.</h1>
              <p className="mt-4 text-slate-600 text-lg">Book appointments, consult trusted doctors, and manage your health — from anywhere.</p>
              <div className="mt-6 flex gap-3">
                <button onClick={()=>navigate('/contact')} className="px-5 py-3 rounded-2xl bg-emerald-600 text-white font-medium shadow hover:shadow-md">Book an Appointment</button>
                <Link to="/services" className="px-5 py-3 rounded-2xl border font-medium hover:bg-white">Explore Services</Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  {k:"Patients served", v:"25k+"},
                  {k:"Specialists", v:"40+"},
                  {k:"Avg. rating", v:"4.9/5"},
                ].map((stat)=> (
                  <div key={stat.k} className="rounded-2xl border bg-white p-4">
                    <div className="text-2xl font-bold">{stat.v}</div>
                    <div className="text-xs text-slate-600">{stat.k}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}}>
              <div className="relative">
                <div className="absolute inset-0 blur-3xl bg-emerald-200/40 rounded-[2rem]"/>
                <div className="relative rounded-[2rem] border bg-white p-6 shadow-xl">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {t:"General Medicine", d:"Primary care for everyday health."},
                      {t:"Cardiology", d:"Heart health diagnostics & care."},
                      {t:"Dermatology", d:"Skin, hair & nail treatments."},
                      {t:"Pediatrics", d:"Dedicated care for children."},
                      {t:"Orthopedics", d:"Bones, joints & sports injuries."},
                      {t:"Telehealth", d:"Virtual visits from home."},
                    ].map((svc)=> (
                      <div key={svc.t} className="rounded-2xl border p-4">
                        <div className="font-semibold">{svc.t}</div>
                        <div className="text-sm text-slate-600">{svc.d}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">Why choose HealthCare?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {t:"Top-rated doctors", d:"All physicians are board-certified and patient-reviewed."},
              {t:"Same-day appointments", d:"Fast scheduling with online check-in."},
              {t:"Insurance friendly", d:"We accept major plans and offer transparent pricing."},
            ].map((f)=> (
              <div key={f.t} className="rounded-2xl border p-6 bg-white">
                <div className="text-lg font-semibold">{f.t}</div>
                <p className="mt-2 text-sm text-slate-600">{f.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

const Services = () => (
  <Container>
    <div className="py-12">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p className="mt-2 text-slate-600">Comprehensive care across multiple specialties.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {t:"Annual Checkups", d:"Preventive exams, screenings and labs."},
          {t:"Chronic Care", d:"Diabetes, hypertension, asthma and more."},
          {t:"Women's Health", d:"OB/GYN, fertility counseling and wellness."},
          {t:"Men's Health", d:"Screenings, urology, and lifestyle support."},
          {t:"Mental Health", d:"Therapy & psychiatry with compassionate experts."},
          {t:"Imaging & Labs", d:"On-site diagnostics with quick results."},
        ].map((card)=> (
          <div key={card.t} className="rounded-2xl border bg-white p-6 hover:shadow-md transition">
            <div className="font-semibold">{card.t}</div>
            <p className="text-sm text-slate-600 mt-2">{card.d}</p>
            <button className="mt-4 text-emerald-700 text-sm font-medium">Learn more →</button>
          </div>
        ))}
      </div>
    </div>
  </Container>
);

const Doctors = () => (
  <Container>
    <div className="py-12">
      <h1 className="text-3xl font-bold">Meet Our Doctors</h1>
      <p className="mt-2 text-slate-600">Experienced, friendly, and focused on your health.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {n:"Dr. Alicia Nguyen, MD", s:"Cardiology", bl:"Heart rhythm & preventive cardiology."},
          {n:"Dr. Omar Patel, DO", s:"Family Medicine", bl:"Whole-person care for all ages."},
          {n:"Dr. Sofia Marin, PhD", s:"Behavioral Health", bl:"Therapy for anxiety & depression."},
          {n:"Dr. Lucas Romero, MD", s:"Orthopedics", bl:"Sports injuries & joint care."},
          {n:"Dr. Priya Iyer, MD", s:"Dermatology", bl:"Medical & cosmetic dermatology."},
          {n:"Dr. Chen Li, MD", s:"Pediatrics", bl:"Compassionate child-focused care."},
        ].map((doc)=> (
          <div key={doc.n} className="rounded-2xl border bg-white p-6">
            <div className="h-28 w-28 rounded-full bg-gradient-to-br from-slate-200 to-slate-100" />
            <div className="mt-4 font-semibold">{doc.n}</div>
            <div className="text-sm text-emerald-700">{doc.s}</div>
            <p className="text-sm text-slate-600 mt-1">{doc.bl}</p>
            <button className="mt-4 text-sm font-medium text-emerald-700">View profile →</button>
          </div>
        ))}
      </div>
    </div>
  </Container>
);

const About = () => (
  <Container>
    <div className="py-12">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-3 text-slate-700 max-w-3xl">
        HealthCare Clinic is a modern multi-specialty practice dedicated to accessible, patient‑first medicine. Our mission is to provide
        high-quality care through board‑certified physicians, evidence‑based treatments, and technology that makes healthcare simpler.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border p-6 bg-white">
          <div className="font-semibold">Our Mission</div>
          <p className="text-sm text-slate-600 mt-2">Deliver compassionate, evidence‑based care for every patient, every time.</p>
        </div>
        <div className="rounded-2xl border p-6 bg-white">
          <div className="font-semibold">Our Vision</div>
          <p className="text-sm text-slate-600 mt-2">A world where quality healthcare is timely, transparent, and coordinated.</p>
        </div>
        <div className="rounded-2xl border p-6 bg-white">
          <div className="font-semibold">Our Values</div>
          <ul className="list-disc pl-5 text-sm text-slate-600 mt-2 space-y-1">
            <li>Compassion</li>
            <li>Clinical excellence</li>
            <li>Equity & access</li>
            <li>Integrity & trust</li>
            <li>Privacy & security</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 rounded-2xl border bg-white p-6">
        <h2 className="font-semibold">About this website</h2>
        <p className="text-sm text-slate-600 mt-2">
          This site is designed for clinics and doctors to showcase services, introduce their care team, and let patients get in touch fast.
          It uses a clean, accessible design with responsive layouts, high contrast, keyboard‑friendly navigation, and semantic HTML for screen readers.
        </p>
        <ul className="list-disc pl-5 text-sm text-slate-600 mt-2 space-y-1">
          <li>Pages: Home, Services, Doctors, <strong>About Us</strong>, <strong>Contact</strong></li>
          <li>Built with React + Tailwind classes for styling and Framer Motion for subtle animations.</li>
          <li>Easily extendable: add blog posts, appointment booking, patient portal links, or telehealth chat.</li>
        </ul>
      </div>
    </div>
  </Container>
);

const Contact = () => {
  const [form, setForm] = React.useState({ name: "", email: "", subject: "", message: ""});
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Please add a subject";
    if (!form.message.trim() || form.message.length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
  };

  if (sent) {
    return (
      <Container>
        <div className="py-20 grid place-items-center">
          <div className="max-w-md text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 grid place-items-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h1 className="mt-6 text-2xl font-bold">Message sent!</h1>
            <p className="text-slate-600 mt-2">Thanks for reaching out. Our care team will follow up shortly.</p>
            <Link to="/" className="inline-block mt-6 px-5 py-3 rounded-2xl bg-emerald-600 text-white font-medium">Back to Home</Link>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-12 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-3 text-slate-600">Have a question or need to book an appointment? Send us a message and we’ll get back to you.</p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your full name" />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@example.com" />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Subject</label>
              <input value={form.subject} onChange={(e)=>setForm({...form, subject:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="How can we help?" />
              {errors.subject && <p className="text-sm text-red-600 mt-1">{errors.subject}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea rows={5} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tell us a bit about your needs" />
              {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="px-5 py-3 rounded-2xl bg-emerald-600 text-white font-medium">Send Message</button>
          </form>
        </div>
        <div>
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="font-semibold">Clinic Information</h2>
            <p className="text-sm text-slate-600 mt-2">123 Wellness Ave, Suite 200<br/>MediCity, NY 10001</p>
            <p className="text-sm text-slate-600 mt-2">Phone: (555) 123-4567<br/>Email: care@healthcare.example</p>
            <div className="mt-4 rounded-xl border overflow-hidden">
              <div className="w-full aspect-video bg-slate-100 grid place-items-center text-slate-500 text-sm">Map placeholder</div>
            </div>
            <p className="text-xs text-slate-500 mt-2">Embed a real map (Google Maps or OpenStreetMap) in production.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const NotFound = () => (
  <Container>
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-slate-600 mt-2">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="inline-block mt-6 px-5 py-3 rounded-2xl bg-emerald-600 text-white font-medium">Go home</Link>
    </div>
  </Container>
);

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
