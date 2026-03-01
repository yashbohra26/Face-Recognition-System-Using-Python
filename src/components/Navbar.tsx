import { motion } from "motion/react";
import { ScanFace } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ScanFace className="w-8 h-8 text-neon-blue" />
          <span className="text-xl font-bold tracking-wider text-white">
            NEXUS<span className="text-neon-blue">.AI</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors"
          >
            About
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors"
          >
            How it Works
          </a>
          <a
            href="#demo"
            className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors"
          >
            Demo
          </a>
          <a
            href="#developer"
            className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors"
          >
            Developer
          </a>
        </div>

        <a
          href="#demo"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-neon-blue/10 border border-neon-blue rounded-full hover:bg-neon-blue/20 hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all duration-300"
        >
          Try Demo
        </a>
      </div>
    </motion.nav>
  );
}
