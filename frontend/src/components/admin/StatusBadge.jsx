const STYLES = {
  NEW: 'bg-blue-50 text-blue-700',
  CONTACTED: 'bg-amber-50 text-amber-700',
  QUALIFIED: 'bg-accent-500/10 text-accent-600',
  IN_PROGRESS: 'bg-purple-50 text-purple-700',
  CONVERTED: 'bg-green-50 text-green-700',
  CLOSED: 'bg-ink-100 text-ink-500',
};

const LABELS = {
  NEW: 'New',
  CONTACTED: 'Contacted',
  QUALIFIED: 'Qualified',
  IN_PROGRESS: 'In Progress',
  CONVERTED: 'Converted',
  CLOSED: 'Closed',
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${STYLES[status] || STYLES.NEW}`}>
      {LABELS[status] || status}
    </span>
  );
}

export { LABELS as STATUS_LABELS };
