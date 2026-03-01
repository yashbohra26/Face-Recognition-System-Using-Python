import { motion } from "motion/react";
import { ArrowRight, ScanFace } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center justify-center p-4 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <ScanFace className="w-12 h-12 text-neon-blue drop-shadow-[0_0_15px_rgba(0,243,255,0.8)]" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
        >
          <span className="text-white">AI Face</span>
          <br />
          <span className="text-gradient neon-text-glow">
            Recognition System
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Smart Identity Detection Using Python. Experience the future of
          secure, real-time facial analysis powered by advanced machine
          learning.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#demo"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-neon-blue/20 border border-neon-blue rounded-full overflow-hidden transition-all duration-300 hover:bg-neon-blue/30 hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-neon-blue"></span>
            <span className="relative flex items-center gap-2">
              Try Demo{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
