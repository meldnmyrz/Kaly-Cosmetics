import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
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
    <article className="group flex h-full flex-col bg-white transition-all duration-300">
      {/* Studio Image Box */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F6F4F2]">
        <Link to={`/producto/${product.id}`} className="block h-full w-full">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Top-left editorial badge */}
        {product.badge && (
          <span className="editorial-badge absolute left-3 top-3">
            {product.badge}
          </span>
        )}

        {/* Top-right wishlist button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.id, product.name)}
          aria-label={
            isWishlisted
              ? `Quitar ${product.name} de favoritos`
              : `Guardar ${product.name} en favoritos`
          }
          className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200 ${
            isWishlisted
              ? 'border-[#B58681] bg-[#FAF7F5] text-[#B58681]'
              : 'border-transparent bg-white/85 text-[#141312] hover:bg-white hover:text-[#B58681]'
          }`}
        >
          <Heart
            className="h-4 w-4"
            strokeWidth={1.6}
            fill={isWishlisted ? '#B58681' : 'none'}
          />
        </button>

        {/* Quick hover bar with finish */}
        <div className="pointer-events-none absolute bottom-3 left-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#141312] backdrop-blur-sm">
            Acabado {product.finish}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col pt-4">
        {/* Swatches row */}
        <div className="mb-2.5 flex items-center justify-between gap-2">
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
                  className={`h-3.5 w-3.5 rounded-full transition-all ${
                    selected
                      ? 'ring-1 ring-[#141312] ring-offset-2'
                      : 'border border-[#D5C9C4] hover:scale-110'
                  }`}
                  style={{ backgroundColor: swatch.hex }}
                />
              );
            })}
            {product.swatches.length > 1 && (
              <span className="ml-1 truncate text-[10px] text-[#6E6561]">
                {activeSwatch.name}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#B58681]">
            {product.brand}
          </span>
        </div>

        <Link
          to={`/producto/${product.id}`}
          className="line-clamp-2 text-[14px] font-medium leading-snug text-[#141312] transition-colors hover:text-[#B58681]"
        >
          {product.name}
        </Link>

        <p className="mt-1 text-xs text-[#6E6561]">{product.category}</p>

        <div className="mt-2.5 flex items-baseline justify-between">
          <span className="text-[15px] font-semibold tracking-tight text-[#141312]">
            ${product.price.toLocaleString('es-MX')}{' '}
            <span className="text-[10px] font-normal text-[#6E6561]">MXN</span>
          </span>
          <span className="text-[11px] text-[#8C6B5D]">★ {product.rating.toFixed(1)}</span>
        </div>

        <button
          type="button"
          onClick={() => addToCart(product, activeSwatch, 1)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-none bg-[#141312] py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[#2C2826]"
        >
          <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.6} />
          Agregar al carrito
        </button>
      </div>
    </article>
  );
};
