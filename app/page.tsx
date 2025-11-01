'use client';
import React, { useState } from 'react';
import Header from './(components)/Header';
import ApprovalsRadar, { Row } from './(components)/ApprovalsRadar';

const MOCK_TOKENS = [
  { chain:'base', symbol:'WETH', address:'0x4200...0006', balance:'1.2456' },
  { chain:'base', symbol:'USDC', address:'0x8335...2913', balance:'2,450.00' },
  { chain:'base', symbol:'DAI', address:'0x50c5...B0Cb', balance:'5,010.89' },
];
const MOCK_APPROVALS: Row[] = [
  { chain:'base', type:'erc20', token:'0x8335...2913', token_symbol:'USDC', spender:'0xE592...1564', allowance:'infinite', tags:['infinite'] },
  { chain:'base', type:'erc20', token:'0x4200...0006', token_symbol:'WETH', spender:'0xdead...beef', allowance:'1000', tags:['blocklist'] },
  { chain:'base', type:'erc721', token:'0xABCD...1234', token_symbol:'NFT', spender:'0x1111...9999', allowance:'all', tags:['approvalForAll'] },
];

export default function Page(){
  const [nav, setNav] = useState<'scan'|'protect'|'help'>('scan');
  function onRevoke(r: Row){ alert('Révoquer → '+r.token); }
  function onLimit(r: Row){ setNav('protect'); }
  return (
    <>
      <Header onNav={setNav} current={nav} cycleTheme={()=>{}} />
      <div style={{display: nav==='scan'?'block':'none'}}>
        <section style={{textAlign:'center', marginBottom:16}}>
          <h1 style={{fontSize:28, fontWeight:800}}>Scanne ton wallet & sécurise‑le en 3 étapes</h1>
          <p style={{opacity:.8}}>Analyse multi-chaînes, recommandations, application en 1 clic.</p>
          <div style={{marginTop:12, display:'flex', justifyContent:'center', gap:8}}>
            <input placeholder="0x… adresse" style={{minWidth:360}} />
            <button className="btn">Scanner</button>
          </div>
        </section>
        <section style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          <div className="card">
            <b>Assets (Base)</b>
            <ul style={{marginTop:8}}>
              {MOCK_TOKENS.map((t,i)=>(<li key={i}>{t.symbol} — {t.balance}</li>))}
            </ul>
          </div>
          <ApprovalsRadar rows={MOCK_APPROVALS} onRevoke={onRevoke} onLimit={onLimit} />
        </section>
        <div className="card" style={{marginTop:12, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div className="badge">3 risques élevés détectés</div>
          <button className="btn" onClick={()=>setNav('protect')}>Créer un plan de protections</button>
        </div>
      </div>

      {nav==='protect' && <iframe src="/base" style={{border:'none', width:'100%', height:'70dvh', borderRadius:12, background:'transparent'}} />}
      {nav==='help' && <iframe src="/help" style={{border:'none', width:'100%', height:'70dvh', borderRadius:12, background:'transparent'}} />}
    </>
  );
}
