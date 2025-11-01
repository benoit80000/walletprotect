export default function HelpPage(){
  return (
    <main className="card">
      <h2 style={{fontSize:22, fontWeight:800, marginBottom:8}}>Aide & Documentation</h2>
      <p>Tout ce qu’il faut pour comprendre le scan, les révocations, les Spend Permissions, Guardian/Delay et la soumission privée.</p>
      <ul style={{marginTop:8}}>
        <li><a href="https://docs.base.org/identity/smart-wallet/" target="_blank">Base Smart Wallet — docs</a></li>
        <li><a href="https://onchainkit.xyz/" target="_blank">OnchainKit / MiniKit</a></li>
        <li><a href="https://docs.metamask.io/delegation-toolkit/" target="_blank">MetaMask Delegation Toolkit — 7702</a></li>
        <li><a href="https://permit2.org/" target="_blank">Permit2 (Uniswap)</a></li>
        <li><a href="https://docs.flashbots.net/flashbots-protect/rpc/quick-start" target="_blank">Flashbots Protect RPC</a></li>
        <li><a href="https://www.basescan.org/" target="_blank">BaseScan — tokens & adresses</a></li>
      </ul>
    </main>
  );
}
