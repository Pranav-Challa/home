
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-8 left-0 w-full z-50 px-6">
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="glass px-8 py-3 rounded-full flex gap-10 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative ${
                  isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-blue-400 animate-in fade-in zoom-in duration-500" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
