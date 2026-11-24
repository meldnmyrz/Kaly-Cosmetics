import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../../types/product';
import { useShopStore } from '../../store/useShopStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [activeSwatch, setActiveSwatch] = useState(product.swatches[0]);
  const addToCart = useShopStore((s) => s.addToCart);
  const toggleWishlist = useShopStore((s) => s.toggleWishlist);
  const isWishlisted = useShopStore((s) => s.wishlist.includes(product.id));

  return (
    <article className="group flex h-full flex-col bg-white text-left transition-all duration-300">
      {/* Clean Studio Product Container with dedicated top zone so badge & heart NEVER overlap photo */}
      <div className="relative flex aspect-[4/5] w-full flex-col overflow-hidden border border-[#EFE7E4] bg-white">
        {/* Top bar for badge + heart */}
        <div className="z-10 flex items-center justify-between px-3 pt-3">
          <div>
            {product.badge && (
              <span className="editorial-badge">{product.badge}</span>
            )}
          </div>
          <button
            type="button"
            onClick={() => toggleWishlist(product.id, product.name)}
            aria-label={
              isWishlisted
                ? `Quitar ${product.name} de favoritos`
                : `Guardar ${product.name} en favoritos`
            }
            className={`flex h-7 w-7 items-center justify-center transition-colors duration-200 ${
              isWishlisted
                ? 'text-[#6E2E3B]'
                : 'text-[#7D7470] hover:text-[#141312]'
            }`}
          >
            <Heart
              className="h-4 w-4"
              strokeWidth={1.6}
              fill={isWishlisted ? '#6E2E3B' : 'none'}
            />
          </button>
        </div>

        {/* Uncropped real catalog image */}
        <Link
          to={`/producto/${product.id}`}
          className="flex min-h-0 flex-1 items-center justify-center px-5 pb-5 pt-2"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Product Info + Cleanly Separated CTA Button */}
      <div className="flex flex-1 flex-col pt-3.5">
        <Link
          to={`/producto/${product.id}`}
          className="line-clamp-2 min-h-[2.4rem] text-[13px] font-semibold leading-snug text-[#141312] transition-colors hover:text-[#6E2E3B]"
        >
          {product.name}
        </Link>

        <p className="mt-1 text-[11px] text-[#7D7470]">
          {product.brand} · {product.category}
        </p>

        {/* Price + swatches */}
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <span className="text-[14px] font-bold text-[#141312]">
            ${product.price.toLocaleString('es-MX')}{' '}
            <span className="text-[10px] font-normal text-[#7D7470]">MXN</span>
          </span>

          <div className="flex items-center gap-1.5">
            {product.swatches.slice(0, 4).map((swatch) => {
              const selected = swatch.id === activeSwatch.id;
              return (
                <button
                  key={swatch.id}
                  type="button"
                  onClick={() => setActiveSwatch(swatch)}
                  title={swatch.name}
                  aria-label={`Tono ${swatch.name}`}
                  className={`h-3 w-3 rounded-full transition-all ${
                    selected
                      ? 'ring-1 ring-[#141312] ring-offset-1'
                      : 'border border-[#D8CECA] hover:scale-110'
                  }`}
                  style={{ backgroundColor: swatch.hex }}
                />
              );
            })}
          </div>
        </div>

        {/* Dedicated spacer wrapper so CTA button NEVER collides with price/swatches */}
        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={() => addToCart(product, activeSwatch, 1)}
            className="w-full rounded-none bg-[#141312] py-3 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[#6E2E3B]"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  );
};
