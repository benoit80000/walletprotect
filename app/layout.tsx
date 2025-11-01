import './globals.css';
import React from 'react';
export const metadata={title:'Wallet Protect',description:'Scan, protect and manage your wallet on Base.'};
const themeInit=`(function(){try{var t=localStorage.getItem('ws-theme')||'dark';document.documentElement.className=t;}catch(e){document.documentElement.className='dark';}})();`;
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang="en"><head><script dangerouslySetInnerHTML={{__html:themeInit}}/></head><body><div className="container">{children}</div></body></html>);}