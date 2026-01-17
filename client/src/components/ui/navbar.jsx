import { useEffect, useState } from 'react';

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <nav className="flex items-center gap-6 rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-md">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onNavClick && onNavClick(item)}
            className={`whitespace-nowrap text-xs md:text-sm transition-colors ${
              activeItem === item ? 'text-blue-200' : 'hover:text-blue-200 text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;


