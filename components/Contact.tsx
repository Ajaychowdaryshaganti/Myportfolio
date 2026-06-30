"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background1.jpg')" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E63946] mb-4">Get In Touch</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1A1A2E] mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            I&apos;m available for freelance work and new opportunities.
            <br className="hidden sm:block" />
            Have a project in mind? Feel free to reach out.
          </p>

          {/* Social icons */}
          <div className="flex justify-center gap-6 mb-10">
            <a
              href="https://www.linkedin.com/in/ajay-shaganti-865256166/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#E63946] hover:border-[#E63946] transition-colors shadow-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ajay_shaganti/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#E63946] hover:border-[#E63946] transition-colors shadow-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 .001 6.001A3 3 0 0 1 12 9zm6.5-3.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/KannaChowdary.Shaganti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#E63946] hover:border-[#E63946] transition-colors shadow-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
              </svg>
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ajaychowdaryshaganti@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
            >
              <Mail size={18} /> Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-shaganti-865256166/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ExternalLink size={18} /> LinkedIn
            </a>
            <a
              href="https://wa.me/61452560695"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-colors"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
