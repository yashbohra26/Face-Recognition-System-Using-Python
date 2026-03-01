import { motion } from "motion/react";
import { Camera, ScanFace, Binary, Database, MonitorCheck } from "lucide-react";

const steps = [
  {
    icon: <Camera className="w-8 h-8 text-neon-blue" />,
    title: "Capture Image",
    desc: "Acquire facial data from a camera or uploaded image.",
    color: "neon-blue",
  },
  {
    icon: <ScanFace className="w-8 h-8 text-neon-purple" />,
    title: "Detect Face",
    desc: "Locate and extract the face from the background.",
    color: "neon-purple",
  },
  {
    icon: <Binary className="w-8 h-8 text-neon-pink" />,
    title: "Encode Features",
    desc: "Convert facial landmarks into a 128-d embedding.",
    color: "neon-pink",
  },
  {
    icon: <Database className="w-8 h-8 text-neon-cyan" />,
    title: "Match with Database",
    desc: "Compare embeddings against known identities.",
    color: "neon-cyan",
  },
  {
    icon: <MonitorCheck className="w-8 h-8 text-neon-blue" />,
    title: "Display Result",
    desc: "Output the recognized identity and confidence score.",
    color: "neon-blue",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">How It </span>
            <span className="text-gradient neon-text-glow">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A seamless pipeline from image capture to identity verification.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div
                  className={`w-20 h-20 rounded-full glass-card flex items-center justify-center mb-6 relative transition-transform duration-300 group-hover:scale-110 border border-${step.color}`}
                >
                  {/* Glow effect behind icon */}
                  <div
                    className={`absolute inset-0 rounded-full bg-${step.color}/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  {step.icon}

                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black border border-${step.color} flex items-center justify-center text-xs font-bold text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                  >
                    0{index + 1}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
