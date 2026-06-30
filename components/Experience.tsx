"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E63946] mb-3">Career</p>
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">Professional Experience</h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto">
            A roadmap of my journey with great companies, creating impactful solutions
            and learning along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E63946] md:-translate-x-0.5" />

          <div className="space-y-12">
            {experience.map((job, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={job.company + job.role}
                  initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${isRight ? "md:flex-row-reverse" : ""} gap-6 md:gap-0`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-white border-4 border-[#E63946] -translate-x-1.5 md:-translate-x-2 z-10 shadow" />

                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isRight ? "md:pr-10" : "md:pl-10"}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8ECF0] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <h3 className="text-lg font-bold text-[#E63946] mb-1">{job.role}</h3>
                      <p className="text-sm text-gray-500 font-medium mb-3">
                        {job.company} — {job.location} &nbsp;|&nbsp; {job.period}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-red-50 text-[#E63946] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {job.achievements.map((a, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-base leading-tight shrink-0">{a.emoji}</span>
                            <span className="leading-relaxed">{a.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
