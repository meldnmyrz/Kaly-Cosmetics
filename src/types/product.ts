export type ProductCategory = 'Rostro' | 'Labios' | 'Ojos' | 'Skincare' | 'Herramientas';

export type ProductFinish = 'Mate' | 'Satinado' | 'Gloss' | 'Natural';

export interface ProductSwatch {
  id: string;
  name: string;
  hex: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  finish: ProductFinish;
  price: number;
  unitCost: number;
  stockQty: number;
  rating: number;
  reviewsCount: number;
  badge?: 'NUEVO' | 'MÁS VENDIDO' | 'VIRAL TIKTOK' | 'SKINCARE';
  shortDescription: string;
  description: string;
  ingredients: string[];
  howToUse: string[];
  skinTypes: string[];
  images: string[];
  swatches: ProductSwatch[];
  isBestseller?: boolean;
  isFeatured?: boolean;
}

export interface ProductFilters {
  category: ProductCategory | 'Todos';
  finish: ProductFinish | 'Todos';
  maxPrice: number;
  search: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
}
