import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, LogOut, ExternalLink } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Logo from '../common/Logo';

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-ink-50">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-ink-100 bg-white p-6 sm:flex">
        <div className="mb-10">
          <Logo size={34} />
          <p className="mt-1 pl-[42px] text-xs font-semibold uppercase tracking-wide text-ink-400">Admin</p>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 rounded-lg bg-primary-50 px-3 py-2.5 text-sm font-semibold text-primary-700"
          >
            <LayoutDashboard size={18} />
            Leads Dashboard
          </Link>
          <a
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-600 hover:bg-ink-50"
          >
            <ExternalLink size={18} />
            View Website
          </a>
        </nav>

        <div className="mt-auto border-t border-ink-100 pt-4">
          <p className="mb-3 truncate text-xs text-ink-400">{user?.email}</p>
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-ink-100 bg-white px-6 py-4 sm:hidden">
          <Logo size={30} />
          <button onClick={handleLogout} className="text-sm font-semibold text-red-600">
            Logout
          </button>
        </header>
        <main className="p-6 sm:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
