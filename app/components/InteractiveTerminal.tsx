"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface Log {
  type: 'input' | 'output' | 'error';
  text: string;
}

const InteractiveTerminal = () => {
  const [logs, setLogs] = useState<Log[]>([
    { type: 'output', text: 'Welcome to ayushman.dev secure terminal. Type "help" or "ayushman --help" to view available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let responseText = '';
    let responseType: 'output' | 'error' = 'output';

    if (!trimmed) return;

    if (trimmed === 'clear') {
      setLogs([]);
      return;
    }

    if (trimmed === 'help' || trimmed === '--help' || trimmed === 'ayushman --help') {
      responseText = `
Available Commands:
- whoami       : Fetch identity information
- skills       : Display active skill modules
- projects     : List deployed operations
- contact      : Show connection endpoints
- clear        : Clear terminal output
- sudo rm -rf /: [ACCESS DENIED]
`;
    } else if (trimmed === 'whoami') {
      responseText = `Ayushman Prajapati\nCybersecurity Enthusiast | Security Researcher\nCurrently securing systems and discovering zero-days.`;
    } else if (trimmed === 'skills') {
      responseText = `Languages: Python, C++, Java, Bash\nFrameworks: Metasploit, Django\nTools: Nmap, Wireshark, Burp Suite, Kali Linux`;
    } else if (trimmed === 'projects') {
      responseText = `1. Obscura - Steganography & Data Hiding Tool (LSB Encoding)\n2. WatchDog - Web Vulnerability Scanner (OWASP Top 10)`;
    } else if (trimmed === 'contact') {
      responseText = `Email: ayushmanprajapati@gmail.com\nMobile: +91-7976937002\nGitHub: https://github.com/Ayushman-Prajapati\nLinkedIn: https://linkedin.com/in/ayushman--prajapati/`;
    } else if (trimmed === 'sudo rm -rf /' || trimmed === 'sudo rm -rf /*') {
        responseText = `ayushman is not in the sudoers file. This incident will be reported.`;
        responseType = 'error';
    } else {
      responseText = `Command not found: ${trimmed}. Type "help" for a list of commands.`;
      responseType = 'error';
    }

    setLogs(prev => [
      ...prev,
      { type: 'input', text: `visitor@ayushman.dev:~$ ${cmd}` },
      { type: responseType, text: responseText }
    ]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#0a0a0a] rounded-lg border border-gray-800 shadow-[0_0_20px_rgba(34,197,94,0.1)] overflow-hidden font-mono text-sm sm:text-base">
      <div className="bg-[#111] px-4 py-2 flex items-center gap-2 border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex-1 text-center text-gray-400 text-xs flex items-center justify-center gap-2">
          <TerminalIcon className="w-3 h-3" />
          <span>visitor@ayushman.dev : ~</span>
        </div>
      </div>
      
      <div className="p-4 h-[300px] overflow-y-auto bg-black/50 text-green-400 font-mono flex flex-col gap-2">
        {logs.map((log, index) => (
          <div key={index} className={log.type === 'error' ? 'text-red-400' : 'text-green-400'}>
            {log.type === 'input' ? (
              <span className="text-gray-300">{log.text}</span>
            ) : (
              <pre className="whitespace-pre-wrap font-mono m-0">{log.text}</pre>
            )}
          </div>
        ))}
        <form onSubmit={onSubmit} className="flex gap-2 mt-2">
          <span className="text-green-500 shrink-0">visitor@ayushman.dev:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none text-gray-300 shadow-none focus:ring-0"
            autoComplete="off"
            spellCheck="false"
            autoFocus
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default InteractiveTerminal;
