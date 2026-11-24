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

// 100% Aesthetic Rose / Mauve / Berry / Blush Harmony (Zero green!)
const BAR_COLORS = ['#9E5666', '#B26B7A', '#C27F8E', '#CE96A3', '#B26B7A', '#9E5666'];

export const SurveyDataTab: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-10">
      {/* Top Real Demographics Summary — Harmonious Rose Shades */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-md border border-[#EED7DC] border-t-4 border-t-[#9E5666] bg-[#FDF5F7] p-5 text-center">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#9E5666]">
            Muestra Total
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#3A2328]">108</p>
          <p className="mt-1 text-xs text-[#7A6167]">Encuestados digitales</p>
        </div>
        <div className="rounded-md border border-[#EED7DC] border-t-4 border-t-[#B26B7A] bg-[#FAF0F2] p-5 text-center">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#B26B7A]">
            Género
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#3A2328]">86 / 16</p>
          <p className="mt-1 text-xs text-[#7A6167]">Femenino / Masculino</p>
        </div>
        <div className="rounded-md border border-[#EED7DC] border-t-4 border-t-[#C98E9B] bg-[#FDF5F7] p-5 text-center">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#A86674]">
            Piel Predominante
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#3A2328]">39 / 31</p>
          <p className="mt-1 text-xs text-[#7A6167]">Mixta / Grasa</p>
        </div>
        <div className="rounded-md border border-[#E7CDD3] border-t-4 border-t-[#D8A5B0] bg-[#F7E2E7] p-5 text-center">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#8F4D5C]">
            Cobertura Local
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#3A2328]">82%</p>
          <p className="mt-1 text-xs text-[#6B5056]">55 Cadereyta · 34 Ramones</p>
        </div>
      </div>

      {/* Aesthetic Rose/Mauve Progress Bars */}
      <div className="rounded-md border border-[#EED7DC] bg-gradient-to-br from-[#FDF6F8] to-[#F8E7EB] p-6 sm:p-8">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#A85E6E]">
          Indicadores Clave · Encuesta Digital UTC
        </p>
        <h3 className="mt-1 font-display text-2xl font-bold text-[#3A2328]">
          Hallazgos Porcentuales del Mercado Local
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
          {SURVEY_PROGRESS_BARS.map((metric, idx) => {
            const color = BAR_COLORS[idx % BAR_COLORS.length];
            return (
              <div key={metric.label}>
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#3A2328]">{metric.label}</span>
                  <span
                    className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {metric.percentage}%
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${metric.percentage}%`, backgroundColor: color }}
                  />
                </div>
                <p className="mt-1 text-[11px] text-[#7A6167]">{metric.detail}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4 Aesthetic Rose/Mauve/Blush Recharts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-md border border-[#EED7DC] bg-white p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#B26B7A]">
            Decisión de Compra (Menciones Reales)
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-[#3A2328]">
            Factores Más Valorados por las Clientas
          </h4>
          <div className="mt-5 h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PURCHASE_DRIVERS_DATA} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F5E8EB" vertical={false} />
                <XAxis dataKey="factor" tick={{ fill: '#6B5056', fontSize: 12 }} axisLine={{ stroke: '#EED7DC' }} tickLine={false} />
                <YAxis tick={{ fill: '#7A6167', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#9E5666',
                    border: 'none',
                    borderRadius: 6,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="respuestas" name="Respuestas" radius={[6, 6, 0, 0]} maxBarSize={44}>
                  <Cell fill="#9E5666" />
                  <Cell fill="#B87482" />
                  <Cell fill="#CE96A3" />
                  <Cell fill="#E2B9C2" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-md border border-[#EED7DC] bg-white p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#B26B7A]">
            Medios de Descubrimiento (n = 108)
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-[#3A2328]">
            Canales que Generan Mayor Interés
          </h4>
          <div className="mt-5 h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHANNELS_DATA} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F5E8EB" horizontal={false} />
                <XAxis type="number" tick={{ fill: '#7A6167', fontSize: 12 }} axisLine={{ stroke: '#EED7DC' }} tickLine={false} />
                <YAxis dataKey="canal" type="category" width={115} tick={{ fill: '#3A2328', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#9E5666',
                    border: 'none',
                    borderRadius: 6,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="menciones" name="Menciones" radius={[0, 6, 6, 0]} barSize={26}>
                  <Cell fill="#9E5666" />
                  <Cell fill="#BE7D8B" />
                  <Cell fill="#DBAAB5" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-md border border-[#EED7DC] bg-white p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#B26B7A]">
            Perfil Geográfico y Etario
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-[#3A2328]">
            Lugar de Residencia de Encuestados
          </h4>
          <div className="mt-5 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DEMOGRAPHICS_RESIDENCE_DATA} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F5E8EB" vertical={false} />
                <XAxis dataKey="municipio" tick={{ fill: '#6B5056', fontSize: 11 }} axisLine={{ stroke: '#EED7DC' }} tickLine={false} />
                <YAxis tick={{ fill: '#7A6167', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#9E5666',
                    border: 'none',
                    borderRadius: 6,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="personas" name="Participantes" radius={[6, 6, 0, 0]} maxBarSize={48}>
                  <Cell fill="#A85E6E" />
                  <Cell fill="#CE96A3" />
                  <Cell fill="#ECCAD2" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#F3E3E7] pt-4 text-center text-xs">
            {DEMOGRAPHICS_AGE_DATA.map((a) => (
              <div key={a.rango} className="rounded-sm bg-[#FDF4F6] p-2.5">
                <p className="font-mono text-sm font-bold text-[#9E5666]">{a.personas}</p>
                <p className="text-[10px] text-[#7A6167]">{a.rango}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-[#EED7DC] bg-white p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#B26B7A]">
            Hábitos de Gasto Real (MXN)
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-[#3A2328]">
            Gasto Aproximado por Compra
          </h4>
          <div className="mt-5 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BUDGET_SPEND_DATA} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F5E8EB" vertical={false} />
                <XAxis dataKey="rango" tick={{ fill: '#6B5056', fontSize: 11 }} axisLine={{ stroke: '#EED7DC' }} tickLine={false} />
                <YAxis tick={{ fill: '#7A6167', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#9E5666',
                    border: 'none',
                    borderRadius: 6,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="participantes" name="Participantes" radius={[6, 6, 0, 0]} maxBarSize={48}>
                  <Cell fill="#ECCAD2" />
                  <Cell fill="#C98E9B" />
                  <Cell fill="#9E5666" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#F3E3E7] pt-4 text-[11px]">
            <div>
              <p className="font-display text-[10px] font-bold uppercase text-[#A85E6E]">Presupuesto/Mes</p>
              {MONTHLY_BUDGET_DATA.slice(0, 2).map((m) => (
                <p key={m.rango} className="mt-1 text-[#5E454B]">
                  {m.rango}: <strong className="text-[#3A2328]">{m.participantes}</strong>
                </p>
              ))}
            </div>
            <div>
              <p className="font-display text-[10px] font-bold uppercase text-[#B26B7A]">Frecuencia</p>
              {FREQUENCY_SURVEY_DATA.slice(0, 2).map((f) => (
                <p key={f.frecuencia} className="mt-1 text-[#5E454B]">
                  {f.frecuencia}: <strong className="text-[#3A2328]">{f.personas}</strong>
                </p>
              ))}
            </div>
            <div>
              <p className="font-display text-[10px] font-bold uppercase text-[#C27F8E]">Tipo de Piel</p>
              {SKIN_TYPE_DATA.slice(0, 2).map((s) => (
                <p key={s.tipo} className="mt-1 text-[#5E454B]">
                  {s.tipo}: <strong className="text-[#3A2328]">{s.personas}</strong>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brands & Products Cards — Soft Blush & Dusty Rose Harmony */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-md border border-[#EED7DC] border-l-4 border-l-[#9E5666] bg-[#FDF5F7] p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#9E5666]">
            Demanda Validada · $100–$350 MXN
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-[#3A2328]">
            Maquillaje Más Solicitado y Marcas Favoritas
          </h4>
          <p className="mt-3 text-xs leading-relaxed text-[#5E454B]">
            <strong>Productos:</strong> {SURVEY_RESULTS_CATALOG.makeupProducts.join(' · ')}.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {SURVEY_RESULTS_CATALOG.makeupBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-[#E9CFD5] bg-white px-3 py-1 text-[11px] font-medium text-[#8F4D5C]"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-[#EED7DC] border-l-4 border-l-[#C98E9B] bg-[#F8E7EB] p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#A85E6E]">
            Demanda Validada · $150–$400 MXN
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-[#3A2328]">
            Skincare & K-Beauty Más Solicitado
          </h4>
          <p className="mt-3 text-xs leading-relaxed text-[#5E454B]">
            <strong>Productos:</strong> {SURVEY_RESULTS_CATALOG.skincareProducts.join(' · ')}.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {SURVEY_RESULTS_CATALOG.skincareBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-[#E5C7CE] bg-white px-3 py-1 text-[11px] font-medium text-[#9E5666]"
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
