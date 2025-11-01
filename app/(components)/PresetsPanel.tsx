'use client';
import React from 'react';
export default function PresetsPanel({ onApply }:{ onApply:(preset:'hodl'|'farmer'|'power'|'nft')=>void }){
  const items = [
    { key:'hodl', label:'HODL Max', desc:'Verrouille (0)' },
    { key:'farmer', label:'Farmer prudent', desc:'Limites faibles + whitelist' },
    { key:'power', label:'Power User', desc:'Limites généreuses' },
    { key:'nft', label:'NFT Vault', desc:'Whitelist stricte' },
  ] as const;
  return (
    <div className="card">
      <b>Presets</b>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginTop:8}}>
        {items.map((it)=>(
          <div key={it.key} style={{border:'1px solid rgba(255,255,255,0.10)', borderRadius:12, padding:12}}>
            <div style={{fontWeight:600}}>{it.label}</div>
            <div style={{opacity:.7, fontSize:12, margin:'6px 0 10px'}}>{it.desc}</div>
            <button className="btn" onClick={()=>onApply(it.key as any)}>Appliquer</button>
          </div>
        ))}
      </div>
    </div>
  );
}
