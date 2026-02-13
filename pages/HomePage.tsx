import React from 'react';
import Hero from '../components/Hero';
import SignatureProductSection from '../components/SignatureProductSection';
import MediaSection from '../components/MediaSection';
import { Product, BlogPost, SiteSettings, MediaVideo } from '../types';

interface HomePageProps {
  representativeProduct: Product;
  blogs: BlogPost[];
  videos: MediaVideo[];
  settings: SiteSettings;
}

const HomePage: React.FC<HomePageProps> = ({ representativeProduct, blogs, videos, settings }) => {
  return (
    <main className="pt-20">
      <Hero accentColor={settings.accentColor} />
      <SignatureProductSection product={representativeProduct} accentColor={settings.accentColor} />
      <MediaSection
        pressArticles={blogs.filter((p) => p.source).slice(0, 2)}
        videos={videos}
        accentColor={settings.accentColor}
        variant="light"
        onlyVideos
      />
    </main>
  );
};

export default HomePage;
