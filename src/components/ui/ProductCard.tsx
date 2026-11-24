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
      {/* Lúmé-style Sharp Clean Studio Product Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#F0EAE8] bg-[#FFFFFF]">
        <Link
          to={`/producto/${product.id}`}
          className="flex h-full w-full items-center justify-center p-5"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Top-left sharp black badge */}
        {product.badge && (
          <span className="editorial-badge absolute left-2.5 top-2.5">
            {product.badge}
          </span>
        )}

        {/* Top-right minimal outline heart */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.id, product.name)}
          aria-label={
            isWishlisted
              ? `Quitar ${product.name} de favoritos`
              : `Guardar ${product.name} en favoritos`
          }
          className={`absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center transition-colors duration-200 ${
            isWishlisted
              ? 'text-[#C69592]'
              : 'text-[#6E6663] hover:text-[#141312]'
          }`}
        >
          <Heart
            className="h-4 w-4"
            strokeWidth={1.5}
            fill={isWishlisted ? '#C69592' : 'none'}
          />
        </button>
      </div>

      {/* Left-aligned Architectural Product Info (exact Lúmé Beauty hierarchy) */}
      <div className="flex flex-1 flex-col pt-3.5">
        <Link
          to={`/producto/${product.id}`}
          className="line-clamp-1 text-[13px] font-semibold text-[#141312] transition-colors hover:text-[#B5817E]"
        >
          {product.name}
        </Link>

        <p className="mt-0.5 text-[11px] text-[#7D7470]">
          {product.brand} · {product.category}
        </p>

        {/* Price + subtle swatch dots row */}
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-[13px] font-bold text-[#141312]">
            ${product.price.toLocaleString('es-MX')}{' '}
            <span className="text-[10px] font-normal text-[#7D7470]">MXN</span>
          </span>

          <div className="flex items-center gap-1">
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

        {/* Full-width Sharp Matte Black CTA */}
        <button
          type="button"
          onClick={() => addToCart(product, activeSwatch, 1)}
          className="mt-auto w-full rounded-none bg-[#141312] py-2.5 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[#322E2C] mt-3.5"
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  );
};
