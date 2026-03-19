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
  ExternalLink,
  ChevronRight,
  Award,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);

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
    <div className="min-h-screen bg-black text-gray-300 font-mono relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20 px-6 py-4 flex justify-between items-center sm:px-12">
        <div className="flex items-center gap-2">
          <Terminal className="text-green-500 w-6 h-6 animate-pulse" />
          <span className="text-green-500 font-bold text-lg tracking-wider">~/ayushman.dev</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-400">
          <a href="#about" className="hover:text-green-400 transition-colors">./about</a>
          <a href="#skills" className="hover:text-green-400 transition-colors">./skills</a>
          <a href="#projects" className="hover:text-green-400 transition-colors">./projects</a>
          <a href="#certs" className="hover:text-green-400 transition-colors">./certifications</a>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col gap-32">
        {/* HERO SECTION */}
        <section id="about" className="flex flex-col md:flex-row gap-12 items-center min-h-[70vh]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-30 animate-pulse"></div>
            <img
              src="/profile.jpg"
              alt="Ayushman Prajapati"
              className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-2 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            />
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
                className="text-4xl md:text-6xl font-bold text-white tracking-tight flex"
              >
                {name.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              <h2 className="text-xl md:text-2xl text-green-400 font-semibold animate-pulse">
                Cybersecurity Enthusiast | Security Research
              </h2>
            </div>

            <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
              Passionate about vulnerability research, penetration testing, and building Python-based security tools. Dedicating to securing systems and discovering zero-days.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://github.com/Ayushman-Prajapati" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] hover:bg-gray-800 border border-gray-700 rounded-md text-white transition-all hover:border-green-500 hover:shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                <Github w-5 h-5 />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ayushman--prajapati/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] hover:bg-gray-800 border border-gray-700 rounded-md text-white transition-all hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                <Linkedin w-5 h-5 />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:ayushmanprajapati@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/50 rounded-md text-green-400 transition-all hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                <Mail w-5 h-5 />
                <span>Contact_Me</span>
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white"><span className="text-green-500">#</span> Active_Modules</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: "Python", icon: <Code className="w-5 h-5 text-yellow-400" /> },
              { name: "C++", icon: <Code className="w-5 h-5 text-blue-500" /> },
              { name: "Java", icon: <Code className="w-5 h-5 text-red-500" /> },
              { name: "Bash", icon: <Terminal className="w-5 h-5 text-gray-300" /> },
              { name: "Metasploit", icon: <Shield className="w-5 h-5 text-orange-500" /> },
              { name: "Django", icon: <Server className="w-5 h-5 text-green-600" /> },
              { name: "Nmap", icon: <Network className="w-5 h-5 text-blue-400" /> },
              { name: "Wireshark", icon: <Network className="w-5 h-5 text-cyan-400" /> },
              { name: "Burp Suite", icon: <Lock className="w-5 h-5 text-orange-400" /> },
              { name: "Kali Linux", icon: <Terminal className="w-5 h-5 text-blue-300" /> },
            ].map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group p-4 bg-gray-900 border border-gray-800 rounded-lg flex flex-col items-center justify-center gap-3 hover:border-green-500/50 hover:bg-gray-800/80 transition-all"
              >
                {skill.icon}
                <span className="font-semibold text-gray-300 group-hover:text-green-400">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white"><span className="text-green-500">#</span> Deployed_Operations</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all group hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
            >
              <div className="relative h-48 overflow-hidden bg-black flex items-center justify-center">
                <img src="/obscura.png" alt="Obscura Tool" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Lock className="w-5 h-5 text-green-500" /> Obscura
                  </h3>
                  <a href="https://github.com/Ayushman-Prajapati/Obscura" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-400">
                  Multi-format steganography tool hiding secret data inside images, audio, and video using advanced LSB encoding techniques.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2 py-1 text-xs bg-gray-800 text-green-400 rounded">Python</span>
                  <span className="px-2 py-1 text-xs bg-gray-800 text-green-400 rounded">Cryptography</span>
                  <span className="px-2 py-1 text-xs bg-gray-800 text-green-400 rounded">Steganography</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all group hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
            >
              <div className="relative h-48 overflow-hidden bg-black flex items-center justify-center">
                <img src="/watchdog.png" alt="WatchDog Tool" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Network className="w-5 h-5 text-green-500" /> WatchDog
                  </h3>
                  <a href="https://github.com/Ayushman-Prajapati" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-400">
                  Python-based vulnerability scanner engineered for detecting OWASP Top 10 security issues efficiently.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2 py-1 text-xs bg-gray-800 text-green-400 rounded">Python</span>
                  <span className="px-2 py-1 text-xs bg-gray-800 text-green-400 rounded">Security Audit</span>
                  <span className="px-2 py-1 text-xs bg-gray-800 text-green-400 rounded">Scanner</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CERTS & TRAINING */}
        <section id="certs" className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white"><span className="text-green-500">#</span> Credentials</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-xl text-green-400 font-bold flex items-center gap-2">
                <Award className="w-5 h-5" /> Certifications
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Ethical Hacking", org: "NPTEL", img: "/nptel.png" },
                  { name: "Ethical Hacking Masterclass", org: "Infosys", img: "/infosys.png" },
                  { name: "Google Networking", org: "Coursera", img: "/coursera.png" }
                ].map((cert, idx) => (
                  <div key={idx} className="flex gap-4 p-4 border border-gray-800 bg-gray-900/50 rounded-lg hover:border-green-500/30 transition-colors">
                    <div className="w-16 h-12 bg-black rounded overflow-hidden flex items-center justify-center shrink-0 border border-gray-700 p-1">
                      <img src={cert.img} alt={cert.org} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{cert.name}</h4>
                      <p className="text-sm text-gray-500">{cert.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Training & Education */}
            <div className="space-y-6">
              <h3 className="text-xl text-green-400 font-bold flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> Education & Training
              </h3>
              <div className="relative pl-6 border-l border-gray-800 space-y-8">
                
                <div className="relative">
                  <span className="absolute -left-8 w-4 h-4 rounded-full bg-green-500/20 border-2 border-green-500"></span>
                  <h4 className="font-bold text-white text-lg">Cybersecurity & Ethical Hacking</h4>
                  <p className="text-green-500 text-sm mb-2">Techvanto Academy</p>
                  <ul className="text-sm text-gray-400 space-y-1 list-disc pl-4 marker:text-gray-600">
                    <li>SQL Injection, XSS, Malware, Phishing</li>
                    <li>Penetration testing using Nmap, Metasploit</li>
                    <li>Network traffic analysis with Wireshark</li>
                  </ul>
                </div>

                <div className="relative">
                  <span className="absolute -left-8 w-4 h-4 rounded-full bg-gray-800 border-2 border-gray-600"></span>
                  <h4 className="font-bold text-white">B.Tech Computer Science</h4>
                  <p className="text-gray-400 text-sm">Lovely Professional University (CGPA 8.7)</p>
                </div>
                
                <div className="relative">
                  <span className="absolute -left-8 w-4 h-4 rounded-full bg-gray-800 border-2 border-gray-600"></span>
                  <h4 className="font-bold text-white">Intermediate (92%) & Matriculation (86%)</h4>
                  <p className="text-gray-400 text-sm">RPS Public School</p>
                </div>

              </div>

              {/* Achievements */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="font-bold text-white mb-4">Notable Achievements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-400 text-sm">
                    <ChevronRight className="w-4 h-4 text-green-500 mt-0.5" />
                    4th Rank in Cybersecurity CTF Competition
                  </li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm">
                    <ChevronRight className="w-4 h-4 text-green-500 mt-0.5" />
                    365+ Day Learning Streak on Duolingo
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-500/20 bg-black py-8 mt-12 text-center text-sm text-gray-600">
        <p>sys.exit(0) | Designed with security in mind.</p>
        <p className="mt-2 text-green-500/50">© {new Date().getFullYear()} Ayushman Prajapati</p>
      </footer>
    </div>
  );
}