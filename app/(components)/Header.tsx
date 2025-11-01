'use client';
import React from 'react';

export default function Header({ onNav, current, cycleTheme }:{ onNav: (id:'scan'|'protect'|'help')=>void; current:'scan'|'protect'|'help'; cycleTheme:()=>void }){
  return (
    <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16}}>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <img src="/logo.png" alt="Wallet Protect" style={{width:48, height:48, borderRadius:8}}/>
        <div style={{fontWeight:800, fontSize:18}}>Wallet Protect</div>
      </div>
      <nav style={{display:'flex', gap:8}}>
        <button onClick={()=>onNav('scan')} className="btn btn-outline">Scan</button>
        <button onClick={()=>onNav('protect')} className="btn btn-outline">Protections</button>
        <button onClick={()=>onNav('help')} className="btn btn-outline">Aide</button>
        <button onClick={cycleTheme} className="btn btn-outline">Thème</button>
      </nav>
    </header>
  );
}
