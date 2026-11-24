import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Sparkles,
  Heart,
  Truck,
  FileText,
  ClipboardList,
  BarChart3,
  Calculator,
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

const VALUE_PILLARS = [
  {
    icon: Sparkles,
    title: 'Ingredientes Limpios',
    desc: 'Fórmulas gentiles y seguras',
  },
  {
    icon: ShieldCheck,
    title: '100% Originales',
    desc: 'Marcas importadas verificadas',
  },
  {
    icon: Heart,
    title: 'Tendencia Viral',
    desc: 'Favoritos de TikTok e Instagram',
  },
  {
    icon: Truck,
    title: 'Envíos Seguros',
    desc: 'Cadereyta, Los Ramones y MX',
  },
];

const POPULAR_CATEGORIES = [
  {
    title: 'MAQUILLAJE',
    image: '/images/cat-maquillaje.jpg',
    to: '/tienda?categoria=Rostro',
  },
  {
    title: 'SKINCARE',
    image: '/images/cat-skincare.jpg',
    to: '/tienda?categoria=Skincare',
  },
  {
    title: 'LABIOS',
    image: '/images/cat-labios.jpg',
    to: '/tienda?categoria=Labios',
  },
  {
    title: 'SETS & BROCHAS',
    image: '/images/cat-ojos.jpg',
    to: '/tienda?categoria=Herramientas',
  },
];

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<HomeReportSection>('resumen');
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <div className="animate-fade-in bg-white">
      {/* 1. Lúmé-style Split Editorial Hero */}
      <section className="w-full overflow-hidden bg-[#F7E3E0]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
          {/* Left Portrait */}
          <div className="relative min-h-[340px] sm:min-h-[430px] lg:col-span-6 lg:min-h-[500px]">
            <img
              src="/images/hero-glow.jpg"
              alt="Kaly Cosmetic's — Belleza Luminosa"
              className="h-full w-full object-cover object-[76%_center]"
            />
          </div>

          {/* Right Soft Blush Typography Block */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-[#F7E3E0] px-8 py-14 sm:px-14 lg:col-span-6 lg:px-16">
            {/* Subtle cosmetic texture accent on far right */}
            <img
              src="/images/cat-labios.jpg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full object-cover opacity-25 mix-blend-multiply xl:block"
            />

            <div className="relative z-10 max-w-md">
              <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8E6562]">
                Nueva Colección · Kaly Cosmetic’s
              </p>

              <h1 className="mt-3 font-display text-4xl font-semibold uppercase leading-[1.06] tracking-[-0.01em] text-[#141312] sm:text-5xl lg:text-[52px]">
                Brilla.
                <br />
                Define.
                <br />
                Tú.
              </h1>

              <p className="mt-5 text-[13px] leading-relaxed text-[#574D4A] sm:text-sm">
                Belleza sin esfuerzo con maquillaje original importado y skincare K-Beauty
                seleccionado para piel sana y luminosa todos los días.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link to="/tienda" className="btn-editorial-primary px-8 py-3.5">
                  Comprar Ahora
                </Link>
                <a
                  href="#proyecto-integrador"
                  className="btn-editorial-outline px-6 py-3.5"
                >
                  Proyecto UTC
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Minimalist 4-Column Thin-Icon Value Bar */}
      <section className="border-b border-[#EFE9E7] bg-[#FAF4F2] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0 text-[#6E6663]" strokeWidth={1.35} />
                <div>
                  <h2 className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#141312]">
                    {pillar.title}
                  </h2>
                  <p className="mt-0.5 text-[11px] text-[#7D7470]">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Single Horizontal Row: MÁS VENDIDOS (exact Lúmé Beauty layout) */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-lg font-bold uppercase tracking-[0.12em] text-[#141312] sm:text-xl">
            Más Vendidos
          </h2>
          <Link
            to="/tienda"
            className="font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-[#141312] underline underline-offset-4 transition-colors hover:text-[#B5817E]"
          >
            Ver Todo ({PRODUCTS.length})
          </Link>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Dual Side-by-Side Editorial Promo Banners (exact Lúmé "LIPS THAT SPEAK" / "SKIN THAT GLOWS") */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Left Banner: Labios */}
          <div className="group relative min-h-[280px] overflow-hidden bg-[#F3E1DF]">
            <img
              src="/images/banner-lips.jpg"
              alt="Labios que Hablan"
              className="absolute inset-0 h-full w-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F3E1DF] via-[#F3E1DF]/82 to-transparent" />
            <div className="relative flex h-full max-w-[58%] flex-col justify-center p-8 sm:p-10">
              <h3 className="font-display text-2xl font-semibold uppercase leading-[1.12] text-[#141312] sm:text-[28px]">
                Labios que
                <br />
                Hablan
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#574D4A]">
                Alta pigmentación, aceites nutritivos y brillo espejo sin sensación pegajosa.
              </p>
              <div className="mt-5">
                <Link to="/tienda?categoria=Labios" className="btn-editorial-primary px-6 py-2.5">
                  Comprar Labios
                </Link>
              </div>
            </div>
          </div>

          {/* Right Banner: Skincare */}
          <div className="group relative min-h-[280px] overflow-hidden bg-[#F4EFEC]">
            <img
              src="/images/banner-skincare.jpg"
              alt="Piel que Brilla"
              className="absolute inset-0 h-full w-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFEC] via-[#F4EFEC]/86 to-transparent" />
            <div className="relative flex h-full max-w-[58%] flex-col justify-center p-8 sm:p-10">
              <h3 className="font-display text-2xl font-semibold uppercase leading-[1.12] text-[#141312] sm:text-[28px]">
                Piel que
                <br />
                Brilla
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#574D4A]">
                Una piel luminosa empieza con el cuidado adecuado: SKIN1004 Centella, Anua y COSRX.
              </p>
              <div className="mt-5">
                <Link to="/tienda?categoria=Skincare" className="btn-editorial-primary px-6 py-2.5">
                  Comprar Skincare
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CATEGORÍAS POPULARES (exact Lúmé 4-tile strip) */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-lg font-bold uppercase tracking-[0.12em] text-[#141312] sm:text-xl">
          Categorías Populares
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {POPULAR_CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              to={cat.to}
              className="group relative aspect-[16/11] overflow-hidden bg-[#F4EFEC]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#141312]/28 transition-colors duration-300 group-hover:bg-[#141312]/42" />
              <div className="absolute inset-0 flex items-center justify-center p-3 text-center">
                <span className="font-display text-xs font-bold uppercase tracking-[0.22em] text-white sm:text-sm">
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. PROYECTO INTEGRADOR UTC — Full Real Data Executive Report (Architectural Luxury Style) */}
      <section
        id="proyecto-integrador"
        className="border-y border-[#EAE3E0] bg-[#FAF6F4] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* Masthead + 4 Real KPI Boxes */}
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="editorial-badge">
                {PROJECT_META.institution} · {PROJECT_META.date}
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-[#141312] sm:text-3xl">
                Reporte Técnico de Proyecto Integrador: {PROJECT_META.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#574D4A]">
                Estudio real de viabilidad comercial y preferencias de consumo (18 a 24 años) en{' '}
                <strong>{PROJECT_META.region}</strong>. Equipo{' '}
                <strong className="font-mono text-xs text-[#141312]">{PROJECT_META.team}</strong> ·
                Líder: <strong>{PROJECT_META.leader}</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-5 lg:grid-cols-2">
              <div className="border border-[#EAE3E0] bg-white p-4">
                <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#B5817E]">
                  Encuesta Real
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-[#141312]">108</p>
                <p className="text-[11px] text-[#6E6663]">55 Cadereyta · 34 Ramones</p>
              </div>
              <div className="border border-[#EAE3E0] bg-white p-4">
                <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#B5817E]">
                  Rango Aceptado
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-[#141312]">72%</p>
                <p className="text-[11px] text-[#6E6663]">$100–$400 MXN</p>
              </div>
              <div className="border border-[#EAE3E0] bg-[#F7E3E0]/60 p-4">
                <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#8E6562]">
                  Compra Mensual
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-[#141312]">48%</p>
                <p className="text-[11px] text-[#6E6663]">IG Reels & TikTok</p>
              </div>
              <div className="border border-[#141312] bg-[#141312] p-4 text-white">
                <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#EBD7D4]">
                  Lote · Margen
                </p>
                <p className="mt-1 font-display text-2xl font-bold">55 pzs · 20%</p>
                <p className="text-[11px] text-[#CFC7C4]">Mercancía $10,295.72</p>
              </div>
            </div>
          </div>

          {/* 4 Sharp Architectural Tabs */}
          <div
            className="mt-10 grid grid-cols-2 gap-2 border-t border-[#EAE3E0] pt-6 lg:grid-cols-4"
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
                  className={`flex items-center justify-center gap-2 border px-4 py-3.5 transition-all duration-200 ${
                    active
                      ? 'border-[#141312] bg-[#141312] text-white'
                      : 'border-[#E5DDD9] bg-white text-[#141312] hover:border-[#141312]'
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 shrink-0 ${
                      active ? 'text-[#EBD7D4]' : 'text-[#B5817E]'
                    }`}
                  />
                  <span className="hidden font-display text-[10px] font-semibold uppercase tracking-[0.14em] sm:inline">
                    {tab.label}
                  </span>
                  <span className="font-display text-[10px] font-semibold uppercase tracking-[0.14em] sm:hidden">
                    {tab.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Real-Data Report Container */}
          <div className="mt-6 border border-[#EAE3E0] bg-white p-5 sm:p-8">
            {activeTab === 'resumen' && <ExecutiveSummaryTab />}
            {activeTab === 'metodologia' && <MethodologyTab />}
            {activeTab === 'encuesta' && <SurveyDataTab />}
            {activeTab === 'finanzas' && <FinanceAnnexTab />}
          </div>
        </div>
      </section>

      {/* 7. Community Strip (@KALYCOSMETICS.MX — exact Lúmé social strip) */}
      <section id="comunidad" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-[#141312]">
              @KALYCOSMETICS.MX
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#6E6663]">
              Únete a nuestra comunidad en Instagram Reels y TikTok: rutinas de skincare con
              Centella, reseñas reales y tutoriales de maquillaje diario.
            </p>
            <Link to="/tienda" className="btn-editorial-primary mt-5 px-6 py-2.5">
              Explorar Tienda
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-8">
            {[
              '/images/catalog/cat-30.jpg',
              '/images/catalog/cat-21.jpg',
              '/images/catalog/cat-18.jpg',
              '/images/catalog/cat-13.jpg',
            ].map((img, i) => (
              <Link
                key={i}
                to="/tienda"
                className="group flex aspect-square items-center justify-center overflow-hidden border border-[#F0EAE8] bg-white p-4 transition-colors hover:border-[#C69592]"
              >
                <img
                  src={img}
                  alt={`Catálogo Kaly ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
