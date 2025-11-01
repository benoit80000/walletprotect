'use client';
import React from 'react';
export type Row = { chain:string; type:'erc20'|'erc721'; token:string; token_symbol?:string; spender:string; allowance:string; tags:string[] };
export default function ApprovalsRadar({ rows, onRevoke, onLimit }:{ rows:Row[]; onRevoke:(r:Row)=>void; onLimit:(r:Row)=>void }){
  return (
    <div className="card">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
        <b>Approvals Radar</b>
        <div className="badge">Tri: risque élevé → faible</div>
      </div>
      <div style={{overflowX:'auto'}}>
        <table>
          <thead><tr><th>Chain</th><th>Token</th><th>Spender</th><th>Tags</th><th style={{textAlign:'right'}}>Actions</th></tr></thead>
          <tbody>
            {rows.map((r,i)=>(
              <tr key={i} style={{borderTop:'1px solid rgba(255,255,255,0.08)'}}>
                <td>{r.chain}</td>
                <td>{r.token_symbol||'TKN'}<div style={{opacity:.6, fontSize:12}}>{r.token}</div></td>
                <td style={{fontSize:12, opacity:.8}}>{r.spender}</td>
                <td>{r.tags.map(tag => <span key={tag} className="badge" style={{marginRight:6}}>{tag}</span>)}</td>
                <td style={{textAlign:'right'}}>
                  <button className="btn btn-outline" onClick={()=>onRevoke(r)} style={{marginRight:8}}>Révoquer</button>
                  <button className="btn" onClick={()=>onLimit(r)}>Limiter</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
