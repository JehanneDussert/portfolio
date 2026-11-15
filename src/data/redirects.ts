/**
 * Old URLs kept alive with permanent redirects. vercel.json mirrors this list
 * (301 on the server); the router uses it for client-side navigation and dev.
 * /underlaid and /govllm were French pages and are now the English ones: same slug, no redirect.
 */
export const legacyRedirects: { from: string; to: string }[] = [
  // French pages, served at the root until English became the default
  { from: '/parcours', to: '/fr/parcours' },
  { from: '/interventions', to: '/fr/interventions' },
  // Commitments page, removed
  { from: '/engagements', to: '/fr' },
  { from: '/en/commitments', to: '/' },
  { from: '/commitments', to: '/' },
  // English pages, served under /en until English became the default
  { from: '/en', to: '/' },
  { from: '/en/underlaid', to: '/underlaid' },
  { from: '/en/govllm', to: '/govllm' },
  { from: '/en/path', to: '/path' },
  { from: '/en/talks', to: '/talks' },
]
