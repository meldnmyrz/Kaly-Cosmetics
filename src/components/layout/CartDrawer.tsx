import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Trash2, X, Tag, ArrowRight } from 'lucide-react';
import { useShopStore } from '../../store/useShopStore';
import { FREE_SHIPPING_THRESHOLD } from '../../data/products';

export const CartDrawer: React.FC = () => {
  const navigate = useNavigate();
  const isCartOpen = useShopStore((s) => s.isCartOpen);
  const closeCart = useShopStore((s) => s.closeCart);
  const cart = useShopStore((s) => s.cart);
  const updateQuantity = useShopStore((s) => s.updateQuantity);
  const removeFromCart = useShopStore((s) => s.removeFromCart);
  const couponCode = useShopStore((s) => s.couponCode);
  const setCouponCode = useShopStore((s) => s.setCouponCode);
  const getSubtotal = useShopStore((s) => s.getSubtotal);
  const getDiscount = useShopStore((s) => s.getDiscount);
  const getShipping = useShopStore((s) => s.getShipping);
  const getTotal = useShopStore((s) => s.getTotal);

  const [couponInput, setCouponInput] = useState(couponCode);
  const [couponFeedback, setCouponFeedback] = useState('');

  if (!isCartOpen) return null;

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const shipping = getShipping();
  const total = getTotal();
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const shippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = couponInput.trim().toUpperCase();
    if (cleaned === 'KALY10' || cleaned === 'VIP10') {
      setCouponCode(cleaned);
      setCouponFeedback('Cupón del 10% aplicado correctamente.');
    } else {
      setCouponCode('');
      setCouponFeedback('Código no válido. Prueba con KALY10.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#141312]/45 backdrop-blur-[2px] transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className="animate-slide-in-right relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
        aria-label="Bolsa de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E8DFDC] bg-[#FAF7F5] px-6 py-5">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="h-4 w-4 text-[#B58681]" strokeWidth={1.7} />
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#141312]">
              Tu Bolsa ({cart.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-8 w-8 items-center justify-center text-[#141312] transition-colors hover:text-[#B58681]"
            aria-label="Cerrar bolsa"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Free Shipping Bar */}
        <div className="border-b border-[#E8DFDC] bg-[#F4E3E0]/45 px-6 py-3.5">
          <p className="text-xs text-[#141312]">
            {remainingForFreeShipping === 0 && subtotal > 0 ? (
              <span>
                ¡Felicidades! Desbloqueaste <strong>envío local gratis</strong>.
              </span>
            ) : (
              <span>
                Te faltan{' '}
                <strong>${remainingForFreeShipping.toLocaleString('es-MX')} MXN</strong>{' '}
                para obtener envío gratis.
              </span>
            )}
          </p>
          <div className="mt-2 h-1.5 w-full bg-[#E8DFDC]">
            <div
              className="h-full bg-[#141312] transition-all duration-300"
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF7F5] text-[#B58681]">
                <ShoppingBag className="h-7 w-7" strokeWidth={1.4} />
              </div>
              <p className="mt-4 font-serif text-2xl text-[#141312]">Tu bolsa está vacía</p>
              <p className="mt-2 max-w-xs text-sm text-[#6E6561]">
                Explora nuestro catálogo curado de maquillaje en tendencia y skincare con Centella.
              </p>
              <button
                type="button"
                onClick={() => {
                  closeCart();
                  navigate('/tienda');
                }}
                className="btn-editorial-primary mt-6"
              >
                Explorar Tienda
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-[#E8DFDC]">
              {cart.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 first:pt-0">
                  <Link
                    to={`/producto/${item.product.id}`}
                    onClick={closeCart}
                    className="flex h-24 w-20 shrink-0 items-center justify-center rounded-md border border-[#F0E3E6] bg-white p-1.5"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="h-full w-full object-contain"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#B58681]">
                            {item.product.brand}
                          </p>
                          <Link
                            to={`/producto/${item.product.id}`}
                            onClick={closeCart}
                            className="text-sm font-medium leading-snug text-[#141312] hover:text-[#B58681]"
                          >
                            {item.product.name}
                          </Link>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.key)}
                          className="text-[#8C827D] transition-colors hover:text-[#141312]"
                          aria-label={`Eliminar ${item.product.name}`}
                        >
                          <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>

                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-[#6E6561]">
                        <span
                          className="inline-block h-3 w-3 rounded-full border border-[#D4C7C2]"
                          style={{ backgroundColor: item.swatch.hex }}
                        />
                        <span>{item.swatch.name}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-[#E8DFDC]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center text-[#141312] hover:bg-[#FAF7F5]"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center text-[#141312] hover:bg-[#FAF7F5]"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <span className="text-sm font-semibold text-[#141312]">
                        ${(item.product.price * item.quantity).toLocaleString('es-MX')} MXN
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer Totals */}
        {cart.length > 0 && (
          <div className="border-t border-[#E8DFDC] bg-[#FAF7F5] px-6 py-5">
            {/* Coupon Input */}
            <form onSubmit={handleApplyCoupon} className="mb-4 flex gap-2">
              <div className="relative flex-1">
                <Tag className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#8C6B5D]" />
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="Código VIP (ej. KALY10)"
                  className="w-full rounded-none border border-[#E8DFDC] bg-white py-2 pl-9 pr-3 text-xs uppercase tracking-wider text-[#141312] focus:border-[#141312] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-none border border-[#141312] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#141312] transition-colors hover:bg-[#141312] hover:text-white"
              >
                Aplicar
              </button>
            </form>
            {couponFeedback && (
              <p className="mb-3 text-[11px] text-[#8C6B5D]">{couponFeedback}</p>
            )}

            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-[#6E6561]">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString('es-MX')} MXN</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[#9A6C67]">
                  <span>Descuento VIP ({couponCode})</span>
                  <span>-${discount.toLocaleString('es-MX')} MXN</span>
                </div>
              )}
              <div className="flex justify-between text-[#6E6561]">
                <span>Envío estimado</span>
                <span>{shipping === 0 ? 'GRATIS' : `$${shipping} MXN`}</span>
              </div>
              <div className="flex justify-between border-t border-[#E8DFDC] pt-2.5 text-base font-semibold text-[#141312]">
                <span>Total</span>
                <span>${total.toLocaleString('es-MX')} MXN</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                closeCart();
                navigate('/checkout');
              }}
              className="btn-editorial-primary mt-5 w-full"
            >
              Proceder al Checkout
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};
