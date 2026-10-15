import { Loader2 } from 'lucide-react';

export default function LoadingSpinner({ label = 'Loading…', className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 py-16 text-ink-400 ${className}`}>
      <Loader2 className="animate-spin" size={28} aria-hidden="true" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
