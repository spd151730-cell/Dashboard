import React, { useEffect, useMemo, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import TopBar from './components/TopBar.jsx';
import Navigation from './components/Navigation.jsx';
import { overview_digital_twin } from './pages/overview-digital-twin.js';
import { diagnostics_prediction } from './pages/diagnostics-prediction.js';
import { trends_maintenance } from './pages/trends-maintenance.js';
import { mission_reports } from './pages/mission-reports.js';

const pages = { 'overview-digital-twin': overview_digital_twin, 'diagnostics-prediction': diagnostics_prediction, 'trends-maintenance': trends_maintenance, 'mission-reports': mission_reports };

export default function App() {
  const [activePage, setActivePage] = useState(() => location.hash.slice(1) || 'overview-digital-twin');
  const [mode, setMode] = useState('live');
  const pageMarkup = useMemo(() => pages[activePage] || pages['overview-digital-twin'], [activePage]);
  const navigate = (page) => { setActivePage(page); history.replaceState(null, '', `#${page}`); window.scrollTo(0, 0); };
  useEffect(() => {
    window.setActiveMetric = (metric) => {
      const label = document.getElementById('current-metric-label');
      if (label) label.textContent = `${String(metric).toUpperCase()} (LIVE)`;
    };
    return () => { delete window.setActiveMetric; };
  }, [activePage]);
  return <div className="flex min-h-screen bg-[#f8fafc] text-slate-900"><Sidebar /><main id="workstation-main" className="flex-1 min-w-0 h-screen min-h-0 flex flex-col overflow-hidden"><TopBar mode={mode} onModeChange={setMode} /><Navigation activePage={activePage} onNavigate={navigate} /><div className="react-page-mount" dangerouslySetInnerHTML={{ __html: pageMarkup }} /></main></div>;
}
