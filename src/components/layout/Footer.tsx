import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Sparkles } from 'lucide-react';
import { KalyLogo } from '../ui/KalyLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full border-t border-[#E8DFDC] bg-[#FAF7F5]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Brand */}
          <div>
            <Link to="/">
              <KalyLogo size="sm" tone="rose" />
            </Link>
            <p className="mt-2.5 text-xs text-[#6E6561]">
              Piel sana + maquillaje bonito · Cadereyta Jiménez & Los Ramones, N.L.
            </p>
          </div>

          {/* Compact Navigation Links */}
          <nav
            aria-label="Enlaces del pie de página"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#141312]"
          >
            <Link to="/tienda" className="transition-colors hover:text-[#B58681]">
              Tienda
            </Link>
            <Link to="/tienda?categoria=Skincare" className="transition-colors hover:text-[#B58681]">
              Skincare
            </Link>
            <Link to="/tienda?categoria=Labios" className="transition-colors hover:text-[#B58681]">
              Labios
            </Link>
            <Link to="/reporte" className="transition-colors hover:text-[#B58681]">
              Reporte UTC
            </Link>
            <Link to="/checkout" className="transition-colors hover:text-[#B58681]">
              Checkout
            </Link>
          </nav>

          {/* Compact Social / Contact */}
          <div className="flex items-center gap-4 text-xs text-[#6E6561]">
            <span className="inline-flex items-center gap-1.5">
              <Instagram className="h-3.5 w-3.5 text-[#B58681]" />
              @kalycosmetics.mx
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#B58681]" />
              TikTok
            </span>
            <a
              href="mailto:hola@kalycosmetics.mx"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#141312]"
              aria-label="Enviar correo a Kaly Cosmetic's"
            >
              <Mail className="h-3.5 w-3.5 text-[#B58681]" />
            </a>
          </div>
        </div>

        {/* Slim Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-[#E8DFDC] pt-5 text-[11px] text-[#8C827D] sm:flex-row">
          <p>© 2026 Kaly Cosmetic’s · Universidad Tecnológica Cadereyta · Equipo 73TSUM4N</p>
          <p className="uppercase tracking-[0.14em] text-[#B58681]">
            E-Commerce & Reporte Ejecutivo
          </p>
        </div>
      </div>
    </footer>
  );
};
