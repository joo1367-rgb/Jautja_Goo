import React from 'react';
import { Menu, ShoppingBag, Search, User } from 'lucide-react';

interface HeaderProps {
  brandName: string;
  accentColor: string;
  onAdminToggle: () => void;
  isAdmin: boolean;
}

const Header: React.FC<HeaderProps> = ({ brandName, accentColor, onAdminToggle, isAdmin }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex-1 flex justify-center lg:justify-start">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src="/logo.png" alt={brandName} className="h-[4.25rem] w-auto object-contain" />
          </button>
        </div>

        <nav className="hidden lg:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
          {['HOME', 'SHOP', 'BLOG', 'ABOUT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold tracking-widest text-gray-400 hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex-1 flex items-center justify-end space-x-6">
          <button className="p-2 hover:opacity-70 transition-colors" style={{ color: accentColor }}><Search className="w-5 h-5" /></button>
          <button className="p-2 hover:opacity-70 transition-colors relative" style={{ color: accentColor }}>
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white" style={{ backgroundColor: accentColor }}></span>
          </button>
          <button
            onClick={onAdminToggle}
            className={`p-2 rounded-full transition-all ${isAdmin ? 'text-white shadow-lg' : 'hover:bg-gray-50'}`}
            style={{ backgroundColor: isAdmin ? accentColor : 'transparent', color: isAdmin ? 'white' : accentColor }}
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
