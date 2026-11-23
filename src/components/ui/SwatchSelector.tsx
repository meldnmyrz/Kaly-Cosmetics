import React from 'react';
import { ProductSwatch } from '../../types/product';

interface SwatchSelectorProps {
  swatches: ProductSwatch[];
  selectedSwatch: ProductSwatch;
  onSelect: (swatch: ProductSwatch) => void;
  compact?: boolean;
}

export const SwatchSelector: React.FC<SwatchSelectorProps> = ({
  swatches,
  selectedSwatch,
  onSelect,
  compact = false,
}) => {
  return (
    <div>
      {!compact && (
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#141312]">
            Tono seleccionado:{' '}
            <span className="font-normal text-[#6E6561]">{selectedSwatch.name}</span>
          </span>
          <span className="text-xs text-[#8C6B5D]">{selectedSwatch.description}</span>
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2.5">
        {swatches.map((swatch) => {
          const isActive = swatch.id === selectedSwatch.id;
          return (
            <button
              key={swatch.id}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSelect(swatch);
              }}
              title={`${swatch.name} — ${swatch.description}`}
              aria-label={`Seleccionar tono ${swatch.name}`}
              aria-pressed={isActive}
              className={`relative flex items-center justify-center rounded-full transition-all duration-200 ${
                compact ? 'h-5 w-5' : 'h-9 w-9'
              } ${
                isActive
                  ? 'ring-2 ring-[#141312] ring-offset-2 ring-offset-white'
                  : 'ring-1 ring-[#D8CCC7] hover:scale-105 hover:ring-[#8C6B5D]'
              }`}
              style={{ backgroundColor: swatch.hex }}
            />
          );
        })}
      </div>
    </div>
  );
};
