import React from 'react';
import ProductGallery from '../components/ProductGallery';
import { Product } from '../types';
import { useTranslation } from '../i18n/LanguageContext';

interface ShopPageProps {
  products: Product[];
  accentColor: string;
}

const ShopPage: React.FC<ShopPageProps> = ({ products, accentColor }) => {
  const { t } = useTranslation();
  return (
    <main className="pt-20">
      <section className="min-h-[20rem] flex flex-col justify-center py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p
            className="font-black text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color: accentColor }}
          >
            {t('shop.hero.label') as string}
          </p>
          <h1 className="text-5xl font-black tracking-tighter mb-4">{t('shop.hero.title') as string}</h1>
          <p className="text-gray-600 font-medium">{t('shop.hero.subtitle') as string}</p>
        </div>
      </section>
      <ProductGallery products={products} accentColor={accentColor} />
    </main>
  );
};

export default ShopPage;
