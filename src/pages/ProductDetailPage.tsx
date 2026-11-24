import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Check,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useShopStore } from '../store/useShopStore';
import { SwatchSelector } from '../components/ui/SwatchSelector';
import { ProductCard } from '../components/ui/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSwatch, setSelectedSwatch] = useState(product?.swatches[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeInfoTab, setActiveInfoTab] = useState<'ingredientes' | 'uso' | 'envio'>('ingredientes');

  const addToCart = useShopStore((s) => s.addToCart);
  const toggleWishlist = useShopStore((s) => s.toggleWishlist);
  const isWishlisted = useShopStore((s) => (product ? s.wishlist.includes(product.id) : false));

  useEffect(() => {
    if (product) {
      setSelectedImage(0);
      setSelectedSwatch(product.swatches[0]);
      setQuantity(1);
    }
  }, [product]);

  if (!product || !selectedSwatch) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B58681]">404</p>
        <h1 className="mt-2 font-serif text-4xl text-[#141312]">Producto no encontrado</h1>
        <p className="mt-3 text-sm text-[#6E6561]">
          El artículo que buscas no está disponible en este momento.
        </p>
        <Link to="/tienda" className="btn-editorial-primary mt-6">
          Volver a la Tienda
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand)
  ).slice(0, 4);

  return (
    <div className="animate-fade-in bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-[#E8DFDC] bg-[#FAF7F5] px-4 py-3.5 sm:px-6 lg:px-8">
        <nav
          aria-label="Ruta de navegación"
          className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-[#6E6561]"
        >
          <Link to="/" className="hover:text-[#141312]">
            Inicio
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/tienda" className="hover:text-[#141312]">
            Tienda
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to={`/tienda?categoria=${product.category}`} className="hover:text-[#141312]">
            {product.category}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-[#141312]">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: Gallery */}
          <div className="lg:col-span-6">
            <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden border border-[#EAE3E0] bg-white p-6">
              <img
                src={product.images[selectedImage]}
                alt={`${product.name} - vista ${selectedImage + 1}`}
                className="h-full w-full object-contain object-center transition-all duration-500"
              />
              {product.badge && (
                <span className="editorial-badge absolute left-4 top-4">{product.badge}</span>
              )}
              {/* Selected Swatch Preview */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2.5 border border-[#EAE3E0] bg-white/95 px-3.5 py-1.5 backdrop-blur-sm">
                <span
                  className="h-4 w-4 rounded-full border border-[#CFC3BE]"
                  style={{ backgroundColor: selectedSwatch.hex }}
                />
                <span className="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
                  {selectedSwatch.name}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(idx)}
                  className={`flex aspect-[4/3] items-center justify-center overflow-hidden border bg-white p-2 transition-all ${
                    selectedImage === idx
                      ? 'border-[#141312] opacity-100'
                      : 'border-[#EAE3E0] opacity-65 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Details & Purchase Controls */}
          <div className="flex flex-col lg:col-span-6">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B58681]">
                {product.brand}
              </span>
              <span className="text-xs text-[#8C6B5D]">
                ★ {product.rating.toFixed(1)} ({product.reviewsCount} reseñas)
              </span>
            </div>

            <h1 className="mt-2 font-serif text-3xl font-medium leading-tight text-[#141312] sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-baseline gap-3">
              <span className="text-2xl font-semibold text-[#141312]">
                ${product.price.toLocaleString('es-MX')} MXN
              </span>
              <span className="border border-[#E8DFDC] bg-[#FAF7F5] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#6E6561]">
                Acabado {product.finish}
              </span>
              <span className="text-xs text-[#6E6561]">
                Disponible ({product.stockQty} en lote inicial)
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#4E4744]">{product.description}</p>

            {/* Skin Types */}
            <div className="mt-5 flex flex-wrap gap-2">
              {product.skinTypes.map((skin) => (
                <span
                  key={skin}
                  className="bg-[#F4E3E0]/70 px-3 py-1 text-[11px] font-medium text-[#141312]"
                >
                  {skin}
                </span>
              ))}
            </div>

            {/* Interactive Swatches */}
            <div className="mt-7 border-y border-[#E8DFDC] py-6">
              <SwatchSelector
                swatches={product.swatches}
                selectedSwatch={selectedSwatch}
                onSelect={setSelectedSwatch}
              />
            </div>

            {/* Quantity + Add to Cart + Wishlist */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <div className="inline-flex h-12 items-center justify-between border border-[#141312] sm:w-32">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-full w-10 items-center justify-center text-[#141312] hover:bg-[#FAF7F5]"
                  aria-label="Disminuir cantidad"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="text-sm font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="flex h-full w-10 items-center justify-center text-[#141312] hover:bg-[#FAF7F5]"
                  aria-label="Aumentar cantidad"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => addToCart(product, selectedSwatch, quantity)}
                className="btn-editorial-primary h-12 flex-1"
              >
                <ShoppingBag className="h-4 w-4" />
                Agregar al carrito — ${(product.price * quantity).toLocaleString('es-MX')} MXN
              </button>

              <button
                type="button"
                onClick={() => toggleWishlist(product.id, product.name)}
                aria-label="Guardar en favoritos"
                className={`flex h-12 w-full items-center justify-center gap-2 border px-4 transition-colors sm:w-12 sm:px-0 ${
                  isWishlisted
                    ? 'border-[#B58681] bg-[#FAF7F5] text-[#B58681]'
                    : 'border-[#E8DFDC] text-[#141312] hover:border-[#141312]'
                }`}
              >
                <Heart
                  className="h-4 w-4"
                  fill={isWishlisted ? '#B58681' : 'none'}
                  strokeWidth={1.6}
                />
                <span className="text-xs uppercase tracking-wider sm:hidden">
                  {isWishlisted ? 'En Favoritos' : 'Guardar'}
                </span>
              </button>
            </div>

            {/* Trust Micro-bar */}
            <div className="mt-6 grid grid-cols-1 gap-3 bg-[#FAF7F5] p-4 text-xs text-[#4E4744] sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#B58681]" />
                <span>Producto 100% original</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 shrink-0 text-[#B58681]" />
                <span>Envío gratis desde $800</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 shrink-0 text-[#B58681]" />
                <span>Empaque protector Kaly</span>
              </div>
            </div>

            {/* Product Details Tabs: Ingredients / How to Use / Shipping */}
            <div className="mt-8 border-t border-[#E8DFDC] pt-6">
              <div className="flex gap-6 border-b border-[#E8DFDC]">
                {[
                  { id: 'ingredientes', label: 'Ingredientes Clave' },
                  { id: 'uso', label: 'Modo de Uso' },
                  { id: 'envio', label: 'Envío & Entrega' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setActiveInfoTab(tab.id as 'ingredientes' | 'uso' | 'envio')
                    }
                    className={`border-b-2 pb-3 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                      activeInfoTab === tab.id
                        ? 'border-[#141312] text-[#141312]'
                        : 'border-transparent text-[#8C827D] hover:text-[#141312]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="pt-5 text-sm text-[#4E4744]">
                {activeInfoTab === 'ingredientes' && (
                  <ul className="space-y-2.5">
                    {product.ingredients.map((ing) => (
                      <li key={ing} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#B58681]" />
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeInfoTab === 'uso' && (
                  <ol className="space-y-3">
                    {product.howToUse.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-[#141312] font-mono text-[10px] text-white">
                          0{i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}

                {activeInfoTab === 'envio' && (
                  <div className="space-y-2.5 text-sm leading-relaxed">
                    <p>
                      • <strong>Entregas personales sin costo</strong> en puntos céntricos de
                      Cadereyta Jiménez y Los Ramones, N.L.
                    </p>
                    <p>
                      • <strong>Envío a domicilio local:</strong> $50 MXN o <strong>GRATIS</strong>{' '}
                      en pedidos iguales o mayores a $800 MXN.
                    </p>
                    <p>
                      • Todos nuestros productos pasan por inspección de lote y sello de fábrica
                      antes de empacarse.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-[#E8DFDC] bg-[#FAF7F5]/60 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B58681]">
                  Completa tu Rutina
                </p>
                <h2 className="mt-1 font-serif text-3xl uppercase text-[#141312]">
                  También te Puede Gustar
                </h2>
              </div>
              <Link
                to="/tienda"
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#141312] underline underline-offset-4 hover:text-[#B58681]"
              >
                Ver tienda
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
