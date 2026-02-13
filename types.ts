export type Category = 'Audio Interface' | 'Speaker' | 'Microphone' | 'Accessory' | 'Adaptor' | 'Earphone';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  imageUrl: string;
  /** 스마트스토어 상품 페이지 URL (있으면 카드에 링크 버튼 표시) */
  smartStoreUrl?: string;
  isNew: boolean;
  isFeatured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  /** 뉴스/블로그 기사 URL (있으면 클릭 시 해당 링크로 이동) */
  url?: string;
  /** 뉴스 출처 (예: Kbanker, IT-B) */
  source?: string;
}

/** 미디어 섹션용 유튜브 영상 (embed) */
export interface MediaVideo {
  id: string;
  title?: string;
}

export interface SiteSettings {
  brandName: string;
  accentColor: string;
  heroTitle: string;
  heroSubtitle: string;
}
