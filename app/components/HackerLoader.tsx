"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BOOT_LOGS = [
  "INITIALIZING AURA_FARMING_PROTOCOL [v4.2.0]...",
  "LOCATING GEOGRAPHICAL_SWAG_COORDINATES... [OK]",
  "SCANNING FOR POTENTIAL_RIZZ_SOURCES... FOUND",
  "ESTABLISHING SECURE_DRIP_TUNNEL...",
  "CALIBRATING CHARISMA_COEFFICIENT... [AUTO]",
  "CONNECTING TO THE_GIGA_HUB...",
  "BYPASSING MID_VIBE_FIREWALL...",
  "OPTIMIZING AURA_REGENERATION_RATE... 100%",
  "DECRYPTING PORTFOLIO_CORE_FILES...",
  "AURA_FARMING_PROTOCOL ACTIVE.",
  "ACCESS GRANTED."
]

export default function HackerLoader({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let currentLogIndex = 0
    
    const logInterval = setInterval(() => {
      if (currentLogIndex < BOOT_LOGS.length) {
        const nextLog = BOOT_LOGS[currentLogIndex]
        if (nextLog) {
          setLogs(prev => [...prev, nextLog])
        }
        currentLogIndex++
        setProgress((currentLogIndex / BOOT_LOGS.length) * 100)
      } else {
        clearInterval(logInterval)
        setTimeout(() => {
          onComplete()
        }, 1200) // Slightly longer pause at the end for effect
      }
    }, 180) // Slightly faster for snappier feel

    return () => clearInterval(logInterval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center font-mono selection:bg-green-500/30">
      <div className="w-full max-w-2xl px-6 space-y-8">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
          <span className="text-gray-500 text-xs ml-2 tracking-widest uppercase font-bold">System: Aura_Boot_v4.2</span>
          <div className="ml-auto text-[10px] text-green-500/30 font-bold uppercase tracking-widest hidden sm:block">
            Secure_Connection: Established
          </div>
        </div>

        {/* Console Log Area */}
        <div className="bg-[#050505] border border-green-500/20 rounded-lg p-6 min-h-[400px] shadow-[0_0_40px_rgba(34,197,94,0.05)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg viewBox="0 0 24 24" className="w-20 h-20 text-green-500 animate-[pulse_3s_infinite]">
              <path fill="currentColor" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
            </svg>
          </div>
          
          <div className="flex flex-col gap-1 relative z-10">
            <AnimatePresence mode="popLayout">
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-2 text-sm md:text-base"
                >
                  <span className="text-green-500/40 select-none font-bold shrink-0">[{new Date().toLocaleTimeString('en-US', { hour12: false })}]</span>
                  <span 
                    className={`
                      ${log?.includes("ACCESS GRANTED") ? "text-green-400 font-bold glow-green" : ""}
                      ${log?.includes("FOUND") || log?.includes("ACTIVE") ? "text-cyan-400 font-bold" : ""}
                      ${log?.includes("OK") ? "text-green-400" : ""}
                      ${!log?.includes("ACCESS GRANTED") && !log?.includes("FOUND") && !log?.includes("ACTIVE") && !log?.includes("OK") ? "text-green-500/80" : ""}
                    `}
                  >
                    {log}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2.5 h-5 bg-green-500/50 mt-1"
            />
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-green-500/60 font-bold uppercase tracking-widest">
            <span>Aura_Sync Status</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden border border-green-500/10">
            <motion.div
              className="h-full bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center">
            <div className="text-[10px] text-green-500/40 uppercase tracking-[0.3em] animate-pulse">
              Unauthorized access to high aura levels is strictly monitored
            </div>
        </div>
      </div>

      <style jsx>{`
        .glow-green {
          text-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
        }
      `}</style>
    </div>
  )
}
