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
      {/* Real Monthly Fixed & Variable Costs Cards — Rich Editorial Colors */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="border border-[#EED9D6] border-t-4 border-t-[#B8767D] bg-[#FDF6F5] p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#A86269]">
            Costos por Mes · Fijos
          </p>
          <ul className="mt-4 divide-y divide-[#F0DFDD] text-xs">
            {FINANCIAL_SUMMARY.fixedCosts.map((c) => (
              <li key={c.item} className="flex justify-between py-2.5 text-[#57494B]">
                <span>{c.item}</span>
                <span className="font-mono font-medium text-[#1D1517]">
                  ${c.amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t-2 border-[#B8767D] pt-3 text-sm font-bold text-[#1D1517]">
            <span>Total Costos Fijos</span>
            <span className="font-mono text-[#6E2E3B]">
              ${FINANCIAL_SUMMARY.totalFixed.toLocaleString('es-MX')}.00
            </span>
          </div>
        </div>

        <div className="border border-[#ECDCC9] border-t-4 border-t-[#C4835A] bg-[#FCF7F1] p-6">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#A86942]">
            Costos por Mes · Variables
          </p>
          <ul className="mt-4 divide-y divide-[#F2E4D4] text-xs">
            {FINANCIAL_SUMMARY.variableCosts.map((c) => (
              <li key={c.item} className="flex justify-between py-2.5 text-[#57494B]">
                <span>{c.item}</span>
                <span className="font-mono font-medium text-[#1D1517]">
                  ${c.amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t-2 border-[#C4835A] pt-3 text-sm font-bold text-[#1D1517]">
            <span>Total Costos Variables</span>
            <span className="font-mono text-[#A86942]">
              ${FINANCIAL_SUMMARY.totalVariable.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Unit Formula Card — Rich Velvet Burgundy */}
        <div className="flex flex-col justify-between bg-gradient-to-br from-[#6E2E3B] to-[#4A1C26] p-6 text-white">
          <div>
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#F7D7DC]">
              Prorrateo Oficial · 55 Piezas
            </p>
            <div className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between border-b border-white/15 pb-2">
                <span className="text-[#F0D4D9]">Fijo por pieza ($4,262 ÷ 55)</span>
                <span className="font-mono font-semibold">
                  ${FINANCIAL_SUMMARY.fixedPerPiece.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/15 pb-2">
                <span className="text-[#F0D4D9]">Variable por pieza ($2 + $1)</span>
                <span className="font-mono font-semibold">
                  ${FINANCIAL_SUMMARY.variablePerPiece.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/15 pb-2">
                <span className="text-[#F0D4D9]">Costo F + V por pieza</span>
                <span className="font-mono font-semibold text-[#FFE6EA]">
                  ${FINANCIAL_SUMMARY.overheadPerPiece.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#F0D4D9]">Porcentaje de ganancia base</span>
                <span className="font-mono font-semibold text-[#B9E2C7]">20% (0.20)</span>
              </div>
            </div>
          </div>

          <p className="mt-5 border border-white/20 bg-white/10 p-3 text-[11px] leading-relaxed text-[#FCEBE8]">
            Fórmula exacta:{' '}
            <code className="font-mono font-semibold text-white">
              Precio = Costo + $80.49 + (Costo × 20%)
            </code>
          </p>
        </div>
      </div>

      {/* Exact 15-SKU Merchandise Table + Margin Simulator */}
      <div className="border border-[#EED9D6] bg-white p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-6 border-b border-[#EED9D6] pb-6 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-[#6E2E3B]">
              <Calculator className="h-4 w-4" />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em]">
                Presupuesto Oficial de Mercancía · {totalUnits} Piezas
              </span>
            </div>
            <h3 className="mt-1 font-display text-2xl font-bold text-[#1D1517]">
              Costeo Unitario, Precios y Ganancia (Anexo Excel)
            </h3>
            <p className="mt-1 text-xs text-[#6E6062]">
              Cifras exactas de los 15 productos del presupuesto de Kaly Cosmetic’s (arranca en el
              20% real del documento).
            </p>
          </div>

          <div className="w-full border border-[#D5E3D9] bg-[#F2F8F4] p-4 lg:w-80">
            <div className="flex items-center justify-between">
              <label
                htmlFor="finance-margin-slider"
                className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#1B2B21]"
              >
                Margen de Ganancia
              </label>
              <span className="bg-[#3E6850] px-2.5 py-0.5 font-mono text-xs font-bold text-white">
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
              className="mt-3 w-full accent-[#3E6850]"
            />
            <div className="mt-2 flex justify-between text-[11px] text-[#4C6155]">
              <span>
                Venta total:{' '}
                <strong className="text-[#1D1517]">
                  ${totalProjectedRevenue.toLocaleString('es-MX', { maximumFractionDigits: 2 })}
                </strong>
              </span>
              <span>
                Utilidad:{' '}
                <strong className="text-[#3E6850]">
                  +${totalSimulatedProfit.toLocaleString('es-MX', { maximumFractionDigits: 2 })}
                </strong>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left text-xs">
            <thead>
              <tr className="bg-[#6E2E3B] font-display text-[10px] uppercase tracking-[0.12em] text-white">
                <th className="px-3.5 py-3.5 font-bold">Producto</th>
                <th className="px-3.5 py-3.5 text-right font-bold">Costo</th>
                <th className="px-3.5 py-3.5 text-center font-bold">Cant.</th>
                <th className="px-3.5 py-3.5 text-right font-bold">Total</th>
                <th className="px-3.5 py-3.5 text-right font-bold">Precio c/ F y V</th>
                <th className="px-3.5 py-3.5 text-right font-bold">Ganancia ({simulatedMargin}%)</th>
                <th className="px-3.5 py-3.5 text-right font-bold">Precio Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0E3E1]">
              {MERCHANDISE_TABLE.map((row, idx) => {
                const profit = row.unitCost * (simulatedMargin / 100);
                const finalPrice = row.costWithOverhead + profit;
                return (
                  <tr
                    key={row.product}
                    className={`transition-colors hover:bg-[#FAF0EE] ${
                      idx % 2 === 1 ? 'bg-[#FDF9F8]' : 'bg-white'
                    }`}
                  >
                    <td className="px-3.5 py-3 font-medium text-[#1D1517]">
                      {row.product}{' '}
                      <span className="ml-1 text-[10px] font-semibold text-[#A86269]">
                        ({row.brand})
                      </span>
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono">${row.unitCost.toFixed(2)}</td>
                    <td className="px-3.5 py-3 text-center font-mono">{row.qty}</td>
                    <td className="px-3.5 py-3 text-right font-mono text-[#57494B]">
                      ${row.totalCost.toFixed(2)}
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono text-[#6E6062]">
                      ${row.costWithOverhead.toFixed(2)}
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono font-semibold text-[#3E6850]">
                      +${profit.toFixed(2)}
                    </td>
                    <td className="px-3.5 py-3 text-right font-mono font-bold text-[#6E2E3B]">
                      ${finalPrice.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-[#6E2E3B] bg-[#FAF0EE] font-bold text-[#1D1517]">
                <td className="px-3.5 py-3.5 font-display uppercase tracking-wider text-[#6E2E3B]">
                  Total del Lote
                </td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#6E6062]">—</td>
                <td className="px-3.5 py-3.5 text-center font-mono">{totalUnits}</td>
                <td className="px-3.5 py-3.5 text-right font-mono">
                  ${totalMerchandiseBase.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#6E6062]">
                  ${totalCostWithOverhead.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#3E6850]">
                  +${totalSimulatedProfit.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="px-3.5 py-3.5 text-right font-mono text-[#6E2E3B]">
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
