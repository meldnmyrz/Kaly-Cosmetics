import React, { useState } from 'react';
import { Cpu, Database, GitBranch, Globe, Layout, ShieldCheck, Layers } from 'lucide-react';

interface ArchNode {
  id: string;
  title: string;
  layer: string;
  tech: string;
  description: string;
  files: string[];
}

const ARCH_NODES: ArchNode[] = [
  {
    id: 'router',
    title: 'Enrutador SPA Multivista',
    layer: 'Capa de Navegación',
    tech: 'React Router v6 (BrowserRouter)',
    description:
      'Administra las vistas independientes con URL limpia (/ , /tienda , /producto/:id , /checkout) y Layout persistente con scroll-to-top automático.',
    files: ['src/App.tsx', 'src/components/layout/Navbar.tsx', 'src/components/layout/Footer.tsx'],
  },
  {
    id: 'store',
    title: 'Estado Global Persistente',
    layer: 'Capa de Estado',
    tech: 'Zustand + Middleware Persist (localStorage)',
    description:
      'Sincroniza en tiempo real el Carrito (cantidades, cupones KALY10, envío gratis desde $800), la lista de Favoritos (Wishlist) y los drawers laterales desde cualquier ruta.',
    files: ['src/store/useShopStore.ts', 'src/components/layout/CartDrawer.tsx', 'src/components/layout/WishlistDrawer.tsx'],
  },
  {
    id: 'catalog',
    title: 'Motor de Catálogo & Swatches',
    layer: 'Capa de Negocio',
    tech: 'TypeScript Strict + Memoized Filtering',
    description:
      'Filtra en tiempo real los 16 productos reales de Kaly por categoría (Rostro, Labios, Ojos, Skincare, Herramientas), acabado (Mate, Satinado, Gloss, Natural), rango de precio y búsqueda instantánea.',
    files: ['src/data/products.ts', 'src/pages/ShopPage.tsx', 'src/pages/ProductDetailPage.tsx'],
  },
  {
    id: 'report',
    title: 'Dashboard & Brand Book Interactivo',
    layer: 'Capa Analítica',
    tech: 'Recharts + Tailwind Design Tokens',
    description:
      'Transforma el documento académico de la UTC en un caso de estudio interactivo con simulador de margen comercial, gráficas de la encuesta (n=108) y muestrario vivo del sistema visual.',
    files: ['src/data/reportData.ts', 'src/pages/HomePage.tsx', 'src/components/report/*'],
  },
];

const STACK_ITEMS = [
  { name: 'React 18 + TypeScript', role: 'Arquitectura modular tipada y componentes reutilizables', badge: 'CORE' },
  { name: 'Vite 5', role: 'Empaquetado ultrarrápido y HMR instantáneo en desarrollo', badge: 'BUILD' },
  { name: 'React Router DOM v6', role: 'Navegación real entre rutas independientes y parámetros dinámicos', badge: 'ROUTING' },
  { name: 'Zustand + Persist', role: 'Estado global ligero sin re-renders innecesarios persistido en localStorage', badge: 'STATE' },
  { name: 'Tailwind CSS 3', role: 'Sistema de tokens editoriales (paleta Blush/Carbón, 0px radius)', badge: 'UI SYSTEM' },
  { name: 'Recharts + Lucide', role: 'Visualizaciones interactivas de KPIs y trazos lineales finos 1.5px', badge: 'DATA & ICONS' },
];

export const ArchitectureTab: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ArchNode>(ARCH_NODES[0]);

  return (
    <div className="animate-fade-in space-y-12">
      {/* Interactive Architecture Diagram */}
      <div className="border border-[#E8DFDC] bg-[#FAF7F5] p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B58681]">
              Diagrama Interactivo de Capas
            </p>
            <h3 className="mt-1 font-serif text-3xl text-[#141312]">
              Arquitectura Frontend & Flujo de Datos
            </h3>
          </div>
          <span className="text-xs text-[#6E6561]">
            Haz clic en cualquier bloque para inspeccionar sus módulos
          </span>
        </div>

        {/* Visual Flow Boxes */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          {ARCH_NODES.map((node, index) => {
            const active = selectedNode.id === node.id;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedNode(node)}
                className={`group relative flex flex-col items-start border p-5 text-left transition-all duration-200 ${
                  active
                    ? 'border-[#141312] bg-[#141312] text-white'
                    : 'border-[#E8DFDC] bg-white text-[#141312] hover:border-[#B58681]'
                }`}
              >
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.16em] ${
                    active ? 'text-[#EBD7D4]' : 'text-[#B58681]'
                  }`}
                >
                  0{index + 1} · {node.layer}
                </span>
                <h4 className="mt-2 font-serif text-xl font-medium">{node.title}</h4>
                <p
                  className={`mt-2 text-[11px] ${
                    active ? 'text-[#D7CCC8]' : 'text-[#6E6561]'
                  }`}
                >
                  {node.tech}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Node Inspector */}
        <div className="mt-6 grid grid-cols-1 gap-6 border border-[#E8DFDC] bg-white p-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="editorial-badge">{selectedNode.layer}</span>
            <h4 className="mt-3 font-serif text-2xl text-[#141312]">{selectedNode.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-[#4E4744]">
              {selectedNode.description}
            </p>
          </div>
          <div className="border-t border-[#E8DFDC] pt-4 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8C6B5D]">
              Módulos Clave en Código
            </p>
            <ul className="mt-3 space-y-2">
              {selectedNode.files.map((file) => (
                <li
                  key={file}
                  className="bg-[#FAF7F5] px-3 py-2 font-mono text-xs text-[#141312]"
                >
                  {file}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Data Flow Pipeline */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="border border-[#E8DFDC] bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#141312] text-white">
            <Globe className="h-4 w-4" />
          </div>
          <h4 className="mt-4 font-serif text-2xl text-[#141312]">1. Interacción de Usuario</h4>
          <p className="mt-2 text-xs leading-relaxed text-[#6E6561]">
            El cliente navega entre vistas reales, selecciona tonos (swatches), filtra por acabado
            o agrega artículos a favoritos y bolsa desde cualquier ruta sin perder contexto.
          </p>
        </div>

        <div className="border border-[#E8DFDC] bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#141312] text-white">
            <Database className="h-4 w-4" />
          </div>
          <h4 className="mt-4 font-serif text-2xl text-[#141312]">2. Store Zustand Persistido</h4>
          <p className="mt-2 text-xs leading-relaxed text-[#6E6561]">
            Las acciones mutan de forma inmutable el estado global, recalculando subtotal, cupón
            VIP (`KALY10`), umbral de envío gratis ($800 MXN) y sincronizando automáticamente con{' '}
            <code className="font-mono text-[#141312]">localStorage</code>.
          </p>
        </div>

        <div className="border border-[#E8DFDC] bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#141312] text-white">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <h4 className="mt-4 font-serif text-2xl text-[#141312]">3. Validación & Checkout</h4>
          <p className="mt-2 text-xs leading-relaxed text-[#6E6561]">
            El flujo de pago valida campos obligatorios, municipio de cobertura (Cadereyta / Los
            Ramones), método de entrega y genera un folio de orden verificable.
          </p>
        </div>
      </div>

      {/* Stack Matrix & Route Map */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="border border-[#E8DFDC] bg-white p-6 sm:p-8 lg:col-span-7">
          <div className="flex items-center gap-2 text-[#B58681]">
            <Cpu className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Stack Tecnológico Seleccionado
            </span>
          </div>
          <div className="mt-5 divide-y divide-[#E8DFDC]">
            {STACK_ITEMS.map((item) => (
              <div key={item.name} className="flex items-start justify-between gap-4 py-3.5">
                <div>
                  <p className="text-sm font-semibold text-[#141312]">{item.name}</p>
                  <p className="mt-0.5 text-xs text-[#6E6561]">{item.role}</p>
                </div>
                <span className="shrink-0 bg-[#FAF7F5] px-2.5 py-1 font-mono text-[10px] tracking-wider text-[#8C6B5D]">
                  {item.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-[#E8DFDC] bg-[#FAF7F5] p-6 sm:p-8 lg:col-span-5">
          <div className="flex items-center gap-2 text-[#B58681]">
            <GitBranch className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Mapa de Rutas Reales
            </span>
          </div>
          <ul className="mt-5 space-y-3">
            {[
              { path: '/', desc: 'Inicio: Escaparate Editorial + Reporte Técnico completo del Proyecto Integrador UTC' },
              { path: '/tienda', desc: 'Catálogo con filtros en vivo por categoría, acabado, precio y orden' },
              { path: '/producto/:id', desc: 'Ficha individual con galería, swatches dinámicos, ingredientes y uso' },
              { path: '/checkout', desc: 'Checkout paso a paso con validación y recibo de confirmación' },
            ].map((route) => (
              <li key={route.path} className="border border-[#E8DFDC] bg-white p-3.5">
                <div className="flex items-center gap-2">
                  <Layout className="h-3.5 w-3.5 text-[#B58681]" />
                  <code className="font-mono text-xs font-semibold text-[#141312]">
                    {route.path}
                  </code>
                </div>
                <p className="mt-1.5 text-xs text-[#6E6561]">{route.desc}</p>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center gap-2 text-[11px] text-[#8C6B5D]">
            <Layers className="h-4 w-4" />
            <span>100% Responsivo · Mobile-First · Cero dependencias pesadas innecesarias</span>
          </div>
        </div>
      </div>
    </div>
  );
};
