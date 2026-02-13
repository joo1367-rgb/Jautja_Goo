import React from 'react';
import { BlogPost, MediaVideo } from '../types';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

interface MediaSectionProps {
  pressArticles: BlogPost[];
  videos: MediaVideo[];
  accentColor: string;
  variant?: 'light' | 'dark';
  onlyVideos?: boolean;
}

const MediaSection: React.FC<MediaSectionProps> = ({ pressArticles, videos, accentColor, variant = 'dark', onlyVideos = false }) => {
  const { t } = useTranslation();
  const isLight = variant === 'light';

  /* 1) Hero = SHOP 상단과 동일 배경 2) "방송 장비의 신뢰" + Press = 더 진한 회색 한 블록 3) Videos 구분 */
  const heroBg = isLight ? 'bg-gray-50' : 'bg-[#0d0d0d]';
  const contentBg = isLight ? 'bg-gray-100' : 'bg-[#141414]';
  const videosBg = isLight ? 'bg-white' : 'bg-[#0d0d0d]';
  /* 홈에서만 Videos일 때: Signature Product와 구분되도록 연한 회색 */
  const videosSectionBg = onlyVideos && isLight ? 'bg-gray-50' : videosBg;
  const sectionPadding = 'py-20 md:py-28';

  /* Videos 섹션만 (홈용) */
  const videosBlock = (
    <section className={`${videosSectionBg} ${sectionPadding} ${isLight ? 'text-gray-900' : 'text-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-sm font-black tracking-[0.25em] uppercase mb-8" style={{ color: accentColor }}>
          {t('media.videos') as string}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`rounded-2xl overflow-hidden ${isLight ? 'bg-white border border-gray-200 shadow-sm' : 'bg-black border border-white/10'}`}
            >
              <div className="relative w-full aspect-video bg-gray-900">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title || 'YouTube video'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              {video.title && (
                <p className={`p-4 text-sm font-medium border-t ${isLight ? 'text-gray-700 border-gray-100' : 'text-gray-300 border-white/5'}`}>
                  {video.title}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  if (onlyVideos) {
    return (
      <div id="media" className="overflow-hidden">
        {videosBlock}
      </div>
    );
  }

  return (
    <div id="media" className="overflow-hidden">
      {/* 1. Hero – 소개/상품과 동일 min-height·세로 중앙 정렬 */}
      <section className={`${heroBg} min-h-[20rem] flex flex-col justify-center py-14 md:py-20 ${isLight ? 'text-gray-900' : 'text-white'}`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p
            className="font-black text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color: accentColor }}
          >
            {t('media.hero.label') as string}
          </p>
          <h2 className="text-5xl font-black tracking-tighter mb-4">{t('media.hero.title') as string}</h2>
          <p className={`font-medium ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            {t('media.hero.subtitle') as string}
          </p>
        </div>
      </section>

      {/* 2·3. "방송 장비의 신뢰" + Press – 진한 회색 한 블록, padding으로 첫 섹션과 구분 */}
      <section className={`${contentBg} pt-20 md:pt-28 pb-20 md:pb-28 ${isLight ? 'text-gray-900' : 'text-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              {t('media.trust.heading') as string}
            </h3>
            <p className={`font-medium max-w-xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              {t('media.trust.subtitle') as string}
            </p>
          </div>
          <h4 className="text-sm font-black tracking-[0.25em] uppercase mb-8" style={{ color: accentColor }}>
            {t('media.press.label') as string}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pressArticles.slice(0, 2).map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block rounded-2xl p-6 transition-all duration-300 ${
                  isLight
                    ? 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg'
                    : 'bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>{article.source}</span>
                  <time className={`text-xs font-medium ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>{article.date}</time>
                </div>
                <h4 className={`text-lg md:text-xl font-bold mb-3 leading-snug group-hover:opacity-90 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  {article.title}
                </h4>
                <p className={`text-sm leading-relaxed line-clamp-2 mb-4 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: accentColor }}>
                  {t('media.press.readArticle') as string}
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Videos */}
      {videosBlock}
    </div>
  );
};

export default MediaSection;
