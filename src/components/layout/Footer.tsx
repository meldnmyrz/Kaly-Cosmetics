import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Sparkles, Check } from 'lucide-react';
import { KalyLogo } from '../ui/KalyLogo';
import { useShopStore } from '../../store/useShopStore';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const setCouponCode = useShopStore((s) => s.setCouponCode);
  const showToast = useShopStore((s) => s.showToast);

  const handleVipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setCouponCode('KALY10');
    showToast('¡Bienvenida al Club VIP! Código KALY10 (10% OFF) activado en tu carrito.');
    setEmail('');
  };

  return (
    <footer className="mt-auto w-full">
      {/* Club VIP Band — Exact Reference 3 dusty rose band (#EBD7D4) */}
      <section className="border-t border-[#E8DFDC] bg-[#EBD7D4] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C6B5D]">
              Comunidad Kaly Cosmetic’s
            </p>
            <h3 className="mt-1 font-serif text-2xl font-medium uppercase tracking-[0.06em] text-[#141312] sm:text-3xl">
              Únete al Club VIP Glow
            </h3>
            <p className="mt-1 text-sm text-[#4D4542]">
              Recibe 10% de descuento en tu primer pedido con el código{' '}
              <strong className="font-mono text-xs text-[#141312]">KALY10</strong> y acceso anticipado a lanzamientos de K-Beauty.
            </p>
          </div>

          <form onSubmit={handleVipSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              aria-label="Correo electrónico para el Club VIP"
              className="flex-1 rounded-none border border-transparent bg-white px-4 py-3 text-sm text-[#141312] placeholder-[#8E8480] focus:border-[#141312] focus:outline-none"
            />
            <button type="submit" className="btn-editorial-primary shrink-0 px-7">
              {subscribed ? (
                <>
                  <Check className="h-4 w-4" /> Activo
                </>
              ) : (
                'Suscribirme'
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Main 4-Column Editorial Footer */}
      <div className="border-t border-[#E8DFDC] bg-[#FAF7F5] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <KalyLogo size="md" tone="rose" />
            <p className="mt-4 text-sm leading-relaxed text-[#6E6561]">
              Piel sana + maquillaje bonito. Curaduría de marcas originales importadas de Estados Unidos y K-Beauty accesible para Cadereyta Jiménez y Los Ramones, Nuevo León.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-[#8C6B5D]">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span>Cadereyta Jiménez & Los Ramones, N.L.</span>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#141312]">
              Tienda
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[#6E6561]">
              <li>
                <Link to="/tienda" className="transition-colors hover:text-[#B58681]">
                  Catálogo Completo
                </Link>
              </li>
              <li>
                <Link to="/tienda?categoria=Rostro" className="transition-colors hover:text-[#B58681]">
                  Rostro & Bases
                </Link>
              </li>
              <li>
                <Link to="/tienda?categoria=Labios" className="transition-colors hover:text-[#B58681]">
                  Labios & Glosses
                </Link>
              </li>
              <li>
                <Link to="/tienda?categoria=Skincare" className="transition-colors hover:text-[#B58681]">
                  Skincare & Centella
                </Link>
              </li>
              <li>
                <Link to="/tienda?categoria=Herramientas" className="transition-colors hover:text-[#B58681]">
                  Brochas & Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Executive Report Links */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#141312]">
              Proyecto Integrador UTC
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[#6E6561]">
              <li>
                <Link to="/reporte?tab=resumen" className="transition-colors hover:text-[#B58681]">
                  Resumen Ejecutivo & Negocio
                </Link>
              </li>
              <li>
                <Link to="/reporte?tab=arquitectura" className="transition-colors hover:text-[#B58681]">
                  Arquitectura & Stack Técnico
                </Link>
              </li>
              <li>
                <Link to="/reporte?tab=diseno" className="transition-colors hover:text-[#B58681]">
                  Brand Book & Sistema UI/UX
                </Link>
              </li>
              <li>
                <Link to="/reporte?tab=metricas" className="transition-colors hover:text-[#B58681]">
                  Encuesta (n=108) & Finanzas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#141312]">
              Canales Digitales
            </h4>
            <p className="mt-4 text-sm text-[#6E6561]">
              Asesoría personalizada por tipo de piel y pedidos directos en redes sociales:
            </p>
            <div className="mt-4 space-y-2.5 text-sm text-[#141312]">
              <p className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-[#B58681]" />
                <span>@kalycosmetics.mx</span>
              </p>
              <p className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#B58681]" />
                <span>TikTok: @kalycosmetics.nl</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#B58681]" />
                <span>hola@kalycosmetics.mx</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-[#E8DFDC] pt-6 text-xs text-[#6E6561] sm:flex-row">
          <p>© 2026 Kaly Cosmetic’s — Proyecto Integrador · Equipo 73TSUM4N · Universidad Tecnológica Cadereyta.</p>
          <p className="uppercase tracking-[0.14em] text-[#8C6B5D]">
            Prototipo E-Commerce & Brand Report
          </p>
        </div>
      </div>
    </footer>
  );
};
