export interface Experience {
  period: string
  org: string
  role: string
  bullets: string[]
  impact: string
  githubUrl?: string
}

export interface Project {
  title: string
  description: string
  stack: string[]
  highlights: string[]
  githubUrl?: string
}

export interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactResponse {
  success: boolean
  message: string
}

export interface AnalyticsPayload {
  page: string
  referrer?: string
}