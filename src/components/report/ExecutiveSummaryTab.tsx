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
      {/* Resumen Oficial + Ficha Institucional */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-md border border-[#EED7DC] border-l-4 border-l-[#B26B7A] bg-gradient-to-br from-[#FDF5F7] to-[#F8E7EB] p-7 lg:col-span-7">
          <div className="flex items-center gap-2 text-[#A85E6E]">
            <FileText className="h-4 w-4" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
              Resumen del Proyecto Integrador
            </span>
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold text-[#3A2328]">
            «Piel sana + maquillaje bonito»
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#5E454B]">
            El proyecto integrador <strong>Kaly Cosmetic’s</strong> analiza las preferencias y
            hábitos de compra de los consumidores de <strong>18 a 24 años</strong> de{' '}
            <strong>Cadereyta Jiménez, Nuevo León</strong>, para identificar la demanda potencial
            de productos de maquillaje y cuidado de la piel (skincare), así como establecer
            estrategias comerciales para evaluar la viabilidad del negocio.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#5E454B]">
            Mediante metodología de <strong>enfoque mixto</strong>, alcance exploratorio y
            descriptivo, y diseño no experimental transversal (<strong>108 encuestas digitales</strong>),
            se comprobó alto interés por bases, correctores, rímel, sueros hidratantes, cremas con
            Centella Asiática, protectores solares y limpiadores faciales. El{' '}
            <strong className="text-[#A85E6E]">72%</strong> está dispuesto a pagar entre{' '}
            <strong>$100 y $350</strong> por maquillaje y entre <strong>$150 y $400</strong> por
            skincare; el <strong className="text-[#A85E6E]">48%</strong> compra mensualmente y los
            canales preferidos son <strong>Instagram y TikTok</strong>.
          </p>
        </div>

        <div className="flex flex-col justify-between rounded-md border border-[#EED7DC] border-t-4 border-t-[#C98E9B] bg-white p-7 lg:col-span-5">
          <div>
            <div className="flex items-center gap-2 text-[#B26B7A]">
              <BookOpen className="h-4 w-4" />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
                Ficha Institucional
              </span>
            </div>
            <h4 className="mt-2 font-display text-lg font-bold uppercase tracking-[0.04em] text-[#3A2328]">
              {PROJECT_META.institution}
            </h4>
            <p className="mt-1 text-xs text-[#7A6167]">
              {PROJECT_META.documentType} · {PROJECT_META.date}
            </p>

            <dl className="mt-5 space-y-2.5 border-t border-[#F3E3E7] pt-4 text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-[#7A6167]">Equipo:</dt>
                <dd className="rounded-sm bg-[#F8E7EB] px-2 py-0.5 font-mono font-semibold text-[#9E5666]">
                  {PROJECT_META.team}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#7A6167]">Líder del Proyecto:</dt>
                <dd className="text-right font-semibold text-[#3A2328]">{PROJECT_META.leader}</dd>
              </div>
              <div className="border-t border-[#F7ECEF] pt-2.5">
                <dt className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#B26B7A]">
                  Asesores
                </dt>
                <dd className="mt-1.5 space-y-1 text-[#5E454B]">
                  {PROJECT_META.advisors.map((advisor) => (
                    <p key={advisor}>• {advisor}</p>
                  ))}
                </dd>
              </div>
              <div className="border-t border-[#F7ECEF] pt-2.5">
                <dt className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#9E5666]">
                  Alumnos Participantes ({PROJECT_META.participants.length})
                </dt>
                <dd className="mt-2 grid grid-cols-1 gap-x-3 gap-y-1 text-[11px] text-[#5E454B] sm:grid-cols-2">
                  {PROJECT_META.participants.map((student) => (
                    <p key={student}>• {student}</p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-5 rounded-sm border-l-2 border-[#B26B7A] bg-[#FBF1F3] p-4">
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#9E5666]">
              Alcance y Delimitación
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#5E454B]">
              Idea de negocio desarrollada con fines académicos en planeación, investigación de
              mercado y estrategias comerciales 100% digitales para Los Ramones y Cadereyta
              Jiménez, sin requerir local físico inicial.
            </p>
          </div>
        </div>
      </div>

      {/* Planteamiento, Antecedentes y Justificación — Soft Rose/Mauve Gradient Trio */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article className="rounded-md border border-[#EED7DC] border-t-4 border-t-[#B26B7A] bg-white p-6">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#B26B7A]">
            01 · Planteamiento
          </span>
          <h3 className="mt-1.5 font-display text-lg font-bold text-[#3A2328]">
            Reto Comercial Local
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-[#5E454B]">
            Ante la alta competencia de marcas y precios en el sector cosmético, Kaly Cosmetic’s
            necesitaba conocer con datos exactos qué productos tienen mayor demanda, qué marcas
            prefiere su público, cuánto están dispuestos a pagar y con qué frecuencia compran para
            definir inventario, precios competitivos y promoción efectiva.
          </p>
        </article>

        <article className="rounded-md border border-[#EED7DC] border-t-4 border-t-[#C98E9B] bg-[#FDF7F8] p-6">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#A86674]">
            02 · Antecedentes
          </span>
          <h3 className="mt-1.5 font-display text-lg font-bold text-[#3A2328]">
            Evolución de la Propuesta
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-[#5E454B]">
            Nació al detectar la dificultad en Cadereyta Jiménez y Los Ramones para conseguir
            maquillaje original importado de Estados Unidos. Tras investigar proveedores y
            tendencias en Instagram y TikTok, evolucionó incorporando skincare (limpiadores,
            sérums, hidratantes y protectores solares) con entregas personales y venta digital.
          </p>
        </article>

        <article className="rounded-md border border-[#EED7DC] border-t-4 border-t-[#D8A5B0] bg-[#FAF0F2] p-6">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#9E5666]">
            03 · Justificación
          </span>
          <h3 className="mt-1.5 font-display text-lg font-bold text-[#3A2328]">
            Impacto Académico y Local
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-[#5E454B]">
            Integra conocimientos reales de administración, mercadotecnia, ventas y emprendimiento,
            al tiempo que ofrece a los consumidores locales una alternativa confiable, variada y
            accesible respaldada en investigación cuantitativa de hábitos y presupuestos.
          </p>
        </article>
      </div>

      {/* Objetivo General y 6 Específicos */}
      <div className="rounded-md border border-[#EED7DC] bg-white p-7">
        <div className="flex items-center gap-2 text-[#B26B7A]">
          <Target className="h-4 w-4" />
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
            Objetivos del Estudio
          </span>
        </div>
        <h3 className="mt-1.5 font-display text-2xl font-bold text-[#3A2328]">Objetivo General</h3>
        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-[#5E454B]">
          Analizar las preferencias, necesidades y hábitos de compra de los consumidores de 18 a 24
          años de Cadereyta Jiménez, Nuevo León, mediante una investigación de mercados de enfoque
          cuantitativo, con la finalidad de identificar la demanda potencial de maquillaje y
          productos para el cuidado de la piel, así como establecer estrategias comerciales que
          permitan evaluar la viabilidad de Kaly Cosmetic’s.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
          {SPECIFIC_OBJECTIVES.map((obj, idx) => (
            <div
              key={idx}
              className="rounded-md border border-[#F0DCE1] bg-gradient-to-br from-[#FDF6F8] to-[#F9EAEF] p-4"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#B26B7A]" />
                <span className="font-mono text-[10px] font-bold text-[#9E5666]">
                  OBJETIVO 0{idx + 1}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#5E454B]">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marco Teórico Completo */}
      <div className="rounded-md border border-[#EED7DC] bg-[#FAF0F2] p-7">
        <div className="flex items-center gap-2 text-[#A85E6E]">
          <Scale className="h-4 w-4" />
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
            Marco Teórico Fundamentado
          </span>
        </div>
        <h3 className="mt-1.5 font-display text-2xl font-bold text-[#3A2328]">
          Bases Conceptuales y Tendencia de Belleza Integral
        </h3>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {THEORETICAL_FRAMEWORK.map((item, idx) => {
            const borderColors = [
              'border-t-[#B26B7A]',
              'border-t-[#C98E9B]',
              'border-t-[#D8A5B0]',
              'border-t-[#9E5666]',
              'border-t-[#C27F8E]',
            ];
            return (
              <div
                key={item.title}
                className={`rounded-md border border-[#EED7DC] border-t-4 bg-white p-5 ${borderColors[idx % borderColors.length]}`}
              >
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#B26B7A]">
                  {item.author}
                </p>
                <h4 className="mt-1.5 font-display text-base font-bold text-[#3A2328]">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#5E454B]">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5 Etapas del Skincare (Soft Dusty-Mauve Blush) + Alternativas de Solución */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-md bg-gradient-to-br from-[#F7DFE4] to-[#EED0D7] p-7 lg:col-span-5">
          <div className="flex items-center gap-2 text-[#8F4D5C]">
            <Layers className="h-4 w-4" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
              Rutina Skincare (AAD, 2022)
            </span>
          </div>
          <h3 className="mt-1.5 font-display text-xl font-bold uppercase tracking-[0.03em] text-[#3A2328]">
            Las 5 Etapas Esenciales
          </h3>
          <ol className="mt-4 space-y-2.5">
            {SKINCARE_STEPS.map((s) => (
              <li
                key={s.step}
                className="flex items-start gap-3 rounded-sm bg-white/90 p-3 shadow-sm"
              >
                <span className="rounded-full bg-[#B26B7A] px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                  {s.step}
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#3A2328]">{s.name}</p>
                  <p className="text-[11px] text-[#6B5056]">{s.items}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-md border border-[#EED7DC] bg-white p-7 lg:col-span-7">
          <div className="flex items-center gap-2 text-[#B26B7A]">
            <Lightbulb className="h-4 w-4" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
              Estrategia Comercial
            </span>
          </div>
          <h3 className="mt-1.5 font-display text-xl font-bold uppercase tracking-[0.03em] text-[#3A2328]">
            Alternativas de Solución
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {SOLUTION_ALTERNATIVES.map((alt) => (
              <div
                key={alt.num}
                className="rounded-md border border-[#F0DCE1] border-l-4 border-l-[#C98E9B] bg-[#FDF7F8] p-4"
              >
                <span className="font-mono text-xs font-bold text-[#B26B7A]">{alt.num}</span>
                <h4 className="mt-1 text-xs font-bold text-[#3A2328]">{alt.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#5E454B]">{alt.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
