/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import HackerLoader from "./components/HackerLoader";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Only show loader once per session if possible, or every time for presentation
    // For "class presentation" purpose, showing it every time is better
    setShowLoader(true);
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
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <HackerLoader key="loader" onComplete={() => setShowLoader(false)} />
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoader ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="min-h-screen bg-[#050505] text-gray-300 font-mono relative overflow-hidden selection:bg-green-500/30"
      >
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
            <span className="text-green-500 font-bold text-lg tracking-wider">AP(Ayushman Prajapati)</span>
          </div>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-gray-400 whitespace-nowrap">
            <a href="#about" className="hover:text-green-400 transition-colors">./about</a>
            <button onClick={() => setIsTerminalOpen(true)} className="hover:text-green-400 transition-colors cursor-pointer">./terminal</button>
            <a href="#skills" className="hover:text-green-400 transition-colors">./skills</a>
            <a href="#projects" className="hover:text-green-400 transition-colors">./projects</a>
            <a href="#training" className="hover:text-green-400 transition-colors">./training</a>
            <a href="#certs" className="hover:text-green-400 transition-colors">./certs</a>
            <a href="#achievements" className="hover:text-green-400 transition-colors">./achievements</a>
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
              <div className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-green-500/30 transition-colors">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2"><Code className="w-5 h-5" /> Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "C++", "Java", "Bash (Basics)"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded text-gray-300 text-sm">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-green-500/30 transition-colors">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2"><Server className="w-5 h-5" /> Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {["Metasploit", "Django"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded text-gray-300 text-sm">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-green-500/30 transition-colors">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2"><Terminal className="w-5 h-5" /> Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Nmap", "Wireshark", "Burp Suite", "Kali Linux"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded text-gray-300 text-sm">{skill}</span>
                  ))}
                </div>
              </div>

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

          {/* CERTIFICATIONS SECTION */}
          <section id="certs" className="space-y-8 z-20 relative scroll-mt-32">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold text-white"><span className="text-green-500">#</span> Certifications</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="bg-[#111]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 flex flex-col hover:border-blue-500/50 transition-all group hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-b from-blue-900/40 via-blue-800/20 to-[#111] flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative group-hover:scale-110 transition-transform duration-500 flex flex-col items-center gap-2">
                    <svg viewBox="0 0 200 60" className="w-40 h-auto">
                      <rect x="10" y="5" width="50" height="50" rx="5" fill="#2563eb" opacity="0.8"/>
                      <text x="35" y="38" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="Arial, sans-serif">N</text>
                      <text x="130" y="40" textAnchor="middle" fill="#60a5fa" fontSize="28" fontWeight="bold" fontFamily="Arial, sans-serif">NPTEL</text>
                    </svg>
                    <span className="text-blue-400/60 text-[10px] tracking-widest uppercase">National Programme on Technology Enhanced Learning</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-bold text-white text-base mb-2 leading-snug">Ethical Hacking</h4>
                  <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">NPTEL</p>
                  <p className="text-xs text-gray-400 leading-relaxed flex-1">Comprehensive course covering ethical hacking methodologies, vulnerability assessment, and penetration testing fundamentals.</p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-800">
                    <span className="text-xs text-gray-500 font-mono flex items-center gap-1.5"><Calendar className="w-3 h-3" />Nov 2025</span>
                    <span className="px-2 py-0.5 text-[10px] border rounded-full font-bold uppercase tracking-wider bg-blue-500/10 border-blue-500/30 text-blue-400">Verified</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#111]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 flex flex-col hover:border-cyan-500/50 transition-all group hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-b from-blue-600/30 via-cyan-900/20 to-[#111] flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png"
                      alt="Infosys"
                      className="h-14 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-bold text-white text-base mb-2 leading-snug">Ethical Hacking Masterclass</h4>
                  <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">INFOSYS</p>
                  <p className="text-xs text-gray-400 leading-relaxed flex-1">Advanced ethical hacking techniques including network exploitation, web application security, and social engineering.</p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-800">
                    <span className="text-xs text-gray-500 font-mono flex items-center gap-1.5"><Calendar className="w-3 h-3" />July 2025</span>
                    <span className="px-2 py-0.5 text-[10px] border rounded-full font-bold uppercase tracking-wider bg-cyan-500/10 border-cyan-500/30 text-cyan-400">Verified</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#111]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 flex flex-col hover:border-blue-400/50 transition-all group hover:shadow-[0_0_25px_rgba(96,165,250,0.15)]"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-b from-blue-700/30 via-indigo-900/20 to-[#111] flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative group-hover:scale-110 transition-transform duration-500 flex items-center gap-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/600px-Coursera-Logo_600x600.svg.png"
                      alt="Coursera"
                      className="h-12 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    />
                    <div className="flex items-center gap-1">
                      <svg viewBox="0 0 48 48" className="w-8 h-8">
                        <circle cx="24" cy="24" r="20" fill="none" stroke="#4285f4" strokeWidth="4"/>
                        <path d="M12 24 L20 32 L36 16" fill="none" stroke="#34a853" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-blue-400 text-xs font-bold">Google</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-bold text-white text-base mb-2 leading-snug">The Bits and Bytes of Computer Networking</h4>
                  <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">GOOGLE (COURSERA)</p>
                  <p className="text-xs text-gray-400 leading-relaxed flex-1">Deep dive into networking fundamentals, TCP/IP, DNS, DHCP, and network troubleshooting methods.</p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-800">
                    <span className="text-xs text-gray-500 font-mono flex items-center gap-1.5"><Calendar className="w-3 h-3" />Sep 2024</span>
                    <span className="px-2 py-0.5 text-[10px] border rounded-full font-bold uppercase tracking-wider bg-blue-500/10 border-blue-400/30 text-blue-400">Verified</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ACHIEVEMENTS SECTION */}
          <section id="achievements" className="space-y-8 z-20 relative scroll-mt-32">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold text-white"><span className="text-green-500">#</span> Achievements</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#111]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 flex flex-col hover:border-green-500/50 transition-all group hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]"
              >
                <div className="relative h-52 overflow-hidden bg-gradient-to-b from-green-900/30 via-emerald-900/10 to-[#111] flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                  <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="w-28 h-28 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                      <path d="M35 25h50v5h15v20c0 10-8 18-18 18h-2c-3 8-10 14-20 16v11h15v5H45v-5h15V84c-10-2-17-8-20-16h-2c-10 0-18-8-18-18V28h15v-3z" fill="#22c55e" opacity="0.9"/>
                      <path d="M42 30h36v30c0 12-8 20-18 20s-18-8-18-20V30z" fill="#111" stroke="#22c55e" strokeWidth="2"/>
                      <path d="M50 45l5-4 5 4-2-6 5-4h-6l-2-6-2 6h-6l5 4-2 6z" fill="#22c55e"/>
                      <text x="60" y="72" textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="monospace" fontWeight="bold">CTF</text>
                      <path d="M32 30h-10v18c0 8 6 14 13 14h2" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.5"/>
                      <path d="M88 30h10v18c0 8-6 14-13 14h-2" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.5"/>
                      <rect x="45" y="95" width="30" height="5" rx="2" fill="#22c55e" opacity="0.7"/>
                      <rect x="40" y="98" width="40" height="4" rx="2" fill="#22c55e" opacity="0.5"/>
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-green-500/20 border border-green-500/40 text-green-400 rounded-full text-xs font-bold backdrop-blur-sm flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" /> 4th Place
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-white flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-500 shrink-0" /> CTF Competition
                    </h4>
                    <span className="text-xs text-gray-500 font-mono flex items-center gap-1.5 whitespace-nowrap"><Calendar className="w-3 h-3" /> Mar 2025</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">Ranked <span className="text-green-400 font-bold">4th out of 100 teams</span> (4 participants per team) in a highly competitive cybersecurity Capture the Flag event. Demonstrated expertise in cryptography, reverse engineering, and web exploitation challenges.</p>
                  <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-gray-800">
                    {["Cryptography", "Reverse Engineering", "Web Exploitation", "Forensics"].map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-gray-900 border border-gray-700 text-gray-300 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#111]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 flex flex-col hover:border-amber-500/50 transition-all group hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]"
              >
                <div className="relative h-52 overflow-hidden bg-gradient-to-b from-green-600/20 via-lime-900/10 to-[#111] flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #84cc16 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative group-hover:scale-110 transition-transform duration-500 flex flex-col items-center gap-2">
                    <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-[0_0_15px_rgba(132,204,22,0.4)]">
                      <ellipse cx="50" cy="50" rx="35" ry="40" fill="#58cc02"/>
                      <ellipse cx="38" cy="40" rx="12" ry="14" fill="white"/>
                      <ellipse cx="62" cy="40" rx="12" ry="14" fill="white"/>
                      <circle cx="40" cy="40" r="6" fill="#111"/>
                      <circle cx="64" cy="40" r="6" fill="#111"/>
                      <circle cx="42" cy="38" r="2" fill="white"/>
                      <circle cx="66" cy="38" r="2" fill="white"/>
                      <ellipse cx="50" cy="56" rx="7" ry="5" fill="#fbbf24"/>
                      <ellipse cx="30" cy="60" rx="5" ry="3" fill="#46a302" transform="rotate(-20,30,60)"/>
                      <ellipse cx="70" cy="60" rx="5" ry="3" fill="#46a302" transform="rotate(20,70,60)"/>
                    </svg>
                    <span className="text-lime-400 text-lg font-bold tracking-wider">Duolingo</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-amber-500/20 border border-amber-500/40 text-amber-400 rounded-full text-xs font-bold backdrop-blur-sm flex items-center gap-1.5">
                      🔥 365+ Days
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-white flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-amber-500 shrink-0" /> Learning Streak
                    </h4>
                    <span className="text-xs text-gray-500 font-mono flex items-center gap-1.5 whitespace-nowrap"><Calendar className="w-3 h-3" /> Jan 2025 - Present</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">Consistently progressing in Spanish on Duolingo with an ongoing rigorous daily commitment of <span className="text-amber-400 font-bold">365+ consecutive days</span>. This streak demonstrates discipline, consistency, and a passion for continuous learning.</p>
                  <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-gray-800">
                    {["Discipline", "Consistency", "Language Learning", "Daily Practice"].map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-gray-900 border border-gray-700 text-gray-300 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
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
      </motion.div>
    </>
  );
}