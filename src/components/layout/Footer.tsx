import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Sparkles } from 'lucide-react';
import { KalyLogo } from '../ui/KalyLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full border-t border-[#F0E3E6] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          {/* Left: Brand & Location */}
          <div>
            <Link to="/">
              <KalyLogo size="sm" tone="rose" />
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-[#7D6E71]">
              Cadereyta Jiménez & Los Ramones, Nuevo León
              <br />
              Piel sana + maquillaje bonito
            </p>
          </div>

          {/* Center: Clean Quick Links */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2A2324]">
              Enlaces Rápidos
            </h4>
            <ul className="mt-3 space-y-1.5 text-xs text-[#7D6E71]">
              <li>
                <Link to="/" className="transition-colors hover:text-[#A8747C]">
                  Inicio & Proyecto Integrador
                </Link>
              </li>
              <li>
                <Link to="/tienda" className="transition-colors hover:text-[#A8747C]">
                  Catálogo Completo
                </Link>
              </li>
              <li>
                <Link to="/tienda?categoria=Skincare" className="transition-colors hover:text-[#A8747C]">
                  Skincare & Centella
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="transition-colors hover:text-[#A8747C]">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Socials */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2A2324]">
              Síguenos
            </h4>
            <div className="mt-3 flex items-center gap-2.5">
              <a
                href="#comunidad"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F6E6E9] text-[#8E5D65] transition-colors hover:bg-[#A8747C] hover:text-white"
                aria-label="Instagram @kalycosmetics.mx"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href="#comunidad"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F6E6E9] text-[#8E5D65] transition-colors hover:bg-[#A8747C] hover:text-white"
                aria-label="TikTok @kalycosmetics.nl"
              >
                <Sparkles className="h-3.5 w-3.5" />
              </a>
              <a
                href="mailto:hola@kalycosmetics.mx"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F6E6E9] text-[#8E5D65] transition-colors hover:bg-[#A8747C] hover:text-white"
                aria-label="Correo hola@kalycosmetics.mx"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="mt-2.5 text-[11px] text-[#857578]">
              @kalycosmetics.mx · hola@kalycosmetics.mx
            </p>
          </div>
        </div>
      </div>

      {/* Thin Mauve Bottom Strip (matching Nura Beauty screenshot) */}
      <div className="bg-[#B3838B] px-4 py-2.5 text-center text-[10px] tracking-[0.12em] text-white/95">
        © 2026 Kaly Cosmetic’s · Universidad Tecnológica Cadereyta · Equipo 73TSUM4N · Todos los derechos reservados
      </div>
    </footer>
  );
};
