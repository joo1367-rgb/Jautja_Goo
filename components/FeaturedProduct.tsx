import React from 'react';
import { Product } from '../types';
import { CheckCircle2, ShoppingCart } from 'lucide-react';

interface FeaturedProductProps {
  product: Product;
  accentColor: string;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product, accentColor }) => {
  const features = [
    '고해상도 24bit / 192kHz 오디오 컨버팅',
    '스마트폰 완벽 호환 (C-type & Lightning)',
    '실시간 무지연 하드웨어 모니터링',
    '고성능 마이크 프리앰프 내장',
    '야외 사용을 위한 대용량 배터리',
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div className="w-full lg:w-1/2 relative lg:-mt-6">
            <div
              className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-[60px] opacity-30"
              style={{ backgroundColor: accentColor }}
            ></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square lg:aspect-[4/3] bg-gray-50 border border-gray-100">
              <img
                src={product.imageUrl.startsWith('http') ? product.imageUrl : `${import.meta.env.BASE_URL}${product.imageUrl}`}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-xl shadow-lg border border-white/50">
                <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-0.5">BEST SELLER</span>
                <span className="text-lg font-black" style={{ color: accentColor }}>자웃자 시그니처</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <span className="font-black text-[10px] tracking-[0.4em] uppercase mb-3 block" style={{ color: accentColor }}>
                Signature Collection
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-relaxed mb-5" style={{ letterSpacing: '2pt' }}>
                {product.name}
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5 py-5 border-y border-gray-100">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: accentColor }} />
                  <span className="text-xs font-bold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="flex-1 w-full">
                <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">Price</span>
                <p className="text-3xl font-black">₩{product.price.toLocaleString()}</p>
              </div>
              <button
                className="w-full sm:w-auto px-8 py-4 text-white rounded-full font-black text-sm tracking-widest flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-all"
                style={{ backgroundColor: accentColor }}
              >
                <ShoppingCart className="w-4 h-4" /> 바로 구매하기
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 font-bold tracking-tight">
                <span className="text-black">1,240+명의</span> 크리에이터가 선택한 장비
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
