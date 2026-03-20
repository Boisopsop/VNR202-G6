import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    // Always jump to top when changing route (avoid staying in middle of previous page)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div style={{ width: '100%' }}>
      <Header />
      <main className="page-content">
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
