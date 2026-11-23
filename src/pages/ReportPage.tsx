import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  FileText,
  Cpu,
  Palette,
  BarChart3,
  ArrowRight,
  Award,
  type LucideIcon,
} from 'lucide-react';
import { ReportTabId } from '../types/report';
import { PROJECT_META } from '../data/reportData';
import { ExecutiveSummaryTab } from '../components/report/ExecutiveSummaryTab';
import { ArchitectureTab } from '../components/report/ArchitectureTab';
import { DesignSystemTab } from '../components/report/DesignSystemTab';
import { MetricsChartsTab } from '../components/report/MetricsChartsTab';

const TABS: Array<{
  id: ReportTabId;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
}> = [
  { id: 'resumen', label: 'Resumen Ejecutivo & Negocio', shortLabel: 'Resumen', icon: FileText },
  { id: 'arquitectura', label: 'Arquitectura & Stack Técnico', shortLabel: 'Arquitectura', icon: Cpu },
  { id: 'diseno', label: 'UI/UX & Sistema de Diseño', shortLabel: 'Brand Book', icon: Palette },
  { id: 'metricas', label: 'Métricas, Encuesta & Finanzas', shortLabel: 'Métricas', icon: BarChart3 },
];

export const ReportPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab') as ReportTabId | null;
  const validTab = TABS.some((t) => t.id === tabParam) ? (tabParam as ReportTabId) : 'resumen';

  const [activeTab, setActiveTab] = useState<ReportTabId>(validTab);

  useEffect(() => {
    if (tabParam && TABS.some((t) => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id: ReportTabId) => {
    setActiveTab(id);
    setSearchParams({ tab: id }, { replace: true });
  };

  return (
    <div className="animate-fade-in bg-white">
      {/* Luxury Editorial Brand Book & Tech Report Masthead */}
      <section className="relative overflow-hidden border-b border-[#E8DFDC] bg-[#FAF7F5] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#141312] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#EBD7D4]">
                <Award className="h-3.5 w-3.5" />
                Brand Book & Reporte Ejecutivo Interactivo
              </div>
              <h1 className="mt-4 font-serif text-4xl font-medium uppercase leading-tight tracking-[0.03em] text-[#141312] sm:text-5xl">
                Proyecto Integrador: Kaly Cosmetic’s
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[#6E6561]">
                Documento ejecutivo y técnico de <strong>{PROJECT_META.institution}</strong> · Equipo{' '}
                <span className="font-mono text-xs text-[#141312]">{PROJECT_META.team}</span> ·
                Estudio de viabilidad, diseño editorial e ingeniería e-commerce para maquillaje y
                skincare en {PROJECT_META.region}.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/tienda" className="btn-editorial-primary">
                Probar Tienda en Vivo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Internal Sub-Navigation Tabs */}
          <div
            className="mt-10 grid grid-cols-2 gap-2 border-t border-[#E8DFDC] pt-6 lg:grid-cols-4"
            role="tablist"
            aria-label="Secciones del Reporte Ejecutivo"
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center justify-center gap-2.5 border px-4 py-3.5 text-left transition-all duration-200 ${
                    isActive
                      ? 'border-[#141312] bg-[#141312] text-white'
                      : 'border-[#E8DFDC] bg-white text-[#141312] hover:border-[#B58681] hover:bg-[#F4E3E0]/35'
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-[#EBD7D4]' : 'text-[#B58681]'}`} />
                  <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] sm:inline">
                    {tab.label}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] sm:hidden">
                    {tab.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Tab Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {activeTab === 'resumen' && <ExecutiveSummaryTab />}
        {activeTab === 'arquitectura' && <ArchitectureTab />}
        {activeTab === 'diseno' && <DesignSystemTab />}
        {activeTab === 'metricas' && <MetricsChartsTab />}
      </section>
    </div>
  );
};
