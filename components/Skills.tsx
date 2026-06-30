"use client";

import { motion } from "framer-motion";
import {
  Cloud, ShieldCheck, BarChart2, GitBranch, Code2, Server,
  Plug, Database, Terminal, Headphones, Wrench,
} from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  BarChart2: <BarChart2 size={24} />,
  GitBranch: <GitBranch size={24} />,
  Code2: <Code2 size={24} />,
  Server: <Server size={24} />,
  Plug: <Plug size={24} />,
  Database: <Database size={24} />,
  Terminal: <Terminal size={24} />,
  Headphones: <Headphones size={24} />,
  Wrench: <Wrench size={24} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E63946] mb-3">What I Bring</p>
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">My Skills</h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto">
            A broad technical toolkit spanning cloud infrastructure, full-stack
            development, DevOps, and IT support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl p-6 border border-[#E8ECF0] hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center text-[#E63946] shrink-0 group-hover:bg-[#E63946] group-hover:text-white transition-colors">{iconMap[skill.icon]}</span>
                <h3 className="font-semibold text-[#1A1A2E]">{skill.title}</h3>
              </div>
              <p className="text-sm text-[#4A5568] leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
