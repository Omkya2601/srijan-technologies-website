import { AlertTriangle, Inbox } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

export default function AsyncState({
  loading,
  error,
  isEmpty,
  emptyLabel = 'Nothing to show yet.',
  onRetry,
  children,
}) {
  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-red-100 bg-red-50 py-16 text-center">
        <AlertTriangle className="text-red-500" size={28} aria-hidden="true" />
        <p className="text-sm font-semibold text-red-600">
          {typeof error === 'string' ? error : 'Something went wrong loading this content.'}
        </p>
        {onRetry && (
          <button onClick={onRetry} className="btn-outline mt-2">
            Try Again
          </button>
        )}
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-center text-ink-400">
        <Inbox size={28} aria-hidden="true" />
        <p className="text-sm">{emptyLabel}</p>
      </div>
    );
  }

  return children;
}
