import React, { useState } from 'react';
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
import { Users, Calculator, Filter, Wallet, PieChart } from 'lucide-react';
import {
  BUDGET_SPEND_DATA,
  CHANNELS_DATA,
  CONVERSION_FUNNEL_DATA,
  DEMOGRAPHICS_AGE_DATA,
  DEMOGRAPHICS_RESIDENCE_DATA,
  FINANCIAL_SUMMARY,
  FREQUENCY_SURVEY_DATA,
  MERCHANDISE_TABLE,
  MONTHLY_BUDGET_DATA,
  PURCHASE_DRIVERS_DATA,
  SKIN_TYPE_DATA,
  SURVEY_PROGRESS_BARS,
} from '../../data/reportData';

export const MetricsChartsTab: React.FC = () => {
  const [simulatedMargin, setSimulatedMargin] = useState<number>(20);

  const totalMerchandiseBase = MERCHANDISE_TABLE.reduce((acc, row) => acc + row.totalCost, 0);
  const totalUnits = MERCHANDISE_TABLE.reduce((acc, row) => acc + row.qty, 0);

  const totalProjectedRevenue = MERCHANDISE_TABLE.reduce((acc, row) => {
    const unitProfit = row.unitCost * (simulatedMargin / 100);
    const simulatedUnitPrice = row.costWithOverhead + unitProfit;
    return acc + simulatedUnitPrice * row.qty;
  }, 0);

  const totalCostWithOverhead = MERCHANDISE_TABLE.reduce(
    (acc, row) => acc + row.costWithOverhead * row.qty,
    0
  );
  const totalSimulatedProfit = totalProjectedRevenue - totalCostWithOverhead;

  return (
    <div className="animate-fade-in space-y-12">
      {/* 1. Reference 2 Inspired Editorial Progress Bars (100% Real Survey n=108) */}
      <div className="grid grid-cols-1 gap-8 border border-[#E8DFDC] bg-[#FAF7F5] p-6 sm:p-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-[#B58681]">
            <Users className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Datos Reales de Encuesta · n = 108
            </span>
          </div>
          <h3 className="mt-2 font-serif text-3xl text-[#141312]">
            Radiografía Real del Mercado (Cadereyta & Los Ramones)
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#6E6561]">
            Todos los porcentajes e indicadores de esta sección corresponden exactamente a las{' '}
            <strong>108 respuestas reales</strong> recopiladas en la encuesta digital del Proyecto
            Integrador de la Universidad Tecnológica Cadereyta.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="border border-[#E8DFDC] bg-white p-4">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#8C6B5D]">
                Género Femenino
              </p>
              <p className="mt-1 font-serif text-3xl text-[#141312]">86</p>
              <p className="text-[11px] text-[#6E6561]">vs. 16 masculino</p>
            </div>
            <div className="border border-[#E8DFDC] bg-white p-4">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#8C6B5D]">
                Piel Mixta + Grasa
              </p>
              <p className="mt-1 font-serif text-3xl text-[#141312]">70</p>
              <p className="text-[11px] text-[#6E6561]">39 mixta · 31 grasa</p>
            </div>
          </div>
        </div>

        {/* Exact Reference 2 horizontal bars with black callout badges */}
        <div className="space-y-5 lg:col-span-7">
          {SURVEY_PROGRESS_BARS.map((metric) => (
            <div key={metric.label}>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#141312]">
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
              <p className="mt-1 text-[11px] text-[#6E6561]">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Real Survey Charts Grid (n=108) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Chart 1: Purchase Drivers (Real) */}
        <div className="border border-[#E8DFDC] bg-white p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B58681]">
            Encuesta Real (n=108) · Decisión de Compra
          </p>
          <h4 className="mt-1 font-serif text-2xl text-[#141312]">
            Factores que Influyen en la Compra
          </h4>
          <div className="mt-6 h-60 w-full">
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
                <Bar dataKey="respuestas" name="Respuestas" maxBarSize={48}>
                  {PURCHASE_DRIVERS_DATA.map((_, idx) => (
                    <Cell key={idx} fill={idx === 0 ? '#141312' : idx === 1 ? '#B58681' : '#8C6B5D'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Digital Channels (Real) */}
        <div className="border border-[#E8DFDC] bg-white p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B58681]">
            Encuesta Real (n=108) · Difusión
          </p>
          <h4 className="mt-1 font-serif text-2xl text-[#141312]">
            Medios que Generan Mayor Interés
          </h4>
          <div className="mt-6 h-60 w-full">
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

        {/* Chart 3: Residence & Age Demographics (Real) */}
        <div className="border border-[#E8DFDC] bg-white p-6">
          <div className="flex items-center gap-2 text-[#B58681]">
            <PieChart className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
              Encuesta Real (n=108) · Perfil Geográfico y Etario
            </span>
          </div>
          <h4 className="mt-1 font-serif text-2xl text-[#141312]">
            Residencia de Participantes
          </h4>
          <div className="mt-5 h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DEMOGRAPHICS_RESIDENCE_DATA} margin={{ top: 10, right: 10, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EFE8E4" vertical={false} />
                <XAxis dataKey="municipio" tick={{ fill: '#6E6561', fontSize: 11 }} axisLine={{ stroke: '#E8DFDC' }} tickLine={false} />
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
                <Bar dataKey="personas" name="Participantes" maxBarSize={52}>
                  <Cell fill="#141312" />
                  <Cell fill="#B58681" />
                  <Cell fill="#D5C7C2" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#E8DFDC] pt-4 text-center text-xs">
            {DEMOGRAPHICS_AGE_DATA.map((a) => (
              <div key={a.rango} className="bg-[#FAF7F5] p-2.5">
                <p className="font-mono text-sm font-semibold text-[#141312]">{a.personas}</p>
                <p className="text-[10px] text-[#6E6561]">{a.rango}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 4: Spend per Purchase, Monthly Budget & Skin Type (Real) */}
        <div className="border border-[#E8DFDC] bg-white p-6">
          <div className="flex items-center gap-2 text-[#B58681]">
            <Wallet className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
              Encuesta Real (n=108) · Poder Adquisitivo
            </span>
          </div>
          <h4 className="mt-1 font-serif text-2xl text-[#141312]">
            Gasto Aproximado por Compra (MXN)
          </h4>
          <div className="mt-5 h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BUDGET_SPEND_DATA} margin={{ top: 10, right: 10, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EFE8E4" vertical={false} />
                <XAxis dataKey="rango" tick={{ fill: '#6E6561', fontSize: 11 }} axisLine={{ stroke: '#E8DFDC' }} tickLine={false} />
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
                <Bar dataKey="participantes" name="Participantes" maxBarSize={52}>
                  <Cell fill="#D5C7C2" />
                  <Cell fill="#8C6B5D" />
                  <Cell fill="#141312" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#E8DFDC] pt-4 text-[11px]">
            <div>
              <p className="font-semibold uppercase tracking-wider text-[#8C6B5D]">Presupuesto/Mes</p>
              {MONTHLY_BUDGET_DATA.slice(0, 2).map((m) => (
                <p key={m.rango} className="mt-1 text-[#6E6561]">
                  {m.rango}: <strong className="text-[#141312]">{m.participantes}</strong>
                </p>
              ))}
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider text-[#8C6B5D]">Frecuencia</p>
              {FREQUENCY_SURVEY_DATA.slice(0, 2).map((f) => (
                <p key={f.frecuencia} className="mt-1 text-[#6E6561]">
                  {f.frecuencia}: <strong className="text-[#141312]">{f.personas}</strong>
                </p>
              ))}
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider text-[#8C6B5D]">Tipo de Piel</p>
              {SKIN_TYPE_DATA.slice(0, 2).map((s) => (
                <p key={s.tipo} className="mt-1 text-[#6E6561]">
                  {s.tipo}: <strong className="text-[#141312]">{s.personas}</strong>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Real Monthly Fixed & Variable Cost Structure (Exact Excel Annex) */}
      <div className="border border-[#E8DFDC] bg-[#FAF7F5] p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E8DFDC] pb-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B58681]">
              Anexo Financiero Oficial · Costos por Mes (Kaly Cosmetic’s)
            </p>
            <h3 className="mt-1 font-serif text-3xl text-[#141312]">
              Desglose Exacto de Costos Fijos y Variables
            </h3>
          </div>
          <span className="bg-[#141312] px-3 py-1.5 font-mono text-[11px] text-[#EBD7D4]">
            Prorrateo Total / Pieza: ${FINANCIAL_SUMMARY.overheadPerPiece.toFixed(2)} MXN
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Costos Fijos */}
          <div className="border border-[#E8DFDC] bg-white p-6">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#141312]">
              Costos Fijos Mensuales
            </h4>
            <ul className="mt-4 divide-y divide-[#F0E9E6] text-xs">
              {FINANCIAL_SUMMARY.fixedCosts.map((c) => (
                <li key={c.item} className="flex justify-between py-2.5 text-[#4E4744]">
                  <span>{c.item}</span>
                  <span className="font-mono font-medium text-[#141312]">
                    ${c.amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between border-t border-[#141312] pt-3 text-sm font-semibold text-[#141312]">
              <span>Total Costos Fijos</span>
              <span className="font-mono">${FINANCIAL_SUMMARY.totalFixed.toLocaleString('es-MX')}.00</span>
            </div>
          </div>

          {/* Costos Variables */}
          <div className="border border-[#E8DFDC] bg-white p-6">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#141312]">
              Costos Variables del Lote
            </h4>
            <ul className="mt-4 divide-y divide-[#F0E9E6] text-xs">
              {FINANCIAL_SUMMARY.variableCosts.map((c) => (
                <li key={c.item} className="flex justify-between py-2.5 text-[#4E4744]">
                  <span>{c.item}</span>
                  <span className="font-mono font-medium text-[#141312]">
                    ${c.amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between border-t border-[#141312] pt-3 text-sm font-semibold text-[#141312]">
              <span>Total Costos Variables</span>
              <span className="font-mono">
                ${FINANCIAL_SUMMARY.totalVariable.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          {/* Prorrateo Unitario */}
          <div className="flex flex-col justify-between border border-[#141312] bg-[#141312] p-6 text-white">
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#EBD7D4]">
                Fórmula Unitaria del Anexo (55 pzs)
              </h4>
              <div className="mt-5 space-y-3 text-xs">
                <div className="flex justify-between border-b border-white/15 pb-2.5">
                  <span className="text-[#D3C6C1]">Fijo por pieza ($4,262 / 55)</span>
                  <span className="font-mono font-semibold">
                    ${FINANCIAL_SUMMARY.fixedPerPiece.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/15 pb-2.5">
                  <span className="text-[#D3C6C1]">Variable por pieza ($2 + $1)</span>
                  <span className="font-mono font-semibold">
                    ${FINANCIAL_SUMMARY.variablePerPiece.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/15 pb-2.5">
                  <span className="text-[#D3C6C1]">Costo F + V por pieza</span>
                  <span className="font-mono font-semibold text-[#EBD7D4]">
                    ${FINANCIAL_SUMMARY.overheadPerPiece.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D3C6C1]">Margen de ganancia base</span>
                  <span className="font-mono font-semibold text-[#EBD7D4]">20% (0.20)</span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-[11px] leading-relaxed text-[#CFC3BE]">
              Fórmula: <code className="text-white">Precio = Costo + $80.49 + (Costo × 20%)</code>.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Real Merchandise Table (All 15 SKUs from Excel) + Margin Simulator */}
      <div className="border border-[#E8DFDC] bg-white p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E8DFDC] pb-6 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-[#B58681]">
              <Calculator className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                Tabla Oficial de Mercancía · 15 Productos / {totalUnits} Piezas
              </span>
            </div>
            <h3 className="mt-2 font-serif text-3xl text-[#141312]">
              Costeo Unitario, Precio de Venta y Simulador de Margen
            </h3>
            <p className="mt-1 text-xs text-[#6E6561]">
              Valores exactos del documento financiero (20% por defecto). Mueve el deslizador para
              simular escenarios de margen sin alterar los costos base.
            </p>
          </div>

          <div className="w-full border border-[#E8DFDC] bg-[#FAF7F5] p-4 lg:w-80">
            <div className="flex items-center justify-between">
              <label
                htmlFor="margin-slider"
                className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#141312]"
              >
                Porcentaje de Ganancia
              </label>
              <span className="bg-[#141312] px-2 py-0.5 font-mono text-xs text-white">
                {simulatedMargin}% {simulatedMargin === 20 ? '(Real)' : ''}
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
              <span>
                Venta total:{' '}
                <strong className="text-[#141312]">
                  ${totalProjectedRevenue.toLocaleString('es-MX', { maximumFractionDigits: 2 })}
                </strong>
              </span>
              <span>
                Utilidad:{' '}
                <strong className="text-[#9A6C67]">
                  +${totalSimulatedProfit.toLocaleString('es-MX', { maximumFractionDigits: 2 })}
                </strong>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-[#141312] bg-[#FAF7F5] text-[10px] uppercase tracking-[0.12em] text-[#141312]">
                <th className="px-3.5 py-3 font-semibold">Producto</th>
                <th className="px-3.5 py-3 text-right font-semibold">Costo Unit.</th>
                <th className="px-3.5 py-3 text-center font-semibold">Cant.</th>
                <th className="px-3.5 py-3 text-right font-semibold">Total Mercancía</th>
                <th className="px-3.5 py-3 text-right font-semibold">Precio c/ F y V</th>
                <th className="px-3.5 py-3 text-right font-semibold">Ganancia ({simulatedMargin}%)</th>
                <th className="px-3.5 py-3 text-right font-semibold">Precio Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DFDC]">
              {MERCHANDISE_TABLE.map((row) => {
                const profit = row.unitCost * (simulatedMargin / 100);
                const finalPrice = row.costWithOverhead + profit;
                return (
                  <tr key={row.product} className="transition-colors hover:bg-[#FAF7F5]">
                    <td className="px-3.5 py-3 font-medium text-[#141312]">
                      {row.product}{' '}
                      <span className="ml-1 text-[10px] text-[#8C6B5D]">({row.brand})</span>
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono">${row.unitCost.toFixed(2)}</td>
                    <td className="px-3.5 py-3 text-center font-mono">{row.qty}</td>
                    <td className="px-3.5 py-3 text-right font-mono text-[#4E4744]">
                      ${row.totalCost.toFixed(2)}
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono text-[#6E6561]">
                      ${row.costWithOverhead.toFixed(2)}
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono text-[#9A6C67]">
                      +${profit.toFixed(2)}
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono font-semibold text-[#141312]">
                      ${finalPrice.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-[#141312] bg-[#FAF7F5] font-semibold text-[#141312]">
                <td className="px-3.5 py-3.5 uppercase tracking-wider">Totales del Lote</td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#6E6561]">—</td>
                <td className="px-3.5 py-3.5 text-center font-mono">{totalUnits}</td>
                <td className="px-3.5 py-3.5 text-right font-mono">
                  ${totalMerchandiseBase.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#6E6561]">
                  ${totalCostWithOverhead.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#9A6C67]">
                  +${totalSimulatedProfit.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-3.5 py-3.5 text-right font-mono">
                  ${totalProjectedRevenue.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* 5. Projected Digital Conversion Funnel (Clearly labeled as commercial projection) */}
      <div className="border border-[#E8DFDC] bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 text-[#B58681]">
              <Filter className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                Proyección Comercial Digital (Basada en Canales IG & TikTok)
              </span>
            </div>
            <h4 className="mt-1 font-serif text-2xl text-[#141312]">
              Embudo Estimado de Conversión Mensual
            </h4>
          </div>
          <span className="bg-[#F4E3E0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
            Escenario Proyectado
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-5">
          {CONVERSION_FUNNEL_DATA.map((stage, idx) => (
            <div key={stage.etapa} className="border border-[#E8DFDC] bg-[#FAF7F5] p-4">
              <span className="font-mono text-[10px] text-[#B58681]">PASO 0{idx + 1}</span>
              <p className="mt-2 font-serif text-3xl text-[#141312]">
                {stage.usuarios.toLocaleString('es-MX')}
              </p>
              <p className="mt-1 text-xs font-medium text-[#141312]">{stage.etapa}</p>
              <p className="mt-2 inline-block bg-[#141312] px-2 py-0.5 font-mono text-[10px] text-white">
                {stage.tasa}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
