import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Cell,
} from 'recharts';
import { TrendingUp, Users, Calculator, Filter } from 'lucide-react';
import {
  BUDGET_SPEND_DATA,
  CHANNELS_DATA,
  CONVERSION_FUNNEL_DATA,
  FINANCIAL_SUMMARY,
  MERCHANDISE_TABLE,
  PURCHASE_DRIVERS_DATA,
  SALES_PROJECTION_DATA,
  SKIN_TYPE_DATA,
  SURVEY_PROGRESS_BARS,
} from '../../data/reportData';

export const MetricsChartsTab: React.FC = () => {
  const [simulatedMargin, setSimulatedMargin] = useState<number>(20);

  const totalProjectedRevenue = MERCHANDISE_TABLE.reduce((acc, row) => {
    const simulatedUnitPrice = row.costWithOverhead + row.unitCost * (simulatedMargin / 100);
    return acc + simulatedUnitPrice * row.qty;
  }, 0);

  const totalCostWithOverhead = MERCHANDISE_TABLE.reduce(
    (acc, row) => acc + row.costWithOverhead * row.qty,
    0
  );
  const totalSimulatedProfit = totalProjectedRevenue - totalCostWithOverhead;

  return (
    <div className="animate-fade-in space-y-12">
      {/* Reference 2 Inspired Editorial Progress Bars (Survey n=108) */}
      <div className="grid grid-cols-1 gap-8 border border-[#E8DFDC] bg-[#FAF7F5] p-6 sm:p-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-[#B58681]">
            <Users className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Encuesta Digital · n = 108 Participantes
            </span>
          </div>
          <h3 className="mt-2 font-serif text-3xl text-[#141312]">
            Radiografía del Mercado en Cadereyta & Los Ramones
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#6E6561]">
            Resultados reales recopilados en campo para validar la oferta de maquillaje y skincare.
            El estilo de barras con indicador negro retoma la estética editorial de la guía visual
            de Kaly Cosmetic’s.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="border border-[#E8DFDC] bg-white p-4">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#8C6B5D]">
                Ticket Promedio Meta
              </p>
              <p className="mt-1 font-serif text-3xl text-[#141312]">$615</p>
              <p className="text-[11px] text-[#6E6561]">MXN (2.1 piezas/orden)</p>
            </div>
            <div className="border border-[#E8DFDC] bg-white p-4">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#8C6B5D]">
                Conversión Proyectada
              </p>
              <p className="mt-1 font-serif text-3xl text-[#141312]">2.8%</p>
              <p className="text-[11px] text-[#6E6561]">Tráfico TikTok & Reels</p>
            </div>
          </div>
        </div>

        {/* Exact Reference 2 horizontal bars with black callout badges */}
        <div className="space-y-6 lg:col-span-7">
          {SURVEY_PROGRESS_BARS.map((metric) => (
            <div key={metric.label}>
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
                  {metric.label}
                </span>
                <span className="bg-[#141312] px-2 py-0.5 font-mono text-[10px] font-medium text-white">
                  {metric.percentage}%
                </span>
              </div>
              <div className="h-2 w-full bg-white">
                <div
                  className="h-full bg-[#141312] transition-all duration-700"
                  style={{ width: `${metric.percentage}%` }}
                />
              </div>
              <p className="mt-1.5 text-[11px] text-[#6E6561]">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recharts Interactive Charts Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Chart 1: Purchase Drivers */}
        <div className="border border-[#E8DFDC] bg-white p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B58681]">
            Encuesta Real · Decisión de Compra
          </p>
          <h4 className="mt-1 font-serif text-2xl text-[#141312]">
            Factores Más Valorados por las Clientas
          </h4>
          <div className="mt-6 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PURCHASE_DRIVERS_DATA} margin={{ top: 10, right: 10, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EFE8E4" vertical={false} />
                <XAxis dataKey="factor" tick={{ fill: '#6E6561', fontSize: 12 }} axisLine={{ stroke: '#E8DFDC' }} tickLine={false} />
                <YAxis tick={{ fill: '#6E6561', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#141312',
                    border: 'none',
                    borderRadius: 0,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="respuestas" name="Menciones" radius={[0, 0, 0, 0]} maxBarSize={48}>
                  {PURCHASE_DRIVERS_DATA.map((_, idx) => (
                    <Cell key={idx} fill={idx === 0 ? '#141312' : idx === 1 ? '#B58681' : '#8C6B5D'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Digital Channels & Spend */}
        <div className="border border-[#E8DFDC] bg-white p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B58681]">
            Adquisición & Gasto por Compra
          </p>
          <h4 className="mt-1 font-serif text-2xl text-[#141312]">
            Canales de Descubrimiento (n=108)
          </h4>
          <div className="mt-6 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHANNELS_DATA} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EFE8E4" horizontal={false} />
                <XAxis type="number" tick={{ fill: '#6E6561', fontSize: 12 }} axisLine={{ stroke: '#E8DFDC' }} tickLine={false} />
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
                <Bar dataKey="menciones" name="Menciones" barSize={28}>
                  {CHANNELS_DATA.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: 6-Month Revenue & Profit Projection */}
        <div className="border border-[#E8DFDC] bg-white p-6">
          <div className="flex items-center gap-2 text-[#B58681]">
            <TrendingUp className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
              Proyección Simulada · 6 Meses
            </span>
          </div>
          <h4 className="mt-1 font-serif text-2xl text-[#141312]">
            Ingresos Estimados vs. Utilidad Neta (MXN)
          </h4>
          <div className="mt-6 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={SALES_PROJECTION_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="kalyRoseGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#B58681" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#B58681" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="kalyDarkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#141312" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#141312" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#EFE8E4" vertical={false} />
                <XAxis dataKey="mes" tick={{ fill: '#6E6561', fontSize: 12 }} axisLine={{ stroke: '#E8DFDC' }} tickLine={false} />
                <YAxis tick={{ fill: '#6E6561', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  formatter={(value) => `$${Number(value).toLocaleString('es-MX')} MXN`}
                  contentStyle={{
                    backgroundColor: '#141312',
                    border: 'none',
                    borderRadius: 0,
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="ingresos" name="Ingresos" stroke="#B58681" strokeWidth={2} fill="url(#kalyRoseGrad)" />
                <Area type="monotone" dataKey="utilidad" name="Utilidad (20%)" stroke="#141312" strokeWidth={2} fill="url(#kalyDarkGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: Sales Funnel + Skin Type & Budget Mini-Summary */}
        <div className="border border-[#E8DFDC] bg-white p-6">
          <div className="flex items-center gap-2 text-[#B58681]">
            <Filter className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
              Embudo de Conversión Digital
            </span>
          </div>
          <h4 className="mt-1 font-serif text-2xl text-[#141312]">
            De Reels / TikTok a Pedido Confirmado
          </h4>
          <div className="mt-6 space-y-3.5">
            {CONVERSION_FUNNEL_DATA.map((stage, idx) => {
              const widthPct = Math.max(18, Math.round((stage.usuarios / CONVERSION_FUNNEL_DATA[0].usuarios) * 100));
              return (
                <div key={stage.etapa}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-[#141312]">{stage.etapa}</span>
                    <span className="font-mono text-[#6E6561]">
                      {stage.usuarios.toLocaleString('es-MX')} ({stage.tasa})
                    </span>
                  </div>
                  <div className="h-6 w-full bg-[#FAF7F5]">
                    <div
                      className="flex h-full items-center px-2.5 text-[10px] font-medium text-white transition-all duration-500"
                      style={{
                        width: `${widthPct}%`,
                        backgroundColor: idx === 4 ? '#141312' : idx % 2 === 0 ? '#B58681' : '#8C6B5D',
                      }}
                    >
                      {stage.tasa}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[#E8DFDC] pt-4 text-xs">
            <div>
              <p className="font-semibold uppercase tracking-wider text-[#8C6B5D]">Tipo de Piel Top</p>
              {SKIN_TYPE_DATA.map((s) => (
                <p key={s.tipo} className="mt-1 text-[#6E6561]">
                  {s.tipo}: <strong className="text-[#141312]">{s.personas}</strong>
                </p>
              ))}
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider text-[#8C6B5D]">Gasto por Compra</p>
              {BUDGET_SPEND_DATA.map((b) => (
                <p key={b.rango} className="mt-1 text-[#6E6561]">
                  {b.rango}: <strong className="text-[#141312]">{b.participantes}</strong>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Real Financial Annex Table + Interactive Margin Simulator */}
      <div className="border border-[#E8DFDC] bg-white p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E8DFDC] pb-6 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-[#B58681]">
              <Calculator className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                Anexo Financiero Real · Lote Inicial de 55 Piezas
              </span>
            </div>
            <h3 className="mt-2 font-serif text-3xl text-[#141312]">
              Estructura de Costos & Simulador de Margen
            </h3>
            <p className="mt-1 text-xs text-[#6E6561]">
              Costos fijos mensuales: <strong>${FINANCIAL_SUMMARY.totalFixed.toLocaleString('es-MX')}</strong> ·
              Mercancía: <strong>${FINANCIAL_SUMMARY.variableCosts[0].amount.toLocaleString('es-MX')}</strong> ·
              Prorrateo fijo + variable por pieza: <strong>${FINANCIAL_SUMMARY.overheadPerPiece.toFixed(2)} MXN</strong>
            </p>
          </div>

          {/* Margin Simulator Slider */}
          <div className="w-full border border-[#E8DFDC] bg-[#FAF7F5] p-4 lg:w-80">
            <div className="flex items-center justify-between">
              <label htmlFor="margin-slider" className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#141312]">
                Simular Margen de Ganancia
              </label>
              <span className="bg-[#141312] px-2 py-0.5 font-mono text-xs text-white">
                {simulatedMargin}%
              </span>
            </div>
            <input
              id="margin-slider"
              type="range"
              min={15}
              max={45}
              step={5}
              value={simulatedMargin}
              onChange={(e) => setSimulatedMargin(Number(e.target.value))}
              className="mt-3 w-full accent-[#141312]"
            />
            <div className="mt-2 flex justify-between text-[11px] text-[#6E6561]">
              <span>Venta lote: <strong className="text-[#141312]">${Math.round(totalProjectedRevenue).toLocaleString('es-MX')}</strong></span>
              <span>Utilidad: <strong className="text-[#9A6C67]">+${Math.round(totalSimulatedProfit).toLocaleString('es-MX')}</strong></span>
            </div>
          </div>
        </div>

        {/* Scrollable Financial Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[740px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-[#141312] bg-[#FAF7F5] text-[10px] uppercase tracking-[0.14em] text-[#141312]">
                <th className="px-4 py-3 font-semibold">Producto</th>
                <th className="px-4 py-3 font-semibold">Marca</th>
                <th className="px-4 py-3 text-right font-semibold">Costo Unit.</th>
                <th className="px-4 py-3 text-center font-semibold">Cant.</th>
                <th className="px-4 py-3 text-right font-semibold">Costo + Fijo/Var</th>
                <th className="px-4 py-3 text-right font-semibold">Ganancia ({simulatedMargin}%)</th>
                <th className="px-4 py-3 text-right font-semibold">Precio Venta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DFDC]">
              {MERCHANDISE_TABLE.map((row) => {
                const profit = row.unitCost * (simulatedMargin / 100);
                const finalPrice = row.costWithOverhead + profit;
                return (
                  <tr key={row.product} className="transition-colors hover:bg-[#FAF7F5]">
                    <td className="px-4 py-3 font-medium text-[#141312]">{row.product}</td>
                    <td className="px-4 py-3 text-[#8C6B5D]">{row.brand}</td>
                    <td className="px-4 py-3 text-right font-mono">${row.unitCost.toFixed(2)}</td>
                    <td className="px-4 py-3 text-center font-mono">{row.qty}</td>
                    <td className="px-4 py-3 text-right font-mono text-[#6E6561]">
                      ${row.costWithOverhead.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-[#9A6C67]">
                      +${profit.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-right font-mono font-semibold text-[#141312]">
                      ${finalPrice.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
