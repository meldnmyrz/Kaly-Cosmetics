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

const BAR_COLORS = ['#6E2E3B', '#B8767D', '#C4835A', '#4E7A61', '#8E4A5B', '#6E2E3B'];

export const SurveyDataTab: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-10">
      {/* Top Real Demographics Summary — Color-Coded */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="border border-[#EED9D6] border-t-4 border-t-[#6E2E3B] bg-[#FDF5F4] p-5 text-center">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#6E2E3B]">
            Muestra Total
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#1D1517]">108</p>
          <p className="mt-1 text-xs text-[#6E6062]">Encuestados digitales</p>
        </div>
        <div className="border border-[#EED9D6] border-t-4 border-t-[#B8767D] bg-[#FAF0EE] p-5 text-center">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#A86269]">
            Género
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#1D1517]">86 / 16</p>
          <p className="mt-1 text-xs text-[#6E6062]">Femenino / Masculino</p>
        </div>
        <div className="border border-[#D5E3D9] border-t-4 border-t-[#4E7A61] bg-[#F2F8F4] p-5 text-center">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#3E6850]">
            Piel Predominante
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#1D1517]">39 / 31</p>
          <p className="mt-1 text-xs text-[#4C6155]">Mixta / Grasa</p>
        </div>
        <div className="border border-[#ECDCC9] border-t-4 border-t-[#C4835A] bg-[#FCF6EF] p-5 text-center">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-[#A86942]">
            Cobertura Local
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#1D1517]">82%</p>
          <p className="mt-1 text-xs text-[#6B5A4D]">55 Cadereyta · 34 Ramones</p>
        </div>
      </div>

      {/* Color-Coded Editorial Progress Bars */}
      <div className="border border-[#EED9D6] bg-gradient-to-br from-[#FDF6F5] to-[#F9ECEA] p-6 sm:p-8">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#6E2E3B]">
          Indicadores Clave · Encuesta Digital UTC
        </p>
        <h3 className="mt-1 font-display text-2xl font-bold text-[#1D1517]">
          Hallazgos Porcentuales del Mercado Local
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
          {SURVEY_PROGRESS_BARS.map((metric, idx) => {
            const color = BAR_COLORS[idx % BAR_COLORS.length];
            return (
              <div key={metric.label}>
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#1D1517]">{metric.label}</span>
                  <span
                    className="px-2 py-0.5 font-mono text-[10px] font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {metric.percentage}%
                  </span>
                </div>
                <div className="h-2.5 w-full bg-white">
                  <div
                    className="h-full transition-all duration-700"
                    style={{ width: `${metric.percentage}%`, backgroundColor: color }}
                  />
                </div>
                <p className="mt-1 text-[11px] text-[#6E6062]">{metric.detail}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4 Colorful Luxury Recharts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="border border-[#EED9D6] bg-white p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#6E2E3B]">
            Decisión de Compra (Menciones Reales)
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-[#1D1517]">
            Factores Más Valorados por las Clientas
          </h4>
          <div className="mt-5 h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PURCHASE_DRIVERS_DATA} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3E7E5" vertical={false} />
                <XAxis dataKey="factor" tick={{ fill: '#57494B', fontSize: 12 }} axisLine={{ stroke: '#EED9D6' }} tickLine={false} />
                <YAxis tick={{ fill: '#6E6062', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#6E2E3B',
                    border: 'none',
                    borderRadius: 0,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="respuestas" name="Respuestas" maxBarSize={44}>
                  <Cell fill="#6E2E3B" />
                  <Cell fill="#B8767D" />
                  <Cell fill="#4E7A61" />
                  <Cell fill="#C4835A" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-[#EED9D6] bg-white p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#A86269]">
            Medios de Descubrimiento (n = 108)
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-[#1D1517]">
            Canales que Generan Mayor Interés
          </h4>
          <div className="mt-5 h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHANNELS_DATA} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3E7E5" horizontal={false} />
                <XAxis type="number" tick={{ fill: '#6E6062', fontSize: 12 }} axisLine={{ stroke: '#EED9D6' }} tickLine={false} />
                <YAxis dataKey="canal" type="category" width={115} tick={{ fill: '#1D1517', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#6E2E3B',
                    border: 'none',
                    borderRadius: 0,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="menciones" name="Menciones" barSize={26}>
                  <Cell fill="#B8536B" />
                  <Cell fill="#1D1517" />
                  <Cell fill="#C4835A" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-[#D5E3D9] bg-white p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#3E6850]">
            Perfil Geográfico y Etario
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-[#1D1517]">
            Lugar de Residencia de Encuestados
          </h4>
          <div className="mt-5 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DEMOGRAPHICS_RESIDENCE_DATA} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EAF2EC" vertical={false} />
                <XAxis dataKey="municipio" tick={{ fill: '#57494B', fontSize: 11 }} axisLine={{ stroke: '#D5E3D9' }} tickLine={false} />
                <YAxis tick={{ fill: '#6E6062', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#3E6850',
                    border: 'none',
                    borderRadius: 0,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="personas" name="Participantes" maxBarSize={48}>
                  <Cell fill="#4E7A61" />
                  <Cell fill="#8CB39B" />
                  <Cell fill="#D0E0D6" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#E6EFE9] pt-4 text-center text-xs">
            {DEMOGRAPHICS_AGE_DATA.map((a) => (
              <div key={a.rango} className="bg-[#F2F8F4] p-2.5">
                <p className="font-mono text-sm font-bold text-[#3E6850]">{a.personas}</p>
                <p className="text-[10px] text-[#4C6155]">{a.rango}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-[#ECDCC9] bg-white p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#A86942]">
            Hábitos de Gasto Real (MXN)
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-[#1D1517]">
            Gasto Aproximado por Compra
          </h4>
          <div className="mt-5 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BUDGET_SPEND_DATA} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F6ECE1" vertical={false} />
                <XAxis dataKey="rango" tick={{ fill: '#57494B', fontSize: 11 }} axisLine={{ stroke: '#ECDCC9' }} tickLine={false} />
                <YAxis tick={{ fill: '#6E6062', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#A86942',
                    border: 'none',
                    borderRadius: 0,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="participantes" name="Participantes" maxBarSize={48}>
                  <Cell fill="#E6C6AE" />
                  <Cell fill="#C4835A" />
                  <Cell fill="#6E2E3B" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#F2E5D8] pt-4 text-[11px]">
            <div>
              <p className="font-display text-[10px] font-bold uppercase text-[#A86942]">Presupuesto/Mes</p>
              {MONTHLY_BUDGET_DATA.slice(0, 2).map((m) => (
                <p key={m.rango} className="mt-1 text-[#57494B]">
                  {m.rango}: <strong className="text-[#1D1517]">{m.participantes}</strong>
                </p>
              ))}
            </div>
            <div>
              <p className="font-display text-[10px] font-bold uppercase text-[#6E2E3B]">Frecuencia</p>
              {FREQUENCY_SURVEY_DATA.slice(0, 2).map((f) => (
                <p key={f.frecuencia} className="mt-1 text-[#57494B]">
                  {f.frecuencia}: <strong className="text-[#1D1517]">{f.personas}</strong>
                </p>
              ))}
            </div>
            <div>
              <p className="font-display text-[10px] font-bold uppercase text-[#3E6850]">Tipo de Piel</p>
              {SKIN_TYPE_DATA.slice(0, 2).map((s) => (
                <p key={s.tipo} className="mt-1 text-[#57494B]">
                  {s.tipo}: <strong className="text-[#1D1517]">{s.personas}</strong>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Color-Differentiated Brands & Products Cards: Blush Maquillaje vs Centella Sage Skincare */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="border border-[#EED9D6] border-l-4 border-l-[#6E2E3B] bg-[#FDF4F3] p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#6E2E3B]">
            Demanda Validada · $100–$350 MXN
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-[#1D1517]">
            Maquillaje Más Solicitado y Marcas Favoritas
          </h4>
          <p className="mt-3 text-xs leading-relaxed text-[#57494B]">
            <strong>Productos:</strong> {SURVEY_RESULTS_CATALOG.makeupProducts.join(' · ')}.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {SURVEY_RESULTS_CATALOG.makeupBrands.map((brand) => (
              <span
                key={brand}
                className="border border-[#E8CECA] bg-white px-2.5 py-1 text-[11px] font-medium text-[#6E2E3B]"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-[#CFE0D5] border-l-4 border-l-[#4E7A61] bg-[#F2F8F4] p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#3E6850]">
            Demanda Validada · $150–$400 MXN
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-[#1B2B21]">
            Skincare & K-Beauty Más Solicitado
          </h4>
          <p className="mt-3 text-xs leading-relaxed text-[#4C6155]">
            <strong>Productos:</strong> {SURVEY_RESULTS_CATALOG.skincareProducts.join(' · ')}.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {SURVEY_RESULTS_CATALOG.skincareBrands.map((brand) => (
              <span
                key={brand}
                className="border border-[#C9DED0] bg-white px-2.5 py-1 text-[11px] font-medium text-[#3E6850]"
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
