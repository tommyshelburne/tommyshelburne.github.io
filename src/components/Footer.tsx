import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Name + contact */}
          <div>
            <p className="font-display text-2xl text-stone-900 dark:text-stone-100 mb-2">
              Tommy Shelburne<span className="text-primary-500">.</span>
            </p>
            <a
              href="mailto:tommy@shelburne.dev"
              className="font-mono text-sm text-stone-600 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              tommy@shelburne.dev
            </a>
            <p className="font-mono text-xs text-stone-400 dark:text-stone-600 mt-1">
              Salt Lake City, UT
            </p>
          </div>

          {/* Nav + social */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="font-mono text-xs uppercase tracking-[0.15em] text-stone-600 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href="https://github.com/tommyshelburne"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.15em] text-stone-600 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/tommyshelburne"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.15em] text-stone-600 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-mono text-xs text-stone-400 dark:text-stone-600">
            © {currentYear} Tommy Shelburne
          </p>
          <p className="font-mono text-xs text-stone-400 dark:text-stone-600">
            Built with React, Vite & Tailwind · deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
