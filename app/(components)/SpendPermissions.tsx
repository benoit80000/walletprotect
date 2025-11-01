'use client';
import React, { useState } from 'react';
type Row = { symbol:string; token:string; spender:string; allowance:string; period:string };
export default function SpendPermissions({ initial }:{ initial:Row[] }){
  const [rows, setRows] = useState<Row[]>(initial);
  function addRow(){ setRows(r => [...r, { symbol:'TKN', token:'0x...', spender:'0xSpender', allowance:'0', period:'86400' }]); }
  function apply(){ alert('Simulate setAllowance for '+rows.length+' entrées'); }
  function revoke(i:number){ alert('Simulate revoke for '+rows[i].token); }
  return (
    <div className="card">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
        <b>Tokens protégés (Spend Permissions)</b>
        <div style={{display:'flex', gap:8}}>
          <button className="btn btn-outline" onClick={()=>alert('Permit2 lockdown simulated')}>Révoquer Permit2</button>
          <button className="btn" onClick={addRow}>Ajouter</button>
        </div>
      </div>
      <div style={{display:'grid', gap:8}}>
        {rows.map((r,i)=>(
          <div key={i} style={{display:'grid', gridTemplateColumns:'100px 1fr 1fr 1fr 1fr 100px', gap:8}}>
            <div style={{alignSelf:'center', fontWeight:600}}>{r.symbol}</div>
            <input defaultValue={r.token} />
            <input defaultValue={r.spender} />
            <input defaultValue={r.allowance} />
            <input defaultValue={r.period} />
            <div style={{display:'flex', justifyContent:'end'}}><button className="btn btn-outline" onClick={()=>revoke(i)}>Revoke</button></div>
          </div>
        ))}
      </div>
      <div style={{display:'flex', justifyContent:'end', marginTop:12}}><button className="btn" onClick={apply}>Appliquer</button></div>
    </div>
  );
}
