import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  FileText,
  ClipboardList,
  BarChart3,
  Calculator,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { PROJECT_META } from '../data/reportData';
import { ProductCard } from '../components/ui/ProductCard';
import { ExecutiveSummaryTab } from '../components/report/ExecutiveSummaryTab';
import { MethodologyTab } from '../components/report/MethodologyTab';
import { SurveyDataTab } from '../components/report/SurveyDataTab';
import { FinanceAnnexTab } from '../components/report/FinanceAnnexTab';

type HomeReportSection = 'resumen' | 'metodologia' | 'encuesta' | 'finanzas';

const REPORT_TABS: Array<{
  id: HomeReportSection;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
}> = [
  { id: 'resumen', label: 'Resumen & Marco Teórico', shortLabel: 'Resumen', icon: FileText },
  { id: 'metodologia', label: 'Metodología & Bibliografía', shortLabel: 'Metodología', icon: ClipboardList },
  { id: 'encuesta', label: 'Encuesta Real (n = 108)', shortLabel: 'Encuesta', icon: BarChart3 },
  { id: 'finanzas', label: 'Presupuesto & Costos (55 pzs)', shortLabel: 'Costos', icon: Calculator },
];

const HERO_SLIDES = [
  {
    eyebrow: 'KALY COSMETIC’S · CADEREYTA & LOS RAMONES, N.L.',
    title: 'La Belleza Comienza Contigo',
    subtitle:
      'Maquillaje original importado y skincare K-Beauty con Centella Asiática, diseñado para revelar tu brillo natural a precios accesibles.',
    ctaLabel: 'Explorar Colección',
    ctaTo: '/tienda',
    secondaryLabel: 'Ver Datos del Proyecto',
    secondaryTo: '#proyecto-integrador',
    image: '/images/hero-glow.jpg',
  },
  {
    eyebrow: 'BELLEZA INTEGRAL · SKINCARE + MAQUILLAJE',
    title: 'Piel Sana, Maquillaje Bonito',
    subtitle:
      'Desde hidratantes y ampollas calmantes hasta bases y glosses virales en TikTok entre $191 y $499 MXN.',
    ctaLabel: 'Descubrir Skincare',
    ctaTo: '/tienda?categoria=Skincare',
    secondaryLabel: 'Ver Encuesta & Costos',
    secondaryTo: '#proyecto-integrador',
    image: '/images/hero-glow.jpg',
  },
];

const POPULAR_CATEGORIES = [
  {
    title: 'Maquillaje',
    subtitle: 'Bases, correctores y rubores',
    image: '/images/catalog/cat-12.jpg',
    to: '/tienda?categoria=Rostro',
  },
  {
    title: 'Skincare K-Beauty',
    subtitle: 'Centella, Anua y COSRX',
    image: '/images/catalog/cat-30.jpg',
    to: '/tienda?categoria=Skincare',
  },
  {
    title: 'Labios',
    subtitle: 'e.l.f. Gloss, NYX Fat Oil',
    image: '/images/catalog/cat-21.jpg',
    to: '/tienda?categoria=Labios',
  },
  {
    title: 'Ojos & Cejas',
    subtitle: 'Sky High & Brow Glue',
    image: '/images/catalog/cat-01.jpg',
    to: '/tienda?categoria=Ojos',
  },
];

export const HomePage: React.FC = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<HomeReportSection>('resumen');
  const currentSlide = HERO_SLIDES[slideIdx];
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);

  const prevSlide = () =>
    setSlideIdx((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  const nextSlide = () =>
    setSlideIdx((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));

  return (
    <div className="animate-fade-in bg-white">
      {/* 1. Serene Editorial Hero */}
      <section className="relative min-h-[500px] w-full overflow-hidden bg-[#C7A1A7] sm:min-h-[560px]">
        <img
          src={currentSlide.image}
          alt="Campaña editorial Kaly Cosmetic's"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5D3F44]/85 via-[#8B6269]/45 to-transparent" />

        <div className="relative mx-auto flex min-h-[500px] max-w-6xl items-center px-6 py-16 sm:min-h-[560px] sm:px-10">
          <div className="max-w-lg">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F7E3E6]">
              {currentSlide.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-5xl font-normal leading-[1.06] text-white sm:text-6xl">
              {currentSlide.title}
            </h1>
            <p className="mt-4 text-sm font-light leading-relaxed text-[#FDF6F7] sm:text-[15px]">
              {currentSlide.subtitle}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to={currentSlide.ctaTo}
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF4F5] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4E353A] transition-all hover:bg-white"
              >
                {currentSlide.ctaLabel}
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href={currentSlide.secondaryTo}
                className="inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/10 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#4E353A]"
              >
                {currentSlide.secondaryLabel}
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={prevSlide}
          aria-label="Slide anterior"
          className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/35 sm:flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Siguiente slide"
          className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/35 sm:flex"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </section>

      {/* 2. Clean White Bestsellers Section (matching "Our Bestsellers" reference) */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8747C]">
            Curaduría Kaly Cosmetic’s
          </p>
          <h2 className="mt-1.5 font-serif text-4xl font-normal text-[#2A2324] sm:text-[42px]">
            Nuestros Más Vendidos
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/tienda" className="btn-editorial-outline">
            Ver Catálogo Completo ({PRODUCTS.length} productos)
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* 3. Dusty-Mauve Editorial Feature Band — Portada Real Proyecto Integrador UTC */}
      <section className="bg-[#DFC2C7] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6E444B]">
              {PROJECT_META.institution} · {PROJECT_META.date}
            </p>
            <h2 className="mt-2 font-serif text-4xl font-medium leading-tight text-[#2A2324] sm:text-[44px]">
              Proyecto Integrador: {PROJECT_META.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4A3A3D]">
              Investigación de mercados aplicada a jóvenes de <strong>18 a 24 años</strong> en{' '}
              <strong>{PROJECT_META.region}</strong> para evaluar la demanda real de maquillaje
              importado y skincare K-Beauty, respaldada por una encuesta digital de{' '}
              <strong>108 participantes</strong> y presupuesto oficial de{' '}
              <strong>55 piezas</strong>.
            </p>

            <div className="mt-5 space-y-1.5 text-xs text-[#4A3A3D]">
              <p>
                <strong>Presentan (Equipo):</strong>{' '}
                <span className="font-mono">{PROJECT_META.team}</span> ·{' '}
                <strong>Líder:</strong> {PROJECT_META.leader}
              </p>
              <p>
                <strong>Asesores:</strong> {PROJECT_META.advisors.join(' · ')}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#proyecto-integrador"
                onClick={() => setActiveTab('encuesta')}
                className="btn-editorial-primary bg-[#8F5C64] hover:bg-[#774951]"
              >
                Ver Encuesta (n = 108)
              </a>
              <a
                href="#proyecto-integrador"
                onClick={() => setActiveTab('finanzas')}
                className="inline-flex items-center gap-2 rounded-full bg-white/85 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4E353A] transition-colors hover:bg-white"
              >
                Ver Presupuesto Real
              </a>
            </div>
          </div>

          {/* Right: 4 Clean White Real-Data Cards */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-6">
            <div className="rounded-lg bg-white/95 p-6 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8747C]">
                Encuesta Real
              </p>
              <p className="mt-2 font-serif text-4xl text-[#2A2324]">108</p>
              <p className="mt-1 text-xs text-[#7D6E71]">
                55 en Cadereyta Jiménez y 34 en Los Ramones
              </p>
            </div>
            <div className="rounded-lg bg-white/95 p-6 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8747C]">
                Rango Validado
              </p>
              <p className="mt-2 font-serif text-4xl text-[#2A2324]">72%</p>
              <p className="mt-1 text-xs text-[#7D6E71]">
                Paga $100–$350 maquillaje y $150–$400 skincare
              </p>
            </div>
            <div className="rounded-lg bg-white/95 p-6 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8747C]">
                Recompra Mensual
              </p>
              <p className="mt-2 font-serif text-4xl text-[#2A2324]">48%</p>
              <p className="mt-1 text-xs text-[#7D6E71]">
                Descubrimiento líder en Instagram Reels y TikTok
              </p>
            </div>
            <div className="rounded-lg bg-white/95 p-6 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8747C]">
                Lote & Margen Real
              </p>
              <p className="mt-2 font-serif text-4xl text-[#2A2324]">55 pzs</p>
              <p className="mt-1 text-xs text-[#7D6E71]">
                Mercancía $10,295.72 · Fijos $4,262 · Margen 20%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full Real Project Report Integrated Cleanly on White */}
      <section id="proyecto-integrador" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8747C]">
            Documentación Oficial · Datos Reales del Proyecto
          </p>
          <h2 className="mt-1.5 font-serif text-4xl font-normal text-[#2A2324]">
            Reporte Técnico, Encuesta y Presupuesto
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-[#7D6E71]">
            Explora cada capítulo de la investigación de Kaly Cosmetic’s, las gráficas reales de las
            108 encuestas y el costeo exacto del lote de 55 piezas.
          </p>
        </div>

        {/* Soft Pill Navigation Tabs */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          role="tablist"
          aria-label="Secciones del Reporte Técnico de Kaly Cosmetic's"
        >
          {REPORT_TABS.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                  active
                    ? 'bg-[#A8747C] text-white shadow-sm'
                    : 'border border-[#EADCE0] bg-[#FCF8F9] text-[#5F5053] hover:border-[#A8747C] hover:text-[#2A2324]'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active Real-Data Tab Panel */}
        <div className="mt-8">
          {activeTab === 'resumen' && <ExecutiveSummaryTab />}
          {activeTab === 'metodologia' && <MethodologyTab />}
          {activeTab === 'encuesta' && <SurveyDataTab />}
          {activeTab === 'finanzas' && <FinanceAnnexTab />}
        </div>
      </section>

      {/* 5. Soft Blush Editorial Story + Collections Band (matching pale-pink Nura Beauty band) */}
      <section id="comunidad" className="bg-[#F7E5E8] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8E5D65]">
                <Sparkles className="h-3.5 w-3.5" />
                Diferenciador Comprobado
              </div>
              <h2 className="mt-2 font-serif text-3xl font-medium text-[#2A2324] sm:text-4xl">
                ¿Lista para una Rutina Completa de Piel Sana + Maquillaje?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5F5053]">
                El mercado de skincare creció <strong>45% en México</strong> en los últimos 3 años
                (Statista, 2023). En Kaly combinamos maquillaje viral con cuidado facial calmante
                para piel mixta, grasa y sensible.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-[#4E4244]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#A8747C]" />
                  Productos 100% originales importados de EE. UU. y K-Beauty
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#A8747C]" />
                  Asesoría por tipo de piel y entregas locales en Cadereyta y Los Ramones
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/tienda?categoria=Skincare" className="btn-editorial-primary">
                  Explorar Skincare
                </Link>
                <Link to="/tienda?categoria=Labios" className="btn-editorial-outline bg-white/60">
                  Explorar Labios
                </Link>
              </div>
            </div>

            {/* Clean 4-tile Real Catalog Category Showcase */}
            <div className="grid grid-cols-2 gap-4 lg:col-span-7">
              {POPULAR_CATEGORIES.map((cat) => (
                <Link
                  key={cat.title}
                  to={cat.to}
                  className="group flex flex-col overflow-hidden rounded-lg border border-[#EFE0E3] bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex aspect-[4/3] w-full items-center justify-center bg-white p-4">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="border-t border-[#F4EAEC] bg-[#FCF8F9] px-4 py-3 text-center">
                    <p className="font-serif text-lg font-medium text-[#2A2324]">{cat.title}</p>
                    <p className="text-[11px] text-[#7D6E71]">{cat.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
