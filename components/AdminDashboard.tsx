import React, { useState } from 'react';
import { Product, SiteSettings } from '../types';
import { Settings, Package, X, Save, Trash2, Plus } from 'lucide-react';

interface AdminDashboardProps {
  onClose: () => void;
  settings: SiteSettings;
  setSettings: (s: SiteSettings) => void;
  products: Product[];
  setProducts: (p: Product[]) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onClose,
  settings,
  setSettings,
  products,
  setProducts,
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'settings'>('settings');

  const addProduct = () => {
    const newProduct: Product = {
      id: Date.now().toString(),
      name: '새로운 상품',
      price: 0,
      category: 'Audio Interface',
      description: '상품 설명을 입력하세요',
      imageUrl: 'https://images.unsplash.com/photo-1598449356475-b9f71db7d847',
      isNew: true,
      isFeatured: false,
    };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, ...updates } : p)));
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        <div className="p-10 border-b flex items-center justify-between bg-gray-50">
          <div>
            <h2 className="text-3xl font-black tracking-tighter">Admin Control</h2>
            <p className="text-sm text-gray-500 mt-1">사이트 실시간 커스터마이징</p>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-white rounded-full transition-all hover:rotate-90">
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-5 text-xs font-black tracking-widest flex items-center justify-center gap-3 transition-all ${activeTab === 'settings' ? 'border-b-4' : 'text-gray-400'}`}
            style={{
              color: activeTab === 'settings' ? settings.accentColor : undefined,
              borderColor: activeTab === 'settings' ? settings.accentColor : 'transparent',
            }}
          >
            <Settings className="w-4 h-4" /> THEME SETTINGS
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`flex-1 py-5 text-xs font-black tracking-widest flex items-center justify-center gap-3 transition-all ${activeTab === 'content' ? 'border-b-4' : 'text-gray-400'}`}
            style={{
              color: activeTab === 'content' ? settings.accentColor : undefined,
              borderColor: activeTab === 'content' ? settings.accentColor : 'transparent',
            }}
          >
            <Package className="w-4 h-4" /> CMS (PRODUCTS)
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-12 bg-white">
          {activeTab === 'settings' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-4">
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-gray-400">Brand Name</label>
                <input
                  type="text"
                  value={settings.brandName}
                  onChange={(e) => setSettings({ ...settings, brandName: e.target.value })}
                  className="w-full p-5 bg-gray-50 border-2 border-transparent rounded-2xl outline-none font-bold focus:border-pink-300"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-gray-400">Hero Section Title</label>
                <input
                  type="text"
                  value={settings.heroTitle}
                  onChange={(e) => setSettings({ ...settings, heroTitle: e.target.value })}
                  className="w-full p-5 bg-gray-50 border-none rounded-2xl outline-none font-bold"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-gray-400">Hero Subtitle</label>
                <textarea
                  value={settings.heroSubtitle}
                  onChange={(e) => setSettings({ ...settings, heroSubtitle: e.target.value })}
                  className="w-full p-5 bg-gray-50 border-none rounded-2xl outline-none h-32 font-medium"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-gray-400">Accent Color</label>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <input
                      type="color"
                      value={settings.accentColor}
                      onChange={(e) => setSettings({ ...settings, accentColor: e.target.value })}
                      className="w-20 h-20 rounded-[2rem] cursor-pointer border-none p-0 overflow-hidden shadow-lg"
                    />
                  </div>
                  <span className="font-mono text-xl font-black">{settings.accentColor.toUpperCase()}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-xl">Product List ({products.length})</h3>
                <button
                  onClick={addProduct}
                  className="flex items-center gap-2 px-6 py-3 text-white rounded-xl font-black text-sm transition-all hover:scale-105"
                  style={{ backgroundColor: settings.accentColor }}
                >
                  <Plus className="w-5 h-5" /> 상품 추가
                </button>
              </div>

              <div className="grid gap-6">
                {products.map((product) => (
                  <div key={product.id} className="p-8 border-none rounded-[2rem] space-y-6 bg-gray-50 relative group transition-all hover:shadow-lg">
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="absolute top-6 right-6 p-2 text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-6 h-6" />
                    </button>

                    <div className="flex gap-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white shrink-0 shadow-sm">
                        <img src={product.imageUrl} className="w-full h-full object-cover" alt={product.name} />
                      </div>
                      <div className="flex-1 space-y-3">
                        <input
                          className="w-full bg-transparent font-black text-xl outline-none"
                          value={product.name}
                          onChange={(e) => updateProduct(product.id, { name: e.target.value })}
                        />
                        <input
                          className="w-full bg-transparent text-xs text-gray-400 outline-none font-medium"
                          value={product.imageUrl}
                          onChange={(e) => updateProduct(product.id, { imageUrl: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Price</label>
                        <input
                          type="number"
                          className="w-full p-4 border-none rounded-xl bg-white shadow-inner font-bold"
                          value={product.price}
                          onChange={(e) => updateProduct(product.id, { price: parseInt(e.target.value) || 0 })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Category</label>
                        <select
                          className="w-full p-4 border-none rounded-xl bg-white shadow-inner font-bold appearance-none cursor-pointer"
                          value={product.category}
                          onChange={(e) => updateProduct(product.id, { category: e.target.value as Product['category'] })}
                        >
                          <option value="Audio Interface">오디오 인터페이스</option>
                          <option value="Speaker">스피커</option>
                          <option value="Microphone">마이크</option>
                          <option value="Accessory">액세서리</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-10 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="w-full py-5 text-white rounded-[2rem] font-black tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl hover:brightness-105 transition-all"
            style={{ backgroundColor: settings.accentColor }}
          >
            <Save className="w-6 h-6" /> SAVE & CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
