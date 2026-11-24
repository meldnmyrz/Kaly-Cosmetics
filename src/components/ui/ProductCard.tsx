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
    <article className="group flex h-full flex-col bg-white text-center transition-all duration-300">
      {/* Clean Soft Studio Image Box */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#FAF3F4]">
        <Link to={`/producto/${product.id}`} className="block h-full w-full">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {product.badge && (
          <span className="editorial-badge absolute left-3 top-3">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => toggleWishlist(product.id, product.name)}
          aria-label={
            isWishlisted
              ? `Quitar ${product.name} de favoritos`
              : `Guardar ${product.name} en favoritos`
          }
          className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 ${
            isWishlisted
              ? 'bg-white text-[#A8747C] shadow-sm'
              : 'bg-white/80 text-[#594A4D] hover:bg-white hover:text-[#A8747C]'
          }`}
        >
          <Heart
            className="h-4 w-4"
            strokeWidth={1.6}
            fill={isWishlisted ? '#A8747C' : 'none'}
          />
        </button>
      </div>

      {/* Clean Centered Product Info (matching minimal Nura Beauty reference) */}
      <div className="flex flex-1 flex-col items-center px-2 pt-4">
        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A8747C]">
          {product.brand}
        </span>

        <Link
          to={`/producto/${product.id}`}
          className="mt-1 line-clamp-2 text-[14px] font-medium leading-snug text-[#2A2324] transition-colors hover:text-[#A8747C]"
        >
          {product.name}
        </Link>

        {/* Subtle Swatch Dots */}
        <div className="mt-2.5 flex items-center justify-center gap-1.5">
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
                    ? 'ring-1 ring-[#A8747C] ring-offset-2'
                    : 'border border-[#DECED1] hover:scale-110'
                }`}
                style={{ backgroundColor: swatch.hex }}
              />
            );
          })}
        </div>

        <p className="mt-2.5 text-[14px] font-semibold text-[#2A2324]">
          ${product.price.toLocaleString('es-MX')}{' '}
          <span className="text-[10px] font-normal text-[#857578]">MXN</span>
        </p>

        <button
          type="button"
          onClick={() => addToCart(product, activeSwatch, 1)}
          className="mt-auto w-full rounded-full bg-[#A8747C] py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[#8E5D65] mt-4"
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  );
};
