export type Category = 'Audio Interface' | 'Speaker' | 'Microphone' | 'Accessory';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  imageUrl: string;
  isNew: boolean;
  isFeatured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export interface SiteSettings {
  brandName: string;
  accentColor: string;
  heroTitle: string;
  heroSubtitle: string;
}
