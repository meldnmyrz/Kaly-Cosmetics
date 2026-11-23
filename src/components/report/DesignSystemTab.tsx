import React, { useState } from 'react';
import { Check, Copy, Palette, Type, MousePointerClick } from 'lucide-react';
import { COLOR_TOKENS } from '../../data/reportData';
import { KalyLogo } from '../ui/KalyLogo';
import { SwatchSelector } from '../ui/SwatchSelector';
import { PRODUCTS } from '../../data/products';

export const DesignSystemTab: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [demoSwatch, setDemoSwatch] = useState(PRODUCTS[3].swatches[0]);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div className="animate-fade-in space-y-12">
      {/* Brand Identity Showcase */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center border border-[#E8DFDC] bg-[#FAF7F5] p-10">
          <KalyLogo size="lg" tone="rose" />
          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-[#8C6B5D]">
            Versión Principal · Sobre Marfil
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border border-[#141312] bg-[#141312] p-10">
          <KalyLogo size="lg" tone="light" />
          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-[#B58681]">
            Versión Invertida · Campaña & Packaging
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border border-[#E8DFDC] bg-[#F4E3E0] p-10">
          <KalyLogo size="lg" tone="dark" />
          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-[#6E6561]">
            Versión Editorial · Sobre Blush
          </p>
        </div>
      </div>

      {/* Interactive Color Palette */}
      <div className="border border-[#E8DFDC] bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#B58681]">
              <Palette className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                Sistema Cromático Extraído de Referencias
              </span>
            </div>
            <h3 className="mt-2 font-serif text-3xl text-[#141312]">
              Paleta Oficial Kaly Cosmetic’s
            </h3>
          </div>
          <span className="text-xs text-[#6E6561]">
            Haz clic en cualquier tono para copiar su código HEX
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {COLOR_TOKENS.map((token) => {
            const isCopied = copiedHex === token.hex;
            return (
              <button
                key={token.hex}
                type="button"
                onClick={() => handleCopyHex(token.hex)}
                className="group flex flex-col border border-[#E8DFDC] text-left transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div
                  className="flex h-24 w-full items-end justify-between p-3"
                  style={{ backgroundColor: token.hex }}
                >
                  <span
                    className={`font-mono text-xs font-medium ${
                      token.darkText ? 'text-[#141312]' : 'text-white'
                    }`}
                  >
                    {token.hex}
                  </span>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full ${
                      token.darkText
                        ? 'bg-[#141312]/10 text-[#141312]'
                        : 'bg-white/15 text-white'
                    }`}
                  >
                    {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3 w-3" />}
                  </span>
                </div>
                <div className="flex-1 bg-white p-3.5">
                  <p className="text-xs font-semibold text-[#141312]">{token.name}</p>
                  <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#B58681]">
                    {token.role}
                  </p>
                  <p className="mt-2 text-[11px] leading-snug text-[#6E6561]">{token.usage}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Typography Hierarchy */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="border border-[#E8DFDC] bg-[#FAF7F5] p-6 sm:p-8 lg:col-span-7">
          <div className="flex items-center gap-2 text-[#B58681]">
            <Type className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Escala Tipográfica Editorial
            </span>
          </div>

          <div className="mt-6 space-y-6 divide-y divide-[#E8DFDC]">
            <div className="pt-2">
              <p className="font-mono text-[10px] uppercase text-[#8C6B5D]">
                Display Serif · Cormorant Garamond · 48px–64px
              </p>
              <p className="mt-2 font-serif text-4xl uppercase tracking-[0.04em] text-[#141312] sm:text-5xl">
                Revela tu Brillo Natural
              </p>
            </div>
            <div className="pt-5">
              <p className="font-mono text-[10px] uppercase text-[#8C6B5D]">
                Subtítulo Editorial · Cormorant Garamond Italic · 26px
              </p>
              <p className="mt-1.5 font-serif text-2xl italic text-[#8C6B5D]">
                Piel sana + maquillaje bonito para el día a día.
              </p>
            </div>
            <div className="pt-5">
              <p className="font-mono text-[10px] uppercase text-[#8C6B5D]">
                UI & Navegación · Plus Jakarta Sans · 11px / Tracking 0.16em
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#141312]">
                INICIO · TIENDA · SKINCARE · LABIOS · REPORTE DEL PROYECTO
              </p>
            </div>
            <div className="pt-5">
              <p className="font-mono text-[10px] uppercase text-[#8C6B5D]">
                Cuerpo de Lectura · Plus Jakarta Sans · 14px / Leading 1.65
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#6E6561]">
                Formulación visual limpia con contrastes suaves y amplio espacio negativo para
                priorizar la fotografía cosmética y la lectura ejecutiva sin fatiga visual.
              </p>
            </div>
          </div>
        </div>

        {/* Live UI Kit Sandbox */}
        <div className="border border-[#E8DFDC] bg-white p-6 sm:p-8 lg:col-span-5">
          <div className="flex items-center gap-2 text-[#B58681]">
            <MousePointerClick className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Componentes Vivos (Geometría 0px)
            </span>
          </div>
          <h4 className="mt-2 font-serif text-2xl text-[#141312]">
            UI Kit Interactivo
          </h4>

          <div className="mt-6 space-y-6">
            <div>
              <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8C6B5D]">
                Botones Rectangulares Editoriales
              </p>
              <div className="flex flex-wrap gap-3">
                <button type="button" className="btn-editorial-primary">
                  Agregar al carrito
                </button>
                <button type="button" className="btn-editorial-outline">
                  Ver colección
                </button>
              </div>
            </div>

            <div>
              <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8C6B5D]">
                Badges de Estado
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="editorial-badge">NUEVO</span>
                <span className="editorial-badge">MÁS VENDIDO</span>
                <span className="inline-block bg-[#F4E3E0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#141312]">
                  VIRAL TIKTOK
                </span>
                <span className="inline-block border border-[#B58681] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B58681]">
                  SKINCARE
                </span>
              </div>
            </div>

            <div className="border-t border-[#E8DFDC] pt-5">
              <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8C6B5D]">
                Selector de Tonos (Swatches)
              </p>
              <SwatchSelector
                swatches={PRODUCTS[3].swatches}
                selectedSwatch={demoSwatch}
                onSelect={setDemoSwatch}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
