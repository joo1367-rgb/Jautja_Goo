import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Product, BlogPost, SiteSettings } from './types';
import { INITIAL_PRODUCTS, INITIAL_BLOGS, DEFAULT_SETTINGS, DEFAULT_VIDEOS, DATA_VERSION } from './constants';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('jautja_products');
    const savedVersion = localStorage.getItem('jautja_data_version');
    if (saved && savedVersion === String(DATA_VERSION)) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_PRODUCTS;
      }
    }
    localStorage.setItem('jautja_data_version', String(DATA_VERSION));
    return INITIAL_PRODUCTS;
  });
  const [blogs, setBlogs] = useState<BlogPost[]>(INITIAL_BLOGS);

  // news.json에서 뉴스 데이터 로드
  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/news.json`);
        if (response.ok) {
          const newsData: BlogPost[] = await response.json();
          // 이미지 URL에 BASE_URL 추가
          const newsWithBaseUrl = newsData.map((news) => ({
            ...news,
            imageUrl: news.imageUrl.startsWith('http') 
              ? news.imageUrl 
              : `${import.meta.env.BASE_URL}${news.imageUrl.replace(/^\//, '')}`,
          }));
          // INITIAL_BLOGS와 병합
          setBlogs([...INITIAL_BLOGS, ...newsWithBaseUrl]);
        }
      } catch (error) {
        console.error('Failed to load news.json:', error);
        // 에러 발생 시 INITIAL_BLOGS만 사용
        setBlogs(INITIAL_BLOGS);
      }
    };
    loadNews();
  }, []);
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('jautja_settings');
    const savedVersion = localStorage.getItem('jautja_data_version');
    if (saved && savedVersion === String(DATA_VERSION)) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_SETTINGS;
      }
    }
    return DEFAULT_SETTINGS;
  });

  const representativeProduct = products.find((p) => p.id === 'representative-01') || products[0];

  useEffect(() => {
    localStorage.setItem('jautja_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('jautja_settings', JSON.stringify(settings));
  }, [settings]);

  return (
    <HashRouter>
      <LanguageProvider>
        <div className="min-h-screen selection:bg-pink-100">
          <Header
            brandName={settings.brandName}
            accentColor={settings.accentColor}
            onAdminToggle={() => setIsAdminOpen(true)}
            isAdmin={isAdminOpen}
          />

          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  representativeProduct={representativeProduct}
                  blogs={blogs}
                  videos={DEFAULT_VIDEOS}
                  settings={settings}
                />
              }
            />
            <Route
              path="/shop"
              element={<ShopPage products={products} accentColor={settings.accentColor} />}
            />
            <Route
              path="/blog"
              element={<BlogPage posts={blogs} videos={DEFAULT_VIDEOS} accentColor={settings.accentColor} />}
            />
            <Route path="/about" element={<AboutPage accentColor={settings.accentColor} />} />
          </Routes>

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
      </LanguageProvider>
    </HashRouter>
  );
};

export default App;
