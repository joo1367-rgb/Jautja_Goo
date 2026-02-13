import { Product, BlogPost, SiteSettings, MediaVideo } from './types';

/** 상품/설정 데이터 구조가 바뀌면 숫자를 올리면 예전 localStorage는 무시되고 constants 기준으로 다시 로드됩니다 */
export const DATA_VERSION = 6;

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'representative-01',
    name: '자웃자 외장형 오디오 인터페이스 USB-C 휴대용 방송 장비 스마트폰 PC 녹음 에코지원',
    price: 189000,
    category: 'Audio Interface',
    description: '스마트폰 전용 고성능 믹서와 오디오 인터페이스가 하나로. 야외 방송 및 버스킹에 최적화된 자웃자의 대표 시그니처 모델입니다.',
    imageUrl: 'product-01.png',
    smartStoreUrl: 'https://smartstore.naver.com/jautja_official/products/7805138909',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: '콘덴서 마이크 3.5mm XLR 케이블 포함 방송 녹음 강의 유튜브용 고감도 마이크',
    price: 159000,
    category: 'Microphone',
    description: '방송·녹음·강의·유튜브용 고감도 콘덴서 마이크, 3.5mm XLR 케이블 포함',
    imageUrl: 'product-02.png',
    smartStoreUrl: 'https://smartstore.naver.com/jautja_official/products/10080247723',
    isNew: false,
    isFeatured: true,
  },
  {
    id: '3',
    name: '탁상용 핸드폰 거치대 책상용 스마트폰 스탠드 촬영 방송 항공샷 각도 조절 자웃자is',
    price: 19900,
    category: 'Accessory',
    description: '촬영·방송·항공샷용 각도 조절 가능한 탁상용 스마트폰 거치대',
    imageUrl: 'product-03.png',
    smartStoreUrl: 'https://smartstore.naver.com/jautja_official/products/10530594355',
    isNew: false,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'OTG 충전 케이블 방송 녹음용 오디오 인터페이스 호환 고음질 & 스마트폰 동시 충전',
    price: 18900,
    category: 'Adaptor',
    description: '노이즈를 최소화한 금도금 커넥터 케이블',
    imageUrl: 'product-04.png',
    smartStoreUrl: 'https://smartstore.naver.com/jautja_official/products/8641106325',
    isNew: false,
    isFeatured: false,
  },
  {
    id: '5',
    name: '30m 장거리 3.5mm 무선 이어폰 고음질 저지연 자웃자pq',
    price: 189000,
    category: 'Earphone',
    description: '상품 설명을 입력하세요',
    imageUrl: 'product-05.png',
    smartStoreUrl: 'https://smartstore.naver.com/jautja_official/products/8641106325',
    isNew: false,
    isFeatured: false,
  },
  {
    id: '6',
    name: '턱고정 유선 이어폰 마이크 내장 3.5mm 줄이어폰 라이브방송 게임 음악 감상',
    price: 15900,
    category: 'Earphone',
    description: '상품 설명을 입력하세요',
    imageUrl: 'product-06.png',
    smartStoreUrl: 'https://smartstore.naver.com/jautja_official/products/8641106325',
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
  {
    id: 'b3',
    title: '뉴스 기사 1',
    date: '2024.02.12',
    excerpt: '자웃자 관련 뉴스 기사입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    url: 'https://www.it-b.co.kr/news/articleView.html?idxno=59992',
  },
  {
    id: 'b4',
    title: '뉴스 기사 2',
    date: '2024.02.12',
    excerpt: '자웃자 관련 뉴스 기사입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800',
    url: 'https://www.kbanker.co.kr/news/articleView.html?idxno=212883',
  },
];

/** 미디어 섹션용 유튜브 영상 (영상 ID는 유튜브 공유용 11자 ID로 교체) */
export const DEFAULT_VIDEOS: MediaVideo[] = [
  { id: 'BCEgLvfrwvA', title: '자웃자 사용설명' },
  { id: 'bGedA7GNqtQ', title: 'KT에서 만든 자웃자 광고' },
  { id: 'yisqdOoNJjg', title: '실사용 영상' },
];

export const DEFAULT_SETTINGS: SiteSettings = {
  brandName: 'JAUTJA',
  accentColor: '#E279B9',
  heroTitle: 'Master the Sound of Your Life',
  heroSubtitle: '크리에이터를 위한 최고의 오디오 솔루션, 자웃자의 혁신을 경험하세요.',
};
