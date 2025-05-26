
import React from 'react';
import { Moon, Sun, Home, User, MessageCircle } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentPage, 
  onPageChange, 
  isDarkMode, 
  onToggleDarkMode 
}) => {
  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'social', label: 'Social Media', icon: MessageCircle },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 ${
      isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'
    } backdrop-blur-md border-b ${
      isDarkMode ? 'border-gray-700' : 'border-gray-200'
    } transition-all duration-300`}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                      : isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden sm:block">{item.label}</span>
                </button>
              );
            })}

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
