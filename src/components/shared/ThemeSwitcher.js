import React from 'react';
import { useTheme } from '../contextAPI/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>
        Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
      </button>
    </div>
  );
};

export default ThemeSwitcher;
