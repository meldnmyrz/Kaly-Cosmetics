import React, { useMemo, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react';
import { KalyLogo } from '../ui/KalyLogo';
import { useShopStore } from '../../store/useShopStore';
import { PRODUCTS } from '../../data/products';

const NAV_LINKS = [
  { to: '/', label: 'Inicio', exact: true },
  { to: '/tienda', label: 'Tienda' },
  { to: '/tienda?categoria=Rostro', label: 'Maquillaje' },
  { to: '/tienda?categoria=Skincare', label: 'Skincare' },
  { to: '/tienda?categoria=Labios', label: 'Labios' },
  { to: '/tienda?categoria=Herramientas', label: 'Sets & Brochas' },
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
    <header className="sticky top-0 z-40 w-full border-b border-[#EFE9E7] bg-white">
      {/* Lúmé-style Dusty Rose Top Announcement Bar */}
      <div className="bg-[#C69592] px-4 py-2 text-center text-[10px] font-medium tracking-[0.14em] text-white">
        Envío gratis en pedidos desde $800 MXN
        <span className="mx-2 opacity-70">•</span>
        <span className="hidden sm:inline">
          Código VIP <strong>KALY10</strong> (10% OFF) — Cadereyta Jiménez & Los Ramones, N.L.
        </span>
        <span className="sm:hidden">Código VIP: KALY10</span>
      </div>

      {/* Main Pure White Architectural Header */}
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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

        {/* Center Navigation Links — Crisp Montserrat Uppercase */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => {
            const isQueryLink = link.to.includes('?');
            if (isQueryLink) {
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-[#141312] transition-colors duration-200 hover:text-[#B5817E]"
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
                  `font-display text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                    isActive
                      ? 'text-[#B5817E]'
                      : 'text-[#141312] hover:text-[#B5817E]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Thin Outline Icons */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          <button
            type="button"
            onClick={toggleSearch}
            className="flex h-9 w-9 items-center justify-center text-[#141312] transition-colors hover:text-[#B5817E]"
            aria-label="Buscar productos"
          >
            {isSearchOpen ? (
              <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
            ) : (
              <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
            )}
          </button>

          <button
            type="button"
            onClick={openWishlist}
            className="relative flex h-9 w-9 items-center justify-center text-[#141312] transition-colors hover:text-[#B5817E]"
            aria-label="Abrir lista de favoritos"
          >
            <Heart className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {wishlistCount > 0 && (
              <span className="absolute -right-0.5 top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#141312] px-1 text-[9px] font-semibold text-white">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={openCart}
            className="relative flex h-9 items-center gap-1.5 px-1 text-[#141312] transition-colors hover:text-[#B5817E]"
            aria-label="Abrir bolsa de compras"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            <span className="text-[11px] font-medium tracking-wider">({cartCount})</span>
          </button>
        </div>
      </div>

      {/* Quick Search Bar */}
      {isSearchOpen && (
        <div className="animate-fade-in border-t border-[#EFE9E7] bg-[#FAF6F4] px-4 py-5">
          <div className="mx-auto max-w-3xl">
            <form onSubmit={handleSearchSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6E6663]" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Busca e.l.f., Centella, NYX, Anua, COSRX, Fit Me..."
                  className="editorial-input pl-10"
                />
              </div>
              <button type="submit" className="btn-editorial-primary px-6">
                Buscar
              </button>
            </form>

            {searchResults.length > 0 && (
              <div className="mt-4 divide-y divide-[#EFE9E7] border border-[#EFE9E7] bg-white">
                {searchResults.map((item) => (
                  <Link
                    key={item.id}
                    to={`/producto/${item.id}`}
                    onClick={() => {
                      closeSearch();
                      setSearchQuery('');
                    }}
                    className="flex items-center justify-between gap-4 p-3 transition-colors hover:bg-[#FAF6F4]"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="h-12 w-10 border border-[#EFE9E7] bg-white object-contain p-1"
                      />
                      <div>
                        <p className="font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-[#B5817E]">
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="animate-fade-in border-t border-[#EFE9E7] bg-white px-6 py-6 lg:hidden">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-[#F2ECEA] pb-3 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-[#141312]"
              >
                {link.label}
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
