import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  'Home',
  'About',
  'Chapters & People',
  'Events',
  'Initiatives',
  'Resources',
  'Gallery',
  'Contact',
];

const Navbar = ({ activeItem = 'Home', onNavClick }) => {
  const isHomePage = activeItem === 'Home';
  const [visible, setVisible] = useState(!isHomePage);

  useEffect(() => {
    if (!isHomePage) {
      setVisible(true);
      return;
    }

    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <div
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <nav className="relative flex items-center gap-6 rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-md">
        {NAV_ITEMS.map((item) => {
          const isActive = activeItem === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => onNavClick && onNavClick(item)}
              className="relative text-xs md:text-sm whitespace-nowrap"
            >
              {/* Animated underline (NO size change) */}
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-blue-400"
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}

              <span
                className={`transition-colors ${
                  isActive
                    ? 'text-blue-200'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;