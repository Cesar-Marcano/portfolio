"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 to-red-600/20 opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-lg rounded-lg border border-stone-800 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-fuchsia-500" />
          </div>
          <div className="font-mono">
            <p className="text-fuchsia-500">$ whoami</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Cesar Marcano
            </h1>
            <p className="text-stone-400 mb-2">Junior Backend Developer</p>
            <p className="text-fuchsia-500">$ skills</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-fuchsia-500/10 rounded-md border border-fuchsia-500/20">
                Node.js
              </span>
              <span className="px-3 py-1 bg-fuchsia-500/10 rounded-md border border-fuchsia-500/20">
                Express.JS
              </span>
              <span className="px-3 py-1 bg-fuchsia-500/10 rounded-md border border-fuchsia-500/20">
                Nest.JS
              </span>
              <span className="px-3 py-1 bg-fuchsia-500/10 rounded-md border border-fuchsia-500/20">
                Docker
              </span>
            </div>
          </div>
        <div className="mt-6 flex justify-end">
          <Link href="#contact">
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 bg-fuchsia-500/10 text-white rounded-lg border border-fuchsia-500/20 hover:bg-fuchsia-500/20 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span>Contact Me</span>
            </motion.button>
          </Link>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
