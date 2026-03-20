/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Shield,
  Code,
  Lock,
  Network,
  Server,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Award,
  BookOpen,
  Calendar,
  Briefcase,
  Users,
  Brain
} from "lucide-react";
import NetworkNodes from "./components/NetworkNodes";
import InteractiveTerminal from "./components/InteractiveTerminal";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const name = "Ayushman Prajapati";

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-mono relative overflow-hidden selection:bg-green-500/30">
      {/* Animated Network Nodes Background */}
      <NetworkNodes />
      
      {/* Fallback Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-green-500/20 px-4 sm:px-8 py-4 flex justify-between items-center overflow-x-auto">
        <div className="flex items-center gap-2 flex-shrink-0 mr-4">
          <Terminal className="text-green-500 w-6 h-6 animate-pulse" />
          <span className="text-green-500 font-bold text-lg tracking-wider">~/ayushman.dev</span>
        </div>
        <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-gray-400 whitespace-nowrap">
          <a href="#about" className="hover:text-green-400 transition-colors">./about</a>
          <button onClick={() => setIsTerminalOpen(true)} className="hover:text-green-400 transition-colors cursor-pointer">./terminal</button>
          <a href="#skills" className="hover:text-green-400 transition-colors">./skills</a>
          <a href="#projects" className="hover:text-green-400 transition-colors">./projects</a>
          <a href="#training" className="hover:text-green-400 transition-colors">./training</a>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col gap-32">
        {/* HERO SECTION */}
        <section id="about" className="flex flex-col md:flex-row gap-12 items-center min-h-[70vh] scroll-mt-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-green-500 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-green-500/50 p-1 bg-[#050505] overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <img
                  src="/profile.jpg"
                  alt="Ayushman Prajapati"
                  className="w-full h-full object-cover object-top rounded-full hover:scale-105 transition-transform duration-700 scale-[0.95]"
                />
              </div>
              {/* Scanline overlay for the photo */}
              <div className="absolute inset-0 rounded-full opacity-10 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent h-12 w-full animate-scanline"></div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <span className="text-green-500 text-sm font-bold flex items-center gap-2">
                <Shield className="w-4 h-4" /> Security Clearance Level: MAXIMUM
              </span>
              <motion.h1 
                variants={typewriterVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-6xl font-bold text-white tracking-tight flex flex-wrap"
              >
                {name.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              <h2 className="text-xl md:text-2xl text-green-400 font-semibold animate-pulse">
                Cybersecurity Enthusiast & Security Researcher
              </h2>
            </div>

            <p className="text-gray-300 font-medium max-w-xl text-lg leading-relaxed bg-[#0a0a0a]/50 p-4 rounded-lg border border-gray-800 backdrop-blur-sm">
              Passionate about vulnerability research, penetration testing, and building Python-based security tools. Dedicated to securing systems, discovering vulnerabilities, and continuously expanding my technical arsenal.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://github.com/Ayushman-Prajapati" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] hover:bg-gray-800 border border-gray-700 rounded-md text-white transition-all hover:border-green-500 hover:shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ayushman--prajapati/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] hover:bg-gray-800 border border-gray-700 rounded-md text-white transition-all hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:ayushmanprajapati@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/50 rounded-md text-green-400 transition-all hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a href="tel:+917976937002" className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] hover:bg-gray-800 border border-gray-700 rounded-md text-white transition-all hover:border-green-500 hover:shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                <Phone className="w-5 h-5" />
                <span>Mobile</span>
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-8 scroll-mt-32">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white"><span className="text-green-500">#</span> Technical_Skills</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <div className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-green-500/30 transition-colors">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2"><Code className="w-5 h-5" /> Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C++", "Java", "Bash (Basics)"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded text-gray-300 text-sm">{skill}</span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-green-500/30 transition-colors">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2"><Server className="w-5 h-5" /> Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["Metasploit", "Django"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded text-gray-300 text-sm">{skill}</span>
                ))}
              </div>
            </div>

            {/* Tools/Platforms */}
            <div className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-green-500/30 transition-colors">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2"><Terminal className="w-5 h-5" /> Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {["Nmap", "Wireshark", "Burp Suite", "Kali Linux"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded text-gray-300 text-sm">{skill}</span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-green-500/30 transition-colors">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2"><Brain className="w-5 h-5" /> Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Analytical Thinking", "Collaborative Teamwork", "Fast Learner"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded text-gray-300 text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8 scroll-mt-32">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white"><span className="text-green-500">#</span> Deployed_Operations</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 flex flex-col hover:border-green-500/50 transition-all group hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
            >
              <div className="relative h-48 overflow-hidden bg-black flex items-center justify-center shrink-0">
                <img src="/obscura.png" alt="Obscura Tool" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Lock className="w-5 h-5 text-green-500 shrink-0" /> Obscura
                    </h3>
                    <p className="text-sm text-green-400 flex items-center gap-1 mt-1"><Calendar className="w-3 h-3"/> Oct 2025</p>
                  </div>
                  <a href="https://github.com/Ayushman-Prajapati/Obscura" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 p-1">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="text-gray-400 text-sm space-y-2 flex-1">
                  <p className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> Implemented a cross-platform steganography tool that conceals secret text or arbitrary files within image, audio, and video media using LSB encoding.</p>
                  <p className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> Architected a modular system with independent media handlers and an intuitive interactive CLI.</p>
                  <p className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> Applied the tool to real-world security contexts such as CTF challenges, covert data storage, and privacy-oriented communication.</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-gray-800">
                  <span className="text-xs text-green-500 font-bold">TECH:</span>
                  <span className="px-2 py-0.5 text-xs bg-gray-900 border border-gray-700 text-gray-300 rounded">Python</span>
                  <span className="px-2 py-0.5 text-xs bg-gray-900 border border-gray-700 text-gray-300 rounded">LSB Steganography</span>
                  <span className="px-2 py-0.5 text-xs bg-gray-900 border border-gray-700 text-gray-300 rounded">CLI</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 flex flex-col hover:border-green-500/50 transition-all group hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
            >
              <div className="relative h-48 overflow-hidden bg-black flex items-center justify-center shrink-0">
                <img src="/watchdog.png" alt="WatchDog Tool" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Network className="w-5 h-5 text-green-500 shrink-0" /> WatchDog
                    </h3>
                    <p className="text-sm text-green-400 flex items-center gap-1 mt-1"><Calendar className="w-3 h-3"/> July 2025</p>
                  </div>
                  <a href="https://github.com/Ayushman-Prajapati" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 p-1">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="text-gray-400 text-sm space-y-2 flex-1">
                  <p className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> Developed an educational web security scanner evaluating target websites for common vulnerabilities aligned with OWASP Top 10.</p>
                  <p className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> Structured scan results to highlight potentially vulnerable endpoints, enabling targeted manual verification.</p>
                  <p className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> Tested the tool on intentionally vulnerable platforms (DVWA, vulnweb.com) demonstrating practical web penetration testing skills.</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-gray-800">
                  <span className="text-xs text-green-500 font-bold">TECH:</span>
                  <span className="px-2 py-0.5 text-xs bg-gray-900 border border-gray-700 text-gray-300 rounded">Python</span>
                  <span className="px-2 py-0.5 text-xs bg-gray-900 border border-gray-700 text-gray-300 rounded">Web Security</span>
                  <span className="px-2 py-0.5 text-xs bg-gray-900 border border-gray-700 text-gray-300 rounded">OWASP Top 10</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TRAINING SECTION */}
        <section id="training" className="space-y-8 z-20 relative scroll-mt-32">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white"><span className="text-green-500">#</span> Training_Logs</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
          </div>

          <div className="bg-[#111]/80 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8 hover:border-green-500/30 transition-all">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 border-b border-gray-800 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-green-500" /> Cybersecurity & Ethical Hacking
                </h3>
                <p className="text-lg text-green-400 mt-1">Techvanto Academy</p>
              </div>
              <span className="text-gray-400 flex items-center gap-2 mt-4 md:mt-0 font-mono text-sm">
                <Calendar className="w-4 h-4" /> June 2025 – July 2025
              </span>
            </div>
            
            <div className="text-gray-300 md:text-lg space-y-3 font-mono text-sm leading-relaxed border-l-2 border-green-500/30 pl-4 bg-[#0a0a0a]/50 py-4 pr-4 rounded">
              <p className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-green-500 mt-0.5 shrink-0"/> Studied major cyber threats and attack vectors including malware, phishing, SQL injection, XSS, and DoS/DDoS attacks.</p>
              <p className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-green-500 mt-0.5 shrink-0"/> Acquired hands-on experience with penetration testing tools and techniques, such as Nmap, Metasploit, Nessus/OpenVAS, WHOIS, DNS enumeration, and Wireshark traffic analysis.</p>
              <p className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-green-500 mt-0.5 shrink-0"/> Learned secure coding and web security principles such as OWASP Top 10, input validation, session management, CSRF protection, and SQL injection prevention.</p>
            </div>
          </div>
        </section>

        {/* CERTIFICATES & ACHIEVEMENTS SECTION */}
        <section id="certs" className="space-y-8 z-20 relative scroll-mt-32">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white"><span className="text-green-500">#</span> Credentials_And_Milestones</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="bg-[#111]/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <h3 className="text-2xl text-green-400 font-bold flex items-center gap-2 mb-6">
                <Award className="w-6 h-6" /> Certifications
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Ethical Hacking", org: "NPTEL", date: "Nov 2025", img: "/nptel.png" },
                  { name: "Ethical Hacking Masterclass", org: "Infosys", date: "July 2025", img: "/infosys.png" },
                  { name: "The Bits and Bytes of Computer Networking", org: "Google (Coursera)", date: "Sep 2024", img: "/coursera.png" }
                ].map((cert, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-[#0a0a0a]/80 border border-gray-800 rounded-lg hover:border-green-500/30 transition-colors">
                    <div className="w-16 h-12 bg-black rounded overflow-hidden flex items-center justify-center shrink-0 border border-gray-700 p-1">
                      <img src={cert.img} alt={cert.org} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{cert.name}</h4>
                      <p className="text-xs text-green-500 mt-1">{cert.org}</p>
                      <p className="text-xs text-gray-500 font-mono mt-1">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-[#111]/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <h3 className="text-2xl text-green-400 font-bold flex items-center gap-2 mb-6">
                <Shield className="w-6 h-6" /> Achievements
              </h3>
              <div className="space-y-6">
                <div className="bg-[#0a0a0a]/80 p-5 border border-gray-800 rounded-lg border-l-2 border-l-green-500">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white">4th Rank in CTF Competition</h4>
                    <span className="text-xs text-gray-500 font-mono">Mar 2025</span>
                  </div>
                  <p className="text-sm text-gray-400">Ranked 4th out of 100 teams (4 participants per team) in a highly competitive cybersecurity Capture the Flag event.</p>
                </div>
                
                <div className="bg-[#0a0a0a]/80 p-5 border border-gray-800 rounded-lg border-l-2 border-l-blue-500">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white">365+ Day Learning Streak</h4>
                    <span className="text-xs text-gray-500 font-mono">Jan 2025 - Present</span>
                  </div>
                  <p className="text-sm text-gray-400">Consistently progressing in Spanish on Duolingo with ongoing rigorous daily commitment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-green-500/20 bg-[#050505]/90 backdrop-blur-md py-8 text-center text-sm text-gray-600 mt-20 relative z-20">
        <p className="font-bold">sys.exit(0) <span className="text-green-500/50">| Designed with security in mind.</span></p>
        <p className="mt-2 text-green-500/30">© {new Date().getFullYear()} Ayushman Prajapati</p>
      </footer>

      {/* Floating Terminal Button */}
      {!isTerminalOpen && (
        <button 
          onClick={() => setIsTerminalOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#0a0a0a] hover:bg-green-500/10 border border-green-500/50 p-4 rounded-full text-green-400 transition-all hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] group overflow-hidden"
          aria-label="Open Terminal"
        >
          <div className="absolute inset-0 bg-green-500/10 scale-0 group-hover:scale-100 transition-transform origin-center rounded-full"></div>
          <Terminal className="w-6 h-6 relative z-10 group-hover:animate-pulse" />
        </button>
      )}

      {/* Fullscreen Terminal Overlay */}
      {isTerminalOpen && (
        <InteractiveTerminal onClose={() => setIsTerminalOpen(false)} />
      )}
    </div>
  );
}