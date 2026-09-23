import React, { useState } from 'react';

const presets = ['STANDARD', 'HIGH_ALTITUDE', 'HOT_WEATHER', 'ENDURANCE', 'RAPID_TRANSITION'];
const controls = [
  ['CHT', '°C', 182, 120, 230, 1], ['EGT', '°C', 640, 400, 780, 1],
  ['Coolant', '°C', 88.5, 0, 130, 0.1], ['Ambient', '°C', 25, -40, 55, 0.1],
  ['Oil Press', 'psi', 65.34, 0, 100, 0.1], ['Oil Temp', '°C', 94.72, 0, 150, 0.1],
  ['Fuel Flow', 'L/h', 18.2, 0, 40, 0.1], ['Fuel Press', 'bar', 4.6, 0, 10, 0.1],
  ['RPM', 'rpm', 2450, 1500, 5000, 10], ['Manifold', 'bar', 1.42, 0, 2.5, 0.01],
  ['Throttle', '%', 65, 0, 100, 1], ['Engine Load', '%', 74, 0, 100, 1],
  ['Vibration', 'mm/s', 1.2, 0, 5, 0.1], ['Alternator', 'V', 28.4, 0, 32, 0.1],
];

export default function ControlRail() {
  const [open, setOpen] = useState(false);
  const [environmentOpen, setEnvironmentOpen] = useState(false);
  const [environment, setEnvironment] = useState('STANDARD');
  const [throttle, setThrottle] = useState(65);
  const [values, setValues] = useState(Object.fromEntries(controls.map(([label, , value]) => [label, value])));
  const update = (label, value) => setValues((current) => ({ ...current, [label]: value }));
  return <div className="px-3 pt-2 pb-3 border-t border-slate-100" data-purpose="control-rail">
    <div className="px-1 pb-2 text-[9px] uppercase tracking-[0.16em] font-bold text-slate-400">Control Rail</div>
    <div className="grid grid-cols-2 gap-1.5">
      <button className="rail-control react-control-button" onClick={() => window.location.reload()}>↻ <span>Refresh</span></button>
      <label className="rail-control flex-col !items-stretch !gap-1 !py-2"><span>↕ Throttle <output className="font-mono text-[9px] float-right">{throttle}%</output></span><input type="range" min="0" max="100" value={throttle} onChange={(e) => setThrottle(e.target.value)} /></label>
      <button className={`rail-control col-span-2 react-control-button ${environmentOpen ? 'active' : ''}`} onClick={() => setEnvironmentOpen(!environmentOpen)}>◫ <span>Environment</span></button>
      {environmentOpen && <div className="col-span-2 mt-1 border border-slate-300 bg-white p-2 rounded-sm shadow-sm"><div className="text-[9px] uppercase tracking-wider font-bold text-slate-500 mb-1.5">Environmental Conditions</div><select className="w-full h-10 px-2 border-2 border-blue-500 bg-white text-[11px] font-semibold uppercase text-slate-700 rounded-sm" value={environment} onChange={(e) => setEnvironment(e.target.value)}>{presets.map((item) => <option key={item}>{item}</option>)}</select></div>}
      <button className={`rail-control col-span-2 react-control-button ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>≡ <span>Extra Controls</span></button>
      {open && <div className="col-span-2 mt-1 border border-slate-300 bg-white rounded-sm shadow-sm manual-console-panel p-3"><div className="param-console">{['THERMAL', 'LUBRICATION', 'FUEL', 'PERFORMANCE'].map((group) => <div className="param-group" key={group}><div className="param-group-header">⌄ <span>{group}</span></div><div className="param-group-body">{controls.filter(([label]) => (group === 'THERMAL' && ['CHT','EGT','Coolant','Ambient'].includes(label)) || (group === 'LUBRICATION' && ['Oil Press','Oil Temp'].includes(label)) || (group === 'FUEL' && ['Fuel Flow','Fuel Press'].includes(label)) || (group === 'PERFORMANCE' && ['RPM','Manifold','Throttle','Engine Load','Vibration','Alternator'].includes(label))).map(([label, unit, initial, min, max, step]) => <label className="param-row" key={label}><span className="param-label">{label}<span>{unit}</span></span><input className="param-slider" type="range" min={min} max={max} step={step} value={values[label]} onChange={(e) => update(label, e.target.value)} /><output className="param-value">{values[label]}</output></label>)}</div></div>)}</div></div>}
    </div>
  </div>;
}
