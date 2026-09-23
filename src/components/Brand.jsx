import React from 'react';

export default function Brand() {
  return <div className="p-5 border-b border-slate-100 flex items-center gap-3">
    <div className="w-9 h-9 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-800 shadow-sm">
      <span className="text-lg">✈</span>
    </div>
    <div><h1 className="font-bold text-base tracking-wide uppercase leading-tight text-slate-800">MALE UAV</h1><p className="text-xs text-slate-500 font-serif italic">Aero-Engine Digital Twin</p></div>
  </div>;
}
