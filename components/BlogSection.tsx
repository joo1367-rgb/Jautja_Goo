import React from 'react';
import { BlogPost } from '../types';

interface BlogSectionProps {
  posts: BlogPost[];
  accentColor: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts, accentColor }) => {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black mb-4 tracking-tighter">Inside the Studio</h3>
          <p className="text-gray-500 font-medium">방송 전문가들의 팁과 리뷰를 확인하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer">
              <div className="w-full md:w-40 h-40 rounded-3xl overflow-hidden shrink-0">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center">
                <time className="text-xs font-black tracking-widest mb-3" style={{ color: accentColor }}>{post.date}</time>
                <h4 className="text-2xl font-black mb-4 leading-tight hover:opacity-70 transition-opacity">{post.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button
                  className="text-xs font-black tracking-widest uppercase border-b-2 pb-1 self-start transition-all"
                  style={{ borderColor: 'black', color: 'black' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accentColor;
                    e.currentTarget.style.color = accentColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'black';
                    e.currentTarget.style.color = 'black';
                  }}
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
