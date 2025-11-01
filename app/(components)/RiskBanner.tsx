'use client';
import React from 'react';
export default function RiskBanner(){ 
  return (
    <div className="card" style={{border:'1px solid rgba(255,255,255,0.20)'}}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{fontWeight:600}}>Analyse de risque</div>
        <div>Score: <b style={{color:'#ff7070'}}>78/100</b></div>
      </div>
      <ul style={{fontSize:14, opacity:.9, marginTop:8}}>
        <li>Autorisation illimitée détectée (spender non vérifié)</li>
        <li>Sortie potentielle de fonds natifs &gt; 0.2 ETH</li>
      </ul>
      <div style={{fontSize:12, opacity:.7, marginTop:6}}>Conseil : simuler puis envoyer via Protect RPC.</div>
    </div>
  ); 
}
