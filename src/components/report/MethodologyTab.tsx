import React from 'react';
import {
  ClipboardList,
  BookMarked,
  Sliders,
  ListChecks,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { ACTION_PLAN_STEPS, BIBLIOGRAPHY_GROUPS } from '../../data/reportData';

export const MethodologyTab: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Metodología A, B, C */}
      <div className="border border-[#EED9D6] bg-gradient-to-br from-[#FDF5F4] to-[#F9ECEA] p-7">
        <div className="flex items-center gap-2 text-[#6E2E3B]">
          <ClipboardList className="h-4 w-4" />
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
            Metodología Propuesta · Reporte Técnico UTC
          </span>
        </div>
        <h3 className="mt-1.5 font-display text-2xl font-bold text-[#1D1517]">
          Diseño, Recolección (n = 108) e Interpretación
        </h3>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="border border-[#EED9D6] border-t-4 border-t-[#6E2E3B] bg-white p-5">
            <span className="inline-block bg-[#6E2E3B] px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.16em] text-white">
              A. Diseño
            </span>
            <h4 className="mt-3 font-display text-base font-bold text-[#1D1517]">
              Enfoque Mixto, Exploratorio y Descriptivo
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-[#57494B]">
              Recopila datos cuantitativos mediante encuesta digital y elementos cualitativos
              abiertos. Diseño <strong>no experimental y transversal</strong>, dirigido
              principalmente a Cadereyta Jiménez y Los Ramones, Nuevo León.
            </p>
          </div>

          <div className="border border-[#EED9D6] border-t-4 border-t-[#C4835A] bg-white p-5">
            <span className="inline-block bg-[#C4835A] px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.16em] text-white">
              B. Recolección
            </span>
            <h4 className="mt-3 font-display text-base font-bold text-[#1D1517]">
              108 Respuestas Reales Analizadas
            </h4>
            <ul className="mt-2 space-y-1 text-xs text-[#57494B]">
              <li>• Género: <strong>86 femenino</strong>, 16 masculino.</li>
              <li>• Edad: <strong>57</strong> (19–23 años), <strong>25</strong> (24–29 años).</li>
              <li>• Residencia: <strong>55 Cadereyta</strong>, <strong>34 Los Ramones</strong>.</li>
              <li>• Frecuencia: <strong>38</strong> cada 2–3 meses, <strong>29</strong> mensual.</li>
              <li>• Gasto/compra: <strong>39</strong> (&gt;$800), <strong>31</strong> ($500–$800), <strong>28</strong> ($200–$500).</li>
              <li>• Presupuesto mensual: <strong>40</strong> (&gt;$1,000), <strong>30</strong> ($300–$600).</li>
            </ul>
          </div>

          <div className="border border-[#D5E3D9] border-t-4 border-t-[#4E7A61] bg-white p-5">
            <span className="inline-block bg-[#4E7A61] px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.16em] text-white">
              C. Análisis
            </span>
            <h4 className="mt-3 font-display text-base font-bold text-[#1D1517]">
              Orientación del Catálogo y Difusión
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-[#57494B]">
              Calidad (53), precio (31), ingredientes (31) y marca (30) definen la curaduría. El
              alto volumen de piel mixta (39) y grasa (31) prioriza fórmulas ligeras y Centella,
              promocionadas en Instagram Reels (38), TikTok (37) y recomendaciones (33).
            </p>
          </div>
        </div>
      </div>

      {/* Implementación y Control + Planeación de Acciones */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="border border-[#D5E3D9] bg-[#F5FAF7] p-7 lg:col-span-5">
          <div className="flex items-center gap-2 text-[#3E6850]">
            <Sliders className="h-4 w-4" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
              Implementación y Control
            </span>
          </div>
          <h3 className="mt-1.5 font-display text-xl font-bold text-[#1B2B21]">
            Seguimiento y Validación Previa
          </h3>
          <p className="mt-3 text-xs leading-relaxed text-[#4C6155]">
            La propuesta opera como prototipo académico e-commerce de gestión privada 100% en línea
            sin establecimiento físico, priorizando el control en:
          </p>
          <ul className="mt-4 space-y-2.5 text-xs text-[#3C5246]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#4E7A61]" />
              <span>Evaluación continua de proveedores y costo real por pieza ($80.49 F+V).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#4E7A61]" />
              <span>Equilibrio de inventario entre maquillaje viral y skincare con Centella.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#4E7A61]" />
              <span>Contenido educativo en TikTok e Instagram Reels con enlace directo al catálogo.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#4E7A61]" />
              <span>Revisión de interacción, opinión de clientes y rentabilidad antes de escalar.</span>
            </li>
          </ul>
        </div>

        <div className="border border-[#EED9D6] bg-[#FAF0EE]/60 p-7 lg:col-span-7">
          <div className="flex items-center gap-2 text-[#6E2E3B]">
            <ListChecks className="h-4 w-4" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
              Planeación de Acciones y Cronograma
            </span>
          </div>
          <h3 className="mt-1.5 font-display text-xl font-bold text-[#1D1517]">
            Ruta de Desarrollo en 5 Fases
          </h3>
          <div className="mt-4 space-y-3">
            {ACTION_PLAN_STEPS.map((step, i) => {
              const badgeColors = ['#6E2E3B', '#A86269', '#C4835A', '#4E7A61', '#1D1517'];
              return (
                <div key={step.phase} className="flex gap-3.5 border border-[#EED9D6] bg-white p-3.5">
                  <span
                    className="shrink-0 self-start px-2.5 py-1 font-mono text-[10px] font-bold text-white"
                    style={{ backgroundColor: badgeColors[i % badgeColors.length] }}
                  >
                    {step.phase}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-[#1D1517]">{step.title}</h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#57494B]">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Conclusiones y Recomendaciones — Rich Burgundy Editorial Band */}
      <div className="bg-gradient-to-r from-[#6E2E3B] to-[#8C4352] p-7 text-white">
        <div className="flex items-center gap-2 text-[#F7D7DC]">
          <Award className="h-4 w-4" />
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
            Conclusiones y Recomendaciones del Estudio
          </span>
        </div>
        <h3 className="mt-1.5 font-display text-xl font-bold text-white">
          Viabilidad Validada para Cadereyta Jiménez y Los Ramones
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-4 text-xs leading-relaxed md:grid-cols-2">
          <div className="bg-white/95 p-5 text-[#4E4244]">
            <p className="font-display text-xs font-bold uppercase tracking-wider text-[#6E2E3B]">
              Conclusión Principal
            </p>
            <p className="mt-2">
              Los 108 encuestados confirman una demanda local real y recurrente (48% mensual) por
              maquillaje importado y skincare K-Beauty (especialmente Centella), validando precios
              entre $100 y $400 MXN y haciendo viable un lanzamiento digital sin local físico.
            </p>
          </div>
          <div className="bg-white/95 p-5 text-[#4E4244]">
            <p className="font-display text-xs font-bold uppercase tracking-wider text-[#3E6850]">
              Recomendaciones Clave
            </p>
            <p className="mt-2">
              Mantener stock balanceado maquillaje + skincare, crear kits combinados («piel sana +
              maquillaje bonito»), publicar rutinas en TikTok/Reels para piel mixta y grasa, y
              monitorear el margen del 20% por lote para reinvertir en las marcas más pedidas.
            </p>
          </div>
        </div>
      </div>

      {/* Bibliografía Oficial (12 Fuentes APA) */}
      <div className="border border-[#EED9D6] bg-white p-7">
        <div className="flex items-center gap-2 text-[#6E2E3B]">
          <BookMarked className="h-4 w-4" />
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
            Referencias Bibliográficas Oficiales (12 Fuentes APA)
          </span>
        </div>
        <h3 className="mt-1.5 font-display text-xl font-bold text-[#1D1517]">Bibliografía</h3>

        <div className="mt-5 space-y-5">
          {BIBLIOGRAPHY_GROUPS.map((group) => (
            <div
              key={group.category}
              className="border-t border-[#F0E3E1] pt-4 first:border-t-0 first:pt-0"
            >
              <h4 className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#A86269]">
                {group.category}
              </h4>
              <ol className="mt-2.5 space-y-1.5 text-xs leading-relaxed text-[#4E4244]">
                {group.entries.map((entry) => (
                  <li key={entry.num} className="flex gap-2.5">
                    <span className="font-mono font-bold text-[#6E2E3B]">
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
