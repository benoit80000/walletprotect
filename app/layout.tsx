import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Wallet Protect',
  description: 'Scan, protect and manage your wallet on Base.',
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="fr" className="dark">
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
