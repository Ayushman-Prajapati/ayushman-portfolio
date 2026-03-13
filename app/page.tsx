
export default function Home() {
  return (
    <main
      style={{
        background: "#0f172a",
        color: "#e2e8f0",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 60px",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <h2 style={{ color: "#22c55e" }}>Ayushman.dev</h2>

        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#training">Training</a>
          <a href="#certificates">Certificates</a>
          <a href="#education">Education</a>
        </div>
      </nav>


      {/* HERO / PROFILE */}
      <section
        style={{
          padding: "60px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <img
          src="/profile.jpg"
          alt="profile"
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            border: "3px solid #22c55e",
          }}
        />

        <div>
          <h1 style={{ fontSize: "40px" }}>Ayushman Prajapati</h1>

          <p style={{ color: "#22c55e" }}>
            Cybersecurity Enthusiast | Security Research
          </p>

          <p style={{ maxWidth: "600px" }}>
            Passionate about vulnerability research, penetration testing,
            and building Python-based security tools.
          </p>

          <div style={{ marginTop: "12px", display: "flex", gap: "20px" }}>
            <a
              href="https://github.com/Ayushman-Prajapati"
              target="_blank"
              style={{ color: "#60a5fa", fontWeight: "bold" }}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ayushman--prajapati/"
              target="_blank"
              style={{ color: "#38bdf8", fontWeight: "bold" }}
            >
              LinkedIn
            </a>

            <a
              href="mailto:ayushmanprajapati@gmail.com"
              style={{ color: "#22c55e", fontWeight: "bold" }}
            >
              Email
            </a>
          </div>
        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" style={{ padding: "60px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>Skills</h2>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          {[
            "Python",
            "C++",
            "Java",
            "Bash",
            "Metasploit",
            "Django",
            "Nmap",
            "Wireshark",
            "Burp Suite",
            "Kali Linux",
          ].map((skill) => (
            <span
              key={skill}
              style={{
                background: "#1e293b",
                padding: "10px 15px",
                borderRadius: "8px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" style={{ padding: "60px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
          }}
        >
          {/* PROJECT 1 */}
          <div
            style={{
              background: "#1e293b",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img src="/obscura.png" style={{ width: "100%" }} />

            <div style={{ padding: "20px" }}>
              <h3>Obscura Steganography Tool</h3>

              <p>
                Multi-format steganography tool hiding secret data inside
                images, audio, and video using LSB encoding.
              </p>

              <a
                href="https://github.com/Ayushman-Prajapati/Obscura"
                target="_blank"
                style={{ color: "#22c55e" }}
              >
                View GitHub →
              </a>
            </div>
          </div>


          {/* PROJECT 2 */}
          <div
            style={{
              background: "#1e293b",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img src="/watchdog.png" style={{ width: "100%" }} />

            <div style={{ padding: "20px" }}>
              <h3>WatchDog Vulnerability Scanner</h3>

              <p>
                Python-based vulnerability scanner detecting OWASP Top 10
                security issues.
              </p>

              <a
                href="https://github.com/Ayushman-Prajapati"
                target="_blank"
                style={{ color: "#22c55e" }}
              >
                View GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* TRAINING */}
      <section id="training" style={{ padding: "60px" }}>
        <h2 style={{ fontSize: "30px" }}>Training</h2>

        <p>Cybersecurity & Ethical Hacking — Techvanto Academy</p>

        <ul>
          <li>SQL Injection, XSS, Malware, Phishing</li>
          <li>Penetration testing using Nmap, Metasploit</li>
          <li>Network traffic analysis with Wireshark</li>
        </ul>
      </section>


      {/* CERTIFICATES */}
      <section id="certificates" style={{ padding: "60px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Certificates
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {/* CERTIFICATE 1 */}
          <div
            style={{
              background: "#1e293b",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img src="/nptel.png" style={{ width: "100%" }} />

            <div style={{ padding: "15px" }}>
              <h4>Ethical Hacking – NPTEL</h4>

              <a href="#" style={{ color: "#22c55e" }}>
                Verify Certificate →
              </a>
            </div>
          </div>


          {/* CERTIFICATE 2 */}
          <div
            style={{
              background: "#1e293b",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img src="/infosys.png" style={{ width: "100%" }} />

            <div style={{ padding: "15px" }}>
              <h4>Ethical Hacking Masterclass – Infosys</h4>

              <a href="#" style={{ color: "#22c55e" }}>
                Verify Certificate →
              </a>
            </div>
          </div>


          {/* CERTIFICATE 3 */}
          <div
            style={{
              background: "#1e293b",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img src="/coursera.png" style={{ width: "100%" }} />

            <div style={{ padding: "15px" }}>
              <h4>Google Networking – Coursera</h4>

              <a href="#" style={{ color: "#22c55e" }}>
                Verify Certificate →
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ACHIEVEMENTS */}
      <section style={{ padding: "60px" }}>
        <h2 style={{ fontSize: "30px" }}>Achievements</h2>

        <ul>
          <li>4th Rank in Cybersecurity CTF Competition</li>
          <li>365+ Day Learning Streak on Duolingo</li>
        </ul>
      </section>


      {/* EDUCATION */}
      <section id="education" style={{ padding: "60px" }}>
        <h2 style={{ fontSize: "30px" }}>Education</h2>

        <p>Lovely Professional University — B.Tech Computer Science (CGPA 8.7)</p>

        <p>RPS Public School — Intermediate (92%)</p>

        <p>RPS Public School — Matriculation (86%)</p>
      </section>
    </main>
  );
}