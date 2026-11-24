import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, X } from 'lucide-react';
import { useShopStore } from '../../store/useShopStore';
import { PRODUCTS } from '../../data/products';

export const WishlistDrawer: React.FC = () => {
  const navigate = useNavigate();
  const isWishlistOpen = useShopStore((s) => s.isWishlistOpen);
  const closeWishlist = useShopStore((s) => s.closeWishlist);
  const wishlistIds = useShopStore((s) => s.wishlist);
  const toggleWishlist = useShopStore((s) => s.toggleWishlist);
  const addToCart = useShopStore((s) => s.addToCart);

  if (!isWishlistOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="fixed inset-0 bg-[#141312]/45 backdrop-blur-[2px]"
        onClick={closeWishlist}
        aria-hidden="true"
      />

      <aside
        className="animate-slide-in-right relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
        aria-label="Lista de favoritos"
      >
        <div className="flex items-center justify-between border-b border-[#E8DFDC] bg-[#FAF7F5] px-6 py-5">
          <div className="flex items-center gap-2.5">
            <Heart className="h-4 w-4 text-[#B58681]" strokeWidth={1.7} fill="#B58681" />
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#141312]">
              Favoritos ({wishlistProducts.length})
            </h2>
          </div>
          <button
            type="button"
            onClick={closeWishlist}
            className="flex h-8 w-8 items-center justify-center text-[#141312] hover:text-[#B58681]"
            aria-label="Cerrar favoritos"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {wishlistProducts.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF7F5] text-[#B58681]">
                <Heart className="h-7 w-7" strokeWidth={1.4} />
              </div>
              <p className="mt-4 font-serif text-2xl text-[#141312]">
                Aún no guardas favoritos
              </p>
              <p className="mt-2 max-w-xs text-sm text-[#6E6561]">
                Toca el ícono de corazón en cualquier producto para armar tu wishlist personalizada.
              </p>
              <button
                type="button"
                onClick={() => {
                  closeWishlist();
                  navigate('/tienda');
                }}
                className="btn-editorial-primary mt-6"
              >
                Descubrir Catálogo
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-[#E8DFDC]">
              {wishlistProducts.map((product) => (
                <li key={product.id} className="flex gap-4 py-4 first:pt-0">
                  <Link
                    to={`/producto/${product.id}`}
                    onClick={closeWishlist}
                    className="flex h-24 w-20 shrink-0 items-center justify-center rounded-md border border-[#F0E3E6] bg-white p-1.5"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#B58681]">
                            {product.brand}
                          </p>
                          <Link
                            to={`/producto/${product.id}`}
                            onClick={closeWishlist}
                            className="text-sm font-medium text-[#141312] hover:text-[#B58681]"
                          >
                            {product.name}
                          </Link>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleWishlist(product.id, product.name)}
                          className="text-[#8C827D] hover:text-[#141312]"
                          aria-label={`Quitar ${product.name} de favoritos`}
                        >
                          <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-[#141312]">
                        ${product.price.toLocaleString('es-MX')} MXN
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => addToCart(product, product.swatches[0], 1)}
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 bg-[#141312] py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#2B2725]"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      Mover a la bolsa
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
};
