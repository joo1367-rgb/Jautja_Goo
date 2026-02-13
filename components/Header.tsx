import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const NAVER_STORE_URL = 'https://smartstore.naver.com/jautja_official';
const AMAZON_STORE_URL = 'https://www.amazon.com/stores/JAUTJA'; // 실제 Amazon 스토어 URL로 변경 가능

interface HeaderProps {
  brandName: string;
  accentColor: string;
  onAdminToggle: () => void;
  isAdmin: boolean;
}

const Header: React.FC<HeaderProps> = ({ brandName, accentColor }) => {
  const location = useLocation();
  const { lang, setLang, t } = useTranslation();

  const navItems = [
    { label: t('menu.about') as string, path: '/about' },
    { label: t('menu.shop') as string, path: '/shop' },
    { label: t('menu.media') as string, path: '/blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex-1 flex justify-center lg:justify-start">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt={brandName}
              className="h-[4.25rem] w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-bold tracking-widest transition-colors ${
                location.pathname === item.path ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 flex items-center justify-end gap-3 flex-wrap">
          <a
            href={NAVER_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-bold tracking-wider rounded border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          >
            {t('menu.naverStore') as string}
          </a>
          <a
            href={AMAZON_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-bold tracking-wider rounded border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          >
            {t('menu.amazon') as string}
          </a>
          <span className="hidden sm:block w-px h-4 bg-gray-200 self-center" aria-hidden />
          <button
            type="button"
            onClick={() => setLang('ko')}
            className={`px-3 py-1.5 text-xs font-bold tracking-widest rounded transition-colors ${
              lang === 'ko' ? 'text-white' : 'text-gray-400 hover:text-gray-700'
            }`}
            style={{ backgroundColor: lang === 'ko' ? accentColor : 'transparent' }}
          >
            KR
          </button>
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`px-3 py-1.5 text-xs font-bold tracking-widest rounded transition-colors ${
              lang === 'en' ? 'text-white' : 'text-gray-400 hover:text-gray-700'
            }`}
            style={{ backgroundColor: lang === 'en' ? accentColor : 'transparent' }}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
