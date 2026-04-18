import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const BiometricScanner = () => {
  const [mode, setMode] = useState<"camera" | "upload">("camera");
  const [status, setStatus] = useState("System Ready. Awaiting Input...");
  const [file, setFile] = useState<File | null>(null);
  
  const webcamRef = useRef<Webcam>(null);

  // 🧠 The function that talks to your Python FastAPI backend
  const sendToBackend = async (imageFile: File) => {
    setStatus("Analyzing biometric data...");
    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      // Pointing to your local AI server
      const response = await fetch("http://127.0.0.1:8000/verify", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.status === "success") {
        setStatus(`✅ Access Approved: ${data.identity}`);
      } else {
        setStatus("❌ Access Denied: Face Not Recognized");
      }
    } catch (error) {
      setStatus("⚠️ Error: Backend offline. Is Python running?");
    }
  };

  // 📸 Live Camera Capture
  const handleLiveCapture = async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      const res = await fetch(imageSrc);
      const blob = await res.blob();
      const liveFile = new File([blob], "live_capture.jpg", { type: "image/jpeg" });
      sendToBackend(liveFile);
    }
  };

  // 📂 File Upload Handlers
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const submitUploadedFile = () => {
    if (file) {
      sendToBackend(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-gray-900 rounded-xl border border-gray-700 shadow-2xl w-full max-w-2xl mx-auto">
      <div className="flex gap-4 bg-black p-2 rounded-lg border border-gray-800">
        <button 
          onClick={() => setMode("camera")}
          className={`px-6 py-2 rounded font-bold transition-all ${mode === "camera" ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]" : "text-gray-400 hover:text-white"}`}
        >
          Live Camera
        </button>
        <button 
          onClick={() => setMode("upload")}
          className={`px-6 py-2 rounded font-bold transition-all ${mode === "upload" ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]" : "text-gray-400 hover:text-white"}`}
        >
          Upload Photo
        </button>
      </div>

      <div className="w-full flex flex-col items-center justify-center min-h-[400px] bg-black border-2 border-gray-800 rounded-lg overflow-hidden relative">
        {mode === "camera" ? (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 border-4 border-blue-500/30 pointer-events-none"></div>
            <button 
              onClick={handleLiveCapture}
              className="absolute bottom-6 px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-extrabold rounded text-lg shadow-[0_0_20px_rgba(34,197,94,0.6)] transition transform hover:scale-105"
            >
              SCAN FACE
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-6 p-8">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileUpload}
              className="text-gray-300 block w-full text-sm file:mr-4 file:py-3 file:px-6 file:rounded-md file:border-0 file:text-sm file:font-bold file:bg-blue-600 file:text-white hover:file:bg-blue-500 cursor-pointer"
            />
            <button 
              onClick={submitUploadedFile}
              disabled={!file}
              className="px-8 py-3 bg-green-500 hover:bg-green-400 disabled:bg-gray-700 disabled:text-gray-500 text-black font-extrabold rounded text-lg transition"
            >
              VERIFY DATABASE MATCH
            </button>
          </div>
        )}
      </div>

      <div className="w-full text-center p-4 bg-black border border-gray-800 rounded text-xl font-mono text-cyan-400 uppercase tracking-widest">
        {status}
      </div>
    </div>
  );
};

export default BiometricScanner;