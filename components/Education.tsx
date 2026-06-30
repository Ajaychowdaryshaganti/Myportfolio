"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E63946] mb-3">Background</p>
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">Education</h2>
          <p className="text-[#4A5568]">Academic foundations that underpin my technical expertise.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="bg-white rounded-xl p-6 border border-[#E8ECF0] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-[#E63946] mt-1 shrink-0">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 leading-snug">{edu.degree}</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-0.5">{edu.institution}</p>
                  <p className="text-sm text-gray-400">{edu.location}</p>
                  <span className="inline-block mt-2 text-xs font-semibold text-[#E63946] bg-red-50 px-2 py-0.5 rounded-full">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
