import React, { useMemo, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react';
import { KalyLogo } from '../ui/KalyLogo';
import { useShopStore } from '../../store/useShopStore';
import { PRODUCTS } from '../../data/products';

const NAV_LINKS = [
  { to: '/', label: 'Inicio', exact: true },
  { to: '/tienda', label: 'Tienda' },
  { to: '/tienda?categoria=Rostro', label: 'Rostro' },
  { to: '/tienda?categoria=Skincare', label: 'Skincare' },
  { to: '/tienda?categoria=Labios', label: 'Labios' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const cartCount = useShopStore((s) =>
    s.cart.reduce((acc, item) => acc + item.quantity, 0)
  );
  const wishlistCount = useShopStore((s) => s.wishlist.length);
  const openCart = useShopStore((s) => s.openCart);
  const openWishlist = useShopStore((s) => s.openWishlist);
  const isSearchOpen = useShopStore((s) => s.isSearchOpen);
  const toggleSearch = useShopStore((s) => s.toggleSearch);
  const closeSearch = useShopStore((s) => s.closeSearch);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    ).slice(0, 5);
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    closeSearch();
    navigate(`/tienda?buscar=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E8DFDC] bg-[#FAF7F5]/95 backdrop-blur-md">
      {/* Top Announcement Bar (exact Reference 1 style) */}
      <div className="bg-[#0F0E0E] px-4 py-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#FAF7F5]">
        <span>Envío gratis en pedidos desde $800 MXN</span>
        <span className="mx-2.5 text-[#B58681]">•</span>
        <span className="hidden sm:inline">
          Código VIP <strong className="text-[#EBD7D4]">KALY10</strong> (10% OFF) — Cadereyta & Los Ramones, N.L.
        </span>
        <span className="sm:hidden">Código VIP: KALY10</span>
      </div>

      {/* Main Header Row */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Mobile Menu Button + Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center text-[#141312] lg:hidden"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <KalyLogo size="md" tone="rose" />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => {
            const isQueryLink = link.to.includes('?');
            if (isQueryLink) {
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#141312] transition-colors duration-200 hover:text-[#B58681]"
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.exact}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 ${
                    isActive
                      ? 'text-[#B58681]'
                      : 'text-[#141312] hover:text-[#B58681]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right: Utility Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={toggleSearch}
            className="flex h-9 w-9 items-center justify-center text-[#141312] transition-colors hover:text-[#B58681]"
            aria-label="Buscar productos"
          >
            {isSearchOpen ? <X className="h-[19px] w-[19px]" strokeWidth={1.6} /> : <Search className="h-[19px] w-[19px]" strokeWidth={1.6} />}
          </button>

          <button
            type="button"
            onClick={openWishlist}
            className="relative flex h-9 w-9 items-center justify-center text-[#141312] transition-colors hover:text-[#B58681]"
            aria-label="Abrir lista de favoritos"
          >
            <Heart className="h-[19px] w-[19px]" strokeWidth={1.6} />
            {wishlistCount > 0 && (
              <span className="absolute -right-0.5 top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#B58681] px-1 text-[9px] font-semibold text-white">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={openCart}
            className="relative flex h-9 items-center gap-1.5 px-1 text-[#141312] transition-colors hover:text-[#B58681]"
            aria-label="Abrir bolsa de compras"
          >
            <ShoppingBag className="h-[19px] w-[19px]" strokeWidth={1.6} />
            <span className="text-[11px] font-medium tracking-wider">({cartCount})</span>
          </button>
        </div>
      </div>

      {/* Quick Search Overlay Bar */}
      {isSearchOpen && (
        <div className="animate-fade-in border-t border-[#E8DFDC] bg-white px-4 py-5 shadow-sm">
          <div className="mx-auto max-w-3xl">
            <form onSubmit={handleSearchSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6E6561]" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Busca e.l.f., Centella, NYX, gloss, base Fit Me, Airspun..."
                  className="editorial-input pl-10"
                />
              </div>
              <button type="submit" className="btn-editorial-primary px-6">
                Buscar
              </button>
            </form>

            {searchResults.length > 0 && (
              <div className="mt-4 divide-y divide-[#E8DFDC] border border-[#E8DFDC]">
                {searchResults.map((item) => (
                  <Link
                    key={item.id}
                    to={`/producto/${item.id}`}
                    onClick={() => {
                      closeSearch();
                      setSearchQuery('');
                    }}
                    className="flex items-center justify-between gap-4 bg-white p-3 transition-colors hover:bg-[#FAF7F5]"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="h-12 w-10 bg-[#F6F4F2] object-cover"
                      />
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#B58681]">
                          {item.brand}
                        </p>
                        <p className="text-sm font-medium text-[#141312]">{item.name}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-[#141312]">
                      ${item.price} MXN
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="animate-fade-in border-t border-[#E8DFDC] bg-[#FAF7F5] px-6 py-6 lg:hidden">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-[#E8DFDC] pb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#141312]"
              >
                <span>{link.label}</span>
              </Link>
            ))}
            <Link
              to="/checkout"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-editorial-primary mt-2 w-full"
            >
              Finalizar Pedido
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
