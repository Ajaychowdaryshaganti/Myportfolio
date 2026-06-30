"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, Clock } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certifications &amp; Professional Development
          </h2>
          <p className="text-gray-500">Actively upskilling to stay current with industry standards.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-[#E63946] mt-0.5 shrink-0">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 leading-snug">{cert.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{cert.issuer}</p>
                  {cert.status === "current" ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                      <CheckCircle2 size={12} /> Current
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                      <Clock size={12} /> In Progress
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
