# Hardening GitHub & Vercel

## GitHub
- 2FA obligatoire, membres et bots.
- Branch protection sur `main` : PR review, status checks, signed commits (option).
- Dependabot + gitleaks en CI (secret scanning).
- Restreindre GitHub Actions (permissions minimalistes).

## Vercel
- Restreindre l’accès du GitHub App au seul repo.
- Variables d’environnement uniquement via le dashboard (jamais dans le code).
- Désactiver auto-deploy depuis forks. Rôles minimaux (Admin ≤2).
- Alertes déploiements & audit logs.
