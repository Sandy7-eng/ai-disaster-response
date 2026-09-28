import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import ReportIncidentPage from './pages/ReportIncidentPage';
import ResponderDashboardPage from './pages/ResponderDashboardPage';
import DisasterMapPage from './pages/DisasterMapPage';
import IncidentDetailsPage from './pages/IncidentDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="report" element={<ReportIncidentPage />} />
          <Route path="dashboard" element={<ResponderDashboardPage />} />
          <Route path="map" element={<DisasterMapPage />} />
          <Route path="incident/:id" element={<IncidentDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
