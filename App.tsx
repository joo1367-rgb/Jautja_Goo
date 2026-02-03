import React, { useState, useEffect } from 'react';
import { Product, BlogPost, SiteSettings } from './types';
import { INITIAL_PRODUCTS, INITIAL_BLOGS, DEFAULT_SETTINGS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogSection from './components/BlogSection';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import FeaturedProduct from './components/FeaturedProduct';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('jautja_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });
  const [blogs] = useState<BlogPost[]>(INITIAL_BLOGS);
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('jautja_settings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  const representativeProduct = products.find((p) => p.id === 'representative-01') || products[0];

  useEffect(() => {
    localStorage.setItem('jautja_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('jautja_settings', JSON.stringify(settings));
  }, [settings]);

  return (
    <div className="min-h-screen selection:bg-pink-100">
      <Header
        brandName={settings.brandName}
        accentColor={settings.accentColor}
        onAdminToggle={() => setIsAdminOpen(true)}
        isAdmin={isAdminOpen}
      />

      <main>
        <Hero accentColor={settings.accentColor} />

        <FeaturedProduct
          product={representativeProduct}
          accentColor={settings.accentColor}
        />

        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative rounded-[4rem] overflow-hidden bg-black h-[480px] flex items-center group">
              <img
                src="https://images.unsplash.com/photo-1520170350707-b2da59970118?auto=format&fit=crop&q=80&w=1500"
                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110"
                alt="Banner"
              />
              <div className="relative z-10 p-10 md:p-24 max-w-3xl">
                <span className="font-black text-xs tracking-[0.4em] uppercase mb-5 block" style={{ color: settings.accentColor }}>
                  Elevate Your Content
                </span>
                <h3 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
                  Your Journey <br /> Starts Here
                </h3>
                <p className="text-gray-300 text-xl mb-10 font-medium leading-relaxed">
                  전문가용 장비부터 입문용 세트까지, <br /> 당신의 방송 퀄리티를 한 단계 높여드립니다.
                </p>
                <button
                  className="px-12 py-5 text-white rounded-full font-black uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-2xl"
                  style={{ backgroundColor: settings.accentColor }}
                >
                  지금 시작하기
                </button>
              </div>
            </div>
          </div>
        </section>

        <BlogSection
          posts={blogs}
          accentColor={settings.accentColor}
        />
      </main>

      <Footer
        brandName={settings.brandName}
        accentColor={settings.accentColor}
      />

      {isAdminOpen && (
        <AdminDashboard
          onClose={() => setIsAdminOpen(false)}
          settings={settings}
          setSettings={setSettings}
          products={products}
          setProducts={setProducts}
        />
      )}
    </div>
  );
};

export default App;
