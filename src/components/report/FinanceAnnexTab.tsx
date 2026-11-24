import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { FINANCIAL_SUMMARY, MERCHANDISE_TABLE } from '../../data/reportData';

export const FinanceAnnexTab: React.FC = () => {
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
    <div className="animate-fade-in space-y-10">
      {/* Real Monthly Fixed & Variable Costs Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Costos Fijos */}
        <div className="rounded-lg border border-[#F0E3E6] bg-[#FCF8F9] p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8747C]">
            Costos por Mes · Fijos
          </p>
          <ul className="mt-4 divide-y divide-[#F0E3E6] text-xs">
            {FINANCIAL_SUMMARY.fixedCosts.map((c) => (
              <li key={c.item} className="flex justify-between py-2.5 text-[#5F5053]">
                <span>{c.item}</span>
                <span className="font-mono font-medium text-[#2A2324]">
                  ${c.amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-[#DFC7CB] pt-3 text-sm font-semibold text-[#2A2324]">
            <span>Total Costos Fijos</span>
            <span className="font-mono">${FINANCIAL_SUMMARY.totalFixed.toLocaleString('es-MX')}.00</span>
          </div>
        </div>

        {/* Costos Variables */}
        <div className="rounded-lg border border-[#F0E3E6] bg-[#FCF8F9] p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8747C]">
            Costos por Mes · Variables
          </p>
          <ul className="mt-4 divide-y divide-[#F0E3E6] text-xs">
            {FINANCIAL_SUMMARY.variableCosts.map((c) => (
              <li key={c.item} className="flex justify-between py-2.5 text-[#5F5053]">
                <span>{c.item}</span>
                <span className="font-mono font-medium text-[#2A2324]">
                  ${c.amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-[#DFC7CB] pt-3 text-sm font-semibold text-[#2A2324]">
            <span>Total Costos Variables</span>
            <span className="font-mono">
              ${FINANCIAL_SUMMARY.totalVariable.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Unit Formula Card */}
        <div className="flex flex-col justify-between rounded-lg bg-[#DFC2C7] p-6 text-[#2A2324]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6E444B]">
              Prorrateo Oficial · 55 Piezas
            </p>
            <div className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between border-b border-[#2A2324]/10 pb-2">
                <span>Fijo por pieza ($4,262 ÷ 55)</span>
                <span className="font-mono font-semibold">
                  ${FINANCIAL_SUMMARY.fixedPerPiece.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#2A2324]/10 pb-2">
                <span>Variable por pieza ($2 + $1)</span>
                <span className="font-mono font-semibold">
                  ${FINANCIAL_SUMMARY.variablePerPiece.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#2A2324]/10 pb-2">
                <span>Costo F + V por pieza</span>
                <span className="font-mono font-semibold">
                  ${FINANCIAL_SUMMARY.overheadPerPiece.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Porcentaje de ganancia base</span>
                <span className="font-mono font-semibold">20% (0.20)</span>
              </div>
            </div>
          </div>

          <p className="mt-5 rounded-md bg-white/75 p-3 text-[11px] leading-relaxed text-[#4E4244]">
            Fórmula exacta del anexo:{' '}
            <code className="font-mono font-semibold text-[#2A2324]">
              Precio = Costo + $80.49 + (Costo × 20%)
            </code>
          </p>
        </div>
      </div>

      {/* Exact 15-SKU Merchandise Table + Margin Simulator */}
      <div className="rounded-lg border border-[#F0E3E6] bg-white p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-6 border-b border-[#F0E3E6] pb-6 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-[#A8747C]">
              <Calculator className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                Presupuesto Oficial de Mercancía · {totalUnits} Piezas
              </span>
            </div>
            <h3 className="mt-1 font-serif text-3xl text-[#2A2324]">
              Costeo Unitario, Precios y Ganancia (Anexo Excel)
            </h3>
            <p className="mt-1 text-xs text-[#7D6E71]">
              Cifras exactas de los 15 productos del presupuesto de Kaly Cosmetic’s (arranca en el
              20% real del documento).
            </p>
          </div>

          {/* Interactive Margin Slider */}
          <div className="w-full rounded-lg bg-[#FAF3F4] p-4 lg:w-80">
            <div className="flex items-center justify-between">
              <label
                htmlFor="finance-margin-slider"
                className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2A2324]"
              >
                Margen de Ganancia
              </label>
              <span className="rounded-full bg-[#A8747C] px-2.5 py-0.5 font-mono text-xs text-white">
                {simulatedMargin}% {simulatedMargin === 20 ? '(Real)' : ''}
              </span>
            </div>
            <input
              id="finance-margin-slider"
              type="range"
              min={15}
              max={45}
              step={5}
              value={simulatedMargin}
              onChange={(e) => setSimulatedMargin(Number(e.target.value))}
              className="mt-3 w-full accent-[#A8747C]"
            />
            <div className="mt-2 flex justify-between text-[11px] text-[#6B5A5D]">
              <span>
                Venta total:{' '}
                <strong className="text-[#2A2324]">
                  ${totalProjectedRevenue.toLocaleString('es-MX', { maximumFractionDigits: 2 })}
                </strong>
              </span>
              <span>
                Utilidad:{' '}
                <strong className="text-[#8E5D65]">
                  +${totalSimulatedProfit.toLocaleString('es-MX', { maximumFractionDigits: 2 })}
                </strong>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-[#DFC7CB] bg-[#FAF3F4] text-[10px] uppercase tracking-[0.12em] text-[#6E444B]">
                <th className="px-3.5 py-3 font-semibold">Producto</th>
                <th className="px-3.5 py-3 text-right font-semibold">Costo</th>
                <th className="px-3.5 py-3 text-center font-semibold">Cant.</th>
                <th className="px-3.5 py-3 text-right font-semibold">Total</th>
                <th className="px-3.5 py-3 text-right font-semibold">Precio c/ F y V</th>
                <th className="px-3.5 py-3 text-right font-semibold">Ganancia ({simulatedMargin}%)</th>
                <th className="px-3.5 py-3 text-right font-semibold">Precio Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3E7EA]">
              {MERCHANDISE_TABLE.map((row) => {
                const profit = row.unitCost * (simulatedMargin / 100);
                const finalPrice = row.costWithOverhead + profit;
                return (
                  <tr key={row.product} className="transition-colors hover:bg-[#FCF8F9]">
                    <td className="px-3.5 py-3 font-medium text-[#2A2324]">
                      {row.product}{' '}
                      <span className="ml-1 text-[10px] text-[#A8747C]">({row.brand})</span>
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono">${row.unitCost.toFixed(2)}</td>
                    <td className="px-3.5 py-3 text-center font-mono">{row.qty}</td>
                    <td className="px-3.5 py-3 text-right font-mono text-[#5F5053]">
                      ${row.totalCost.toFixed(2)}
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono text-[#7D6E71]">
                      ${row.costWithOverhead.toFixed(2)}
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono text-[#8E5D65]">
                      +${profit.toFixed(2)}
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono font-semibold text-[#2A2324]">
                      ${finalPrice.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-[#A8747C] bg-[#FAF3F4] font-semibold text-[#2A2324]">
                <td className="px-3.5 py-3.5 uppercase tracking-wider">Total del Lote</td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#7D6E71]">—</td>
                <td className="px-3.5 py-3.5 text-center font-mono">{totalUnits}</td>
                <td className="px-3.5 py-3.5 text-right font-mono">
                  ${totalMerchandiseBase.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#7D6E71]">
                  ${totalCostWithOverhead.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#8E5D65]">
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
    </div>
  );
};
