"use client";

import { motion } from "framer-motion";
import { Download, UserCheck } from "lucide-react";

export default function HireMe() {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background1.jpg')" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-lg"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Hire Me?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I design, build, and ship production software. At Remote King I’ve sole-developed
            three live applications — PickOps (warehouse management), OnTime (geofence-based
            HR & attendance), and AutoIDX (automotive parts identification) — all built on the
            MERN stack with Flutter mobile apps, integrated with third-party APIs (Unleashed,
            Xero, Shopify), and hosted on AWS with private subnet architecture, CloudWatch
            monitoring, and FinOps cost controls.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Alongside engineering, I bring proven IT support depth — delivering Level 1/2
            support for large-scale e-examinations at Monash University under zero-downtime
            SLAs, and previously building and maintaining the stock & production system at
            CBI Electric. I hold a Master’s in Information Technology from Swinburne
            University, and I work well across the full stack: infrastructure, backend, mobile,
            and frontend — always with reliability and end-user impact in focus.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/ajay-shaganti-865256166/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
              <UserCheck size={18} /> Hire Me
            </a>
            <a
              href="/Ajay Kumar Shaganti.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
            >
              <Download size={18} /> View / Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
