import React from 'react';
import MediaSection from '../components/MediaSection';
import { BlogPost, MediaVideo } from '../types';

interface BlogPageProps {
  posts: BlogPost[];
  videos: MediaVideo[];
  accentColor: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ posts, videos, accentColor }) => {
  const pressArticles = posts.filter((p) => p.source).slice(0, 2);

  return (
    <main className="pt-20">
      <MediaSection
        pressArticles={pressArticles}
        videos={videos}
        accentColor={accentColor}
        variant="light"
      />
    </main>
  );
};

export default BlogPage;
