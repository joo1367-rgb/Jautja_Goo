import { Product, BlogPost, SiteSettings } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'representative-01',
    name: '자웃자 모바일 방송용 오디오 인터페이스 PRO',
    price: 348000,
    category: 'Audio Interface',
    description: '스마트폰 전용 고성능 믹서와 오디오 인터페이스가 하나로. 야외 방송 및 버스킹에 최적화된 자웃자의 대표 시그니처 모델입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1598449356475-b9f71db7d847?auto=format&fit=crop&q=80&w=1200',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: '휴대용 콘덴서 마이크 M1',
    price: 280000,
    category: 'Microphone',
    description: '어디서나 전문가급 보컬 녹음이 가능한 컴팩트 마이크',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '3',
    name: '방송용 모니터 스피커 S5',
    price: 890000,
    category: 'Speaker',
    description: '왜곡 없는 원음 그대로의 사운드를 전달하는 모니터링 시스템',
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800',
    isNew: false,
    isFeatured: true,
  },
  {
    id: '4',
    name: '프리미엄 XLR 케이블 Gold Edition',
    price: 65000,
    category: 'Accessory',
    description: '노이즈를 최소화한 금도금 커넥터 케이블',
    imageUrl: 'https://images.unsplash.com/photo-1583002444634-192a99c926c4?auto=format&fit=crop&q=80&w=800',
    isNew: false,
    isFeatured: false,
  },
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: '야외 방송의 완성: 자웃자 인터페이스 활용법',
    date: '2024.03.20',
    excerpt: '버스킹과 야외 라이브 스트리밍에서 완벽한 사운드를 잡는 노하우를 공개합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'b2',
    title: '오디오 인터페이스 설정으로 음질 개선하기',
    date: '2024.03.10',
    excerpt: '버퍼 사이즈와 샘플 레이트 조절을 통한 지연 없는 녹음 방법.',
    imageUrl: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800',
  },
];

export const DEFAULT_SETTINGS: SiteSettings = {
  brandName: 'JAUTJA',
  accentColor: '#E279B9',
  heroTitle: 'Master the Sound of Your Life',
  heroSubtitle: '크리에이터를 위한 최고의 오디오 솔루션, 자웃자의 혁신을 경험하세요.',
};
