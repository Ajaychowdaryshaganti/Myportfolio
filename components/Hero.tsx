"use client";

import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/pattern.png')] bg-repeat" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#E63946] mb-4">
              Software Engineer &amp; IT Infrastructure Professional
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Hello, I&apos;m{" "}
              <span className="block text-[#E63946]">Ajay&nbsp;Shaganti</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Melbourne-based Software Engineer and IT professional with a Master&apos;s
              in Information Technology. I build and ship full-stack products —
              MERN stack web apps, Flutter mobile apps, and AWS-hosted infrastructure
              — while also delivering enterprise-level IT support, incident management,
              and cloud operations. Currently building production systems at Remote King
              and supporting large-scale e-examinations at Monash University.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/ajay-shaganti-865256166/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E63946] text-white font-semibold rounded-lg hover:bg-[#c62f3b] transition-colors"
              >
                <ExternalLink size={18} /> Get In Touch
              </a>
              <a
                href="/Ajay Kumar Shaganti.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </motion.div>

          {/* Right — Stats + Tech panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "8+", label: "Products Shipped (Web & Mobile)" },
                { value: "2", label: "Current Roles" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center"
                >
                  <p className="text-3xl font-bold text-[#E63946]">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Current roles */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Currently Working At</p>
              {[
                { role: "Software Engineer", company: "Remote King", period: "Jun 2025 – Present", dot: "bg-green-400" },
                { role: "IT Support Officer", company: "Monash University", period: "Oct 2025 – Present", dot: "bg-blue-400" },
              ].map((job) => (
                <div key={job.company} className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${job.dot}`} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{job.role}</p>
                    <p className="text-xs text-gray-400">{job.company} · {job.period}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack pills */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {["MERN Stack", "Flutter", "AWS", "React", "Node.js", "MongoDB", "MySQL", "GitHub Actions", "TypeScript"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
