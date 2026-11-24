import {
  BibliographyGroup,
  ColorToken,
  MerchandiseRow,
  SurveyBarMetric,
} from '../types/report';

export const PROJECT_META = {
  institution: 'Universidad Tecnológica Cadereyta',
  documentType: 'Reporte Técnico de Proyecto Integrador',
  title: 'Kaly Cosmetic’s',
  team: '73TSUM4N',
  leader: 'Lic. Nancy Evelyn López Velarde Paz',
  advisors: [
    'Lic. Carlos Cristóbal Juárez Mendoza',
    'MC. Jessica Yadhira Guzman Muñoz',
    'Lic. Lucero de los Ángeles Nájera Lira',
  ],
  participants: [
    'Yareli González Cortez',
    'Damariz Rodríguez Vazquez',
    'Adamaris Gonzalez Lozano',
    'Kenia Montserrat Elizondo Valero',
    'Joselin Hernández Pérez',
    'Lesly Anahi Balderas Leal',
    'Leonardo Jose Ozorio Marroquin',
    'Gael Alberto Oviedo de la Fuente',
    'Rigoberto Ortega Martinez',
    'Ricardo Gregorio Arriaga Guzman',
  ],
  date: '3/12/26',
  region: 'Cadereyta Jiménez y Los Ramones, Nuevo León',
  sampleSize: 108,
  targetAge: '18 a 24 años (población de referencia: 15 a 35 años)',
};

export const EXECUTIVE_HIGHLIGHTS = [
  {
    label: 'Encuesta Digital Real',
    value: '108',
    suffix: 'respuestas',
    detail: 'Cadereyta Jiménez (55), Los Ramones (34) y otros municipios (19)',
  },
  {
    label: 'Disposición de Precio',
    value: '72%',
    suffix: 'aceptación',
    detail: 'Dispuesto a pagar $100–$350 en maquillaje y $150–$400 en skincare',
  },
  {
    label: 'Frecuencia Mensual',
    value: '48%',
    suffix: 'recompra',
    detail: 'Compra mensual recurrente; descubrimiento vía Instagram Reels y TikTok',
  },
  {
    label: 'Lote Inicial Real',
    value: '55',
    suffix: 'piezas',
    detail: 'Inversión mercancía $10,295.72 · Fijos $4,262 · Margen base 20%',
  },
];

export const THEORETICAL_FRAMEWORK = [
  {
    title: 'Emprendimiento y creación de empresas',
    author: 'Shane y Venkataraman (2000)',
    content:
      'El emprendimiento estudia los procesos mediante los cuales se descubren, evalúan y aprovechan oportunidades para crear bienes y servicios. Kaly Cosmetic’s surge de la oportunidad de comercializar maquillaje y skincare originales importados de Estados Unidos en Los Ramones y Cadereyta Jiménez, con variedad, tendencias y compra ágil por redes sociales.',
  },
  {
    title: 'Investigación de mercados',
    author: 'Malhotra (2019)',
    content:
      'Proporciona información sistemática para identificar oportunidades, problemas y necesidades relacionadas con las decisiones de marketing. Mediante encuestas se validan productos con mayor demanda, marcas preferidas, precios accesibles y factores que determinan la compra.',
  },
  {
    title: 'Cuidado de la piel (Skincare) como tendencia',
    author: 'AAD (2022) · Kotler y Keller (2020)',
    content:
      'El skincare pasó a ser una necesidad básica que previene envejecimiento prematuro, acné y daño solar. El consumidor busca productos multifuncionales con resultados visibles; marcas virales en TikTok como CeraVe, La Roche-Posay, The Ordinary y Cetaphil tienen alta demanda y poca oferta local.',
  },
  {
    title: 'Tamaño de la población',
    author: 'Hernández Sampieri et al. (2014)',
    content:
      'Delimitar correctamente la población garantiza resultados válidos. Para Kaly Cosmetic’s se conforma por mujeres y adolescentes de 15 a 35 años residentes en Los Ramones y Cadereyta Jiménez, N.L., consumidoras de maquillaje y skincare en redes sociales (con foco clave en 18–24 años).',
  },
  {
    title: 'Comportamiento del consumidor de belleza integral',
    author: 'Statista (2023)',
    content:
      'El mercado de skincare creció 45% en México en los últimos 3 años, superando al de maquillaje. Las clientas buscan productos originales no irritantes, asesoría según tipo de piel, combos maquillaje + skincare y precio accesible: «piel sana + maquillaje bonito».',
  },
];

export const SOLUTION_ALTERNATIVES = [
  {
    num: '01',
    title: 'Investigación de Mercados Basada en Datos',
    detail:
      'Aplicación de encuestas digitales (n = 108) para definir el catálogo con base en demanda real, tipo de piel y presupuesto, evitando decisiones basadas únicamente en intuición.',
  },
  {
    num: '02',
    title: 'Estrategia de Precios Competitivos (Margen 20%)',
    detail:
      'Análisis de costos de adquisición, prorrateo de costos fijos ($77.49/pz) y variables ($3.00/pz) más comparativa local para lograr precios accesibles con margen sostenible.',
  },
  {
    num: '03',
    title: 'Catálogo Integral Maquillaje + Skincare',
    detail:
      'Stock equilibrado entre maquillaje viral y cuidado facial (especialmente Centella Asiática para piel mixta, grasa y sensible) acompañado de fichas informativas claras.',
  },
  {
    num: '04',
    title: 'Promoción Digital en Instagram & TikTok',
    detail:
      'Catálogo digital, fotografías editoriales, videos cortos de rutinas y kits combinados enlazados directamente desde redes sociales, sin costo de local físico.',
  },
];

export const ACTION_PLAN_STEPS = [
  {
    phase: 'Fase 01',
    title: 'Investigación de Mercado Digital',
    desc: 'Diseño y aplicación de encuestas a jóvenes de Cadereyta Jiménez y Los Ramones sobre gustos, tipo de piel, marcas y presupuesto.',
  },
  {
    phase: 'Fase 02',
    title: 'Selección Curada del Catálogo y Fichas',
    desc: 'Definición de SKUs de maquillaje y skincare con información clara de ingredientes, beneficios y tipo de piel recomendado.',
  },
  {
    phase: 'Fase 03',
    title: 'Análisis de Costos y Precios Competitivos',
    desc: 'Cálculo de costos fijos ($4,262), variables ($10,348.72), comparación de competencia y precio final con margen del 20%.',
  },
  {
    phase: 'Fase 04',
    title: 'Optimización de Instagram y TikTok',
    desc: 'Publicación del catálogo digital, videos cortos explicando rutinas skincare + maquillaje y estrategia visual de atracción.',
  },
  {
    phase: 'Fase 05',
    title: 'Operación 100% En Línea y Control',
    desc: 'Prototipo académico e-commerce de gestión privada sin local físico, con seguimiento continuo de interacción, ventas y mejora de catálogo.',
  },
];

export const SURVEY_RESULTS_CATALOG = {
  makeupProducts: [
    'Correctores',
    'Bases (Fit Me & Super Stay)',
    'Máscara de pestañas (rímel)',
    'Polvo suelto Airspun',
    "Fijador / Tinta Infallible L'Oréal",
    'Rubor en barra Pixi',
    'Brochas Real Techniques',
  ],
  makeupBrands: [
    'e.l.f.',
    'NYX',
    'Maybelline',
    "L'Oréal",
    'Real Techniques',
    'Airspun',
    'Pixi',
    'Moira',
    'Kim Chi Chic',
    'Atenea',
    'Patrick Ta (mención abierta)',
  ],
  skincareProducts: [
    'Sueros hidratantes',
    'Cremas y ampollas con Centella Asiática',
    'Protectores solares',
    'Tónicos faciales',
    'Limpiadores faciales',
  ],
  skincareBrands: [
    'SKIN1004 Centella',
    'CeraVe',
    'La Roche-Posay',
    'The Ordinary',
    'Centella (viral TikTok piel sensible/acné)',
  ],
};

// 100% Real Survey Data (n = 108) from Methodology section B
export const SURVEY_PROGRESS_BARS: SurveyBarMetric[] = [
  {
    label: 'Participación Femenina (86 de 108 encuestados)',
    value: 86,
    percentage: 80,
    detail: '86 respuestas femeninas, 16 masculinas y 6 no especificado/otros.',
  },
  {
    label: 'Aceptación de Rango de Precios ($100–$350 Maq. / $150–$400 Skin.)',
    value: 78,
    percentage: 72,
    detail: '72% del mercado encuestado valida directamente la banda de precios de Kaly.',
  },
  {
    label: 'Grupo Etario Principal: 19 a 23 años (57 de 108)',
    value: 57,
    percentage: 53,
    detail: 'Seguido de 24 a 29 años con 25 respuestas (23%) y otros rangos con 26 (24%).',
  },
  {
    label: 'Residencia en Cadereyta Jiménez (55 de 108)',
    value: 55,
    percentage: 51,
    detail: 'Cadereyta Jiménez (55) + Los Ramones (34) representan el 82% de la muestra total.',
  },
  {
    label: 'Factor Decisivo #1: Calidad del Producto (53 menciones)',
    value: 53,
    percentage: 49,
    detail: 'Por encima de Precio (31), Ingredientes (31) y Marca reconocida (30).',
  },
  {
    label: 'Frecuencia de Compra Mensual Reportada (Resultados)',
    value: 52,
    percentage: 48,
    detail: 'Alta recurrencia ideal para reposición de skincare y kits mensuales.',
  },
];

export const DEMOGRAPHICS_RESIDENCE_DATA = [
  { municipio: 'Cadereyta Jiménez', personas: 55 },
  { municipio: 'Los Ramones', personas: 34 },
  { municipio: 'Otros municipios', personas: 19 },
];

export const DEMOGRAPHICS_AGE_DATA = [
  { rango: '19–23 años', personas: 57 },
  { rango: '24–29 años', personas: 25 },
  { rango: 'Otros rangos', personas: 26 },
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
  { rango: '$200–$500', participantes: 28 },
  { rango: '$500–$800', participantes: 31 },
  { rango: 'Más de $800', participantes: 39 },
];

export const MONTHLY_BUDGET_DATA = [
  { rango: 'Más de $1,000 / mes', participantes: 40 },
  { rango: '$300–$600 / mes', participantes: 30 },
  { rango: 'Otros rangos', participantes: 38 },
];

export const FREQUENCY_SURVEY_DATA = [
  { frecuencia: 'Cada 2–3 meses', personas: 38 },
  { frecuencia: 'Una vez al mes', personas: 29 },
  { frecuencia: 'Otra frecuencia', personas: 41 },
];

export const CONVERSION_FUNNEL_DATA = [
  { etapa: 'Alcance Orgánico Reels & TikTok', usuarios: 2400, tasa: '100%' },
  { etapa: 'Visitas al Catálogo Digital', usuarios: 680, tasa: '28.3%' },
  { etapa: 'Interacción con Fichas & Swatches', usuarios: 340, tasa: '14.2%' },
  { etapa: 'Agregado a Bolsa', usuarios: 148, tasa: '6.2%' },
  { etapa: 'Pedido Confirmado', usuarios: 68, tasa: '2.8%' },
];

// 100% Exact Financial Annex Data (Excel CSV)
export const FINANCIAL_SUMMARY = {
  fixedCosts: [
    { item: 'Sueldo', amount: 3612 },
    { item: 'Internet', amount: 500 },
    { item: 'Luz', amount: 100 },
    { item: 'Agua', amount: 50 },
  ],
  totalFixed: 4262,
  variableCosts: [
    { item: 'Costo de mercancía (55 pzs)', amount: 10295.72 },
    { item: 'Gastos de envío', amount: 50 },
    { item: 'Empaquetado (por pieza)', amount: 2 },
    { item: 'Etiquetado (por pieza)', amount: 1 },
  ],
  totalVariable: 10348.72,
  totalPieces: 55,
  fixedPerPiece: 77.490909090909085,
  variablePerPiece: 3,
  overheadPerPiece: 80.490909090909085,
  marginPercent: 20,
};

export const MERCHANDISE_TABLE: MerchandiseRow[] = [
  { product: 'Máscara de pestañas', brand: 'Maybelline', unitCost: 184.66, qty: 3, totalCost: 553.98, costWithOverhead: 265.1509, profit20: 36.932, salePrice: 302.0829 },
  { product: 'Base Fit Me', brand: 'Maybelline', unitCost: 153.63, qty: 3, totalCost: 460.89, costWithOverhead: 234.1209, profit20: 30.726, salePrice: 264.8469 },
  { product: 'Base Super Stay', brand: 'Maybelline', unitCost: 221.22, qty: 4, totalCost: 884.88, costWithOverhead: 301.7109, profit20: 44.244, salePrice: 345.9549 },
  { product: 'Corrector Elf', brand: 'e.l.f.', unitCost: 147.48, qty: 5, totalCost: 737.4, costWithOverhead: 227.9709, profit20: 29.496, salePrice: 257.4669 },
  { product: 'Primer Elf', brand: 'e.l.f.', unitCost: 184.35, qty: 2, totalCost: 368.7, costWithOverhead: 264.8409, profit20: 36.87, salePrice: 301.7109 },
  { product: 'Blush en barra Pixi', brand: 'Pixi', unitCost: 221.22, qty: 1, totalCost: 221.22, costWithOverhead: 301.7109, profit20: 44.244, salePrice: 345.9549 },
  { product: 'Gloss Elf', brand: 'e.l.f.', unitCost: 165.92, qty: 6, totalCost: 995.52, costWithOverhead: 246.4109, profit20: 33.184, salePrice: 279.5949 },
  { product: 'Polvo Airspun', brand: 'Airspun', unitCost: 251.61, qty: 5, totalCost: 1258.05, costWithOverhead: 246.4109, profit20: 50.322, salePrice: 296.7329 },
  { product: 'Blush Nyx', brand: 'NYX', unitCost: 181.35, qty: 3, totalCost: 544.05, costWithOverhead: 261.8409, profit20: 36.27, salePrice: 298.1109 },
  { product: 'Blush líquido Elf', brand: 'e.l.f.', unitCost: 147.48, qty: 4, totalCost: 589.92, costWithOverhead: 227.9709, profit20: 29.496, salePrice: 257.4669 },
  { product: 'Hidratante Elf', brand: 'e.l.f. Skin', unitCost: 92.17, qty: 8, totalCost: 737.36, costWithOverhead: 172.6609, profit20: 18.434, salePrice: 191.0949 },
  { product: 'Gel de cejas Nyx', brand: 'NYX', unitCost: 184.35, qty: 3, totalCost: 553.05, costWithOverhead: 264.8409, profit20: 36.87, salePrice: 301.7109 },
  { product: "Tinta L'Oréal", brand: "L'Oréal", unitCost: 276.53, qty: 2, totalCost: 553.06, costWithOverhead: 357.0209, profit20: 55.306, salePrice: 412.3269 },
  { product: 'Labial Nyx', brand: 'NYX', unitCost: 221.22, qty: 2, totalCost: 442.44, costWithOverhead: 301.7109, profit20: 44.244, salePrice: 345.9549 },
  { product: 'Brochas Real Techniques', brand: 'Real Techniques', unitCost: 348.8, qty: 4, totalCost: 1395.2, costWithOverhead: 429.2909, profit20: 69.76, salePrice: 499.0509 },
];

export const BIBLIOGRAPHY_GROUPS: BibliographyGroup[] = [
  {
    category: 'Base Teórica: Emprendimiento, Mercadotecnia e Investigación',
    entries: [
      { num: 1, citation: 'Shane, S., & Venkataraman, S. (2000). The promise of entrepreneurship as a field of research. Academy of Management Review, 25(1), 217-226.' },
      { num: 2, citation: 'Malhotra, N. K. (2019). Investigación de mercados: Conceptos esenciales. Pearson Educación.' },
      { num: 3, citation: 'Hernández Sampieri, R., Fernández Collado, C., & Baptista Lucio, P. (2014). Metodología de la investigación (6ª ed.). McGraw-Hill.' },
      { num: 4, citation: 'Kotler, P., & Armstrong, G. (2018). Marketing (17ª ed.). Pearson Educación.' },
      { num: 5, citation: 'Kotler, P., & Keller, K. L. (2020). Dirección de marketing (15ª ed.). Pearson Educación.' },
    ],
  },
  {
    category: 'Skincare y Belleza Integral',
    entries: [
      { num: 6, citation: 'American Academy of Dermatology Association. (2022). Skin care tips. https://www.aad.org/public/everyday-care/skin-care-basics' },
      { num: 7, citation: 'Instituto Nacional de Estadística y Geografía (INEGI). (2020). Censo de Población y Vivienda 2020. https://www.inegi.org.mx' },
      { num: 8, citation: 'Statista. (2023). Beauty & Personal Care - Market report Mexico. https://www.statista.com' },
      { num: 9, citation: 'Draelos, Z. D. (2021). Cosmetic Dermatology: Products and Procedures (3rd ed.). Wiley-Blackwell.' },
      { num: 10, citation: 'Euromonitor International. (2023). Beauty and Personal Care in Mexico. https://www.euromonitor.com' },
    ],
  },
  {
    category: 'K-Beauty y Tendencia Multimarca',
    entries: [
      { num: 11, citation: 'Oh, H., & Hwang, J. (2023). The rise of K-Beauty: Global trends in Korean skincare. Journal of Cosmetic Science, 74(2), 89-102.' },
      { num: 12, citation: 'Ajzen, I. (1991). The theory of planned behavior. Organizational Behavior and Human Decision Processes, 50(2), 179-211.' },
    ],
  },
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
