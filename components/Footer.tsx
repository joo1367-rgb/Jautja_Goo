import React from 'react';
import { Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

interface FooterProps {
  brandName: string;
  accentColor: string;
}

const Footer: React.FC<FooterProps> = ({ brandName, accentColor }) => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          <div className="space-y-6">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt={brandName} className="h-10 w-auto object-contain opacity-90 hover:opacity-100" />
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {t('footer.description') as string}
            </p>
            <div className="flex space-x-5">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/jautja_official/', label: 'Instagram' },
                { Icon: Youtube, href: 'https://www.youtube.com/@jautja_official', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 bg-white/5 rounded-full hover:text-white transition-all hover:scale-110"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">{t('footer.contactTitle') as string}</h3>
            <ul className="space-y-5 text-gray-400 text-sm font-medium">
              <li className="flex items-center gap-4 hover:text-white transition-colors"><MapPin className="w-4 h-4" /> {t('footer.address') as string}</li>
              <li className="flex items-center gap-4 hover:text-white transition-colors"><Phone className="w-4 h-4" /> {t('footer.phone') as string}</li>
              <li className="flex items-center gap-4 hover:text-white transition-colors"><Mail className="w-4 h-4" /> {t('footer.email') as string}</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">{t('footer.newsletterTitle') as string}</h3>
            <p className="text-gray-500 text-sm font-medium">{t('footer.newsletterDesc') as string}</p>
            <div className="flex bg-white/5 rounded-[1.5rem] p-1.5 ring-1 ring-white/10 focus-within:ring-white/30 transition-all">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder') as string}
                className="flex-1 bg-transparent border-none px-4 text-sm focus:ring-0 outline-none font-bold"
              />
              <button
                className="px-6 py-3 rounded-2xl font-black text-xs tracking-widest hover:brightness-110 transition-all shadow-lg"
                style={{ backgroundColor: accentColor }}
              >
                {t('footer.join') as string}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5">
          <div className="mb-3">
            <div className="border-t border-white/10 pt-2 mb-2"></div>
            <p className="text-gray-400 text-xs font-medium">
              {t('footer.legal') as string}
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
              {t('footer.copyright') as string}
            </p>
            <div className="flex gap-10 text-[10px] text-gray-600 font-black uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-white transition-colors">{t('footer.privacy') as string}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.terms') as string}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
