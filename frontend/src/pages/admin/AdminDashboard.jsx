import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Eye, Trash2 } from 'lucide-react';
import Seo from '../../components/common/Seo';
import AsyncState from '../../components/common/AsyncState';
import { STATUS_LABELS } from '../../components/admin/StatusBadge';
import useFetch from '../../hooks/useFetch';
import { adminApi } from '../../services/api';

const STATUS_FILTERS = ['ALL', 'NEW', 'CONTACTED', 'QUALIFIED', 'IN_PROGRESS', 'CONVERTED', 'CLOSED'];
const STAT_TILES = ['total', 'NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED'];
const STAT_LABELS = { total: 'Total', ...STATUS_LABELS };

export default function AdminDashboard() {
  const [filter, setFilter] = useState('ALL');
  const { data: leads, loading, error, refetch } = useFetch(
    () => adminApi.listLeads(filter === 'ALL' ? undefined : filter),
    [filter]
  );
  const { data: stats } = useFetch(adminApi.getStats, []);

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete the lead from "${name}"? This cannot be undone.`)) return;
    try {
      await adminApi.deleteLead(id);
      toast.success('Lead deleted');
      refetch();
    } catch (err) {
      toast.error(err.message || 'Failed to delete lead');
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await adminApi.updateLeadStatus(id, status);
      toast.success('Status updated');
      refetch();
    } catch (err) {
      toast.error(err.message || 'Failed to update status');
    }
  };

  return (
    <>
      <Seo title="Admin Dashboard" path="/admin/dashboard" />
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-extrabold">Contact Leads</h1>
          <p className="mt-1 text-sm text-ink-500">
            Manage inbound leads submitted through the contact form.
          </p>
        </div>

        {stats && (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {STAT_TILES.map((key) => (
              <div key={key} className="card p-4 text-center">
                <p className="text-2xl font-extrabold text-primary-600">{stats[key] ?? 0}</p>
                <p className="mt-1 text-xs font-semibold text-ink-500">{STAT_LABELS[key]}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {STATUS_FILTERS.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === s
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-ink-600 hover:bg-ink-100'
              }`}
            >
              {s === 'ALL' ? 'All' : STATUS_LABELS[s]}
            </button>
          ))}
        </div>

        <AsyncState
          loading={loading}
          error={error}
          onRetry={refetch}
          isEmpty={leads?.length === 0}
          emptyLabel="No leads match this filter yet."
        >
          <div className="card overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400">
                <tr>
                  <th className="px-5 py-4">Name</th>
                  <th className="px-5 py-4">Email</th>
                  <th className="px-5 py-4">Service</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Received</th>
                  <th className="px-5 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(leads || []).map((lead) => (
                  <tr key={lead.id} className="border-b border-ink-50 last:border-0">
                    <td className="px-5 py-4 font-semibold">{lead.name}</td>
                    <td className="px-5 py-4 text-ink-500">{lead.email}</td>
                    <td className="px-5 py-4 text-ink-500">{lead.service || '—'}</td>
                    <td className="px-5 py-4">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        className="rounded-lg border border-ink-200 bg-white px-2 py-1.5 text-xs"
                      >
                        {Object.entries(STATUS_LABELS).map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-5 py-4 text-ink-500">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/admin/leads/${lead.id}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-500 hover:bg-ink-100"
                          aria-label={`View lead from ${lead.name}`}
                        >
                          <Eye size={16} />
                        </Link>
                        <button
                          onClick={() => handleDelete(lead.id, lead.name)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-red-500 hover:bg-red-50"
                          aria-label={`Delete lead from ${lead.name}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AsyncState>
      </div>
    </>
  );
}
