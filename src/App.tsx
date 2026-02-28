/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Database, 
  Globe, 
  Cpu, 
  Layers,
  ChevronRight,
  User,
  Briefcase,
  Wrench
} from "lucide-react";

const projects = [
  {
    title: "QTIFY",
    date: "Nov 2025",
    description: "A professional music streaming application built with React, featuring song discovery and playlist management.",
    demo: null,
    tags: ["React", "Material UI", "Swiper", "Axios"]
  },
  {
    title: "QKart Frontend",
    date: "Oct 2025",
    description: "A full-featured e-commerce frontend with product listings, search, filtering, and a complete checkout flow.",
    demo: "https://qkart-frontend-81ixc0ptw-dharsana-k-das-projects.vercel.app/",
    tags: ["React", "Chakra UI", "REST API", "Responsive Design"]
  },
  {
    title: "XBoard",
    date: "Sep 2025",
    description: "A news aggregation platform that displays top stories from various sources with a clean, grid-based interface.",
    demo: null,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    title: "QTripDynamic",
    date: "Sep 2025",
    description: "A dynamic travel website allowing users to browse destinations, view details, and book adventures.",
    demo: "https://qtrip-dynamic-r4g4nm5jy-dharsana-k-das-projects.vercel.app/",
    tags: ["JavaScript", "DOM Manipulation", "REST API", "Dynamic UI"]
  },
  {
    title: "QTripStatic",
    date: "Aug 2025",
    description: "The static version of the QTrip travel website, focusing on layout, design, and responsive styling.",
    demo: "https://qtrip-static-blue-one.vercel.app/",
    tags: ["HTML", "CSS", "Bootstrap", "Responsive Layout"]
  },
  {
    title: "XCruise",
    date: "Jul 2025",
    description: "A cruise booking landing page designed with a focus on visual appeal and user engagement.",
    demo: null,
    tags: ["HTML", "CSS", "UI/UX"]
  },
  {
    title: "XProfile",
    date: "Jul 2025",
    description: "A professional profile/portfolio page template designed for developers to showcase their work.",
    demo: null,
    tags: ["HTML", "CSS", "Personal Branding"]
  }
];

const skills = [
  { name: "React", icon: <Code2 className="w-5 h-5" /> },
  { name: "JavaScript", icon: <Terminal className="w-5 h-5" /> },
  { name: "HTML/CSS", icon: <Globe className="w-5 h-5" /> },
  { name: "SQL", icon: <Database className="w-5 h-5" /> },
  { name: "REST API", icon: <Layers className="w-5 h-5" /> },
  { name: "Git", icon: <Cpu className="w-5 h-5" /> },
  { name: "Bootstrap", icon: <Layers className="w-5 h-5" /> },
  { name: "Linux", icon: <Terminal className="w-5 h-5" /> },
  { name: "HTTP", icon: <Globe className="w-5 h-5" /> }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl tracking-tight text-emerald-600"
          >
            DKD.
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
          <motion.a 
            href="https://drive.google.com/file/d/1Li6Dn4I3YjFb_k04uNSoJ4H0-15wZZ6l/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-sm"
          >
            Resume
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for new opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Dharsana <br />
                <span className="text-emerald-600">K Das</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                I build industry-grade web applications from scratch. Armed with a diverse technical toolkit, 
                I focus on creating performant, scalable, and user-centric digital experiences.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/dharsanakdas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all text-slate-600 hover:text-emerald-600"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/dharsana-k-das" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all text-slate-600 hover:text-emerald-600"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:dharsanakdas@gmail.com" 
                  className="p-3 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all text-slate-600 hover:text-emerald-600"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-2xl overflow-hidden flex items-center justify-center">
                <User className="w-32 h-32 text-white/20" />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Full Stack Developer</div>
                      <div className="text-xs text-slate-500">Crio.Do Certified</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-emerald-500"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <span>Frontend</span>
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">
                <Wrench className="w-4 h-4" />
                Toolkit
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Technical Expertise</h2>
            </div>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
              A comprehensive set of skills acquired through building real-world applications and solving complex problems.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-emerald-100 transition-all group flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-white shadow-sm group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                  {skill.icon}
                </div>
                <span className="font-semibold text-sm text-slate-700">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3">
              <Code2 className="w-4 h-4" />
              Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-md">
                      {project.date}
                    </div>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-600 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border border-slate-100 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2 text-sm font-bold text-slate-600 group-hover:bg-emerald-600 group-hover:text-white transition-all"
                  >
                    View Live Demo
                    <ChevronRight className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Let's build something <br />
              <span className="text-emerald-400">extraordinary</span> together.
            </h2>
            <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:dharsanakdas@gmail.com"
                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/dharsana-k-das"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Dharsana K Das. Built with passion and React.
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="https://github.com/dharsanakdas" className="hover:text-emerald-600 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/dharsana-k-das" className="hover:text-emerald-600 transition-colors">LinkedIn</a>
            <a href="https://x.com/DharsanaD" className="hover:text-emerald-600 transition-colors">X (Twitter)</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
