import { motion } from "motion/react";
import { Camera, CheckCircle, Zap, ShieldCheck, Cpu } from "lucide-react";

const features = [
  {
    icon: <Camera className="w-10 h-10 text-neon-blue" />,
    title: "Real-time face detection",
    desc: "Instantly detect faces from live video streams or static images.",
    borderClass: "neon-border-blue",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-neon-purple" />,
    title: "Accurate recognition",
    desc: "High precision matching using deep learning embeddings.",
    borderClass: "neon-border-purple",
  },
  {
    icon: <Zap className="w-10 h-10 text-neon-pink" />,
    title: "Fast processing",
    desc: "Optimized for speed, returning results in milliseconds.",
    borderClass: "neon-border-pink",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-neon-cyan" />,
    title: "Secure identification",
    desc: "Robust against spoofing and unauthorized access attempts.",
    borderClass: "neon-border-blue",
  },
  {
    icon: <Cpu className="w-10 h-10 text-neon-blue" />,
    title: "Python powered AI",
    desc: "Built on a flexible, scalable Python architecture.",
    borderClass: "neon-border-purple",
  },
];

export default function Features() {
  return (
    <section
      id="features"
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
            <span className="text-white">Core </span>
            <span className="text-gradient-pink neon-text-glow-pink">
              Features
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Built for performance, accuracy, and security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/5 group ${feature.borderClass}`}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
