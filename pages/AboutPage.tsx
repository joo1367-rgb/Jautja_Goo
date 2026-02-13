import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Heart, ExternalLink } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const PATENT_IMAGE = { src: 'cert-patent.png' };
const TRADEMARK_SRCS = ['cert-tm-kr.png', 'cert-tm-eu.png', 'cert-tm-cn.png', 'cert-tm-jp1.png'];
const CERT_SRCS = ['cert-fcc.png', 'cert-ce.png'];

interface AboutPageProps {
  accentColor: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ accentColor }) => {
  const { t } = useTranslation();
  const trademarkAlts = (t('about.globalTrust.trademark.alts') as string[]) || [];
  const certAlts = (t('about.globalTrust.certification.alts') as string[]) || [];

  return (
    <main className="pt-20 min-h-screen">
      <section className="min-h-[20rem] flex flex-col justify-center py-14 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p
            className="font-black text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color: accentColor }}
          >
            {t('about.hero.label') as string}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.8] mb-6">
            {t('about.hero.title1') as string}
            <br />
            {t('about.hero.title2') as string}
          </h1>
          <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">
            {t('about.hero.subtitle') as string}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p
                className="font-black text-[10px] tracking-[0.35em] uppercase mb-4"
                style={{ color: accentColor }}
              >
                {t('about.brandStory.label') as string}
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-8">
                {t('about.brandStory.heading') as string}
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p className="leading-relaxed">
                  <span className="font-bold" style={{ color: accentColor }}>{t('about.brandStory.p1Bold') as string}</span>
                  {t('about.brandStory.p1Rest') as string}
                </p>
                <p className="leading-relaxed">
                  {t('about.brandStory.p2') as string}
                </p>
                <p className="leading-relaxed">
                  {t('about.brandStory.p3') as string}
                </p>
                <p className="leading-relaxed">
                  {t('about.brandStory.p4') as string}
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={`${import.meta.env.BASE_URL}about-image.png`}
                alt={t('about.brandStory.imageAlt') as string}
                className="w-full max-w-md max-h-[380px] rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-black text-[10px] tracking-[0.4em] uppercase text-gray-500 mb-3">
              {t('about.globalTrust.label') as string}
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              {t('about.globalTrust.heading') as string}
            </h2>
          </div>

          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 p-8 md:p-10 rounded-3xl bg-white backdrop-blur border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="md:w-2/5 shrink-0">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
                  {t('about.globalTrust.patent.label') as string}
                </p>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">
                  {t('about.globalTrust.patent.title') as string}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('about.globalTrust.patent.desc') as string}
                </p>
              </div>
              <div className="md:flex-1 flex justify-center md:justify-end">
                <div className="w-full max-w-[340px] aspect-[4/3] rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={`${import.meta.env.BASE_URL}${PATENT_IMAGE.src}`}
                    alt={t('about.globalTrust.patent.alt') as string}
                    className="max-w-full max-h-full w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
              {t('about.globalTrust.trademark.label') as string}
            </p>
            <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight mb-6">
              {t('about.globalTrust.trademark.title') as string}
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              {t('about.globalTrust.trademark.desc') as string}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TRADEMARK_SRCS.map((src, i) => {
                const fullSrc = `${import.meta.env.BASE_URL}${src}`;
                return (
                  <div
                    key={src}
                    className="aspect-[3/4] rounded-xl bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden flex items-center justify-center p-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img
                      src={fullSrc}
                      alt={trademarkAlts[i] || ''}
                      className="max-w-full max-h-full w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
              {t('about.globalTrust.certification.label') as string}
            </p>
            <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight mb-6">
              {t('about.globalTrust.certification.title') as string}
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              {t('about.globalTrust.certification.desc') as string}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-2xl">
              {CERT_SRCS.map((src, i) => {
                const fullSrc = `${import.meta.env.BASE_URL}${src}`;
                return (
                  <div
                    key={src}
                    className="aspect-[3/4] rounded-xl bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden flex items-center justify-center p-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img
                      src={fullSrc}
                      alt={certAlts[i] || ''}
                      className="max-w-full max-h-full w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <p
            className="font-black text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color: accentColor }}
          >
            {t('about.philosophy.label') as string}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-8">
            {t('about.philosophy.heading') as string}
          </h2>
          <div className="space-y-8">
            {((t('about.philosophy.items') as { title: string; desc: string }[]) || []).map((item, i) => {
              const icons = [Heart, ShieldCheck, Globe];
              const Icon = icons[i];
              return (
                <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${accentColor}18` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: accentColor }} />
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 font-medium mb-6">{t('about.cta.text') as string}</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white shadow-lg hover:opacity-95 transition-opacity"
            style={{ backgroundColor: accentColor }}
          >
            {t('about.cta.button') as string}
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
