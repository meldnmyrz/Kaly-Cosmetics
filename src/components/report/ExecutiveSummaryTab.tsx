import React from 'react';
import { Sparkles, Target, Compass, Layers, CheckCircle2, BookOpen } from 'lucide-react';
import { EXECUTIVE_HIGHLIGHTS, PROJECT_META } from '../../data/reportData';

const SKINCARE_STEPS = [
  { step: '01', name: 'Limpieza', items: 'Jabones suaves, aguas micelares y desmaquillantes' },
  { step: '02', name: 'Preparación', items: 'Tónicos equilibrantes y exfoliantes gentiles' },
  { step: '03', name: 'Tratamiento', items: 'Sueros activos (Centella, Ácido Hialurónico, Niacinamida)' },
  { step: '04', name: 'Hidratación', items: 'Cremas ligeras y geles para piel mixta/grasa' },
  { step: '05', name: 'Protección', items: 'Protector solar diario de acabado invisible' },
];

const SPECIFIC_OBJECTIVES = [
  'Identificar los tipos de maquillaje, skincare y marcas preferidas por consumidores de 18 a 24 años en Cadereyta Jiménez y Los Ramones.',
  'Determinar el rango de precios óptimo ($100–$350 maquillaje y $150–$400 skincare) con mayor aceptación comercial.',
  'Conocer la frecuencia (48% mensual), puntos de compra y hábitos de reposición en el mercado local.',
  'Evaluar los factores determinantes de compra: calidad (53 menciones), precio (31), ingredientes (31) y marca (30).',
  'Validar Instagram Reels y TikTok como canales principales de descubrimiento, asesoría y catálogo digital.',
  'Proponer estrategias diferenciadoras como kits "Piel Sana + Maquillaje Bonito" sin requerir local físico inicial.',
];

export const ExecutiveSummaryTab: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-12">
      {/* KPI Highlight Strip */}
      <div className="grid grid-cols-1 gap-px border border-[#E8DFDC] bg-[#E8DFDC] sm:grid-cols-2 lg:grid-cols-4">
        {EXECUTIVE_HIGHLIGHTS.map((item) => (
          <div key={item.label} className="bg-white p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B58681]">
              {item.label}
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-serif text-4xl font-medium text-[#141312]">
                {item.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#6E6561]">
                {item.suffix}
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[#6E6561]">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Value Proposition & Institutional Metadata */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="border border-[#E8DFDC] bg-[#FAF7F5] p-8 lg:col-span-7">
          <div className="flex items-center gap-2 text-[#B58681]">
            <Sparkles className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Propuesta de Valor Diferenciadora
            </span>
          </div>
          <h3 className="mt-3 font-serif text-3xl font-medium text-[#141312]">
            «No solo vender un labial: ofrecer piel sana + maquillaje bonito»
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#4E4744]">
            <strong>Kaly Cosmetic’s</strong> nace al detectar una brecha clara en{' '}
            <strong>{PROJECT_META.region}</strong>: la dificultad para conseguir maquillaje
            original importado de Estados Unidos (e.l.f., NYX, Maybelline, L’Oréal, Pixi, Airspun,
            Real Techniques) y skincare viral de K-Beauty (SKIN1004 Centella, CeraVe, The Ordinary)
            a precios accesibles, sin intermediarios costosos ni largos tiempos de espera.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#4E4744]">
            Respaldado por un crecimiento del <strong>45% del mercado skincare en México</strong> en
            los últimos 3 años (Statista, 2023), el modelo combina catálogo digital interactivo,
            asesoría personalizada por tipo de piel (con énfasis en piel mixta y grasa) y difusión
            orgánica en Instagram Reels y TikTok.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#E8DFDC] pt-6 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8C6B5D]">
                Planteamiento del Problema
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#6E6561]">
                Ante un mercado saturado de marcas y precios variables, era indispensable medir con
                datos reales qué productos, tonos, marcas y presupuestos impulsan la intención de
                compra del público joven local.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8C6B5D]">
                Alcance & Metodología
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#6E6561]">
                Enfoque mixto, alcance exploratorio-descriptivo, diseño no experimental y
                transversal con encuesta digital aplicada a <strong>108 participantes</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Card */}
        <div className="flex flex-col justify-between border border-[#E8DFDC] bg-white p-8 lg:col-span-5">
          <div>
            <div className="flex items-center gap-2 text-[#B58681]">
              <BookOpen className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                Ficha Técnica Académica
              </span>
            </div>
            <h4 className="mt-3 font-serif text-2xl font-medium text-[#141312]">
              {PROJECT_META.institution}
            </h4>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#8C6B5D]">
              Proyecto Integrador · {PROJECT_META.date}
            </p>

            <dl className="mt-6 space-y-3 border-t border-[#E8DFDC] pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-[#6E6561]">Equipo:</dt>
                <dd className="font-mono text-xs font-medium text-[#141312]">{PROJECT_META.team}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#6E6561]">Líder del Proyecto:</dt>
                <dd className="text-right font-medium text-[#141312]">{PROJECT_META.leader}</dd>
              </div>
              <div className="border-t border-[#F0E9E6] pt-3">
                <dt className="text-xs uppercase tracking-[0.14em] text-[#8C6B5D]">Asesores</dt>
                <dd className="mt-2 space-y-1 text-xs text-[#141312]">
                  {PROJECT_META.advisors.map((advisor) => (
                    <p key={advisor}>• {advisor}</p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 bg-[#F4E3E0]/60 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
              Delimitación del Prototipo
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#4E4744]">
              E-commerce académico de gestión privada 100% digital: elimina costos de renta de local
              físico y maximiza el margen operativo inicial del 20%.
            </p>
          </div>
        </div>
      </div>

      {/* General & Specific Objectives */}
      <div className="border border-[#E8DFDC] bg-white p-8">
        <div className="flex items-center gap-2 text-[#B58681]">
          <Target className="h-4 w-4" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            Objetivos Estratégicos
          </span>
        </div>
        <h3 className="mt-2 font-serif text-3xl text-[#141312]">Objetivo General</h3>
        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-[#4E4744]">
          Analizar las preferencias, necesidades y hábitos de compra de los consumidores de 18 a 24
          años de Cadereyta Jiménez, Nuevo León, mediante investigación de mercados cuantitativa y
          cualitativa para identificar la demanda potencial de maquillaje y skincare y establecer
          estrategias comerciales que validen la viabilidad de Kaly Cosmetic’s.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SPECIFIC_OBJECTIVES.map((obj, idx) => (
            <div key={idx} className="border border-[#E8DFDC] bg-[#FAF7F5] p-5">
              <div className="flex items-center gap-2 text-[#141312]">
                <CheckCircle2 className="h-4 w-4 text-[#B58681]" />
                <span className="font-mono text-[11px] text-[#8C6B5D]">OBJ-0{idx + 1}</span>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-[#4E4744]">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Stages of Skincare Model from Theoretical Framework */}
      <div className="border border-[#E8DFDC] bg-[#F4E3E0]/40 p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#8C6B5D]">
              <Layers className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                Marco Teórico · Belleza Integral (AAD, 2022)
              </span>
            </div>
            <h3 className="mt-2 font-serif text-3xl text-[#141312]">
              Las 5 Etapas Esenciales del Skincare en Kaly
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-[#141312] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
            <Compass className="h-3.5 w-3.5 text-[#EBD7D4]" />
            Tendencia K-Beauty + Centella
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SKINCARE_STEPS.map((s) => (
            <div key={s.step} className="border border-[#E8DFDC] bg-white p-5">
              <span className="font-serif text-2xl text-[#B58681]">{s.step}</span>
              <h4 className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#141312]">
                {s.name}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#6E6561]">{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
