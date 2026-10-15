import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import QuickEnquiryWidget from '../common/QuickEnquiryWidget';
import StickyCta from '../common/StickyCta';
import ScrollToTop from '../common/ScrollToTop';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <QuickEnquiryWidget />
      <StickyCta />
    </div>
  );
}
