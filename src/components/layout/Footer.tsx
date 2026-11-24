import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Sparkles } from 'lucide-react';
import { KalyLogo } from '../ui/KalyLogo';
import { PROJECT_META } from '../../data/reportData';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full border-t border-[#EAE3E0] bg-[#FAF8F7]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link to="/">
              <KalyLogo size="sm" tone="rose" />
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-[#6E6663]">
              Piel sana + maquillaje bonito.
              <br />
              Cadereyta Jiménez & Los Ramones, N.L.
            </p>
          </div>

          {/* Column 2: Tienda */}
          <div>
            <h4 className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#141312]">
              Tienda
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-[#6E6663]">
              <li>
                <Link to="/tienda" className="transition-colors hover:text-[#141312]">
                  Catálogo Completo
                </Link>
              </li>
              <li>
                <Link to="/tienda?categoria=Rostro" className="transition-colors hover:text-[#141312]">
                  Maquillaje
                </Link>
              </li>
              <li>
                <Link to="/tienda?categoria=Skincare" className="transition-colors hover:text-[#141312]">
                  Skincare K-Beauty
                </Link>
              </li>
              <li>
                <Link to="/tienda?categoria=Labios" className="transition-colors hover:text-[#141312]">
                  Labios
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Proyecto */}
          <div>
            <h4 className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#141312]">
              Proyecto UTC
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-[#6E6663]">
              <li>
                <a href="/#proyecto-integrador" className="transition-colors hover:text-[#141312]">
                  Reporte Técnico
                </a>
              </li>
              <li>
                <a href="/#proyecto-integrador" className="transition-colors hover:text-[#141312]">
                  Encuesta (n = 108)
                </a>
              </li>
              <li>
                <a href="/#proyecto-integrador" className="transition-colors hover:text-[#141312]">
                  Presupuesto (55 pzs)
                </a>
              </li>
              <li>
                <Link to="/checkout" className="transition-colors hover:text-[#141312]">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h4 className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#141312]">
              Contacto
            </h4>
            <p className="mt-3 text-xs text-[#6E6663]">
              Instagram & TikTok: <strong className="text-[#141312]">@kalycosmetics.mx</strong>
            </p>
            <div className="mt-3 flex items-center gap-3 text-[#141312]">
              <a
                href="/#comunidad"
                className="transition-colors hover:text-[#B5817E]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="/#comunidad"
                className="transition-colors hover:text-[#B5817E]"
                aria-label="TikTok"
              >
                <Sparkles className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hola@kalycosmetics.mx"
                className="transition-colors hover:text-[#B5817E]"
                aria-label="Correo"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Clean Minimal Student Credits Strip */}
        <div className="mt-9 border-t border-[#EAE3E0] pt-5">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.18em] text-[#A5726F]">
            Alumnos Participantes · Equipo {PROJECT_META.team}
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-[#6E6663]">
            {PROJECT_META.participants.join(' · ')}
          </p>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-2 border-t border-[#EAE3E0] pt-5 text-[11px] text-[#8C837F] sm:flex-row">
          <p>© 2026 Kaly Cosmetic’s · {PROJECT_META.institution}</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};
