
import React, { useState, useEffect } from 'react';
import { ChevronDown, Box } from 'lucide-react';

interface HomePageProps {
  isDarkMode: boolean;
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ isDarkMode, onPageChange }) => {
  const [nameIndex, setNameIndex] = useState(0);
  const nameVariations = [
    "RICHARD",
    "RIZKY",
    "WOWOR",
    "PORTOFOLIO"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % nameVariations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-green-50'
    } transition-all duration-500 animate-fade-in`}>
      <div className="text-center px-4">
        {/* Blockchain Logo */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-slate-600 via-slate-500 to-slate-400 rounded-xl flex items-center justify-center shadow-2xl border border-slate-300 hover:scale-105 transition-transform duration-300">
            <div className="grid grid-cols-4 gap-1 p-3">
              <Box className="w-5 h-5 text-blue-300" fill="currentColor" />
              <Box className="w-5 h-5 text-purple-300" fill="currentColor" />
              <Box className="w-5 h-5 text-indigo-300" fill="currentColor" />
              <Box className="w-5 h-5 text-cyan-300" fill="currentColor" />
              <Box className="w-5 h-5 text-purple-300" fill="currentColor" />
              <Box className="w-5 h-5 text-blue-300" fill="currentColor" />
              <Box className="w-5 h-5 text-cyan-300" fill="currentColor" />
              <Box className="w-5 h-5 text-indigo-300" fill="currentColor" />
              <Box className="w-5 h-5 text-indigo-300" fill="currentColor" />
              <Box className="w-5 h-5 text-cyan-300" fill="currentColor" />
              <Box className="w-5 h-5 text-purple-300" fill="currentColor" />
              <Box className="w-5 h-5 text-blue-300" fill="currentColor" />
              <Box className="w-5 h-5 text-cyan-300" fill="currentColor" />
              <Box className="w-5 h-5 text-indigo-300" fill="currentColor" />
              <Box className="w-5 h-5 text-purple-300" fill="currentColor" />
              <Box className="w-5 h-5 text-blue-300" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Animated Name */}
        <div className="h-24 mb-6 flex items-center justify-center">
          <h1 className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent transition-all duration-500 ease-in-out transform ${
            nameIndex % 2 === 0 ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'
          }`}>
            {nameVariations[nameIndex]}
          </h1>
        </div>
        
        <h2 className={`text-2xl md:text-3xl mb-8 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        } animate-fade-in font-light`}>
          Web & Apps Junior Developer
        </h2>

        <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        } animate-fade-in leading-relaxed`}>
          Selamat datang di portofolio saya. Saya adalah seorang web & apps junior developer.
          Saya masih basic maka dari itu saya ingin berkembang menjadi lebih baik dalam menciptakan
          pengalaman digital yang menarik dan fungsional.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in-right">
          <button
            onClick={() => onPageChange('profile')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Lihat Profil Saya
          </button>
          
          <button
            onClick={() => onPageChange('social')}
            className={`px-8 py-4 border-2 border-blue-500 rounded-full font-semibold transition-all duration-300 ${
              isDarkMode 
                ? 'text-blue-400 hover:bg-blue-500 hover:text-white' 
                : 'text-blue-500 hover:bg-blue-500 hover:text-white'
            }`}
          >
            Hubungi Saya
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown 
            size={32} 
            className={`mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} 
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
