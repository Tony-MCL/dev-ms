import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WatermarkLayer from "./components/WatermarkLayer";

import ProgressPage from "./pages/ProgressPage";
import ProgressOverviewPage from "./pages/ProgressOverviewPage";
import ProgressPricingPage from "./pages/ProgressPricingPage";
import ProgressCheckoutPage from "./pages/ProgressCheckoutPage";
import ProgressAppPage from "./pages/ProgressAppPage";

import ProgressFremdriftsplanPage from "./pages/ProgressFremdriftsplanPage";
import ProgressFremdriftsplanBrukPage from "./pages/ProgressFremdriftsplanBrukPage";

const ScrollToTop: React.FC = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="app-shell">
      <WatermarkLayer />

      <Header />

      {/* ✅ MÅ ligge inne i Router-kontekst, og over Routes */}
      <ScrollToTop />

      <div className="app-content">
        <Routes>
          {/* Manage System: Progress-universet */}
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/progress/oversikt" element={<ProgressOverviewPage />} />
          <Route path="/progress/priser" element={<ProgressPricingPage />} />

          {/* Nye SEO-/læringssider */}
          <Route path="/progress/fremdriftsplan" element={<ProgressFremdriftsplanPage />} />
          <Route path="/progress/fremdriftsplan-bruk" element={<ProgressFremdriftsplanBrukPage />} />

          <Route path="/progress/app" element={<ProgressAppPage />} />
          <Route path="/progress/checkout" element={<ProgressCheckoutPage />} />

          {/* Alt annet sendes til /progress */}
          <Route path="/" element={<Navigate to="/progress" replace />} />
          <Route path="*" element={<Navigate to="/progress" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
