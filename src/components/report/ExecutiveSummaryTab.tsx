import React from 'react';
import {
  Target,
  Layers,
  CheckCircle2,
  BookOpen,
  FileText,
  Lightbulb,
  Scale,
} from 'lucide-react';
import {
  PROJECT_META,
  SOLUTION_ALTERNATIVES,
  THEORETICAL_FRAMEWORK,
} from '../../data/reportData';

const SKINCARE_STEPS = [
  { step: '01', name: 'Limpieza', items: 'Jabones, aguas micelares y desmaquillantes' },
  { step: '02', name: 'Preparación', items: 'Tónicos y exfoliantes' },
  { step: '03', name: 'Tratamiento', items: 'Sueros (ácido hialurónico, niacinamida, vitamina C, Centella)' },
  { step: '04', name: 'Hidratación', items: 'Cremas y geles hidratantes' },
  { step: '05', name: 'Protección', items: 'Bloqueador solar diario' },
];

const SPECIFIC_OBJECTIVES = [
  'Identificar los tipos de maquillaje y productos para el cuidado de la piel, así como las marcas de mayor preferencia entre los consumidores de 18 a 24 años de Cadereyta Jiménez.',
  'Determinar el rango de precios que los consumidores están dispuestos a pagar por los productos que ofrecerá Kaly Cosmetic’s.',
  'Conocer la frecuencia, los lugares y los medios que utilizan los consumidores para comprar maquillaje y productos para el cuidado de la piel.',
  'Analizar los factores que influyen en la decisión de compra, como el precio, la calidad, la marca, la presentación y las recomendaciones.',
  'Identificar los canales digitales y comerciales que los consumidores prefieren para conocer, consultar y adquirir este tipo de productos.',
  'Evaluar la demanda potencial y proponer estrategias de promoción y comercialización que favorezcan la introducción de Kaly Cosmetic’s en el mercado de Cadereyta Jiménez.',
];

export const ExecutiveSummaryTab: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Resumen Oficial + Ficha Técnica */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-lg border border-[#F0E3E6] bg-[#FCF8F9] p-7 lg:col-span-7">
          <div className="flex items-center gap-2 text-[#A8747C]">
            <FileText className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Resumen del Proyecto Integrador
            </span>
          </div>
          <h3 className="mt-2 font-serif text-3xl font-medium text-[#2A2324]">
            «Piel sana + maquillaje bonito»
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#5A4C4F]">
            El proyecto integrador <strong>Kaly Cosmetic’s</strong> analiza las preferencias y
            hábitos de compra de los consumidores de <strong>18 a 24 años</strong> de{' '}
            <strong>Cadereyta Jiménez, Nuevo León</strong>, para identificar la demanda potencial
            de productos de maquillaje y cuidado de la piel (skincare), así como establecer
            estrategias comerciales para evaluar la viabilidad del negocio.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#5A4C4F]">
            Mediante metodología de <strong>enfoque mixto</strong>, alcance exploratorio y
            descriptivo, y diseño no experimental transversal (<strong>108 encuestas digitales</strong>),
            se comprobó alto interés por bases, correctores, rímel, sueros hidratantes, cremas con
            Centella Asiática, protectores solares y limpiadores faciales. El{' '}
            <strong>72%</strong> está dispuesto a pagar entre <strong>$100 y $350</strong> por
            maquillaje y entre <strong>$150 y $400</strong> por skincare; el <strong>48%</strong>{' '}
            compra mensualmente y los canales preferidos son <strong>Instagram y TikTok</strong>.
          </p>
        </div>

        <div className="flex flex-col justify-between rounded-lg border border-[#F0E3E6] bg-white p-7 lg:col-span-5">
          <div>
            <div className="flex items-center gap-2 text-[#A8747C]">
              <BookOpen className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                Ficha Institucional
              </span>
            </div>
            <h4 className="mt-2 font-serif text-2xl font-medium text-[#2A2324]">
              {PROJECT_META.institution}
            </h4>
            <p className="mt-1 text-xs text-[#857578]">
              {PROJECT_META.documentType} · {PROJECT_META.date}
            </p>

            <dl className="mt-5 space-y-2.5 border-t border-[#F3E7EA] pt-4 text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-[#7D6E71]">Equipo:</dt>
                <dd className="font-mono font-semibold text-[#2A2324]">{PROJECT_META.team}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#7D6E71]">Líder del Proyecto:</dt>
                <dd className="text-right font-medium text-[#2A2324]">{PROJECT_META.leader}</dd>
              </div>
              <div className="border-t border-[#F7EFF1] pt-2.5">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A8747C]">
                  Asesores
                </dt>
                <dd className="mt-1.5 space-y-1 text-[#4E4244]">
                  {PROJECT_META.advisors.map((advisor) => (
                    <p key={advisor}>• {advisor}</p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-5 rounded-md bg-[#FAF3F4] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8E5D65]">
              Alcance y Delimitación
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#5A4C4F]">
              Idea de negocio desarrollada con fines académicos en planeación, investigación de
              mercado y estrategias comerciales 100% digitales para Los Ramones y Cadereyta
              Jiménez, sin requerir local físico inicial.
            </p>
          </div>
        </div>
      </div>

      {/* Planteamiento, Antecedentes y Justificación */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article className="rounded-lg border border-[#F0E3E6] bg-white p-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8747C]">
            Planteamiento del Problema
          </span>
          <h3 className="mt-1.5 font-serif text-2xl text-[#2A2324]">Reto Comercial Local</h3>
          <p className="mt-2.5 text-xs leading-relaxed text-[#5A4C4F]">
            Ante la alta competencia de marcas y precios en el sector cosmético, Kaly Cosmetic’s
            necesitaba conocer con datos exactos qué productos tienen mayor demanda, qué marcas
            prefiere su público, cuánto están dispuestos a pagar y con qué frecuencia compran para
            definir inventario, precios competitivos y promoción efectiva.
          </p>
        </article>

        <article className="rounded-lg border border-[#F0E3E6] bg-white p-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8747C]">
            Antecedentes
          </span>
          <h3 className="mt-1.5 font-serif text-2xl text-[#2A2324]">Evolución de la Propuesta</h3>
          <p className="mt-2.5 text-xs leading-relaxed text-[#5A4C4F]">
            Nació al detectar la dificultad en Cadereyta Jiménez y Los Ramones para conseguir
            maquillaje original importado de Estados Unidos. Tras investigar proveedores y
            tendencias en Instagram y TikTok, evolucionó incorporando skincare (limpiadores,
            sérums, hidratantes y protectores solares) con entregas personales y venta digital.
          </p>
        </article>

        <article className="rounded-lg border border-[#F0E3E6] bg-white p-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8747C]">
            Justificación
          </span>
          <h3 className="mt-1.5 font-serif text-2xl text-[#2A2324]">Impacto Académico y Local</h3>
          <p className="mt-2.5 text-xs leading-relaxed text-[#5A4C4F]">
            Integra conocimientos reales de administración, mercadotecnia, ventas y emprendimiento,
            al tiempo que ofrece a los consumidores locales una alternativa confiable, variada y
            accesible respaldada en investigación cuantitativa de hábitos y presupuestos.
          </p>
        </article>
      </div>

      {/* Objetivo General y 6 Específicos */}
      <div className="rounded-lg border border-[#F0E3E6] bg-white p-7">
        <div className="flex items-center gap-2 text-[#A8747C]">
          <Target className="h-4 w-4" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            Objetivos del Estudio
          </span>
        </div>
        <h3 className="mt-1.5 font-serif text-3xl text-[#2A2324]">Objetivo General</h3>
        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-[#5A4C4F]">
          Analizar las preferencias, necesidades y hábitos de compra de los consumidores de 18 a 24
          años de Cadereyta Jiménez, Nuevo León, mediante una investigación de mercados de enfoque
          cuantitativo, con la finalidad de identificar la demanda potencial de maquillaje y
          productos para el cuidado de la piel, así como establecer estrategias comerciales que
          permitan evaluar la viabilidad de Kaly Cosmetic’s.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
          {SPECIFIC_OBJECTIVES.map((obj, idx) => (
            <div key={idx} className="rounded-md bg-[#FAF3F4] p-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#A8747C]" />
                <span className="font-mono text-[10px] font-semibold text-[#8E5D65]">
                  OBJETIVO 0{idx + 1}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#5A4C4F]">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marco Teórico Completo */}
      <div className="rounded-lg border border-[#F0E3E6] bg-[#FCF8F9] p-7">
        <div className="flex items-center gap-2 text-[#A8747C]">
          <Scale className="h-4 w-4" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            Marco Teórico Fundamentado
          </span>
        </div>
        <h3 className="mt-1.5 font-serif text-3xl text-[#2A2324]">
          Bases Conceptuales y Tendencia de Belleza Integral
        </h3>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {THEORETICAL_FRAMEWORK.map((item) => (
            <div key={item.title} className="rounded-md border border-[#F0E3E6] bg-white p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A8747C]">
                {item.author}
              </p>
              <h4 className="mt-1.5 font-serif text-xl font-medium text-[#2A2324]">{item.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#5A4C4F]">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Etapas del Skincare + Alternativas de Solución */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-lg bg-[#F7E5E8] p-7 lg:col-span-5">
          <div className="flex items-center gap-2 text-[#8E5D65]">
            <Layers className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Rutina Skincare (AAD, 2022)
            </span>
          </div>
          <h3 className="mt-1.5 font-serif text-2xl text-[#2A2324]">
            Las 5 Etapas Esenciales
          </h3>
          <ol className="mt-4 space-y-2.5">
            {SKINCARE_STEPS.map((s) => (
              <li key={s.step} className="flex items-start gap-3 rounded-md bg-white/85 p-3">
                <span className="font-serif text-xl font-semibold text-[#A8747C]">{s.step}</span>
                <div>
                  <p className="text-xs font-semibold text-[#2A2324]">{s.name}</p>
                  <p className="text-[11px] text-[#6B5A5D]">{s.items}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-lg border border-[#F0E3E6] bg-white p-7 lg:col-span-7">
          <div className="flex items-center gap-2 text-[#A8747C]">
            <Lightbulb className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Estrategia Comercial
            </span>
          </div>
          <h3 className="mt-1.5 font-serif text-2xl text-[#2A2324]">Alternativas de Solución</h3>
          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {SOLUTION_ALTERNATIVES.map((alt) => (
              <div key={alt.num} className="rounded-md bg-[#FAF3F4] p-4">
                <span className="font-serif text-2xl text-[#A8747C]">{alt.num}</span>
                <h4 className="mt-1 text-xs font-semibold text-[#2A2324]">{alt.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#5A4C4F]">{alt.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
