import { motion } from "motion/react";

const techStack = [
  { name: "Python", color: "neon-blue" },
  { name: "OpenCV", color: "neon-purple" },
  { name: "NumPy", color: "neon-pink" },
  { name: "Machine Learning", color: "neon-cyan" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Tech </span>
            <span className="text-gradient neon-text-glow">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Powered by industry-standard tools and libraries.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card px-8 py-4 rounded-full border border-${tech.color} hover:bg-${tech.color}/10 transition-colors cursor-default group relative overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-${tech.color}/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <span
                className={`relative z-10 text-lg font-semibold text-white group-hover:text-${tech.color} transition-colors`}
              >
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
