'use client';
import React, { useEffect, useState } from 'react';
export default function ThemeToggle(){
  const [theme, setTheme] = useState<'dark'|'light'|'blue'>('dark');
  useEffect(()=>{
    const saved = typeof window!=='undefined' ? localStorage.getItem('ws-theme') : null;
    if (saved==='dark' || saved==='light' || saved==='blue'){ setTheme(saved); document.documentElement.className = saved; }
  },[]);
  useEffect(()=>{ if (typeof window!=='undefined'){ localStorage.setItem('ws-theme', theme); document.documentElement.className = theme; }},[theme]);
  function cycle(){ setTheme(t => t==='dark'?'light': t==='light'?'blue':'dark'); }
  return <button className="btn btn-outline" onClick={cycle}>Thème: {theme}</button>;
}
