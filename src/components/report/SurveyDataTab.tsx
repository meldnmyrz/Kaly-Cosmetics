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
        <div className="border border-[#EAE3E0] bg-[#FAF6F4] p-5 text-center">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#B5817E]">
            Muestra Total
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#141312]">108</p>
          <p className="mt-1 text-xs text-[#6E6663]">Encuestados digitales</p>
        </div>
        <div className="border border-[#EAE3E0] bg-[#FAF6F4] p-5 text-center">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#B5817E]">
            Género
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#141312]">86 / 16</p>
          <p className="mt-1 text-xs text-[#6E6663]">Femenino / Masculino</p>
        </div>
        <div className="border border-[#EAE3E0] bg-[#FAF6F4] p-5 text-center">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#B5817E]">
            Piel Predominante
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#141312]">39 / 31</p>
          <p className="mt-1 text-xs text-[#6E6663]">Mixta / Grasa</p>
        </div>
        <div className="border border-[#EAE3E0] bg-[#F7E3E0] p-5 text-center">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#8E6562]">
            Cobertura Local
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#141312]">82%</p>
          <p className="mt-1 text-xs text-[#574D4A]">55 Cadereyta · 34 Ramones</p>
        </div>
      </div>

      {/* Sharp Editorial Progress Bars (Black + Dusty Rose) */}
      <div className="border border-[#EAE3E0] bg-[#FAF6F4] p-6 sm:p-8">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#B5817E]">
          Indicadores Clave · Encuesta Digital UTC
        </p>
        <h3 className="mt-1 font-display text-2xl font-semibold text-[#141312]">
          Hallazgos Porcentuales del Mercado Local
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
          {SURVEY_PROGRESS_BARS.map((metric) => (
            <div key={metric.label}>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-[#141312]">{metric.label}</span>
                <span className="bg-[#141312] px-2 py-0.5 font-mono text-[10px] font-semibold text-white">
                  {metric.percentage}%
                </span>
              </div>
              <div className="h-2 w-full bg-white">
                <div
                  className="h-full bg-[#141312] transition-all duration-700"
                  style={{ width: `${metric.percentage}%` }}
                />
              </div>
              <p className="mt-1 text-[11px] text-[#6E6663]">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Clean Real-Data Charts (Sharp Editorial Bars) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="border border-[#EAE3E0] bg-white p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#B5817E]">
            Decisión de Compra (Menciones Reales)
          </p>
          <h4 className="mt-1 font-display text-lg font-semibold text-[#141312]">
            Factores Más Valorados por las Clientas
          </h4>
          <div className="mt-5 h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PURCHASE_DRIVERS_DATA} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0EAE8" vertical={false} />
                <XAxis dataKey="factor" tick={{ fill: '#6E6663', fontSize: 12 }} axisLine={{ stroke: '#EAE3E0' }} tickLine={false} />
                <YAxis tick={{ fill: '#6E6663', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#141312',
                    border: 'none',
                    borderRadius: 0,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="respuestas" name="Respuestas" maxBarSize={44}>
                  {PURCHASE_DRIVERS_DATA.map((_, idx) => (
                    <Cell key={idx} fill={idx === 0 ? '#141312' : idx === 1 ? '#C69592' : '#D9BEB9'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-[#EAE3E0] bg-white p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#B5817E]">
            Medios de Descubrimiento (n = 108)
          </p>
          <h4 className="mt-1 font-display text-lg font-semibold text-[#141312]">
            Canales que Generan Mayor Interés
          </h4>
          <div className="mt-5 h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHANNELS_DATA} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0EAE8" horizontal={false} />
                <XAxis type="number" tick={{ fill: '#6E6663', fontSize: 12 }} axisLine={{ stroke: '#EAE3E0' }} tickLine={false} />
                <YAxis dataKey="canal" type="category" width={115} tick={{ fill: '#141312', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#141312',
                    border: 'none',
                    borderRadius: 0,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="menciones" name="Menciones" barSize={26}>
                  <Cell fill="#141312" />
                  <Cell fill="#C69592" />
                  <Cell fill="#D9BEB9" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-[#EAE3E0] bg-white p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#B5817E]">
            Perfil Geográfico y Etario
          </p>
          <h4 className="mt-1 font-display text-lg font-semibold text-[#141312]">
            Lugar de Residencia de Encuestados
          </h4>
          <div className="mt-5 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DEMOGRAPHICS_RESIDENCE_DATA} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0EAE8" vertical={false} />
                <XAxis dataKey="municipio" tick={{ fill: '#6E6663', fontSize: 11 }} axisLine={{ stroke: '#EAE3E0' }} tickLine={false} />
                <YAxis tick={{ fill: '#6E6663', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#141312',
                    border: 'none',
                    borderRadius: 0,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="personas" name="Participantes" maxBarSize={48}>
                  <Cell fill="#141312" />
                  <Cell fill="#C69592" />
                  <Cell fill="#E2D5D2" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#EFE9E7] pt-4 text-center text-xs">
            {DEMOGRAPHICS_AGE_DATA.map((a) => (
              <div key={a.rango} className="bg-[#FAF6F4] p-2.5">
                <p className="font-mono text-sm font-semibold text-[#141312]">{a.personas}</p>
                <p className="text-[10px] text-[#6E6663]">{a.rango}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-[#EAE3E0] bg-white p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#B5817E]">
            Hábitos de Gasto Real (MXN)
          </p>
          <h4 className="mt-1 font-display text-lg font-semibold text-[#141312]">
            Gasto Aproximado por Compra
          </h4>
          <div className="mt-5 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BUDGET_SPEND_DATA} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0EAE8" vertical={false} />
                <XAxis dataKey="rango" tick={{ fill: '#6E6663', fontSize: 11 }} axisLine={{ stroke: '#EAE3E0' }} tickLine={false} />
                <YAxis tick={{ fill: '#6E6663', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#141312',
                    border: 'none',
                    borderRadius: 0,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="participantes" name="Participantes" maxBarSize={48}>
                  <Cell fill="#E2D5D2" />
                  <Cell fill="#C69592" />
                  <Cell fill="#141312" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#EFE9E7] pt-4 text-[11px]">
            <div>
              <p className="font-display text-[10px] font-bold uppercase text-[#B5817E]">Presupuesto/Mes</p>
              {MONTHLY_BUDGET_DATA.slice(0, 2).map((m) => (
                <p key={m.rango} className="mt-1 text-[#574D4A]">
                  {m.rango}: <strong className="text-[#141312]">{m.participantes}</strong>
                </p>
              ))}
            </div>
            <div>
              <p className="font-display text-[10px] font-bold uppercase text-[#B5817E]">Frecuencia</p>
              {FREQUENCY_SURVEY_DATA.slice(0, 2).map((f) => (
                <p key={f.frecuencia} className="mt-1 text-[#574D4A]">
                  {f.frecuencia}: <strong className="text-[#141312]">{f.personas}</strong>
                </p>
              ))}
            </div>
            <div>
              <p className="font-display text-[10px] font-bold uppercase text-[#B5817E]">Tipo de Piel</p>
              {SKIN_TYPE_DATA.slice(0, 2).map((s) => (
                <p key={s.tipo} className="mt-1 text-[#574D4A]">
                  {s.tipo}: <strong className="text-[#141312]">{s.personas}</strong>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brands & Products Requested */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="border border-[#EAE3E0] bg-[#FAF6F4] p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#B5817E]">
            Demanda Validada · $100–$350 MXN
          </p>
          <h4 className="mt-1 font-display text-lg font-semibold text-[#141312]">
            Maquillaje Más Solicitado y Marcas Favoritas
          </h4>
          <p className="mt-3 text-xs leading-relaxed text-[#574D4A]">
            <strong>Productos:</strong> {SURVEY_RESULTS_CATALOG.makeupProducts.join(' · ')}.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {SURVEY_RESULTS_CATALOG.makeupBrands.map((brand) => (
              <span
                key={brand}
                className="border border-[#E5DDD9] bg-white px-2.5 py-1 text-[11px] font-medium text-[#141312]"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-[#EAE3E0] bg-[#FAF6F4] p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#B5817E]">
            Demanda Validada · $150–$400 MXN
          </p>
          <h4 className="mt-1 font-display text-lg font-semibold text-[#141312]">
            Skincare & K-Beauty Más Solicitado
          </h4>
          <p className="mt-3 text-xs leading-relaxed text-[#574D4A]">
            <strong>Productos:</strong> {SURVEY_RESULTS_CATALOG.skincareProducts.join(' · ')}.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {SURVEY_RESULTS_CATALOG.skincareBrands.map((brand) => (
              <span
                key={brand}
                className="border border-[#E5DDD9] bg-white px-2.5 py-1 text-[11px] font-medium text-[#141312]"
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
