import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import {
  BUDGET_SPEND_DATA,
  CHANNELS_DATA,
  DEMOGRAPHICS_AGE_DATA,
  DEMOGRAPHICS_RESIDENCE_DATA,
  FREQUENCY_SURVEY_DATA,
  MONTHLY_BUDGET_DATA,
  PURCHASE_DRIVERS_DATA,
  SKIN_TYPE_DATA,
  SURVEY_PROGRESS_BARS,
  SURVEY_RESULTS_CATALOG,
} from '../../data/reportData';

export const SurveyDataTab: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-10">
      {/* Top Real Demographics Summary */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-lg bg-[#FAF3F4] p-5 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8747C]">
            Muestra Total
          </p>
          <p className="mt-2 font-serif text-4xl text-[#2A2324]">108</p>
          <p className="mt-1 text-xs text-[#7D6E71]">Encuestados digitales</p>
        </div>
        <div className="rounded-lg bg-[#FAF3F4] p-5 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8747C]">
            Género
          </p>
          <p className="mt-2 font-serif text-4xl text-[#2A2324]">86 / 16</p>
          <p className="mt-1 text-xs text-[#7D6E71]">Femenino / Masculino</p>
        </div>
        <div className="rounded-lg bg-[#FAF3F4] p-5 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8747C]">
            Piel Predominante
          </p>
          <p className="mt-2 font-serif text-4xl text-[#2A2324]">39 / 31</p>
          <p className="mt-1 text-xs text-[#7D6E71]">Mixta / Grasa</p>
        </div>
        <div className="rounded-lg bg-[#F5E1E5] p-5 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8E5D65]">
            Cobertura Local
          </p>
          <p className="mt-2 font-serif text-4xl text-[#2A2324]">82%</p>
          <p className="mt-1 text-xs text-[#6B5A5D]">55 Cadereyta · 34 Los Ramones</p>
        </div>
      </div>

      {/* Editorial Progress Bars (Soft Rose Palette) */}
      <div className="rounded-lg border border-[#F0E3E6] bg-[#FCF8F9] p-6 sm:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A8747C]">
          Indicadores Clave · Encuesta Digital UTC
        </p>
        <h3 className="mt-1 font-serif text-3xl text-[#2A2324]">
          Hallazgos Porcentuales del Mercado Local
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
          {SURVEY_PROGRESS_BARS.map((metric) => (
            <div key={metric.label}>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-[#2A2324]">{metric.label}</span>
                <span className="rounded-full bg-[#A8747C] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-white">
                  {metric.percentage}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#EFE0E3]">
                <div
                  className="h-full rounded-full bg-[#A8747C] transition-all duration-700"
                  style={{ width: `${metric.percentage}%` }}
                />
              </div>
              <p className="mt-1 text-[11px] text-[#7D6E71]">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Clean Real-Data Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Factores de Compra */}
        <div className="rounded-lg border border-[#F0E3E6] bg-white p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8747C]">
            Decisión de Compra (Menciones Reales)
          </p>
          <h4 className="mt-1 font-serif text-2xl text-[#2A2324]">
            ¿Qué Valoró Más el Consumidor?
          </h4>
          <div className="mt-5 h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PURCHASE_DRIVERS_DATA} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F4EAEC" vertical={false} />
                <XAxis dataKey="factor" tick={{ fill: '#6B5A5D', fontSize: 12 }} axisLine={{ stroke: '#EFE0E3' }} tickLine={false} />
                <YAxis tick={{ fill: '#6B5A5D', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#2A2324',
                    border: 'none',
                    borderRadius: 8,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="respuestas" name="Respuestas" radius={[6, 6, 0, 0]} maxBarSize={44}>
                  {PURCHASE_DRIVERS_DATA.map((_, idx) => (
                    <Cell key={idx} fill={idx === 0 ? '#915E66' : idx === 1 ? '#B5848C' : '#CFA9B0'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Canales Digitales */}
        <div className="rounded-lg border border-[#F0E3E6] bg-white p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8747C]">
            Medios de Descubrimiento (n = 108)
          </p>
          <h4 className="mt-1 font-serif text-2xl text-[#2A2324]">
            Canales que Generan Mayor Interés
          </h4>
          <div className="mt-5 h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHANNELS_DATA} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F4EAEC" horizontal={false} />
                <XAxis type="number" tick={{ fill: '#6B5A5D', fontSize: 12 }} axisLine={{ stroke: '#EFE0E3' }} tickLine={false} />
                <YAxis dataKey="canal" type="category" width={115} tick={{ fill: '#2A2324', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#2A2324',
                    border: 'none',
                    borderRadius: 8,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="menciones" name="Menciones" radius={[0, 6, 6, 0]} barSize={26}>
                  <Cell fill="#915E66" />
                  <Cell fill="#B5848C" />
                  <Cell fill="#D6B4BA" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Residencia y Edades */}
        <div className="rounded-lg border border-[#F0E3E6] bg-white p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8747C]">
            Perfil Geográfico y Etario
          </p>
          <h4 className="mt-1 font-serif text-2xl text-[#2A2324]">
            Lugar de Residencia de Encuestados
          </h4>
          <div className="mt-5 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DEMOGRAPHICS_RESIDENCE_DATA} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F4EAEC" vertical={false} />
                <XAxis dataKey="municipio" tick={{ fill: '#6B5A5D', fontSize: 11 }} axisLine={{ stroke: '#EFE0E3' }} tickLine={false} />
                <YAxis tick={{ fill: '#6B5A5D', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#2A2324',
                    border: 'none',
                    borderRadius: 8,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="personas" name="Participantes" radius={[6, 6, 0, 0]} maxBarSize={48}>
                  <Cell fill="#915E66" />
                  <Cell fill="#C1949B" />
                  <Cell fill="#E3CDD1" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#F3E7EA] pt-4 text-center text-xs">
            {DEMOGRAPHICS_AGE_DATA.map((a) => (
              <div key={a.rango} className="rounded-md bg-[#FAF3F4] p-2.5">
                <p className="font-mono text-sm font-semibold text-[#2A2324]">{a.personas}</p>
                <p className="text-[10px] text-[#7D6E71]">{a.rango}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gasto por Compra & Presupuesto Mensual */}
        <div className="rounded-lg border border-[#F0E3E6] bg-white p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8747C]">
            Hábitos de Gasto Real (MXN)
          </p>
          <h4 className="mt-1 font-serif text-2xl text-[#2A2324]">
            Gasto Aproximado por Compra
          </h4>
          <div className="mt-5 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BUDGET_SPEND_DATA} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F4EAEC" vertical={false} />
                <XAxis dataKey="rango" tick={{ fill: '#6B5A5D', fontSize: 11 }} axisLine={{ stroke: '#EFE0E3' }} tickLine={false} />
                <YAxis tick={{ fill: '#6B5A5D', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#2A2324',
                    border: 'none',
                    borderRadius: 8,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="participantes" name="Participantes" radius={[6, 6, 0, 0]} maxBarSize={48}>
                  <Cell fill="#E3CDD1" />
                  <Cell fill="#C1949B" />
                  <Cell fill="#915E66" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#F3E7EA] pt-4 text-[11px]">
            <div>
              <p className="font-semibold text-[#A8747C]">Presupuesto/Mes</p>
              {MONTHLY_BUDGET_DATA.slice(0, 2).map((m) => (
                <p key={m.rango} className="mt-1 text-[#6B5A5D]">
                  {m.rango}: <strong className="text-[#2A2324]">{m.participantes}</strong>
                </p>
              ))}
            </div>
            <div>
              <p className="font-semibold text-[#A8747C]">Frecuencia</p>
              {FREQUENCY_SURVEY_DATA.slice(0, 2).map((f) => (
                <p key={f.frecuencia} className="mt-1 text-[#6B5A5D]">
                  {f.frecuencia}: <strong className="text-[#2A2324]">{f.personas}</strong>
                </p>
              ))}
            </div>
            <div>
              <p className="font-semibold text-[#A8747C]">Tipo de Piel</p>
              {SKIN_TYPE_DATA.slice(0, 2).map((s) => (
                <p key={s.tipo} className="mt-1 text-[#6B5A5D]">
                  {s.tipo}: <strong className="text-[#2A2324]">{s.personas}</strong>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brands & Products Requested */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-[#F0E3E6] bg-[#FAF3F4] p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8747C]">
            Demanda Validada · $100–$350 MXN
          </p>
          <h4 className="mt-1 font-serif text-2xl text-[#2A2324]">
            Maquillaje Más Solicitado y Marcas Favoritas
          </h4>
          <p className="mt-3 text-xs leading-relaxed text-[#5F5053]">
            <strong>Productos:</strong> {SURVEY_RESULTS_CATALOG.makeupProducts.join(' · ')}.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SURVEY_RESULTS_CATALOG.makeupBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#4E4244] shadow-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#F0E3E6] bg-[#FAF3F4] p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8747C]">
            Demanda Validada · $150–$400 MXN
          </p>
          <h4 className="mt-1 font-serif text-2xl text-[#2A2324]">
            Skincare & K-Beauty Más Solicitado
          </h4>
          <p className="mt-3 text-xs leading-relaxed text-[#5F5053]">
            <strong>Productos:</strong> {SURVEY_RESULTS_CATALOG.skincareProducts.join(' · ')}.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SURVEY_RESULTS_CATALOG.skincareBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#4E4244] shadow-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
