import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useShopStore } from '../../store/useShopStore';

export const ToastNotification: React.FC = () => {
  const toast = useShopStore((s) => s.toast);
  const clearToast = useShopStore((s) => s.clearToast);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => clearToast(), 3200);
    return () => clearTimeout(timer);
  }, [toast, clearToast]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 animate-fade-in">
      <div className="flex items-center justify-between gap-3 border border-[#E8DFDC] bg-[#141312] px-4 py-3.5 text-white shadow-xl">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#EBD7D4]" />
          <p className="text-xs leading-snug tracking-wide">{toast.text}</p>
        </div>
        <button
          type="button"
          onClick={clearToast}
          className="text-[#B58681] hover:text-white"
          aria-label="Cerrar notificación"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
