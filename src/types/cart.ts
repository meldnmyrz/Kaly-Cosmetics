import { Product, ProductSwatch } from './product';

export interface CartItem {
  key: string; // productId + swatchId
  product: Product;
  swatch: ProductSwatch;
  quantity: number;
}

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  municipality: 'Cadereyta Jiménez, N.L.' | 'Los Ramones, N.L.' | 'Monterrey y Área Metropolitana' | 'Otro municipio';
  address: string;
  neighborhood: string;
  postalCode: string;
  deliveryMethod: 'entrega-personal' | 'envio-local' | 'paqueteria-nacional';
  paymentMethod: 'transferencia' | 'tarjeta' | 'contra-entrega';
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
  notes?: string;
}

export interface CompletedOrder {
  orderNumber: string;
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  customer: CheckoutFormData;
}
