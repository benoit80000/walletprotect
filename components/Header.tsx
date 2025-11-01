import React from 'react';

export default function Header({ onNav = (s: string) => {}, current = 'scan', cycleTheme = ()=>{} } : { onNav?: (s:string)=>void; current?:string; cycleTheme?:()=>void }) {
  return (
    <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16}}>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <img src="/logo.png" alt="Wallet Protect" style={{width:48, height:48, borderRadius:8}}/>
        <div style={{fontWeight:700}}>Wallet Protect</div>
      </div>
      <nav style={{display:'flex', gap:8}}>
        <button onClick={()=>onNav('scan')} style={{background:'transparent', border:'none', color:'white'}}>Scan</button>
        <button onClick={()=>onNav('protect')} style={{background:'transparent', border:'none', color:'white'}}>Protections</button>
        <button onClick={()=>onNav('help')} style={{background:'transparent', border:'none', color:'white'}}>Aide</button>
        <button onClick={cycleTheme} style={{background:'transparent', border:'1px solid rgba(255,255,255,0.06)', color:'white', padding:'6px 10px', borderRadius:8}}>Thème</button>
      </nav>
    </header>
  );
}
