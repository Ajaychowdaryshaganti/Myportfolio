"use client";

import { motion } from "framer-motion";
import { Cloud, Code2, Headphones, Cog, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={28} />,
  Code2: <Code2 size={28} />,
  Headphones: <Headphones size={28} />,
  Cog: <Cog size={28} />,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E63946] mb-3">What I Do</p>
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">Professional Services</h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto">
            End-to-end IT support and technical expertise — from service desk operations
            and infrastructure management to cloud platforms and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-[#E8ECF0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-[#E63946] mb-4">{iconMap[svc.icon]}</div>
              <h3 className="font-semibold text-gray-900 mb-4">{svc.title}</h3>
              <ul className="space-y-2">
                {svc.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                    <CheckCircle2 size={14} className="text-gray-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#E63946] text-white font-semibold rounded-lg hover:bg-[#c62f3b] transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
