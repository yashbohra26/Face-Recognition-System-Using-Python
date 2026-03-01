/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Demo from "./components/Demo";
import TechStack from "./components/TechStack";
import Developer from "./components/Developer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-neon-blue/30 selection:text-white">
      <ParticleBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Demo />
        <TechStack />
        <Developer />
      </main>

      <Footer />
    </div>
  );
}
