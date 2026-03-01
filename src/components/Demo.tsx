import React, { useState } from "react";
import { motion } from "motion/react";
import { UploadCloud, Image as ImageIcon, CheckCircle2, AlertCircle } from "lucide-react";

export default function Demo() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  // --- UPDATED INTEGRATION LOGIC ---
  const handleFile = async (selectedFile: File) => {
    setFile(selectedFile);
    setIsProcessing(true);
    setResult(null);
    setError(null);

    // Prepare the image to be sent to Python
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // 1. Send the image to your FastAPI backend
      const response = await fetch("http://127.0.0.1:8000/verify", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Backend server is not running");

      const data = await response.json();

      // 2. Handle the result from DeepFace
      if (data.status === "success") {
        setResult(`Identity Verified: ${data.user}`);
      } else {
        setResult("Access Denied: Face Not Recognized");
      }
    } catch (err) {
      console.error("Connection Error:", err);
      setError("Could not connect to Python Backend. Make sure main.py is running!");
    } finally {
      setIsProcessing(false);
    }
  };
  // ---------------------------------

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-black/50">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Live </span>
            <span className="text-gradient-pink neon-text-glow-pink">Demo</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Upload an image to test the recognition system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden neon-border-blue"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-neon-blue/10 blur-[80px] rounded-full -z-10" />

          <div
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
              isDragging
                ? "border-neon-blue bg-neon-blue/5"
                : "border-white/20 hover:border-white/40"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />

            {!file ? (
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10"
                >
                  <UploadCloud className="w-10 h-10 text-neon-blue" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Drag & Drop Image
                </h3>
                <p className="text-gray-400 mb-6">
                  or click to browse from your device
                </p>
                <span className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors">
                  Select File
                </span>
              </label>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 overflow-hidden relative">
                  <ImageIcon className="w-10 h-10 text-gray-400" />
                  {isProcessing && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-neon-blue border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-medium text-white mb-2 truncate max-w-[200px]">
                  {file.name}
                </h3>

                {isProcessing ? (
                  <p className="text-neon-blue animate-pulse">
                    Processing biometric data...
                  </p>
                ) : error ? (
                    <div className="flex items-center gap-2 text-red-500 font-medium mt-2">
                        <AlertCircle className="w-5 h-5" />
                        {error}
                    </div>
                ) : result ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center"
                  >
                    <div className={`flex items-center gap-2 font-semibold text-lg mb-4 ${result.includes('Verified') ? 'text-green-400' : 'text-red-400'}`}>
                      <CheckCircle2 className="w-6 h-6" />
                      {result}
                    </div>
                    <button
                      onClick={() => {
                        setFile(null);
                        setResult(null);
                        setError(null);
                      }}
                      className="text-sm text-gray-400 hover:text-white underline"
                    >
                      Try another image
                    </button>
                  </motion.div>
                ) : null}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}