import React from 'react';

const items = [['overview-digital-twin', 'Overview / Digital Twin'], ['diagnostics-prediction', 'Diagnostics & Prediction'], ['trends-maintenance', 'Trends & Maintenance'], ['mission-reports', 'Mission & Replay']];
export default function Navigation({ activePage, onNavigate }) { return <nav aria-label="Dashboard Navigation" className="bg-white border-b-2 border-slate-300 shadow-sm px-6 py-2 sticky top-[57px] z-10"><div className="flex items-center gap-2 overflow-x-auto">{items.map(([id, label]) => <button key={id} className={`top-nav-link ${activePage === id ? 'active' : ''}`} onClick={() => onNavigate(id)}>{label}</button>)}</div></nav>; }
