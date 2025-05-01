import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>('light');

  const setMode = (mode: Theme) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (localTheme) {
      setTheme(localTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return [theme, toggleTheme];
};