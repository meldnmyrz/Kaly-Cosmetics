export type ReportTabId =
  | 'resumen'
  | 'metodologia'
  | 'metricas'
  | 'arquitectura'
  | 'diseno';

export interface SurveyBarMetric {
  label: string;
  value: number;
  percentage: number;
  detail: string;
}

export interface MerchandiseRow {
  product: string;
  brand: string;
  unitCost: number;
  qty: number;
  totalCost: number;
  costWithOverhead: number;
  profit20: number;
  salePrice: number;
}

export interface ColorToken {
  name: string;
  hex: string;
  role: string;
  usage: string;
  darkText?: boolean;
}

export interface BibliographyGroup {
  category: string;
  entries: Array<{
    num: number;
    citation: string;
  }>;
}
