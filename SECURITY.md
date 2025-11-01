# Sécurité — Wallet Protect

## Signalétique
- Non-custodial. Aucune clé privée stockée par l’app.
- Protect RPC recommandé pour toutes opérations sensibles.
- Simulation systématique avant signature.

## Bonnes pratiques
- Ne jamais commit de secrets. Utiliser `.env.local` et les variables Vercel.
- Branch protection activée (revue, checks CI, dépendances).
- Pas de clés de signature en CI (pas de seed/privkey).
- Multisig pour les fonds de production.

## Réponse à incident
1. Révoquer/rotater secrets GitHub & Vercel.
2. Rollback vers un commit sain & redeployer.
3. Si fuite de clé : déplacer fonds via multisig / procédure hardware.
4. Audit des logs GitHub/Vercel, post-mortem, correctifs.
