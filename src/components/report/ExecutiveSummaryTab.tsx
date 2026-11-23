import React from 'react';
import {
  Sparkles,
  Target,
  Compass,
  Layers,
  CheckCircle2,
  BookOpen,
  FileText,
  Lightbulb,
  Scale,
} from 'lucide-react';
import {
  EXECUTIVE_HIGHLIGHTS,
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
    <div className="animate-fade-in space-y-10">
      {/* KPI Highlight Strip (100% Real Document Figures) */}
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

      {/* Official Abstract (Resumen) + Institutional Metadata */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="border border-[#E8DFDC] bg-[#FAF7F5] p-8 lg:col-span-7">
          <div className="flex items-center gap-2 text-[#B58681]">
            <FileText className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Resumen Oficial del Proyecto Integrador
            </span>
          </div>
          <h3 className="mt-3 font-serif text-3xl font-medium text-[#141312]">
            «Piel sana + maquillaje bonito» para Cadereyta Jiménez y Los Ramones
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#4E4744]">
            El proyecto integrador <strong>Kaly Cosmetic’s</strong> analiza las preferencias y
            hábitos de compra de los consumidores de <strong>18 a 24 años</strong> de{' '}
            <strong>Cadereyta Jiménez, Nuevo León</strong>, para identificar la demanda potencial
            de maquillaje y cuidado de la piel (skincare), así como establecer estrategias
            comerciales que evalúen la viabilidad del negocio.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#4E4744]">
            Mediante una metodología de <strong>enfoque mixto</strong>, alcance exploratorio y
            descriptivo, y diseño no experimental transversal (encuesta digital a{' '}
            <strong>108 participantes</strong>), se validó una fuerte demanda en bases, correctores,
            rímel, sueros hidratantes, cremas con Centella Asiática, protectores solares y
            limpiadores faciales, con marcas favoritas como{' '}
            <strong>e.l.f., NYX, Maybelline, L’Oréal, CeraVe, The Ordinary y SKIN1004</strong>.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#4E4744]">
            El <strong>72%</strong> está dispuesto a pagar entre <strong>$100 y $350</strong> por
            maquillaje y entre <strong>$150 y $400</strong> por skincare; el <strong>48%</strong>{' '}
            compra mensualmente y los canales digitales líderes son{' '}
            <strong>Instagram y TikTok</strong>.
          </p>
        </div>

        {/* Institutional Card */}
        <div className="flex flex-col justify-between border border-[#E8DFDC] bg-white p-8 lg:col-span-5">
          <div>
            <div className="flex items-center gap-2 text-[#B58681]">
              <BookOpen className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                Portada Técnica Académica
              </span>
            </div>
            <h4 className="mt-3 font-serif text-2xl font-medium text-[#141312]">
              {PROJECT_META.institution}
            </h4>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#8C6B5D]">
              {PROJECT_META.documentType} · {PROJECT_META.date}
            </p>

            <dl className="mt-6 space-y-3 border-t border-[#E8DFDC] pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-[#6E6561]">Presentan (Equipo):</dt>
                <dd className="font-mono text-xs font-semibold text-[#141312]">
                  {PROJECT_META.team}
                </dd>
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
              Alcance y Delimitación
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#4E4744]">
              Propuesta de emprendimiento con fines académicos enfocada en planeación, investigación
              de mercado y estrategias comerciales 100% digitales para Cadereyta Jiménez y Los
              Ramones, sin requerir establecimiento físico inicial.
            </p>
          </div>
        </div>
      </div>

      {/* Planteamiento del Problema, Antecedentes y Justificación */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article className="border border-[#E8DFDC] bg-white p-7">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#B58681]">
            Sección 01
          </span>
          <h3 className="mt-2 font-serif text-2xl text-[#141312]">Planteamiento del Problema</h3>
          <p className="mt-3 text-xs leading-relaxed text-[#4E4744]">
            El sector cosmético presenta amplia competencia en marcas, variedad y precios. El reto
            central de Kaly Cosmetic’s es determinar con precisión qué productos de maquillaje y
            skincare tienen mayor aceptación en su público local, cuáles son las marcas preferidas,
            cuánto están dispuestos a pagar y con qué frecuencia compran, para sustentar decisiones
            de inventario, precios competitivos y promoción digital.
          </p>
        </article>

        <article className="border border-[#E8DFDC] bg-white p-7">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#B58681]">
            Sección 02
          </span>
          <h3 className="mt-2 font-serif text-2xl text-[#141312]">Antecedentes</h3>
          <p className="mt-3 text-xs leading-relaxed text-[#4E4744]">
            En Cadereyta Jiménez y Los Ramones, N.L., se detectó poca disponibilidad de cosméticos
            originales importados de Estados Unidos. Kaly Cosmetic’s inició enfocada en maquillaje
            original y evolucionó al investigar proveedores y tendencias en TikTok/Instagram,
            integrando skincare (limpiadores, sérums, cremas y protectores solares) con venta en
            redes y entregas personales sin local físico.
          </p>
        </article>

        <article className="border border-[#E8DFDC] bg-white p-7">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#B58681]">
            Sección 03
          </span>
          <h3 className="mt-2 font-serif text-2xl text-[#141312]">Justificación</h3>
          <p className="mt-3 text-xs leading-relaxed text-[#4E4744]">
            En lo académico, integra competencias de administración, mercadotecnia, ventas,
            atención al cliente y emprendimiento. En lo comercial y social, facilita el acceso a
            productos nacionales e internacionales confiables a precios accesibles, respaldando cada
            decisión en la encuesta real aplicada al mercado objetivo local.
          </p>
        </article>
      </div>

      {/* Objetivos General y Específicos */}
      <div className="border border-[#E8DFDC] bg-white p-8">
        <div className="flex items-center gap-2 text-[#B58681]">
          <Target className="h-4 w-4" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            Objetivos de la Investigación
          </span>
        </div>
        <h3 className="mt-2 font-serif text-3xl text-[#141312]">Objetivo General</h3>
        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-[#4E4744]">
          Analizar las preferencias, necesidades y hábitos de compra de los consumidores de 18 a 24
          años de Cadereyta Jiménez, Nuevo León, mediante una investigación de mercados de enfoque
          cuantitativo, con la finalidad de identificar la demanda potencial de maquillaje y
          productos para el cuidado de la piel, así como establecer estrategias comerciales que
          permitan evaluar la viabilidad de Kaly Cosmetic’s.
        </p>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SPECIFIC_OBJECTIVES.map((obj, idx) => (
            <div key={idx} className="border border-[#E8DFDC] bg-[#FAF7F5] p-5">
              <div className="flex items-center gap-2 text-[#141312]">
                <CheckCircle2 className="h-4 w-4 text-[#B58681]" />
                <span className="font-mono text-[11px] text-[#8C6B5D]">OBJETIVO 0{idx + 1}</span>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-[#4E4744]">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marco Teórico Completo (5 Ejes + Autores) */}
      <div className="border border-[#E8DFDC] bg-[#FAF7F5] p-8">
        <div className="flex items-center gap-2 text-[#B58681]">
          <Scale className="h-4 w-4" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            Marco Teórico Fundamentado
          </span>
        </div>
        <h3 className="mt-2 font-serif text-3xl text-[#141312]">
          Fundamentos de Emprendimiento, Mercados y Belleza Integral
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {THEORETICAL_FRAMEWORK.map((item) => (
            <div key={item.title} className="flex flex-col justify-between border border-[#E8DFDC] bg-white p-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#B58681]">
                  {item.author}
                </p>
                <h4 className="mt-2 font-serif text-xl font-medium text-[#141312]">
                  {item.title}
                </h4>
                <p className="mt-2.5 text-xs leading-relaxed text-[#4E4744]">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Stages of Skincare Model */}
      <div className="border border-[#E8DFDC] bg-[#F4E3E0]/40 p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#8C6B5D]">
              <Layers className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                Academia Americana de Dermatología (AAD, 2022)
              </span>
            </div>
            <h3 className="mt-2 font-serif text-3xl text-[#141312]">
              Las 5 Etapas Esenciales del Skincare en Kaly
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-[#141312] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
            <Compass className="h-3.5 w-3.5 text-[#EBD7D4]" />
            +45% Crecimiento Skincare MX (Statista, 2023)
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

      {/* Alternativas de Solución */}
      <div className="border border-[#E8DFDC] bg-white p-8">
        <div className="flex items-center gap-2 text-[#B58681]">
          <Lightbulb className="h-4 w-4" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            Estrategia Comercial
          </span>
        </div>
        <h3 className="mt-2 font-serif text-3xl text-[#141312]">Alternativas de Solución</h3>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {SOLUTION_ALTERNATIVES.map((alt) => (
            <div key={alt.num} className="flex gap-4 border border-[#E8DFDC] bg-[#FAF7F5] p-5">
              <span className="font-serif text-3xl text-[#B58681]">{alt.num}</span>
              <div>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#141312]">
                  {alt.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#4E4744]">{alt.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-[#E8DFDC] pt-5 text-xs text-[#6E6561]">
          <Sparkles className="h-4 w-4 shrink-0 text-[#B58681]" />
          <span>
            Lo que buscan las clientas de Kaly: productos originales que no irriten, asesoría por
            tipo de piel, combos maquillaje + skincare y precio accesible.
          </span>
        </div>
      </div>
    </div>
  );
};
