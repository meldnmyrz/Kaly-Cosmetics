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
        <div className="border border-[#EAE3E0] bg-[#FAF6F4] p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#B5817E]">
            Costos por Mes · Fijos
          </p>
          <ul className="mt-4 divide-y divide-[#EAE3E0] text-xs">
            {FINANCIAL_SUMMARY.fixedCosts.map((c) => (
              <li key={c.item} className="flex justify-between py-2.5 text-[#574D4A]">
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

        <div className="border border-[#EAE3E0] bg-[#FAF6F4] p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#B5817E]">
            Costos por Mes · Variables
          </p>
          <ul className="mt-4 divide-y divide-[#EAE3E0] text-xs">
            {FINANCIAL_SUMMARY.variableCosts.map((c) => (
              <li key={c.item} className="flex justify-between py-2.5 text-[#574D4A]">
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

        {/* Unit Formula Card — Matte Black Editorial */}
        <div className="flex flex-col justify-between border border-[#141312] bg-[#141312] p-6 text-white">
          <div>
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#EBD7D4]">
              Prorrateo Oficial · 55 Piezas
            </p>
            <div className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between border-b border-white/15 pb-2">
                <span className="text-[#CFC7C4]">Fijo por pieza ($4,262 ÷ 55)</span>
                <span className="font-mono font-semibold">
                  ${FINANCIAL_SUMMARY.fixedPerPiece.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/15 pb-2">
                <span className="text-[#CFC7C4]">Variable por pieza ($2 + $1)</span>
                <span className="font-mono font-semibold">
                  ${FINANCIAL_SUMMARY.variablePerPiece.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/15 pb-2">
                <span className="text-[#CFC7C4]">Costo F + V por pieza</span>
                <span className="font-mono font-semibold text-[#EBD7D4]">
                  ${FINANCIAL_SUMMARY.overheadPerPiece.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#CFC7C4]">Porcentaje de ganancia base</span>
                <span className="font-mono font-semibold text-[#EBD7D4]">20% (0.20)</span>
              </div>
            </div>
          </div>

          <p className="mt-5 border border-white/15 bg-white/5 p-3 text-[11px] leading-relaxed text-[#EBD7D4]">
            Fórmula exacta:{' '}
            <code className="font-mono font-semibold text-white">
              Precio = Costo + $80.49 + (Costo × 20%)
            </code>
          </p>
        </div>
      </div>

      {/* Exact 15-SKU Merchandise Table + Margin Simulator */}
      <div className="border border-[#EAE3E0] bg-white p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-6 border-b border-[#EAE3E0] pb-6 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-[#B5817E]">
              <Calculator className="h-4 w-4" />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
                Presupuesto Oficial de Mercancía · {totalUnits} Piezas
              </span>
            </div>
            <h3 className="mt-1 font-display text-2xl font-semibold text-[#141312]">
              Costeo Unitario, Precios y Ganancia (Anexo Excel)
            </h3>
            <p className="mt-1 text-xs text-[#6E6663]">
              Cifras exactas de los 15 productos del presupuesto de Kaly Cosmetic’s (arranca en el
              20% real del documento).
            </p>
          </div>

          <div className="w-full border border-[#EAE3E0] bg-[#FAF6F4] p-4 lg:w-80">
            <div className="flex items-center justify-between">
              <label
                htmlFor="finance-margin-slider"
                className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#141312]"
              >
                Margen de Ganancia
              </label>
              <span className="bg-[#141312] px-2.5 py-0.5 font-mono text-xs text-white">
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
              className="mt-3 w-full accent-[#141312]"
            />
            <div className="mt-2 flex justify-between text-[11px] text-[#574D4A]">
              <span>
                Venta total:{' '}
                <strong className="text-[#141312]">
                  ${totalProjectedRevenue.toLocaleString('es-MX', { maximumFractionDigits: 2 })}
                </strong>
              </span>
              <span>
                Utilidad:{' '}
                <strong className="text-[#A5726F]">
                  +${totalSimulatedProfit.toLocaleString('es-MX', { maximumFractionDigits: 2 })}
                </strong>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-[#141312] bg-[#FAF6F4] font-display text-[10px] uppercase tracking-[0.12em] text-[#141312]">
                <th className="px-3.5 py-3 font-bold">Producto</th>
                <th className="px-3.5 py-3 text-right font-bold">Costo</th>
                <th className="px-3.5 py-3 text-center font-bold">Cant.</th>
                <th className="px-3.5 py-3 text-right font-bold">Total</th>
                <th className="px-3.5 py-3 text-right font-bold">Precio c/ F y V</th>
                <th className="px-3.5 py-3 text-right font-bold">Ganancia ({simulatedMargin}%)</th>
                <th className="px-3.5 py-3 text-right font-bold">Precio Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFE9E7]">
              {MERCHANDISE_TABLE.map((row) => {
                const profit = row.unitCost * (simulatedMargin / 100);
                const finalPrice = row.costWithOverhead + profit;
                return (
                  <tr key={row.product} className="transition-colors hover:bg-[#FAF6F4]">
                    <td className="px-3.5 py-3 font-medium text-[#141312]">
                      {row.product}{' '}
                      <span className="ml-1 text-[10px] text-[#B5817E]">({row.brand})</span>
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono">${row.unitCost.toFixed(2)}</td>
                    <td className="px-3.5 py-3 text-center font-mono">{row.qty}</td>
                    <td className="px-3.5 py-3 text-right font-mono text-[#574D4A]">
                      ${row.totalCost.toFixed(2)}
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono text-[#6E6663]">
                      ${row.costWithOverhead.toFixed(2)}
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono text-[#A5726F]">
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
              <tr className="border-t-2 border-[#141312] bg-[#FAF6F4] font-semibold text-[#141312]">
                <td className="px-3.5 py-3.5 font-display uppercase tracking-wider">
                  Total del Lote
                </td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#6E6663]">—</td>
                <td className="px-3.5 py-3.5 text-center font-mono">{totalUnits}</td>
                <td className="px-3.5 py-3.5 text-right font-mono">
                  ${totalMerchandiseBase.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#6E6663]">
                  ${totalCostWithOverhead.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#A5726F]">
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
