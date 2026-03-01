import { motion } from "motion/react";
import { Github, Linkedin, Mail, User } from "lucide-react";

export default function Developer() {
  return (
    <section
      id="developer"
      className="py-24 relative overflow-hidden bg-black/50"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Meet the </span>
            <span className="text-gradient-pink neon-text-glow-pink">
              Developer
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate about AI & Smart Systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 rounded-3xl max-w-2xl mx-auto relative overflow-hidden neon-border-purple text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 blur-[80px] rounded-full -z-10" />

          <div className="w-32 h-32 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center border-2 border-neon-purple overflow-hidden relative group">
            <div className="absolute inset-0 bg-neon-purple/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <User className="w-16 h-16 text-gray-400 group-hover:text-neon-purple transition-colors relative z-10" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            Engineering Student
          </h3>
          <p className="text-neon-blue font-medium mb-6">
            AI & Machine Learning Enthusiast
          </p>

          <p className="text-gray-300 leading-relaxed mb-8 max-w-md mx-auto">
            "Developed by an Engineering Student passionate about AI & Smart
            Systems. Always eager to learn, build, and innovate."
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-neon-blue hover:bg-neon-blue/10 hover:text-neon-blue transition-all duration-300 text-gray-400"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-neon-purple hover:bg-neon-purple/10 hover:text-neon-purple transition-all duration-300 text-gray-400"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-neon-pink hover:bg-neon-pink/10 hover:text-neon-pink transition-all duration-300 text-gray-400"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
