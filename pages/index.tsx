import React, { useState } from 'react';
import Header from '../components/Header';

export default function Home() {
  const [page, setPage] = useState<'scan'|'protect'|'help'>('scan');
  const [theme, setTheme] = useState('dark');

  function cycleTheme(){ setTheme(t => t==='dark'?'light': t==='light'?'blue':'dark'); }

  return (
    <div className="container" data-theme={theme}>
      <Header onNav={(p)=>setPage(p as any)} current={page} cycleTheme={cycleTheme} />
      {page === 'scan' && <MainScan />}
      {page === 'protect' && <Protections />}
      {page === 'help' && <Help />}
    </div>
  );
}

function MainScan(){
  return (
    <div style={{display:'grid', gap:16}}>
      <section style={{textAlign:'center'}}>
        <h1 style={{fontSize:28}}>Scanne ton wallet & sécurise-le</h1>
        <p style={{opacity:0.8}}>Analyse multi-chaînes, recommandations, application en 1 clic.</p>
        <div style={{marginTop:12, display:'flex', justifyContent:'center', gap:8}}>
          <input placeholder="0x... adresse" style={{minWidth:360}} />
          <button className="btn">Scanner</button>
        </div>
      </section>

      <section style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
        <div className="card">
          <h3>Assets (Base)</h3>
          <ul>
            <li>WETH — 1.2456</li>
            <li>USDC — 2450</li>
            <li>DAI — 5010</li>
          </ul>
        </div>
        <div className="card">
          <h3>Approvals Radar</h3>
          <div style={{display:'flex', flexDirection:'column', gap:8}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:8, borderRadius:8, background:'rgba(255,255,255,0.02)'}}>
              <div>
                <div style={{fontWeight:600}}>USDC → Uniswap Router</div>
                <div style={{opacity:0.7, fontSize:12}}>0xE592...1564</div>
              </div>
              <div style={{display:'flex', gap:8}}>
                <button className="btn" style={{background:'transparent', border:'1px solid rgba(255,255,255,0.06)'}}>Révoquer</button>
                <button className="btn">Limiter</button>
              </div>
            </div>
            <div style={{opacity:0.7, fontSize:12}}>3 risques élevés détectés</div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Protections(){
  return (
    <div style={{display:'grid', gap:12}}>
      <div className="card">
        <h2>Protections — Base</h2>
        <div style={{display:'flex', gap:8, marginTop:8}}>
          <button className="btn">HODL Max</button>
          <button className="btn">Farmer prudent</button>
          <button className="btn">Power User</button>
        </div>
      </div>

      <div className="card">
        <h3>Spend Permissions</h3>
        <div style={{display:'grid', gap:8, marginTop:8}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:8}}>
            <input defaultValue="USDC" />
            <input defaultValue="0x8335...2913" />
            <input defaultValue="0xYourSpender" />
            <input defaultValue="50000000" />
          </div>
          <div style={{display:'flex', justifyContent:'end'}}><button className="btn">Appliquer</button></div>
        </div>
      </div>

      <div className="card">
        <h3>Simulation & Analyse</h3>
        <p style={{opacity:0.8}}>Simuler avant l'envoi. Protect RPC activé par défaut pour réduire front-run.</p>
        <div style={{display:'flex', gap:8}}><button className="btn">Simuler</button><button className="btn">Exécuter (Protect)</button></div>
      </div>
    </div>
  );
}

function Help(){
  return (
    <div className="card">
      <h2>Aide & Documentation</h2>
      <p>Liens utiles et explications sur les fonctions.</p>
      <ul>
        <li>Base Smart Wallet — docs</li>
        <li>MetaMask Delegation Toolkit — 7702</li>
        <li>Permit2</li>
        <li>Flashbots Protect</li>
      </ul>
    </div>
  );
}
