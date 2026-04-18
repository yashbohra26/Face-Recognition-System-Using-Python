import React from 'react';
import BiometricScanner from './components/BiometricScanner';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white flex flex-col items-center py-12">
      
      {/* Header Section */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tight mb-4">
          FaceAuth AI
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Local Biometric Processing System. 
        </p>
      </header>

      {/* Main Scanner Component */}
      <main className="w-full px-4">
        <BiometricScanner />
      </main>

    </div>
  );
}

export default App;