import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';
import AdminLayout from './components/layout/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import LoadingSpinner from './components/common/LoadingSpinner';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/services/ServiceDetail';
import Industries from './pages/Industries';
import IndustryDetail from './pages/industries/IndustryDetail';
import Technologies from './pages/Technologies';
import Portfolio from './pages/Portfolio';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';

// Admin panel is code-split out of the main marketing site bundle.
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminLeadDetail = lazy(() => import('./pages/admin/AdminLeadDetail'));

function AdminFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoadingSpinner label="Loading admin panel…" />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<CaseStudyDetail />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route
        path="/admin/login"
        element={
          <Suspense fallback={<AdminFallback />}>
            <AdminLogin />
          </Suspense>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route
            path="/admin/dashboard"
            element={
              <Suspense fallback={<AdminFallback />}>
                <AdminDashboard />
              </Suspense>
            }
          />
          <Route
            path="/admin/leads/:id"
            element={
              <Suspense fallback={<AdminFallback />}>
                <AdminLeadDetail />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}
