import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/useTheme';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-stone-50/85 dark:bg-stone-950/85 backdrop-blur-md z-50 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link
            to="/"
            className="font-display text-xl text-stone-900 dark:text-stone-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Tommy Shelburne
            <span className="text-primary-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                } font-mono text-xs uppercase tracking-[0.15em] transition-colors`}
              >
                {item.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-primary-400 dark:hover:border-primary-500 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-4 w-4 text-primary-400" />
              ) : (
                <MoonIcon className="h-4 w-4 text-stone-600" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-stone-200 dark:border-stone-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-primary-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-stone-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-stone-200 dark:border-stone-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-stone-900 dark:text-stone-100" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-stone-900 dark:text-stone-100" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`${
                  isActive(item.href)
                    ? 'bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900'
                } block px-3 py-2 rounded-md font-mono text-sm uppercase tracking-[0.15em] transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
