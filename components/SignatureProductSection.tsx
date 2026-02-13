import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import {
  Smartphone,
  Battery,
  Mic2,
  Monitor,
  Award,
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
  Users,
  Globe,
} from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

interface SignatureProductSectionProps {
  product: Product;
  accentColor: string;
}

const BENEFIT_ICONS = [Smartphone, Battery, Mic2, Monitor];
const BADGE_ICONS = [Award, ShieldCheck, ShieldCheck];
const TRUST_ICONS = [Award, Globe, Users, CheckCircle2];

const SignatureProductSection: React.FC<SignatureProductSectionProps> = ({ product, accentColor }) => {
  const { t } = useTranslation();
  const benefits = (t('home.signature.benefits') as { label: string; desc: string }[]) || [];
  const badges = (t('home.signature.badges') as { label: string }[]) || [];
  const trustItems = (t('home.signature.trustItems') as { label: string; desc: string }[]) || [];

  const imageUrl = product.imageUrl.startsWith('http')
    ? product.imageUrl
    : `${import.meta.env.BASE_URL}${product.imageUrl}`;
  const detailUrl = product.smartStoreUrl || '/shop';

  return (
    <section
      id="signature-product"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: `linear-gradient(165deg, ${accentColor}08 0%, ${accentColor}04 40%, transparent 70%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block font-black text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ color: accentColor }}
          >
            Signature Product
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight max-w-2xl mx-auto leading-tight mb-5">
            {t('home.signature.mainTitle') as string}
          </h2>
          <p className="text-gray-600 font-medium text-lg md:text-xl leading-relaxed max-w-xl mx-auto whitespace-pre-line">
            {t('home.signature.subDescription') as string}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-[50%] flex justify-center">
            <div className="relative group">
              <div
                className="absolute -inset-4 rounded-[3rem] opacity-20 blur-2xl transition-opacity group-hover:opacity-30"
                style={{ backgroundColor: accentColor }}
              />
              <div className="relative rounded-[2.5rem] bg-white p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden">
                <img
                  src={imageUrl}
                  alt={product.name}
                  className="w-full max-w-md mx-auto h-auto object-contain aspect-square"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%] space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item, i) => {
                const Icon = BENEFIT_ICONS[i];
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg hover:border-gray-200 transition-all"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${accentColor}18` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: accentColor }} />
                    </div>
                    <div>
                      <p className="font-black text-gray-900 mb-1">{item.label}</p>
                      <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-3">
              <p className="text-sm font-bold text-gray-600">
                {t('home.signature.patentLine') as string}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {badges.map((item, i) => {
                  const Icon = BADGE_ICONS[i];
                  return (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <Icon className="w-5 h-5 text-gray-500" />
                      <span className="text-sm font-bold text-gray-700">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={detailUrl}
                target={detailUrl.startsWith('http') ? '_blank' : undefined}
                rel={detailUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-white text-sm tracking-wider shadow-xl hover:scale-[1.02] transition-transform"
                style={{ backgroundColor: accentColor }}
              >
                {t('home.signature.ctaProduct') as string}
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-gray-200">
          <p
            className="text-center font-black text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color: accentColor }}
          >
            {t('home.signature.whyTitle') as string}
          </p>
          <h3 className="text-center text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-12">
            {t('home.signature.whyHeading') as string}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <div
                  key={item.label}
                  className="text-center p-6 rounded-2xl bg-white/80 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${accentColor}18` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: accentColor }} />
                  </div>
                  <p className="font-black text-gray-900 mb-1">{item.label}</p>
                  <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {t('home.signature.learnMore') as string}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureProductSection;
