import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, RotateCcw, X } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCategory, ProductFinish, ProductFilters } from '../types/product';
import { ProductCard } from '../components/ui/ProductCard';

const CATEGORIES: Array<ProductCategory | 'Todos'> = [
  'Todos',
  'Rostro',
  'Labios',
  'Ojos',
  'Skincare',
  'Herramientas',
];

const FINISHES: Array<ProductFinish | 'Todos'> = [
  'Todos',
  'Mate',
  'Satinado',
  'Gloss',
  'Natural',
];

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const initialCategory = (searchParams.get('categoria') as ProductCategory) || 'Todos';
  const initialSearch = searchParams.get('buscar') || '';

  const [filters, setFilters] = useState<ProductFilters>({
    category: CATEGORIES.includes(initialCategory) ? initialCategory : 'Todos',
    finish: 'Todos',
    maxPrice: 550,
    search: initialSearch,
    sortBy: 'featured',
  });

  // Keep synced when navigating via Navbar category links
  useEffect(() => {
    const catParam = searchParams.get('categoria') as ProductCategory | null;
    const searchParam = searchParams.get('buscar');
    setFilters((prev) => ({
      ...prev,
      category: catParam && CATEGORIES.includes(catParam) ? catParam : catParam ? 'Todos' : prev.category,
      search: searchParam !== null ? searchParam : prev.search,
    }));
  }, [searchParams]);

  const handleCategoryChange = (cat: ProductCategory | 'Todos') => {
    setFilters((prev) => ({ ...prev, category: cat }));
    const next = new URLSearchParams(searchParams);
    if (cat === 'Todos') {
      next.delete('categoria');
    } else {
      next.set('categoria', cat);
    }
    setSearchParams(next, { replace: true });
  };

  const resetFilters = () => {
    setFilters({
      category: 'Todos',
      finish: 'Todos',
      maxPrice: 550,
      search: '',
      sortBy: 'featured',
    });
    setSearchParams({}, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    const q = filters.search.trim().toLowerCase();

    const list = PRODUCTS.filter((product) => {
      if (filters.category !== 'Todos' && product.category !== filters.category) {
        return false;
      }
      if (filters.finish !== 'Todos' && product.finish !== filters.finish) {
        return false;
      }
      if (product.price > filters.maxPrice) {
        return false;
      }
      if (q) {
        const match =
          product.name.toLowerCase().includes(q) ||
          product.brand.toLowerCase().includes(q) ||
          product.shortDescription.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });

    switch (filters.sortBy) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...list].sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
      default:
        return [...list].sort(
          (a, b) => Number(Boolean(b.isBestseller)) - Number(Boolean(a.isBestseller))
        );
    }
  }, [filters]);

  const activeFilterCount =
    (filters.category !== 'Todos' ? 1 : 0) +
    (filters.finish !== 'Todos' ? 1 : 0) +
    (filters.maxPrice < 550 ? 1 : 0) +
    (filters.search.trim() ? 1 : 0);

  return (
    <div className="animate-fade-in bg-white">
      {/* Editorial Header Banner */}
      <section className="border-b border-[#E8DFDC] bg-[#FAF7F5] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B58681]">
            Catálogo Oficial · Maquillaje & Skincare
          </p>
          <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="font-serif text-4xl font-medium uppercase tracking-[0.04em] text-[#141312] sm:text-5xl">
                {filters.category === 'Todos' ? 'Tienda Kaly Cosmetic’s' : filters.category}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-[#6E6561]">
                Productos originales curados con base en nuestra investigación local: marcas virales
                de Estados Unidos y K-Beauty en el rango ideal de $191 a $499 MXN.
              </p>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8C6B5D]">
              Mostrando <strong className="text-[#141312]">{filteredProducts.length}</strong> de{' '}
              {PRODUCTS.length} artículos
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Top Controls Row: Search + Sort + Mobile Filter Toggle */}
        <div className="mb-8 flex flex-col gap-4 border-b border-[#E8DFDC] pb-6 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 md:max-w-md">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6E6561]" />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
              placeholder="Buscar por producto o marca (e.l.f., NYX, Centella...)"
              className="editorial-input pl-10 pr-9"
            />
            {filters.search && (
              <button
                type="button"
                onClick={() => setFilters((prev) => ({ ...prev, search: '' }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6E6561] hover:text-[#141312]"
                aria-label="Limpiar búsqueda"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 border border-[#E8DFDC] bg-[#FAF7F5] px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#141312] lg:hidden"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filtros {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}
            </button>

            <div className="flex items-center gap-2">
              <label
                htmlFor="sort-select"
                className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6E6561]"
              >
                Ordenar:
              </label>
              <select
                id="sort-select"
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    sortBy: e.target.value as ProductFilters['sortBy'],
                  }))
                }
                className="rounded-none border border-[#E8DFDC] bg-white px-3.5 py-2.5 text-xs font-medium text-[#141312] focus:border-[#141312] focus:outline-none"
              >
                <option value="featured">Destacados & Bestsellers</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="rating">Mejor calificados</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Sidebar Filters */}
          <aside
            className={`${
              mobileFiltersOpen ? 'block' : 'hidden'
            } space-y-8 border border-[#E8DFDC] bg-[#FAF7F5] p-6 lg:col-span-3 lg:block lg:self-start`}
          >
            <div className="flex items-center justify-between border-b border-[#E8DFDC] pb-4">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#141312]">
                Filtrar Catálogo
              </h2>
              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 text-[11px] text-[#B58681] hover:text-[#141312]"
                >
                  <RotateCcw className="h-3 w-3" />
                  Limpiar
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8C6B5D]">
                Categoría
              </h3>
              <div className="mt-3 space-y-1.5">
                {CATEGORIES.map((cat) => {
                  const active = filters.category === cat;
                  const count =
                    cat === 'Todos'
                      ? PRODUCTS.length
                      : PRODUCTS.filter((p) => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleCategoryChange(cat)}
                      className={`flex w-full items-center justify-between px-3 py-2 text-xs transition-colors ${
                        active
                          ? 'bg-[#141312] font-medium text-white'
                          : 'bg-transparent text-[#4E4744] hover:bg-white hover:text-[#141312]'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={active ? 'text-[#EBD7D4]' : 'text-[#8C6B5D]'}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Finish Filter */}
            <div className="border-t border-[#E8DFDC] pt-6">
              <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8C6B5D]">
                Acabado
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {FINISHES.map((finish) => {
                  const active = filters.finish === finish;
                  return (
                    <button
                      key={finish}
                      type="button"
                      onClick={() => setFilters((prev) => ({ ...prev, finish }))}
                      className={`border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors ${
                        active
                          ? 'border-[#141312] bg-[#141312] text-white'
                          : 'border-[#E8DFDC] bg-white text-[#141312] hover:border-[#B58681]'
                      }`}
                    >
                      {finish}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="border-t border-[#E8DFDC] pt-6">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8C6B5D]">
                  Precio Máximo
                </h3>
                <span className="font-mono text-xs font-semibold text-[#141312]">
                  ${filters.maxPrice} MXN
                </span>
              </div>
              <input
                type="range"
                min={200}
                max={550}
                step={10}
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))
                }
                aria-label="Filtrar por precio máximo"
                className="mt-3 w-full accent-[#141312]"
              />
              <div className="mt-1.5 flex justify-between font-mono text-[10px] text-[#6E6561]">
                <span>$200</span>
                <span>$350</span>
                <span>$550</span>
              </div>
            </div>

            {/* Quick Skincare Callout */}
            <div className="border-t border-[#E8DFDC] pt-6">
              <div className="bg-[#F4E3E0]/70 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#141312]">
                  Tip Kaly VIP
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#4E4744]">
                  Agrega maquillaje + skincare y supera los <strong>$800 MXN</strong> para activar
                  envío gratis automático.
                </p>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="border border-[#E8DFDC] bg-[#FAF7F5] px-6 py-16 text-center">
                <p className="font-serif text-3xl text-[#141312]">
                  No encontramos coincidencias exactas
                </p>
                <p className="mx-auto mt-2 max-w-md text-sm text-[#6E6561]">
                  Intenta ajustar el acabado, ampliar el rango de precio o restablecer los filtros.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="btn-editorial-primary mt-6"
                >
                  Restablecer Filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
