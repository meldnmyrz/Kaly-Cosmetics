import React from 'react';
import {
  ClipboardList,
  CheckCircle2,
  Sparkles,
  BookMarked,
  Sliders,
  ListChecks,
} from 'lucide-react';
import {
  ACTION_PLAN_STEPS,
  BIBLIOGRAPHY_GROUPS,
  SURVEY_RESULTS_CATALOG,
} from '../../data/reportData';

export const MethodologyTab: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-10">
      {/* A, B, C Methodology Structure */}
      <div className="border border-[#E8DFDC] bg-[#FAF7F5] p-8">
        <div className="flex items-center gap-2 text-[#B58681]">
          <ClipboardList className="h-4 w-4" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            Metodología Propuesta · Reporte Técnico UTC
          </span>
        </div>
        <h3 className="mt-2 font-serif text-3xl text-[#141312]">
          Diseño de la Investigación, Recolección (n = 108) y Análisis
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="border border-[#E8DFDC] bg-white p-6">
            <span className="editorial-badge">A. Diseño</span>
            <h4 className="mt-3 font-serif text-2xl text-[#141312]">
              Enfoque Mixto, Exploratorio y Descriptivo
            </h4>
            <p className="mt-3 text-xs leading-relaxed text-[#4E4744]">
              Combina datos cuantitativos mediante encuesta digital con opiniones cualitativas
              abiertas de los participantes. Diseño <strong>no experimental y transversal</strong>,
              dirigido principalmente a consumidores de Cadereyta Jiménez y Los Ramones, N.L., sin
              manipulación de variables.
            </p>
          </div>

          <div className="border border-[#E8DFDC] bg-white p-6">
            <span className="editorial-badge">B. Recolección (n = 108)</span>
            <h4 className="mt-3 font-serif text-2xl text-[#141312]">
              Hallazgos Cuantitativos Clave
            </h4>
            <ul className="mt-3 space-y-1.5 text-xs text-[#4E4744]">
              <li>• <strong>Género:</strong> 86 femenino, 16 masculino (108 total).</li>
              <li>• <strong>Edad:</strong> 57 de 19–23 años; 25 de 24–29 años.</li>
              <li>• <strong>Residencia:</strong> 55 Cadereyta Jiménez; 34 Los Ramones.</li>
              <li>• <strong>Frecuencia:</strong> 38 cada 2–3 meses; 29 una vez al mes.</li>
              <li>• <strong>Gasto/compra:</strong> 39 (&gt;$800), 31 ($500–$800), 28 ($200–$500).</li>
              <li>• <strong>Presupuesto/mes:</strong> 40 (&gt;$1,000), 30 ($300–$600).</li>
              <li>• <strong>Piel:</strong> 39 mixta, 31 grasa.</li>
            </ul>
          </div>

          <div className="border border-[#E8DFDC] bg-white p-6">
            <span className="editorial-badge">C. Interpretación</span>
            <h4 className="mt-3 font-serif text-2xl text-[#141312]">
              Decisiones Comerciales Derivadas
            </h4>
            <p className="mt-3 text-xs leading-relaxed text-[#4E4744]">
              La <strong>calidad (53)</strong>, el <strong>precio (31)</strong>, los{' '}
              <strong>ingredientes (31)</strong> y la <strong>marca (30)</strong> guían la
              curaduría. El predominio de piel mixta y grasa justifica priorizar skincare calmante
              (Centella) y bases matificantes, promocionados vía{' '}
              <strong>Instagram Reels (38)</strong>, <strong>TikTok (37)</strong> y{' '}
              <strong>recomendaciones (33)</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Real Survey Results: Most Requested Products & Brands */}
      <div className="border border-[#E8DFDC] bg-white p-8">
        <div className="flex items-center gap-2 text-[#B58681]">
          <Sparkles className="h-4 w-4" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            Resultados de Campo · Preferencias de Catálogo
          </span>
        </div>
        <h3 className="mt-2 font-serif text-3xl text-[#141312]">
          Productos y Marcas con Mayor Demanda en Cadereyta Jiménez
        </h3>
        <p className="mt-2 max-w-3xl text-sm text-[#6E6561]">
          El estudio reveló que el público joven ya no busca únicamente maquillarse, sino cuidar su
          piel antes del maquillaje, abriendo la oportunidad de ofrecer kits combinados de{' '}
          <strong>«Skincare + Maquillaje»</strong> y rutinas educativas en TikTok.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Maquillaje */}
          <div className="border border-[#E8DFDC] bg-[#F4E3E0]/35 p-6">
            <h4 className="font-serif text-2xl text-[#141312]">Categoría Maquillaje</h4>
            <p className="mt-1 text-xs text-[#6E6561]">
              Rango ideal validado por el 72%: <strong>$100 a $350 MXN</strong>
            </p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8C6B5D]">
              Productos Más Solicitados
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-[#141312]">
              {SURVEY_RESULTS_CATALOG.makeupProducts.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#B58681]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8C6B5D]">
              Marcas Preferidas
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {SURVEY_RESULTS_CATALOG.makeupBrands.map((brand) => (
                <span
                  key={brand}
                  className="border border-[#E8DFDC] bg-white px-2.5 py-1 text-[11px] font-medium text-[#141312]"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Skincare */}
          <div className="border border-[#E8DFDC] bg-[#FAF7F5] p-6">
            <h4 className="font-serif text-2xl text-[#141312]">Categoría Skincare (K-Beauty)</h4>
            <p className="mt-1 text-xs text-[#6E6561]">
              Rango ideal validado por el 72%: <strong>$150 a $400 MXN</strong>
            </p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8C6B5D]">
              Productos Más Solicitados
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-[#141312]">
              {SURVEY_RESULTS_CATALOG.skincareProducts.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#B58681]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8C6B5D]">
              Marcas con Mayor Intención de Compra
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {SURVEY_RESULTS_CATALOG.skincareBrands.map((brand) => (
                <span
                  key={brand}
                  className="border border-[#E8DFDC] bg-white px-2.5 py-1 text-[11px] font-medium text-[#141312]"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Implementación y Control + Planeación de Acciones */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="border border-[#E8DFDC] bg-white p-7 lg:col-span-5">
          <div className="flex items-center gap-2 text-[#B58681]">
            <Sliders className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Implementación y Control
            </span>
          </div>
          <h3 className="mt-2 font-serif text-2xl text-[#141312]">
            Control Previo al Lanzamiento Comercial
          </h3>
          <p className="mt-3 text-xs leading-relaxed text-[#4E4744]">
            Aunque el emprendimiento opera actualmente como prototipo académico sin lanzamiento
            comercial definitivo, la etapa de implementación y control estructuró:
          </p>
          <ul className="mt-4 space-y-2.5 text-xs text-[#4E4744]">
            <li>• Validación de proveedores y costos de adquisición reales ($10,295.72 en 55 pzs).</li>
            <li>• Organización de catálogo multimarca por categorías, tipo de piel y rango de precio.</li>
            <li>• Diseño de estrategia de contenido visual exclusivo para Instagram y TikTok.</li>
            <li>• Revisión periódica de viabilidad comercial, márgenes y retroalimentación de clientes.</li>
          </ul>
        </div>

        <div className="border border-[#E8DFDC] bg-[#FAF7F5] p-7 lg:col-span-7">
          <div className="flex items-center gap-2 text-[#B58681]">
            <ListChecks className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Planeación de Acciones
            </span>
          </div>
          <h3 className="mt-2 font-serif text-2xl text-[#141312]">
            Secuencia Operativa 100% Digital
          </h3>
          <div className="mt-5 space-y-3">
            {ACTION_PLAN_STEPS.map((step) => (
              <div key={step.phase} className="flex gap-4 border border-[#E8DFDC] bg-white p-4">
                <span className="shrink-0 bg-[#141312] px-2.5 py-1 font-mono text-[10px] text-white self-start">
                  {step.phase}
                </span>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#141312]">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#6E6561]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Complete APA Bibliography (All 12 References from the Report) */}
      <div className="border border-[#E8DFDC] bg-white p-8">
        <div className="flex items-center gap-2 text-[#B58681]">
          <BookMarked className="h-4 w-4" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            Referencias Bibliográficas Oficiales (12 Fuentes APA)
          </span>
        </div>
        <h3 className="mt-2 font-serif text-3xl text-[#141312]">Bibliografía del Proyecto</h3>

        <div className="mt-6 space-y-6">
          {BIBLIOGRAPHY_GROUPS.map((group) => (
            <div key={group.category} className="border-t border-[#E8DFDC] pt-5 first:border-t-0 first:pt-0">
              <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8C6B5D]">
                {group.category}
              </h4>
              <ol className="mt-3 space-y-2 text-xs leading-relaxed text-[#4E4744]">
                {group.entries.map((entry) => (
                  <li key={entry.num} className="flex gap-3">
                    <span className="font-mono text-[#B58681]">
                      {entry.num < 10 ? `0${entry.num}` : entry.num}.
                    </span>
                    <span>{entry.citation}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
