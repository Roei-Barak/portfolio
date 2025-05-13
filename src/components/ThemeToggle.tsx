import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../utils/cn';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-500",
        "hover:scale-110 active:scale-95",
        theme === 'dark' 
          ? "bg-[#1a1f2c] border border-[#00ff41]/20 hover:border-[#00ff41]" 
          : "bg-white shadow-lg hover:shadow-xl border border-gray-200 hover:border-indigo-500"
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-[#00ff41]" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  );
}