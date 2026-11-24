import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CompletedOrder } from '../types/cart';
import { Product, ProductSwatch } from '../types/product';
import { FREE_SHIPPING_THRESHOLD, STANDARD_SHIPPING_COST } from '../data/products';

interface ToastMessage {
  id: number;
  text: string;
}

interface ShopState {
  cart: CartItem[];
  wishlist: string[]; // product IDs
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isSearchOpen: boolean;
  couponCode: string;
  toast: ToastMessage | null;
  lastOrder: CompletedOrder | null;

  // Cart Actions
  addToCart: (product: Product, swatch?: ProductSwatch, quantity?: number) => void;
  removeFromCart: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  setCouponCode: (code: string) => void;

  // Wishlist Actions
  toggleWishlist: (productId: string, productName?: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Drawers & UI
  openCart: () => void;
  closeCart: () => void;
  openWishlist: () => void;
  closeWishlist: () => void;
  toggleSearch: () => void;
  closeSearch: () => void;
  showToast: (text: string) => void;
  clearToast: () => void;

  // Order
  setLastOrder: (order: CompletedOrder) => void;

  // Computed helpers
  getCartCount: () => number;
  getSubtotal: () => number;
  getDiscount: () => number;
  getShipping: () => number;
  getTotal: () => number;
}

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: ['gloss-elf', 'serum-centella-skin1004'],
      isCartOpen: false,
      isWishlistOpen: false,
      isSearchOpen: false,
      couponCode: '',
      toast: null,
      lastOrder: null,

      addToCart: (product, swatch, quantity = 1) => {
        const chosenSwatch = swatch ?? product.swatches[0];
        const key = `${product.id}__${chosenSwatch.id}`;

        set((state) => {
          const existing = state.cart.find((item) => item.key === key);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.key === key
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
              isCartOpen: true,
              isWishlistOpen: false,
              toast: {
                id: Date.now(),
                text: `Se actualizó "${product.name}" (${chosenSwatch.name}) en tu bolsa`,
              },
            };
          }
          return {
            cart: [
              ...state.cart,
              {
                key,
                product,
                swatch: chosenSwatch,
                quantity,
              },
            ],
            isCartOpen: true,
            isWishlistOpen: false,
            toast: {
              id: Date.now(),
              text: `Agregado a tu bolsa: ${product.name}`,
            },
          };
        });
      },

      removeFromCart: (key) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.key !== key),
        })),

      updateQuantity: (key, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return { cart: state.cart.filter((item) => item.key !== key) };
          }
          return {
            cart: state.cart.map((item) =>
              item.key === key ? { ...item, quantity } : item
            ),
          };
        }),

      clearCart: () => set({ cart: [], couponCode: '' }),

      setCouponCode: (code) => set({ couponCode: code.trim().toUpperCase() }),

      toggleWishlist: (productId, productName) =>
        set((state) => {
          const exists = state.wishlist.includes(productId);
          return {
            wishlist: exists
              ? state.wishlist.filter((id) => id !== productId)
              : [...state.wishlist, productId],
            toast: {
              id: Date.now(),
              text: exists
                ? `Eliminado de Favoritos${productName ? `: ${productName}` : ''}`
                : `Guardado en Favoritos${productName ? `: ${productName}` : ''}`,
            },
          };
        }),

      isInWishlist: (productId) => get().wishlist.includes(productId),

      openCart: () => set({ isCartOpen: true, isWishlistOpen: false, isSearchOpen: false }),
      closeCart: () => set({ isCartOpen: false }),
      openWishlist: () => set({ isWishlistOpen: true, isCartOpen: false, isSearchOpen: false }),
      closeWishlist: () => set({ isWishlistOpen: false }),
      toggleSearch: () =>
        set((state) => ({
          isSearchOpen: !state.isSearchOpen,
          isCartOpen: false,
          isWishlistOpen: false,
        })),
      closeSearch: () => set({ isSearchOpen: false }),

      showToast: (text) => set({ toast: { id: Date.now(), text } }),
      clearToast: () => set({ toast: null }),

      setLastOrder: (order) => set({ lastOrder: order }),

      getCartCount: () =>
        get().cart.reduce((acc, item) => acc + item.quantity, 0),

      getSubtotal: () =>
        get().cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0),

      getDiscount: () => {
        const { couponCode, getSubtotal } = get();
        const subtotal = getSubtotal();
        if (couponCode === 'KALY10' || couponCode === 'VIP10') {
          return Math.round(subtotal * 0.1);
        }
        return 0;
      },

      getShipping: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0) return 0;
        return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_COST;
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const discount = get().getDiscount();
        const shipping = get().getShipping();
        return Math.max(0, subtotal - discount + shipping);
      },
    }),
    {
      name: 'kaly-cosmetics-store-v2',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        couponCode: state.couponCode,
        lastOrder: state.lastOrder,
      }),
    }
  )
);
