"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E63946] mb-3">Projects</p>
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">Code in Action</h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto">
            Real projects built and shipped — from warehouse management systems to
            retail e-commerce platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl overflow-hidden border border-[#E8ECF0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Card header */}
              <div className="h-36 bg-white border-b border-gray-100 flex items-center justify-center overflow-hidden relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <span className="text-5xl">{project.emoji}</span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-gray-900 mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-red-50 text-[#E63946] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {project.badge && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                      {project.badge}
                    </span>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-[#E63946] transition-colors ml-auto"
                    >
                      Visit <ExternalLink size={14} />
                    </a>
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
