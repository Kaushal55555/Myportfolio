import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
    
    // Check for saved theme preference or OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Only run after the component has mounted
    if (!mounted) return;
    
    // Apply the dark mode class to the document and save preference
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, mounted]);

  // Prevent hydration mismatch by returning null on server
  if (!mounted) {
    return (
      <button 
        className="theme-toggle-btn" 
        aria-label="Toggle dark mode"
        style={{ visibility: 'hidden' }}
      >
        <FiMoon />
      </button>
    );
  }

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="theme-toggle-btn"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={darkMode}
    >
      {darkMode ? (
        <FiSun className="theme-icon" />
      ) : (
        <FiMoon className="theme-icon" />
      )}
      <span className="sr-only">
        {darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  );
};

export default DarkModeToggle;