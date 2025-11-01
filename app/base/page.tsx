'use client';
import React, { useState } from 'react';
import PresetsPanel from '../(components)/PresetsPanel';
import SpendPermissions from '../(components)/SpendPermissions';
import RiskBanner from '../(components)/RiskBanner';
import ThemeToggle from '../(components)/ThemeToggle';

export default function BasePage(){
  const [protect, setProtect] = useState(true);
  const [demo, setDemo] = useState(false);
  const initial = [
    { symbol:'USDC', token:'0x8335...2913', spender:'0xy0urApp', allowance:'50000000', period:'86400' },
    { symbol:'WETH', token:'0x4200...0006', spender:'0xy0urApp', allowance:'200000000000000000', period:'86400' },
  ];
  function applyPreset(p:string){ alert('Preset '+p+' appliqué'); }
  return (
    <main>
      <div style={{display:'flex', gap:8, alignItems:'center', marginBottom:12}}>
        <span className="badge">Security Score: 86</span>
        <button onClick={()=>setProtect(!protect)} className="btn btn-outline">{protect?'Protect ON (Private RPC)':'Protect OFF'}</button>
        <button onClick={()=>setDemo(!demo)} className="btn btn-outline">{demo?'Mode Démo ON':'Mode Démo OFF'}</button>
        <ThemeToggle />
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
        <PresetsPanel onApply={applyPreset as any} />
        <div className="card">
          <b>Guardian & Delay</b>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginTop:8}}>
            <input placeholder="Guardian 0x…" />
            <input placeholder="Delay (sec)" />
          </div>
          <div style={{marginTop:8}}><button className="btn">Appliquer</button></div>
          <div style={{fontSize:12, opacity:.7, marginTop:6}}>Disponible dès publication officielle des modules Base.</div>
        </div>
      </div>
      <div style={{marginTop:12}}><SpendPermissions initial={initial as any} /></div>
      <div style={{marginTop:12}}><RiskBanner /></div>
      <div style={{display:'flex', justifyContent:'end', marginTop:12}}><button className="btn">Exécuter avec Protect RPC</button></div>
    </main>
  );
}
