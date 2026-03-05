import { ScanFace } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        <div className="flex items-center justify-center gap-2 mb-6">
          <ScanFace className="w-6 h-6 text-neon-blue" />
          <span className="text-lg font-bold tracking-wider text-white">
            FaceAuth<span className="text-neon-blue">.AI</span>
          </span>
        </div>

        <p className="text-gray-500 text-sm mb-4">
          © {new Date().getFullYear()} AI Face Recognition System. All rights
          reserved.
        </p>

        <div className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full">
          Powered by <span className="text-neon-purple ml-1 font-bold">AI</span>
        </div>
      </div>
    </footer>
  );
}
