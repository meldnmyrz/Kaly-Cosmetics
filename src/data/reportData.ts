import { ColorToken, MerchandiseRow, SurveyBarMetric } from '../types/report';

export const PROJECT_META = {
  institution: 'Universidad Tecnológica Cadereyta',
  title: 'Reporte Técnico de Proyecto Integrador: Kaly Cosmetic’s',
  team: '73TSUM4N',
  leader: 'Lic. Nancy Evelyn López Velarde Paz',
  advisors: [
    'Lic. Carlos Cristóbal Juárez Mendoza',
    'MC. Jessica Yadhira Guzman Muñoz',
    'Lic. Lucero de los Ángeles Nájera Lira',
  ],
  date: '3 de diciembre de 2026',
  region: 'Cadereyta Jiménez y Los Ramones, Nuevo León',
  sampleSize: 108,
  targetAge: '18 a 24 años (con alcance ampliado 15–35 años)',
};

export const EXECUTIVE_HIGHLIGHTS = [
  {
    label: 'Muestra Encuestada',
    value: '108',
    suffix: 'personas',
    detail: 'Cadereyta Jiménez (55) y Los Ramones (34) + otros municipios',
  },
  {
    label: 'Disposición de Precio',
    value: '72%',
    suffix: 'del mercado',
    detail: 'Dispuesto a pagar $100–$350 en maquillaje y $150–$400 en skincare',
  },
  {
    label: 'Frecuencia Mensual',
    value: '48%',
    suffix: 'recompra',
    detail: 'Realiza compras de belleza mensualmente; canales top: IG y TikTok',
  },
  {
    label: 'Margen Comercial',
    value: '20%',
    suffix: 'utilidad base',
    detail: 'Calculado sobre costo fijo ($77.49) + variable ($3.00) por pieza',
  },
];

export const SURVEY_PROGRESS_BARS: SurveyBarMetric[] = [
  {
    label: 'Participación Femenina (86 de 108)',
    value: 86,
    percentage: 80,
    detail: '86 respuestas femeninas vs. 16 masculinas y 6 otros/no especificado',
  },
  {
    label: 'Aceptación de Rango de Precios Kaly ($100–$400)',
    value: 78,
    percentage: 72,
    detail: '72% dispuesto a pagar $100–$350 maquillaje y $150–$400 skincare',
  },
  {
    label: 'Rango de Edad Núcleo (19–23 años)',
    value: 57,
    percentage: 53,
    detail: 'Seguido de 24–29 años con 25 respuestas (23%)',
  },
  {
    label: 'Factor Decisivo #1: Calidad del Producto',
    value: 53,
    percentage: 49,
    detail: 'Superando a precio (31), ingredientes (31) y marca reconocida (30)',
  },
  {
    label: 'Frecuencia de Compra Mensual',
    value: 52,
    percentage: 48,
    detail: 'Demanda recurrente que favorece kits y reposición de skincare',
  },
];

export const PURCHASE_DRIVERS_DATA = [
  { factor: 'Calidad', respuestas: 53 },
  { factor: 'Precio', respuestas: 31 },
  { factor: 'Ingredientes', respuestas: 31 },
  { factor: 'Marca', respuestas: 30 },
];

export const CHANNELS_DATA = [
  { canal: 'Instagram Reels', menciones: 38, color: '#B58681' },
  { canal: 'TikTok', menciones: 37, color: '#141312' },
  { canal: 'Recomendaciones', menciones: 33, color: '#8C6B5D' },
];

export const SKIN_TYPE_DATA = [
  { tipo: 'Piel Mixta', personas: 39 },
  { tipo: 'Piel Grasa', personas: 31 },
  { tipo: 'Normal / Seca / Sensible', personas: 38 },
];

export const BUDGET_SPEND_DATA = [
  { rango: '$200 - $500', participantes: 28 },
  { rango: '$500 - $800', participantes: 31 },
  { rango: 'Más de $800', participantes: 39 },
];

export const SALES_PROJECTION_DATA = [
  { mes: 'Mes 1', ingresos: 14200, utilidad: 2840, pedidos: 24 },
  { mes: 'Mes 2', ingresos: 18600, utilidad: 3720, pedidos: 31 },
  { mes: 'Mes 3', ingresos: 24400, utilidad: 4880, pedidos: 39 },
  { mes: 'Mes 4', ingresos: 29800, utilidad: 5960, pedidos: 47 },
  { mes: 'Mes 5', ingresos: 36500, utilidad: 7300, pedidos: 56 },
  { mes: 'Mes 6', ingresos: 44200, utilidad: 8840, pedidos: 68 },
];

export const CONVERSION_FUNNEL_DATA = [
  { etapa: 'Alcance TikTok & Reels', usuarios: 2400, tasa: '100%' },
  { etapa: 'Visitas al Catálogo Web', usuarios: 680, tasa: '28.3%' },
  { etapa: 'Vista de Producto & Swatches', usuarios: 340, tasa: '14.2%' },
  { etapa: 'Agregado al Carrito', usuarios: 148, tasa: '6.2%' },
  { etapa: 'Pedido Confirmado', usuarios: 68, tasa: '2.8%' },
];

export const FINANCIAL_SUMMARY = {
  fixedCosts: [
    { item: 'Sueldo operativo', amount: 3612 },
    { item: 'Internet comercial', amount: 500 },
    { item: 'Luz', amount: 100 },
    { item: 'Agua', amount: 50 },
  ],
  totalFixed: 4262,
  variableCosts: [
    { item: 'Costo de mercancía (55 piezas)', amount: 10295.72 },
    { item: 'Gastos de envío / logística', amount: 50 },
    { item: 'Empaquetado por pieza ($2)', amount: 2 },
    { item: 'Etiquetado por pieza ($1)', amount: 1 },
  ],
  totalVariable: 10348.72,
  totalPieces: 55,
  fixedPerPiece: 77.49,
  variablePerPiece: 3.0,
  overheadPerPiece: 80.49,
  marginPercent: 20,
};

export const MERCHANDISE_TABLE: MerchandiseRow[] = [
  { product: 'Máscara de pestañas', brand: 'Maybelline', unitCost: 184.66, qty: 3, totalCost: 553.98, costWithOverhead: 265.15, profit20: 36.93, salePrice: 302.08 },
  { product: 'Base Fit Me', brand: 'Maybelline', unitCost: 153.63, qty: 3, totalCost: 460.89, costWithOverhead: 234.12, profit20: 30.73, salePrice: 264.85 },
  { product: 'Base Super Stay', brand: 'Maybelline', unitCost: 221.22, qty: 4, totalCost: 884.88, costWithOverhead: 301.71, profit20: 44.24, salePrice: 345.95 },
  { product: 'Corrector Hydrating Camo', brand: 'e.l.f.', unitCost: 147.48, qty: 5, totalCost: 737.4, costWithOverhead: 227.97, profit20: 29.5, salePrice: 257.47 },
  { product: 'Primer Power Grip', brand: 'e.l.f.', unitCost: 184.35, qty: 2, totalCost: 368.7, costWithOverhead: 264.84, profit20: 36.87, salePrice: 301.71 },
  { product: 'Blush en barra', brand: 'Pixi', unitCost: 221.22, qty: 1, totalCost: 221.22, costWithOverhead: 301.71, profit20: 44.24, salePrice: 345.95 },
  { product: 'Gloss Glow Reviver', brand: 'e.l.f.', unitCost: 165.92, qty: 6, totalCost: 995.52, costWithOverhead: 246.41, profit20: 33.18, salePrice: 279.59 },
  { product: 'Polvo Suelto Airspun', brand: 'Airspun', unitCost: 251.61, qty: 5, totalCost: 1258.05, costWithOverhead: 246.41, profit20: 50.32, salePrice: 296.73 },
  { product: 'Blush Buttermelt', brand: 'NYX', unitCost: 181.35, qty: 3, totalCost: 544.05, costWithOverhead: 261.84, profit20: 36.27, salePrice: 298.11 },
  { product: 'Blush líquido Camo', brand: 'e.l.f.', unitCost: 147.48, qty: 4, totalCost: 589.92, costWithOverhead: 227.97, profit20: 29.5, salePrice: 257.47 },
  { product: 'Hidratante Holy Hydration', brand: 'e.l.f. Skin', unitCost: 92.17, qty: 8, totalCost: 737.36, costWithOverhead: 172.66, profit20: 18.43, salePrice: 191.09 },
  { product: 'Gel de cejas Brow Glue', brand: 'NYX', unitCost: 184.35, qty: 3, totalCost: 553.05, costWithOverhead: 264.84, profit20: 36.87, salePrice: 301.71 },
  { product: "Tinta Infallible L'Oréal", brand: "L'Oréal", unitCost: 276.53, qty: 2, totalCost: 553.06, costWithOverhead: 357.02, profit20: 55.31, salePrice: 412.33 },
  { product: 'Labial Matte XXL', brand: 'NYX', unitCost: 221.22, qty: 2, totalCost: 442.44, costWithOverhead: 301.71, profit20: 44.24, salePrice: 345.95 },
  { product: 'Brochas Real Techniques', brand: 'Real Techniques', unitCost: 348.8, qty: 4, totalCost: 1395.2, costWithOverhead: 429.29, profit20: 69.76, salePrice: 499.05 },
];

export const COLOR_TOKENS: ColorToken[] = [
  { name: 'Negro Carbón', hex: '#141312', role: 'Primario / CTAs', usage: 'Botones rectos, barra superior, badges NUEVO y métricas' },
  { name: 'Blanco Editorial', hex: '#FFFFFF', role: 'Fondo Principal', usage: 'Lienzo limpio de catálogo, fichas de producto y tablas', darkText: true },
  { name: 'Marfil Cálido', hex: '#FAF7F5', role: 'Navbar & Footer', usage: 'Cabecera fija, pie de página y paneles de lectura', darkText: true },
  { name: 'Piedra Seda', hex: '#F6F4F2', role: 'Cards de Producto', usage: 'Fondo neutro de estudio para resaltar cosméticos', darkText: true },
  { name: 'Rosa Blush', hex: '#F4E3E0', role: 'Banners & Beneficios', usage: 'Banners duales de colección y tarjetas editoriales', darkText: true },
  { name: 'Rosa Empolvado', hex: '#EBD7D4', role: 'Club VIP & Acento Suave', usage: 'Banda de suscripción VIP y contenedores destacados', darkText: true },
  { name: 'Rose Gold Kaly', hex: '#B58681', role: 'Identidad de Marca', usage: 'Logotipo K A L Y, estados activos y serie principal KPI' },
  { name: 'Bronce Taupe', hex: '#8C6B5D', role: 'Acento Editorial', usage: 'Contraste cálido de campaña y gráficas secundarias' },
  { name: 'Gris Taupe', hex: '#6E6561', role: 'Texto Secundario', usage: 'Subtítulos de marca, ingredientes y notas técnicas' },
  { name: 'Línea Arena', hex: '#E8DFDC', role: 'Bordes 1px', usage: 'Divisores finos y bordes de inputs editoriales', darkText: true },
];
