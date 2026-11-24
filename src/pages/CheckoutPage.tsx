import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  CreditCard,
  Lock,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  ArrowLeft,
  ArrowRight,
  Truck,
} from 'lucide-react';
import { useShopStore } from '../store/useShopStore';
import { CheckoutFormData, CompletedOrder } from '../types/cart';

const INITIAL_FORM: CheckoutFormData = {
  fullName: '',
  email: '',
  phone: '',
  municipality: 'Cadereyta Jiménez, N.L.',
  address: '',
  neighborhood: '',
  postalCode: '67480',
  deliveryMethod: 'envio-local',
  paymentMethod: 'tarjeta',
  cardNumber: '',
  cardExpiry: '',
  cardCvc: '',
  notes: '',
};

export const CheckoutPage: React.FC = () => {
  const cart = useShopStore((s) => s.cart);
  const couponCode = useShopStore((s) => s.couponCode);
  const getSubtotal = useShopStore((s) => s.getSubtotal);
  const getDiscount = useShopStore((s) => s.getDiscount);
  const getShipping = useShopStore((s) => s.getShipping);
  const getTotal = useShopStore((s) => s.getTotal);
  const clearCart = useShopStore((s) => s.clearCart);
  const setLastOrder = useShopStore((s) => s.setLastOrder);

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<CheckoutFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});
  const [confirmedOrder, setConfirmedOrder] = useState<CompletedOrder | null>(null);

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const shipping = form.deliveryMethod === 'entrega-personal' ? 0 : getShipping();
  const total = Math.max(0, subtotal - discount + shipping);

  const updateField = <K extends keyof CheckoutFormData>(field: K, value: CheckoutFormData[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep1 = () => {
    const nextErrors: Partial<Record<keyof CheckoutFormData, string>> = {};
    if (form.fullName.trim().length < 3) nextErrors.fullName = 'Ingresa tu nombre completo.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      nextErrors.email = 'Ingresa un correo electrónico válido.';
    if (form.phone.replace(/\D/g, '').length < 10)
      nextErrors.phone = 'Ingresa un teléfono de 10 dígitos (WhatsApp).';
    if (form.deliveryMethod !== 'entrega-personal') {
      if (form.address.trim().length < 5) nextErrors.address = 'Ingresa calle y número.';
      if (form.neighborhood.trim().length < 2) nextErrors.neighborhood = 'Ingresa tu colonia.';
      if (!/^\d{5}$/.test(form.postalCode.trim()))
        nextErrors.postalCode = 'Código postal de 5 dígitos.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateStep2 = () => {
    const nextErrors: Partial<Record<keyof CheckoutFormData, string>> = {};
    if (form.paymentMethod === 'tarjeta') {
      if ((form.cardNumber || '').replace(/\s/g, '').length < 16) {
        nextErrors.cardNumber = 'Ingresa los 16 dígitos de tarjeta (simulación).';
      }
      if (!/^\d{2}\/\d{2}$/.test((form.cardExpiry || '').trim())) {
        nextErrors.cardExpiry = 'Usa formato MM/AA.';
      }
      if (!/^\d{3,4}$/.test((form.cardCvc || '').trim())) {
        nextErrors.cardCvc = 'CVC de 3 o 4 dígitos.';
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    const order: CompletedOrder = {
      orderNumber: `KLY-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toLocaleDateString('es-MX', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      items: [...cart],
      subtotal,
      discount,
      shipping,
      total,
      customer: { ...form },
    };

    setConfirmedOrder(order);
    setLastOrder(order);
    clearCart();
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Empty cart guard before confirmation
  if (cart.length === 0 && step !== 3) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF7F5] text-[#B58681]">
          <ShoppingBag className="h-7 w-7" strokeWidth={1.4} />
        </div>
        <h1 className="mt-5 font-serif text-4xl text-[#141312]">Tu bolsa está vacía</h1>
        <p className="mt-2 text-sm text-[#6E6561]">
          Agrega tus productos favoritos de maquillaje o skincare antes de finalizar tu pedido.
        </p>
        <Link to="/tienda" className="btn-editorial-primary mt-7">
          Ir al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-white">
      {/* Checkout Header + Stepper */}
      <section className="border-b border-[#E8DFDC] bg-[#FAF7F5] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B58681]">
            Checkout Simulado · Kaly Cosmetic’s
          </p>
          <h1 className="mt-1 font-serif text-4xl uppercase text-[#141312]">
            Finalizar Compra
          </h1>

          {/* 3-Step Indicator */}
          <div className="mt-7 grid grid-cols-3 gap-4 border-t border-[#E8DFDC] pt-6">
            {[
              { num: 1, title: 'Datos & Entrega' },
              { num: 2, title: 'Pago Seguro' },
              { num: 3, title: 'Confirmación' },
            ].map((s) => {
              const isCurrent = step === s.num;
              const isDone = step > s.num;
              return (
                <div key={s.num} className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center font-mono text-xs ${
                      isCurrent || isDone
                        ? 'bg-[#141312] text-white'
                        : 'border border-[#D5C9C4] bg-white text-[#8C827D]'
                    }`}
                  >
                    {isDone ? '✓' : `0${s.num}`}
                  </span>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                      isCurrent || isDone ? 'text-[#141312]' : 'text-[#8C827D]'
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* STEP 3: Order Confirmed */}
        {step === 3 && confirmedOrder ? (
          <div className="mx-auto max-w-3xl border border-[#E8DFDC] bg-[#FAF7F5] p-8 sm:p-12">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#141312] text-[#EBD7D4]">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B58681]">
                Pedido Simulado Confirmado
              </p>
              <h2 className="mt-2 font-serif text-4xl text-[#141312]">
                ¡Gracias por tu compra, {confirmedOrder.customer.fullName.split(' ')[0]}!
              </h2>
              <p className="mt-2 text-sm text-[#6E6561]">
                Folio de orden:{' '}
                <strong className="font-mono text-[#141312]">
                  {confirmedOrder.orderNumber}
                </strong>{' '}
                · {confirmedOrder.createdAt}
              </p>
            </div>

            <div className="mt-8 border border-[#E8DFDC] bg-white p-6">
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#141312]">
                Artículos de tu Pedido
              </h3>
              <ul className="mt-4 divide-y divide-[#E8DFDC]">
                {confirmedOrder.items.map((item) => (
                  <li key={item.key} className="flex items-center justify-between gap-4 py-3 text-sm">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="h-14 w-11 bg-[#F6F4F2] object-cover"
                      />
                      <div>
                        <p className="font-medium text-[#141312]">{item.product.name}</p>
                        <p className="text-xs text-[#6E6561]">
                          Tono: {item.swatch.name} · Cant: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="font-medium text-[#141312]">
                      ${(item.product.price * item.quantity).toLocaleString('es-MX')} MXN
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 space-y-1.5 border-t border-[#E8DFDC] pt-4 text-sm">
                <div className="flex justify-between text-[#6E6561]">
                  <span>Subtotal</span>
                  <span>${confirmedOrder.subtotal.toLocaleString('es-MX')} MXN</span>
                </div>
                {confirmedOrder.discount > 0 && (
                  <div className="flex justify-between text-[#9A6C67]">
                    <span>Descuento VIP</span>
                    <span>-${confirmedOrder.discount.toLocaleString('es-MX')} MXN</span>
                  </div>
                )}
                <div className="flex justify-between text-[#6E6561]">
                  <span>Envío / Entrega</span>
                  <span>
                    {confirmedOrder.shipping === 0
                      ? 'GRATIS'
                      : `$${confirmedOrder.shipping} MXN`}
                  </span>
                </div>
                <div className="flex justify-between border-t border-[#E8DFDC] pt-2.5 text-base font-semibold text-[#141312]">
                  <span>Total Pagado</span>
                  <span>${confirmedOrder.total.toLocaleString('es-MX')} MXN</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 border border-[#E8DFDC] bg-white p-5 text-xs text-[#6E6561] sm:grid-cols-2">
              <div>
                <p className="font-semibold uppercase tracking-wider text-[#141312]">
                  Destino de Entrega
                </p>
                <p className="mt-1">{confirmedOrder.customer.municipality}</p>
                {confirmedOrder.customer.address && (
                  <p>
                    {confirmedOrder.customer.address}, Col. {confirmedOrder.customer.neighborhood} ·
                    CP {confirmedOrder.customer.postalCode}
                  </p>
                )}
              </div>
              <div>
                <p className="font-semibold uppercase tracking-wider text-[#141312]">
                  Contacto & Pago
                </p>
                <p className="mt-1">{confirmedOrder.customer.email}</p>
                <p>Tel: {confirmedOrder.customer.phone}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/tienda" className="btn-editorial-primary">
                Seguir Comprando
              </Link>
              <Link to="/" className="btn-editorial-outline">
                Volver al Inicio
              </Link>
            </div>
          </div>
        ) : (
          /* STEPS 1 & 2: Two-column Checkout */
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left Form */}
            <div className="lg:col-span-7">
              {step === 1 && (
                <form onSubmit={handleNextToPayment} className="space-y-6" noValidate>
                  <div className="border border-[#E8DFDC] bg-white p-6 sm:p-8">
                    <h2 className="font-serif text-2xl text-[#141312]">
                      1. Información de Contacto
                    </h2>
                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          value={form.fullName}
                          onChange={(e) => updateField('fullName', e.target.value)}
                          placeholder="Ej. Sofía Hernández Garza"
                          className="editorial-input"
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-700">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="sofia@ejemplo.com"
                          className="editorial-input"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-700">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          placeholder="81 1234 5678"
                          className="editorial-input"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-700">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#E8DFDC] bg-white p-6 sm:p-8">
                    <h2 className="font-serif text-2xl text-[#141312]">
                      2. Modalidad y Dirección de Entrega
                    </h2>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {[
                        {
                          id: 'envio-local',
                          title: 'Envío a Domicilio Local',
                          desc: subtotal >= 800 ? 'GRATIS (pedido +$800)' : '$50 MXN · 24-48 hrs',
                          icon: Truck,
                        },
                        {
                          id: 'entrega-personal',
                          title: 'Entrega Personal (Punto Kaly)',
                          desc: 'GRATIS · Cadereyta / Los Ramones',
                          icon: MapPin,
                        },
                      ].map((opt) => {
                        const Icon = opt.icon;
                        const active = form.deliveryMethod === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() =>
                              updateField(
                                'deliveryMethod',
                                opt.id as CheckoutFormData['deliveryMethod']
                              )
                            }
                            className={`flex items-start gap-3 border p-4 text-left transition-colors ${
                              active
                                ? 'border-[#141312] bg-[#FAF7F5]'
                                : 'border-[#E8DFDC] bg-white hover:border-[#B58681]'
                            }`}
                          >
                            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#B58681]" />
                            <div>
                              <p className="text-xs font-semibold text-[#141312]">{opt.title}</p>
                              <p className="mt-0.5 text-[11px] text-[#6E6561]">{opt.desc}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
                          Municipio *
                        </label>
                        <select
                          value={form.municipality}
                          onChange={(e) =>
                            updateField(
                              'municipality',
                              e.target.value as CheckoutFormData['municipality']
                            )
                          }
                          className="editorial-input"
                        >
                          <option value="Cadereyta Jiménez, N.L.">Cadereyta Jiménez, N.L.</option>
                          <option value="Los Ramones, N.L.">Los Ramones, N.L.</option>
                          <option value="Monterrey y Área Metropolitana">
                            Monterrey y Área Metropolitana
                          </option>
                          <option value="Otro municipio">Otro municipio de Nuevo León</option>
                        </select>
                      </div>

                      {form.deliveryMethod !== 'entrega-personal' && (
                        <>
                          <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
                              Calle y número *
                            </label>
                            <input
                              type="text"
                              value={form.address}
                              onChange={(e) => updateField('address', e.target.value)}
                              placeholder="Ej. Hidalgo #214"
                              className="editorial-input"
                            />
                            {errors.address && (
                              <p className="mt-1 text-xs text-red-700">{errors.address}</p>
                            )}
                          </div>

                          <div>
                            <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
                              Colonia *
                            </label>
                            <input
                              type="text"
                              value={form.neighborhood}
                              onChange={(e) => updateField('neighborhood', e.target.value)}
                              placeholder="Centro"
                              className="editorial-input"
                            />
                            {errors.neighborhood && (
                              <p className="mt-1 text-xs text-red-700">{errors.neighborhood}</p>
                            )}
                          </div>

                          <div>
                            <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
                              Código Postal *
                            </label>
                            <input
                              type="text"
                              maxLength={5}
                              value={form.postalCode}
                              onChange={(e) => updateField('postalCode', e.target.value)}
                              placeholder="67480"
                              className="editorial-input"
                            />
                            {errors.postalCode && (
                              <p className="mt-1 text-xs text-red-700">{errors.postalCode}</p>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <Link to="/tienda" className="btn-editorial-ghost">
                      <ArrowLeft className="h-4 w-4" />
                      Volver a Tienda
                    </Link>
                    <button type="submit" className="btn-editorial-primary px-9">
                      Continuar al Pago
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleConfirmOrder} className="space-y-6" noValidate>
                  <div className="border border-[#E8DFDC] bg-white p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <h2 className="font-serif text-2xl text-[#141312]">
                        Método de Pago (Simulado)
                      </h2>
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#8C6B5D]">
                        <Lock className="h-3.5 w-3.5" /> Entorno académico seguro
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {[
                        { id: 'tarjeta', label: 'Tarjeta Débito/Crédito' },
                        { id: 'transferencia', label: 'Transferencia SPEI' },
                        { id: 'contra-entrega', label: 'Pago Contra Entrega' },
                      ].map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() =>
                            updateField(
                              'paymentMethod',
                              m.id as CheckoutFormData['paymentMethod']
                            )
                          }
                          className={`border px-4 py-3 text-xs font-medium transition-colors ${
                            form.paymentMethod === m.id
                              ? 'border-[#141312] bg-[#141312] text-white'
                              : 'border-[#E8DFDC] bg-white text-[#141312] hover:border-[#B58681]'
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>

                    {form.paymentMethod === 'tarjeta' && (
                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
                            Número de tarjeta (prueba) *
                          </label>
                          <div className="relative">
                            <CreditCard className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8C6B5D]" />
                            <input
                              type="text"
                              maxLength={19}
                              value={form.cardNumber}
                              onChange={(e) => {
                                const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
                                const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
                                updateField('cardNumber', formatted);
                              }}
                              placeholder="4152 3138 0000 1234"
                              className="editorial-input pl-10 font-mono"
                            />
                          </div>
                          {errors.cardNumber && (
                            <p className="mt-1 text-xs text-red-700">{errors.cardNumber}</p>
                          )}
                        </div>

                        <div>
                          <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
                            Vencimiento (MM/AA) *
                          </label>
                          <input
                            type="text"
                            maxLength={5}
                            value={form.cardExpiry}
                            onChange={(e) => updateField('cardExpiry', e.target.value)}
                            placeholder="08/29"
                            className="editorial-input font-mono"
                          />
                          {errors.cardExpiry && (
                            <p className="mt-1 text-xs text-red-700">{errors.cardExpiry}</p>
                          )}
                        </div>

                        <div>
                          <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141312]">
                            CVC *
                          </label>
                          <input
                            type="text"
                            maxLength={4}
                            value={form.cardCvc}
                            onChange={(e) => updateField('cardCvc', e.target.value)}
                            placeholder="123"
                            className="editorial-input font-mono"
                          />
                          {errors.cardCvc && (
                            <p className="mt-1 text-xs text-red-700">{errors.cardCvc}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {form.paymentMethod === 'transferencia' && (
                      <div className="mt-6 bg-[#FAF7F5] p-5 text-xs leading-relaxed text-[#4E4744]">
                        <p className="font-semibold uppercase tracking-wider text-[#141312]">
                          Datos SPEI de Demostración
                        </p>
                        <p className="mt-2">
                          Al confirmar recibirás la CLABE simulada de Kaly Cosmetic’s y tu folio
                          para enviar comprobante por Instagram DM o WhatsApp.
                        </p>
                      </div>
                    )}

                    {form.paymentMethod === 'contra-entrega' && (
                      <div className="mt-6 bg-[#FAF7F5] p-5 text-xs leading-relaxed text-[#4E4744]">
                        <p className="font-semibold uppercase tracking-wider text-[#141312]">
                          Pago en Efectivo al Recibir
                        </p>
                        <p className="mt-2">
                          Disponible en Cadereyta Jiménez y Los Ramones al momento de recibir tus
                          productos en punto acordado o domicilio.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-editorial-ghost"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Editar Datos
                    </button>
                    <button type="submit" className="btn-editorial-primary px-9">
                      Confirmar Pedido (${total.toLocaleString('es-MX')} MXN)
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Persistent Order Summary */}
            <aside className="lg:col-span-5">
              <div className="sticky top-28 border border-[#E8DFDC] bg-[#FAF7F5] p-6 sm:p-7">
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#141312]">
                  Resumen de Tu Bolsa ({cart.reduce((acc, i) => acc + i.quantity, 0)})
                </h2>

                <ul className="mt-5 max-h-80 divide-y divide-[#E8DFDC] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <li key={item.key} className="flex items-center justify-between gap-3 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="h-14 w-11 bg-white object-cover"
                        />
                        <div>
                          <p className="text-xs font-medium text-[#141312]">{item.product.name}</p>
                          <p className="text-[11px] text-[#6E6561]">
                            {item.swatch.name} × {item.quantity}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#141312]">
                        ${(item.product.price * item.quantity).toLocaleString('es-MX')}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 space-y-2 border-t border-[#E8DFDC] pt-4 text-sm">
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
                    <span>Envío</span>
                    <span>{shipping === 0 ? 'GRATIS' : `$${shipping} MXN`}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#E8DFDC] pt-3 text-base font-semibold text-[#141312]">
                    <span>Total a Pagar</span>
                    <span>${total.toLocaleString('es-MX')} MXN</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-[#E8DFDC] pt-4 text-[11px] text-[#6E6561]">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#B58681]" />
                  <span>Garantía de autenticidad en todas nuestras marcas importadas.</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </section>
    </div>
  );
};
