import React from 'react';
import { Product } from '../types';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

interface ProductGalleryProps {
  products: Product[];
  accentColor: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ products, accentColor }) => {
  const { t } = useTranslation();
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-bold text-sm tracking-widest uppercase" style={{ color: accentColor }}>{t('shop.gallery.label') as string}</span>
            <h3 className="text-5xl font-black tracking-tight mt-2">{t('shop.gallery.title') as string}</h3>
          </div>
          <p className="text-gray-500 max-w-sm font-medium">
            {t('shop.gallery.description') as string}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer bg-white rounded-[1.75rem] overflow-hidden border border-gray-200 shadow-md"
            >
              {/* 이미지 영역: 카드와 동일한 흰색, 여백 최소화, 컴팩트한 높이 */}
              <div className="relative overflow-hidden h-[340px] flex items-center justify-center px-4 py-[30px] bg-white">
                <img
                  src={product.imageUrl.startsWith('http') ? product.imageUrl : `${import.meta.env.BASE_URL}${product.imageUrl}`}
                  alt={product.name}
                  className="max-w-full max-h-full w-auto h-auto object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 group-hover:bg-black/5 transition-colors pointer-events-none" />
                {product.id === 'representative-01' && (
                  <span
                    className="absolute top-5 left-5 px-3.5 py-1.5 text-white text-[10px] font-black tracking-widest rounded-full shadow-lg"
                    style={{ backgroundColor: accentColor }}
                  >
                    HOT
                  </span>
                )}
                {product.isNew && product.id !== 'representative-01' && (
                  <span
                    className="absolute top-5 left-5 px-3.5 py-1.5 text-white text-[10px] font-black tracking-widest rounded-full shadow-lg"
                    style={{ backgroundColor: accentColor }}
                  >
                    NEW
                  </span>
                )}
              </div>
              <div className="px-4 pb-4 pt-1">
                <div className="min-w-0">
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.15em]">{product.category}</span>
                  <h4 className="text-lg font-bold mt-1 line-clamp-2 group-hover:opacity-70 transition-opacity" style={{ color: '#111' }}>{product.name}</h4>
                  <p className="font-black text-lg mt-2">₩{product.price.toLocaleString()}</p>
                </div>
                <a
                  href={product.smartStoreUrl || '#'}
                  target={product.smartStoreUrl ? '_blank' : undefined}
                  rel={product.smartStoreUrl ? 'noopener noreferrer' : undefined}
                  className={`mt-3 inline-flex items-center gap-2 w-full justify-center py-2.5 px-4 rounded-xl text-sm font-bold border border-gray-300 transition-colors ${product.smartStoreUrl ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-400 cursor-not-allowed opacity-70'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!product.smartStoreUrl) e.preventDefault();
                  }}
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  {t('shop.gallery.viewMore') as string}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
