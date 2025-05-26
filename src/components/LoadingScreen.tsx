
import React, { useEffect, useState } from 'react';
import { Box } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showBlockchain, setShowBlockchain] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowBlockchain(true);
            setTimeout(onLoadingComplete, 2000);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Blockchain Logo */}
        <div className={`mb-8 transition-all duration-1000 ${showBlockchain ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-600 via-slate-500 to-slate-400 rounded-lg flex items-center justify-center shadow-2xl border border-slate-300">
            <div className="grid grid-cols-3 gap-1 p-2">
              <Box className="w-4 h-4 text-blue-300" fill="currentColor" />
              <Box className="w-4 h-4 text-purple-300" fill="currentColor" />
              <Box className="w-4 h-4 text-indigo-300" fill="currentColor" />
              <Box className="w-4 h-4 text-purple-300" fill="currentColor" />
              <Box className="w-4 h-4 text-blue-300" fill="currentColor" />
              <Box className="w-4 h-4 text-indigo-300" fill="currentColor" />
              <Box className="w-4 h-4 text-indigo-300" fill="currentColor" />
              <Box className="w-4 h-4 text-purple-300" fill="currentColor" />
              <Box className="w-4 h-4 text-blue-300" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-80 h-2 bg-blue-900/30 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <div className="text-white text-xl font-light">
          {progress < 100 ? (
            <>Loading... {progress}%</>
          ) : (
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold text-blue-400 mb-2">Selamat Datang</h1>
              <p className="text-lg text-blue-200">Di Website Portofolio Saya</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
