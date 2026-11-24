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
        <div className="border border-[#EED9D6] border-l-4 border-l-[#6E2E3B] bg-gradient-to-br from-[#FDF4F3] to-[#FAF0EE] p-7 lg:col-span-7">
          <div className="flex items-center gap-2 text-[#6E2E3B]">
            <FileText className="h-4 w-4" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
              Resumen del Proyecto Integrador
            </span>
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold text-[#1D1517]">
            «Piel sana + maquillaje bonito»
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#4E4244]">
            El proyecto integrador <strong>Kaly Cosmetic’s</strong> analiza las preferencias y
            hábitos de compra de los consumidores de <strong>18 a 24 años</strong> de{' '}
            <strong>Cadereyta Jiménez, Nuevo León</strong>, para identificar la demanda potencial
            de productos de maquillaje y cuidado de la piel (skincare), así como establecer
            estrategias comerciales para evaluar la viabilidad del negocio.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#4E4244]">
            Mediante metodología de <strong>enfoque mixto</strong>, alcance exploratorio y
            descriptivo, y diseño no experimental transversal (<strong>108 encuestas digitales</strong>),
            se comprobó alto interés por bases, correctores, rímel, sueros hidratantes, cremas con
            Centella Asiática, protectores solares y limpiadores faciales. El{' '}
            <strong className="text-[#6E2E3B]">72%</strong> está dispuesto a pagar entre{' '}
            <strong>$100 y $350</strong> por maquillaje y entre <strong>$150 y $400</strong> por
            skincare; el <strong className="text-[#3E6850]">48%</strong> compra mensualmente y los
            canales preferidos son <strong>Instagram y TikTok</strong>.
          </p>
        </div>

        <div className="flex flex-col justify-between border border-[#EED9D6] border-t-4 border-t-[#B8767D] bg-white p-7 lg:col-span-5">
          <div>
            <div className="flex items-center gap-2 text-[#A86269]">
              <BookOpen className="h-4 w-4" />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
                Ficha Institucional
              </span>
            </div>
            <h4 className="mt-2 font-display text-lg font-bold uppercase tracking-[0.04em] text-[#1D1517]">
              {PROJECT_META.institution}
            </h4>
            <p className="mt-1 text-xs text-[#6E6062]">
              {PROJECT_META.documentType} · {PROJECT_META.date}
            </p>

            <dl className="mt-5 space-y-2.5 border-t border-[#F0E3E1] pt-4 text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-[#6E6062]">Equipo:</dt>
                <dd className="bg-[#FCEFED] px-2 py-0.5 font-mono font-semibold text-[#6E2E3B]">
                  {PROJECT_META.team}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#6E6062]">Líder del Proyecto:</dt>
                <dd className="text-right font-semibold text-[#1D1517]">{PROJECT_META.leader}</dd>
              </div>
              <div className="border-t border-[#F5ECEA] pt-2.5">
                <dt className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#A86269]">
                  Asesores
                </dt>
                <dd className="mt-1.5 space-y-1 text-[#4E4244]">
                  {PROJECT_META.advisors.map((advisor) => (
                    <p key={advisor}>• {advisor}</p>
                  ))}
                </dd>
              </div>
              <div className="border-t border-[#F5ECEA] pt-2.5">
                <dt className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#6E2E3B]">
                  Alumnos Participantes ({PROJECT_META.participants.length})
                </dt>
                <dd className="mt-2 grid grid-cols-1 gap-x-3 gap-y-1 text-[11px] text-[#4E4244] sm:grid-cols-2">
                  {PROJECT_META.participants.map((student) => (
                    <p key={student}>• {student}</p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-5 border-l-2 border-[#6E2E3B] bg-[#FAF0EE] p-4">
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#6E2E3B]">
              Alcance y Delimitación
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#4E4244]">
              Idea de negocio desarrollada con fines académicos en planeación, investigación de
              mercado y estrategias comerciales 100% digitales para Los Ramones y Cadereyta
              Jiménez, sin requerir local físico inicial.
            </p>
          </div>
        </div>
      </div>

      {/* Planteamiento, Antecedentes y Justificación — Color-coded top borders */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article className="border border-[#EED9D6] border-t-4 border-t-[#6E2E3B] bg-white p-6">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#6E2E3B]">
            01 · Planteamiento
          </span>
          <h3 className="mt-1.5 font-display text-lg font-bold text-[#1D1517]">
            Reto Comercial Local
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-[#57494B]">
            Ante la alta competencia de marcas y precios en el sector cosmético, Kaly Cosmetic’s
            necesitaba conocer con datos exactos qué productos tienen mayor demanda, qué marcas
            prefiere su público, cuánto están dispuestos a pagar y con qué frecuencia compran para
            definir inventario, precios competitivos y promoción efectiva.
          </p>
        </article>

        <article className="border border-[#EED9D6] border-t-4 border-t-[#C4835A] bg-[#FFFCFA] p-6">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#A86942]">
            02 · Antecedentes
          </span>
          <h3 className="mt-1.5 font-display text-lg font-bold text-[#1D1517]">
            Evolución de la Propuesta
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-[#57494B]">
            Nació al detectar la dificultad en Cadereyta Jiménez y Los Ramones para conseguir
            maquillaje original importado de Estados Unidos. Tras investigar proveedores y
            tendencias en Instagram y TikTok, evolucionó incorporando skincare (limpiadores,
            sérums, hidratantes y protectores solares) con entregas personales y venta digital.
          </p>
        </article>

        <article className="border border-[#D5E3D9] border-t-4 border-t-[#4E7A61] bg-[#F7FBF8] p-6">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#3E6850]">
            03 · Justificación
          </span>
          <h3 className="mt-1.5 font-display text-lg font-bold text-[#1D1517]">
            Impacto Académico y Local
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-[#4C6155]">
            Integra conocimientos reales de administración, mercadotecnia, ventas y emprendimiento,
            al tiempo que ofrece a los consumidores locales una alternativa confiable, variada y
            accesible respaldada en investigación cuantitativa de hábitos y presupuestos.
          </p>
        </article>
      </div>

      {/* Objetivo General y 6 Específicos */}
      <div className="border border-[#EED9D6] bg-white p-7">
        <div className="flex items-center gap-2 text-[#6E2E3B]">
          <Target className="h-4 w-4" />
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
            Objetivos del Estudio
          </span>
        </div>
        <h3 className="mt-1.5 font-display text-2xl font-bold text-[#1D1517]">Objetivo General</h3>
        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-[#4E4244]">
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
              className="border border-[#F0DFDD] bg-gradient-to-br from-[#FDF6F5] to-[#FAF0EE] p-4"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#6E2E3B]" />
                <span className="font-mono text-[10px] font-bold text-[#6E2E3B]">
                  OBJETIVO 0{idx + 1}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#4E4244]">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marco Teórico Completo */}
      <div className="border border-[#EED9D6] bg-[#FAF0EE]/70 p-7">
        <div className="flex items-center gap-2 text-[#6E2E3B]">
          <Scale className="h-4 w-4" />
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
            Marco Teórico Fundamentado
          </span>
        </div>
        <h3 className="mt-1.5 font-display text-2xl font-bold text-[#1D1517]">
          Bases Conceptuales y Tendencia de Belleza Integral
        </h3>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {THEORETICAL_FRAMEWORK.map((item, idx) => {
            const borderColors = [
              'border-t-[#6E2E3B]',
              'border-t-[#B8767D]',
              'border-t-[#4E7A61]',
              'border-t-[#C4835A]',
              'border-t-[#8E4A5B]',
            ];
            return (
              <div
                key={item.title}
                className={`border border-[#EED9D6] border-t-4 bg-white p-5 ${borderColors[idx % borderColors.length]}`}
              >
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#A86269]">
                  {item.author}
                </p>
                <h4 className="mt-1.5 font-display text-base font-bold text-[#1D1517]">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#57494B]">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5 Etapas del Skincare (Centella Sage Theme) + Alternativas de Solución (Blush/Berry Theme) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="border border-[#CFE0D5] bg-gradient-to-br from-[#EDF6F0] to-[#E3EFE7] p-7 lg:col-span-5">
          <div className="flex items-center gap-2 text-[#3E6850]">
            <Layers className="h-4 w-4" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
              Rutina Skincare (AAD, 2022)
            </span>
          </div>
          <h3 className="mt-1.5 font-display text-xl font-bold uppercase tracking-[0.03em] text-[#1B2B21]">
            Las 5 Etapas Esenciales
          </h3>
          <ol className="mt-4 space-y-2.5">
            {SKINCARE_STEPS.map((s) => (
              <li
                key={s.step}
                className="flex items-start gap-3 border border-[#D4E4DA] bg-white/90 p-3"
              >
                <span className="bg-[#4E7A61] px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                  {s.step}
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#1B2B21]">{s.name}</p>
                  <p className="text-[11px] text-[#4C6155]">{s.items}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="border border-[#EED9D6] bg-white p-7 lg:col-span-7">
          <div className="flex items-center gap-2 text-[#6E2E3B]">
            <Lightbulb className="h-4 w-4" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
              Estrategia Comercial
            </span>
          </div>
          <h3 className="mt-1.5 font-display text-xl font-bold uppercase tracking-[0.03em] text-[#1D1517]">
            Alternativas de Solución
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {SOLUTION_ALTERNATIVES.map((alt) => (
              <div
                key={alt.num}
                className="border border-[#F0DFDD] border-l-4 border-l-[#B8767D] bg-[#FDF7F6] p-4"
              >
                <span className="font-mono text-xs font-bold text-[#6E2E3B]">{alt.num}</span>
                <h4 className="mt-1 text-xs font-bold text-[#1D1517]">{alt.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#57494B]">{alt.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
