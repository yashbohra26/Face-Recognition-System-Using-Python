import { motion } from "motion/react";
import { BrainCircuit, Code2, Eye } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About the </span>
            <span className="text-gradient neon-text-glow">Project</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A deep dive into the architecture of modern facial recognition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 blur-[80px] rounded-full -z-10" />

            <h3 className="text-2xl font-semibold mb-6 text-white">
              Intelligent Identity Detection
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              This system leverages the power of Python, OpenCV, and advanced
              machine learning techniques to detect and recognize human faces
              with high accuracy in real-time.
            </p>

            <p className="text-gray-300 leading-relaxed">
              By extracting unique facial landmarks and encoding them into a
              high-dimensional vector space, the system can match identities
              against a secure database in milliseconds, providing a robust
              solution for authentication and security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <BrainCircuit className="w-8 h-8 text-neon-purple" />,
                title: "Machine Learning",
                desc: "Powered by deep neural networks for feature extraction.",
              },
              {
                icon: <Eye className="w-8 h-8 text-neon-blue" />,
                title: "Computer Vision",
                desc: "Utilizing OpenCV for robust real-time image processing.",
              },
              {
                icon: <Code2 className="w-8 h-8 text-neon-pink" />,
                title: "Python Core",
                desc: "Built on a flexible, high-performance Python backend.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors ${i === 2 ? "sm:col-span-2" : ""}`}
              >
                <div className="mb-4 bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10">
                  {item.icon}
                </div>
                <h4 className="text-lg font-medium text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
