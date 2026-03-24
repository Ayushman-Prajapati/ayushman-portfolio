"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';

interface Log {
  type: 'input' | 'output' | 'error';
  text: string;
}

interface InteractiveTerminalProps {
  onClose?: () => void;
}

const InteractiveTerminal = ({ onClose }: InteractiveTerminalProps) => {
  const [logs, setLogs] = useState<Log[]>([
    { type: 'output', text: 'Welcome to AP(Ayushman Prajapati) secure terminal. Type "help" or "ayushman --help" to view available commands.' }
  ]);
  const [input, setInput] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let responseText = '';
    let responseType: 'output' | 'error' = 'output';

    if (!trimmed) return;

    if (trimmed === 'clear') {
      setLogs([]);
      return;
    }

    if (trimmed === 'exit' && onClose) {
      onClose();
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
- exit         : Close the terminal session
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
      { type: 'input', text: `visitor@ayushman.prajapati:~$ ${cmd}` },
      { type: responseType, text: responseText }
    ]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col font-mono text-sm md:text-base animate-in fade-in zoom-in-95 duration-200">
      <div className="bg-[#111] px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <div className="flex gap-2 w-16">
          <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 focus:outline-none flex items-center justify-center group" aria-label="Close">
             <X className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-black" />
          </button>
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 border border-green-600/50 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
        </div>
        <div className="flex-1 text-center text-gray-400 text-sm flex items-center justify-center gap-2">
          <TerminalIcon className="w-4 h-4" />
          <span>visitor@ayushman.prajapati : ~</span>
        </div>
        <div className="w-16 flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div 
        ref={containerRef} 
        className="flex-1 p-4 md:p-8 overflow-y-auto text-green-400 font-mono flex flex-col gap-2"
        onClick={() => {
           const input = document.getElementById('terminal-input');
           if (input) input.focus();
        }}
      >
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
          <span className="text-green-500 shrink-0">visitor@ayushman.prajapati:~$</span>
          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none text-gray-300 shadow-none focus:ring-0"
            autoComplete="off"
            spellCheck="false"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
