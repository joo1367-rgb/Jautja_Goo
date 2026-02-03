import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductGalleryProps {
  products: Product[];
  accentColor: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ products, accentColor }) => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-bold text-sm tracking-widest uppercase" style={{ color: accentColor }}>The Gallery</span>
            <h3 className="text-5xl font-black tracking-tight mt-2">All Products</h3>
          </div>
          <p className="text-gray-500 max-w-sm font-medium">
            최신 트렌드의 오디오 인터페이스와 마이크를 만나보세요. 감각적인 디자인과 탁월한 성능을 보장합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 rounded-[2rem] mb-6">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
                {product.isNew && (
                  <span
                    className="absolute top-8 left-8 px-4 py-1.5 text-white text-[10px] font-black tracking-widest rounded-full shadow-lg"
                    style={{ backgroundColor: accentColor }}
                  >
                    NEW
                  </span>
                )}
                <button
                  className="absolute bottom-8 right-8 w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-2xl hover:text-white"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                >
                  <Plus className="w-7 h-7" />
                </button>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">{product.category}</span>
                  <h4 className="text-xl font-bold mt-1 group-hover:opacity-70 transition-opacity" style={{ color: '#111' }}>{product.name}</h4>
                </div>
                <p className="font-black text-xl">₩{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
