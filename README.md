# Kaly Cosmetic’s — E-Commerce Editorial & Reporte Ejecutivo

Plataforma web multisección desarrollada en **React + TypeScript + Vite + Tailwind CSS + Zustand + Recharts**, diseñada con una estética editorial de belleza que une en un mismo ecosistema:

1. **E-Commerce funcional de Maquillaje & Skincare** basado en el catálogo real de **Kaly Cosmetic’s** (marcas importadas de EE. UU. y K-Beauty Centella).
2. **Brand Book & Reporte Ejecutivo Interactivo** del Proyecto Integrador de la **Universidad Tecnológica Cadereyta** (Equipo `73TSUM4N`).

## Rutas Implementadas

- `/` — **Escaparate Editorial**: Hero luminoso con carrusel, pilares de valor, cuadrícula de *Más Vendidos*, banners duales (*Labios* y *Skincare*), categorías por textura y acceso rápido al Reporte.
- `/tienda` — **Catálogo Interactivo**: Filtros en tiempo real por categoría, acabado (`Mate`, `Satinado`, `Gloss`, `Natural`), precio máximo, barra de búsqueda y ordenamiento.
- `/producto/:id` — **Detalle de Producto**: Galería multi-imagen, selector interactivo de tonos (*swatches*), ingredientes clave, modo de uso, envío y productos relacionados.
- `/reporte` — **Brand Book & Reporte Ejecutivo**: Cuatro pestañas interactivas (*Resumen Ejecutivo*, *Arquitectura & Stack*, *Sistema de Diseño UI/UX* con paleta copiable, y *Métricas* con resultados reales de la encuesta `n=108` y simulador financiero del lote de 55 piezas).
- `/checkout` — **Checkout Simulado Paso a Paso**: Validación de formulario, modalidades de entrega local (Cadereyta Jiménez y Los Ramones, N.L.), cupones VIP (`KALY10`), pago simulado y pantalla de confirmación con folio.

## Cómo Ejecutar el Proyecto

Requisitos: **Node.js 18+** y **npm**.

```bash
npm install
npm run dev
```

Para compilar a producción:

```bash
npm run build
npm run preview
```
