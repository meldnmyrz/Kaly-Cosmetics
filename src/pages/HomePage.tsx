import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Truck,
  ArrowRight,
  FileBarChart2,
  Instagram,
  FileText,
  ClipboardList,
  BarChart3,
  Cpu,
  Palette,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { PROJECT_META } from '../data/reportData';
import { ReportTabId } from '../types/report';
import { ProductCard } from '../components/ui/ProductCard';
import { ExecutiveSummaryTab } from '../components/report/ExecutiveSummaryTab';
import { MethodologyTab } from '../components/report/MethodologyTab';
import { MetricsChartsTab } from '../components/report/MetricsChartsTab';
import { ArchitectureTab } from '../components/report/ArchitectureTab';
import { DesignSystemTab } from '../components/report/DesignSystemTab';

const REPORT_TABS: Array<{
  id: ReportTabId;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
}> = [
  { id: 'resumen', label: 'Resumen & Marco Teórico', shortLabel: 'Resumen', icon: FileText },
  { id: 'metodologia', label: 'Metodología & Bibliografía', shortLabel: 'Metodología', icon: ClipboardList },
  { id: 'metricas', label: 'Encuesta (n=108) & Finanzas', shortLabel: 'Finanzas', icon: BarChart3 },
  { id: 'arquitectura', label: 'Arquitectura Web', shortLabel: 'Arquitectura', icon: Cpu },
  { id: 'diseno', label: 'Brand Book UI/UX', shortLabel: 'UI/UX', icon: Palette },
];

const HERO_SLIDES = [
  {
    eyebrow: 'KALY COSMETIC’S · NUEVA COLECCIÓN',
    title: 'REVELA TU BRILLO NATURAL',
    subtitle:
      'Explora nuestra curaduría de maquillaje original importado y skincare K-Beauty diseñado para el clima y estilo de Cadereyta y Los Ramones.',
    ctaLabel: 'Explorar Novedades',
    ctaTo: '/tienda',
    secondaryLabel: 'Ver Reporte Ejecutivo',
    secondaryTo: '/reporte',
    image: '/images/hero-glow.jpg',
  },
  {
    eyebrow: 'BELLEZA INTEGRAL · CENTELLA ASIÁTICA',
    title: 'PIEL SANA, MAQUILLAJE BONITO',
    subtitle:
      'Combina nuestros sueros hidratantes y cremas ligeras con bases y glosses virales en TikTok desde $191 MXN.',
    ctaLabel: 'Descubrir Skincare',
    ctaTo: '/tienda?categoria=Skincare',
    secondaryLabel: 'Ver Catálogo Completo',
    secondaryTo: '/tienda',
    image: '/images/hero-glow.jpg',
  },
];

const VALUE_PILLARS = [
  {
    icon: ShieldCheck,
    title: '100% Originales',
    desc: 'Marcas auténticas de EE. UU. y K-Beauty verificadas.',
  },
  {
    icon: Sparkles,
    title: 'Fórmulas Limpias',
    desc: 'Opciones veganas y amigables con piel mixta o sensible.',
  },
  {
    icon: HeartHandshake,
    title: 'Asesoría Real',
    desc: 'Te ayudamos a elegir tono y rutina para tu tipo de piel.',
  },
  {
    icon: Truck,
    title: 'Envío Gratis +$800',
    desc: 'Entregas locales en Cadereyta, Los Ramones y envíos MX.',
  },
];

const POPULAR_CATEGORIES = [
  {
    title: 'Maquillaje',
    subtitle: 'Bases, correctores y polvos',
    image: '/images/cat-maquillaje.jpg',
    to: '/tienda?categoria=Rostro',
  },
  {
    title: 'Skincare',
    subtitle: 'Centella & hidratación diaria',
    image: '/images/cat-skincare.jpg',
    to: '/tienda?categoria=Skincare',
  },
  {
    title: 'Labios',
    subtitle: 'Glosses, tintas y mates',
    image: '/images/cat-labios.jpg',
    to: '/tienda?categoria=Labios',
  },
  {
    title: 'Ojos & Cejas',
    subtitle: 'Máscaras y gel laminado',
    image: '/images/cat-ojos.jpg',
    to: '/tienda?categoria=Ojos',
  },
];

export const HomePage: React.FC = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const [activeReportTab, setActiveReportTab] = useState<ReportTabId>('resumen');
  const currentSlide = HERO_SLIDES[slideIdx];
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);

  const prevSlide = () =>
    setSlideIdx((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  const nextSlide = () =>
    setSlideIdx((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));

  return (
    <div className="animate-fade-in">
      {/* 1. Editorial Full-Bleed Hero (exact Reference 1 composition) */}
      <section className="relative min-h-[540px] w-full overflow-hidden bg-[#6E5448] sm:min-h-[600px] lg:min-h-[640px]">
        <img
          src={currentSlide.image}
          alt="Campaña editorial Kaly Cosmetic's"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] transition-all duration-700"
        />
        {/* Warm bronze/espresso left readability gradient matching Reference 1 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A3830]/90 via-[#6B5146]/55 to-transparent" />

        <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center px-6 py-20 sm:min-h-[600px] sm:px-10 lg:min-h-[640px] lg:px-14">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#E6BDB5]">
              {currentSlide.eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-5xl font-normal uppercase leading-[1.03] tracking-[0.03em] text-white sm:text-6xl lg:text-[68px]">
              {currentSlide.title}
            </h1>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-[#F5EDE9] sm:text-[15px]">
              {currentSlide.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link to={currentSlide.ctaTo} className="btn-editorial-primary bg-[#141312] px-8">
                {currentSlide.ctaLabel}
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to={currentSlide.secondaryTo}
                className="inline-flex items-center gap-2 border border-white/65 bg-white/10 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#141312]"
              >
                {currentSlide.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>

        {/* Left & Right Carousel Arrows (exact Reference 1 translucent dark squares) */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Slide anterior"
          className="absolute left-3 top-1/2 hidden h-11 w-9 -translate-y-1/2 items-center justify-center bg-[#141312]/35 text-white transition-colors hover:bg-[#141312]/70 sm:flex"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.4} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Siguiente slide"
          className="absolute right-3 top-1/2 hidden h-11 w-9 -translate-y-1/2 items-center justify-center bg-[#141312]/35 text-white transition-colors hover:bg-[#141312]/70 sm:flex"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.4} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSlideIdx(idx)}
              aria-label={`Ir a campaña ${idx + 1}`}
              className={`h-1 transition-all ${
                idx === slideIdx ? 'w-8 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. Value Pillars Bar (exact Reference 3 blush tint bar) */}
      <section className="border-b border-[#E8DFDC] bg-[#FAF2F0] px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#141312] text-white">
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </div>
                <div>
                  <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#141312]">
                    {pillar.title}
                  </h2>
                  <p className="mt-1 text-xs leading-relaxed text-[#6E6561]">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2.5 Reporte Completo del Proyecto Integrador UTC integrado en el Inicio */}
      <section
        id="reporte-proyecto"
        className="border-b border-[#E8DFDC] bg-[#FAF7F5] px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* Masthead */}
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#141312] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#EBD7D4]">
                <FileBarChart2 className="h-3.5 w-3.5" />
                {PROJECT_META.institution} · {PROJECT_META.documentType}
              </div>

              <h2 className="mt-4 font-serif text-3xl font-medium uppercase leading-tight tracking-[0.03em] text-[#141312] sm:text-4xl lg:text-5xl">
                Proyecto Integrador: {PROJECT_META.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[#4E4744]">
                Equipo <strong className="font-mono text-xs text-[#141312]">{PROJECT_META.team}</strong> ·
                Líder: <strong>{PROJECT_META.leader}</strong> · Fecha: {PROJECT_META.date} ·
                Asesores: {PROJECT_META.advisors.join(', ')}.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <Link
                to={`/reporte?tab=${activeReportTab}`}
                className="btn-editorial-outline px-5 py-3"
              >
                Vista Pantalla Completa
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* 5 Interactive Report Tabs right on HomePage */}
          <div
            className="mt-8 grid grid-cols-2 gap-2 border-t border-[#E8DFDC] pt-6 sm:grid-cols-3 lg:grid-cols-5"
            role="tablist"
            aria-label="Secciones del Reporte del Proyecto Integrador"
          >
            {REPORT_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeReportTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveReportTab(tab.id)}
                  className={`flex items-center justify-center gap-2 border px-3 py-3.5 text-left transition-all duration-200 ${
                    isActive
                      ? 'border-[#141312] bg-[#141312] text-white'
                      : 'border-[#E8DFDC] bg-white text-[#141312] hover:border-[#B58681] hover:bg-[#F4E3E0]/35'
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      isActive ? 'text-[#EBD7D4]' : 'text-[#B58681]'
                    }`}
                  />
                  <span className="hidden text-[10px] font-semibold uppercase tracking-[0.12em] xl:inline">
                    {tab.label}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] xl:hidden">
                    {tab.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Full Report Panel */}
          <div className="mt-6 border border-[#E8DFDC] bg-white p-5 sm:p-8">
            {activeReportTab === 'resumen' && <ExecutiveSummaryTab />}
            {activeReportTab === 'metodologia' && <MethodologyTab />}
            {activeReportTab === 'metricas' && <MetricsChartsTab />}
            {activeReportTab === 'arquitectura' && <ArchitectureTab />}
            {activeReportTab === 'diseno' && <DesignSystemTab />}
          </div>
        </div>
      </section>

      {/* 3. Bestsellers Editorial Grid (exact Reference 3 "BEST SELLERS" block) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E8DFDC] pb-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B58681]">
              Favoritos de Nuestra Comunidad
            </p>
            <h2 className="mt-1 font-serif text-3xl font-medium uppercase tracking-[0.04em] text-[#141312] sm:text-4xl">
              Más Vendidos
            </h2>
          </div>
          <Link
            to="/tienda"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#141312] underline underline-offset-4 transition-colors hover:text-[#B58681]"
          >
            Ver todo el catálogo
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Dual Editorial Collection Banners (exact Reference 3 "LIPS THAT SPEAK" & "SKIN THAT GLOWS") */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Banner: Labios */}
          <div className="group relative min-h-[310px] overflow-hidden bg-[#F4E3E0]">
            <img
              src="/images/banner-lips.jpg"
              alt="Colección Labios Kaly Cosmetic's"
              className="absolute inset-0 h-full w-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4E3E0] via-[#F4E3E0]/85 to-transparent" />
            <div className="relative flex h-full max-w-[60%] flex-col justify-center p-8 sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A6C67]">
                e.l.f. · NYX · L’Oréal
              </p>
              <h3 className="mt-2 font-serif text-3xl font-medium uppercase leading-tight text-[#141312] sm:text-4xl">
                Labios que Hablan
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#524945] sm:text-sm">
                Pigmentación editorial, gloss efecto espejo no pegajoso y mates confortables todo el día.
              </p>
              <div className="mt-6">
                <Link to="/tienda?categoria=Labios" className="btn-editorial-primary px-6 py-3">
                  Comprar Labios
                </Link>
              </div>
            </div>
          </div>

          {/* Right Banner: Skincare */}
          <div className="group relative min-h-[310px] overflow-hidden bg-[#F1ECE8]">
            <img
              src="/images/banner-skincare.jpg"
              alt="Colección Skincare Centella Kaly Cosmetic's"
              className="absolute inset-0 h-full w-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F1ECE8] via-[#F1ECE8]/88 to-transparent" />
            <div className="relative flex h-full max-w-[60%] flex-col justify-center p-8 sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C6B5D]">
                SKIN1004 Centella · e.l.f. Skin
              </p>
              <h3 className="mt-2 font-serif text-3xl font-medium uppercase leading-tight text-[#141312] sm:text-4xl">
                Piel que Brilla
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#524945] sm:text-sm">
                Una piel luminosa empieza antes de la base. Rutinas calmantes para piel mixta y sensible.
              </p>
              <div className="mt-6">
                <Link to="/tienda?categoria=Skincare" className="btn-editorial-primary px-6 py-3">
                  Comprar Skincare
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Popular Categories Texture Grid (exact Reference 3 "POPULAR CATEGORIES") */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B58681]">
              Explora por Textura
            </p>
            <h2 className="mt-1 font-serif text-3xl font-medium uppercase tracking-[0.04em] text-[#141312]">
              Categorías Populares
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {POPULAR_CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              to={cat.to}
              className="group relative aspect-square overflow-hidden bg-[#F6F4F2]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#141312]/30 transition-colors duration-300 group-hover:bg-[#141312]/45" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm">
                  {cat.title}
                </span>
                <span className="mt-1.5 text-[11px] font-light text-white/90">
                  {cat.subtitle}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Community Editorial Strip (Reference 3 @kalycosmetics.mx) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 text-[#B58681]">
              <Instagram className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                @KALYCOSMETICS.MX
              </span>
            </div>
            <h2 className="mt-2 font-serif text-3xl text-[#141312]">
              Únete a Nuestra Comunidad en Reels & TikTok
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6E6561]">
              Tutoriales rápidos de rutinas con Centella, comparativas de tonos reales y reseñas
              honestas de tus marcas favoritas.
            </p>
            <Link to="/tienda" className="btn-editorial-outline mt-6">
              Comprar el Look
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-8">
            {[
              '/images/social-editorial.jpg',
              '/images/cat-labios.jpg',
              '/images/cat-skincare.jpg',
              '/images/hero-glow.jpg',
            ].map((img, i) => (
              <Link
                key={i}
                to="/tienda"
                className="group relative aspect-square overflow-hidden bg-[#F6F4F2]"
              >
                <img
                  src={img}
                  alt={`Comunidad Kaly ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#141312]/0 transition-colors duration-300 group-hover:bg-[#141312]/20" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
