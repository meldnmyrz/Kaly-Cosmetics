import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  FileText,
  ClipboardList,
  BarChart3,
  Cpu,
  Palette,
  ArrowRight,
  Award,
  type LucideIcon,
} from 'lucide-react';
import { ReportTabId } from '../types/report';
import { PROJECT_META } from '../data/reportData';
import { ExecutiveSummaryTab } from '../components/report/ExecutiveSummaryTab';
import { MethodologyTab } from '../components/report/MethodologyTab';
import { ArchitectureTab } from '../components/report/ArchitectureTab';
import { DesignSystemTab } from '../components/report/DesignSystemTab';
import { MetricsChartsTab } from '../components/report/MetricsChartsTab';

const TABS: Array<{
  id: ReportTabId;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
}> = [
  { id: 'resumen', label: 'Resumen & Marco Teórico', shortLabel: 'Resumen', icon: FileText },
  { id: 'metodologia', label: 'Metodología & Bibliografía', shortLabel: 'Metodología', icon: ClipboardList },
  { id: 'metricas', label: 'Encuesta (n=108) & Finanzas', shortLabel: 'Finanzas', icon: BarChart3 },
  { id: 'arquitectura', label: 'Arquitectura Web', shortLabel: 'Arquitectura', icon: Cpu },
  { id: 'diseno', label: 'Brand Book UI/UX', shortLabel: 'UI/UX', icon: Palette },
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
                {PROJECT_META.institution} · {PROJECT_META.documentType}
              </div>
              <h1 className="mt-4 font-serif text-4xl font-medium uppercase leading-tight tracking-[0.03em] text-[#141312] sm:text-5xl">
                Proyecto Integrador: {PROJECT_META.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[#6E6561]">
                Equipo <span className="font-mono text-xs font-semibold text-[#141312]">{PROJECT_META.team}</span> ·
                Líder: <strong>{PROJECT_META.leader}</strong> · Fecha: {PROJECT_META.date} ·
                Estudio real de mercado (n=108), anexo financiero de 55 piezas y plataforma digital
                para {PROJECT_META.region}.
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
            className="mt-10 grid grid-cols-2 gap-2 border-t border-[#E8DFDC] pt-6 sm:grid-cols-3 lg:grid-cols-5"
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
                  className={`flex items-center justify-center gap-2 border px-3 py-3.5 text-left transition-all duration-200 ${
                    isActive
                      ? 'border-[#141312] bg-[#141312] text-white'
                      : 'border-[#E8DFDC] bg-white text-[#141312] hover:border-[#B58681] hover:bg-[#F4E3E0]/35'
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      isActive ? 'text-[#EBD7D4]' : 'text-[#B58681]'
                    }`}
                  />
                  <span className="hidden text-[10px] font-semibold uppercase tracking-[0.12em] xl:inline">
                    {tab.label}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] xl:hidden">
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
        {activeTab === 'metodologia' && <MethodologyTab />}
        {activeTab === 'metricas' && <MetricsChartsTab />}
        {activeTab === 'arquitectura' && <ArchitectureTab />}
        {activeTab === 'diseno' && <DesignSystemTab />}
      </section>
    </div>
  );
};
