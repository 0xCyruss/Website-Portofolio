
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import ProfilePage from '../components/ProfilePage';
import SocialPage from '../components/SocialPage';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  //Check for saved dark mode preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  //Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Navigation 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      
      <main className="transition-all duration-500">
        {currentPage === 'home' && (
          <HomePage isDarkMode={isDarkMode} onPageChange={handlePageChange} />
        )}
        {currentPage === 'profile' && (
          <ProfilePage isDarkMode={isDarkMode} />
        )}
        {currentPage === 'social' && (
          <SocialPage isDarkMode={isDarkMode} />
        )}
      </main>
    </div>
  );
};

export default Index;
