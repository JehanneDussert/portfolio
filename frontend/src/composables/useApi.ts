import type { ContactPayload, ContactResponse, AnalyticsPayload } from '@/types'

const BASE = import.meta.env.VITE_API_URL ?? '/api'

export function useApi() {
  async function submitContact(payload: ContactPayload): Promise<ContactResponse> {
    const res = await fetch(`${BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.detail ?? 'Erreur réseau')
    }
    return res.json()
  }

  async function trackView(payload: AnalyticsPayload): Promise<void> {
    await fetch(`${BASE}/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, user_agent: navigator.userAgent }),
    }).catch(() => {}) // fire-and-forget, silent fail
  }

  return { submitContact, trackView }
}
