import { useParams, useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ArrowLeft, Trash2 } from 'lucide-react';
import Seo from '../../components/common/Seo';
import AsyncState from '../../components/common/AsyncState';
import StatusBadge, { STATUS_LABELS } from '../../components/admin/StatusBadge';
import useFetch from '../../hooks/useFetch';
import { adminApi } from '../../services/api';

const FIELD_LABELS = {
  phone: 'Phone',
  company: 'Company',
  service: 'Service Required',
  budget: 'Budget Range',
};

export default function AdminLeadDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: lead, loading, error, refetch } = useFetch(() => adminApi.getLead(id), [id]);

  const handleStatusChange = async (status) => {
    try {
      await adminApi.updateLeadStatus(id, status);
      toast.success('Status updated');
      refetch();
    } catch (err) {
      toast.error(err.message || 'Failed to update status');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete this lead? This cannot be undone.')) return;
    try {
      await adminApi.deleteLead(id);
      toast.success('Lead deleted');
      navigate('/admin/dashboard');
    } catch (err) {
      toast.error(err.message || 'Failed to delete lead');
    }
  };

  return (
    <>
      <Seo title="Lead Details" path={`/admin/leads/${id}`} />
      <div className="flex flex-col gap-6">
        <Link to="/admin/dashboard" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink-500 hover:text-primary-600">
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>

        <AsyncState loading={loading} error={error} onRetry={refetch}>
          {lead && (
            <div className="grid gap-6 lg:grid-cols-[1fr,320px]">
              <div className="card p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-extrabold">{lead.name}</h1>
                    <p className="text-sm text-ink-500">
                      Submitted {new Date(lead.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <StatusBadge status={lead.status} />
                </div>

                <dl className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-bold uppercase text-ink-400">Email</dt>
                    <dd className="mt-1 text-sm">
                      <a href={`mailto:${lead.email}`} className="text-primary-600 hover:underline">
                        {lead.email}
                      </a>
                    </dd>
                  </div>
                  {Object.entries(FIELD_LABELS).map(([key, label]) =>
                    lead[key] ? (
                      <div key={key}>
                        <dt className="text-xs font-bold uppercase text-ink-400">{label}</dt>
                        <dd className="mt-1 text-sm">{lead[key]}</dd>
                      </div>
                    ) : null
                  )}
                </dl>

                <div className="mt-6">
                  <dt className="text-xs font-bold uppercase text-ink-400">Project Description</dt>
                  <dd className="mt-2 whitespace-pre-wrap rounded-xl bg-ink-50 p-4 text-sm text-ink-700">
                    {lead.message}
                  </dd>
                </div>
              </div>

              <div className="card flex flex-col gap-5 p-6">
                <div>
                  <h2 className="mb-3 text-sm font-bold">Update Status</h2>
                  <select
                    value={lead.status}
                    onChange={(e) => handleStatusChange(e.target.value)}
                    className="input"
                  >
                    {Object.entries(STATUS_LABELS).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <button onClick={handleDelete} className="btn-outline w-full !border-red-200 !text-red-600 hover:!border-red-400">
                  <Trash2 size={16} /> Delete Lead
                </button>
              </div>
            </div>
          )}
        </AsyncState>
      </div>
    </>
  );
}
