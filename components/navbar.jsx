import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600 dark:text-blue-300">
        TaskManager
      </div>
      <div className="flex gap-4">
        <Link to="/" className="text-gray-700 dark:text-gray-200 hover:underline">Home</Link>
        <Link to="/tasks" className="text-gray-700 dark:text-gray-200 hover:underline">Tasks</Link>
        <Link to="/posts" className="text-gray-700 dark:text-gray-200 hover:underline">Posts</Link>
        <button onClick={toggleTheme} className="text-sm px-3 py-1 border rounded dark:border-gray-400 text-gray-600 dark:text-gray-300">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}