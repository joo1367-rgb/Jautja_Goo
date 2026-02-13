import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

interface HeroProps {
  accentColor: string;
}

const Hero: React.FC<HeroProps> = ({ accentColor }) => {
  const { t } = useTranslation();
  const description = (t('home.hero.description') as string) || '';
  const lines = description.split('\n');

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1920"
          alt="Studio Microphone"
          className="w-full h-full object-cover opacity-20 grayscale-[30%]"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <span className="inline-block text-[0.7rem] font-light tracking-[0.35em] text-white/90 px-5 py-2 border border-white/30 rounded-full mb-10 uppercase">
          THE STANDARD OF SOUND & VISION
        </span>

        <div className="mb-8 italic">
          <h2 className="text-4xl md:text-6xl font-black tracking-wider text-white uppercase leading-tight">
            LIMITLESS
          </h2>
          <h2
            className="text-5xl md:text-7xl font-black tracking-wider uppercase leading-tight mt-[0.34em]"
            style={{ color: accentColor }}
          >
            BROADCASTING
          </h2>
        </div>

        <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="px-8 py-4 text-white rounded-full font-bold text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: accentColor }}
          >
            {t('home.hero.ctaProduct') as string}
          </a>
          <a
            href="#media"
            className="px-8 py-4 rounded-full font-bold text-sm border-2 border-white/70 text-white transition-all hover:bg-white/10 hover:scale-[1.02]"
          >
            {t('home.hero.ctaNews') as string}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
