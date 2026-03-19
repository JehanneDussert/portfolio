import type { Experience, Project } from '@/types'

export function usePortfolioData() {
  const experiences: Experience[] = [
    {
      period: '2024 – Present',
      org: 'DGFiP',
      role: 'Tech Lead – Generative AI & AI Governance Coordinator',
      bullets: [
        'Authored national AI usage doctrine deployed across 11 directorates, covering 50+ evaluated use cases — 3-level supervision model, risk taxonomy, tool and data tiers.',
        'Coordinated 40+ cross-functional contributors (legal, security, compliance, engineering) to produce governance frameworks that hold in production.',
        'Deployed internal GenAI assistants serving 95,000+ civil servants; integrated open-source models and designed prompt systems for operational workflows.',
        'Built monitoring and alerting stack (Grafana/Prometheus): uptime, latency, TTFT, errors, user signals.',
        'Benchmarked models, set acceptance thresholds with data scientists, ran A/B tests and tuning cycles.',
        'Represent France in EU Fiscalis working group on GenAI integration.',
      ],
      impact: 'Standardised safe GenAI rollout across 11 divisions, directly influencing executive deployment decisions.',
    },
    {
      period: '2024 – Present',
      org: 'EU / Council of Europe',
      role: 'International & Advisory Roles',
      bullets: [
        'EU Horizon (expert evaluator, since 2025): assessed AI proposals (risk, feasibility, impact).',
        'Council of Europe – AI Advisory Board (appointed member, 1 of 5, 2024): co-authored AI governance report on justice systems.',
      ],
      impact: 'Shaped European discussions on safe generative AI deployment in public sector environments.',
    },
    {
      period: '2023 – 2024',
      org: 'DINUM – Albert',
      role: 'Generative AI Engineer',
      bullets: [
        'Led frontend implementation of AI-assisted workflows.',
        'Proposed product features based on multi-ministry feedback.',
        'Presented tool capabilities and limitations in interministerial settings.',
      ],
      impact: 'Improved adoption readiness of France\'s interministerial GenAI platform.',
      githubUrl: 'https://github.com/JehanneDussert/albert-frontend',
    },
    {
      period: '2022 – 2023',
      org: 'DINUM & Ministry of Interior',
      role: 'Government Innovation Fellow  – Unreal Engine C++ Developer',
      bullets: [
        'Developed synthetic data generator in high-security institutional context.',
        'Led cross-functional team (2 developers, 1 designer).',
        'Drafted governance protocol for the project.',
      ],
      impact: 'Delivered a data generation tool for public administration needs.',
      githubUrl: 'https://github.com/twin-city/unreal-project',
    },
  ]

  const project: Project = {
    title: 'LLM Governance Monitoring Platform',
    description:
      'Self-hosted LLMOps platform for observability and regulatory governance of language models in production. Configurable LLM judge mapped to the AI Act, ANSSI PA-102, and OWASP LLM Top 10.',
    stack: [
      'FastAPI', 'Redis pub/sub', 'LiteLLM', 'Langfuse',
      'Prometheus', 'Grafana', 'Ollama', 'Vue 3', 'TypeScript', 'Docker Compose',
    ],
    highlights: [
      'Governance-driven model routing — use case × criteria matrix selects the optimal SLM automatically',
      'Local SLMs (qwen2.5:1.5b, gemma3:1b, llama3.2:3b, deepseek-r1:1.5b)',
      '11 configurable regulatory evaluation criteria',
      'Vue 3 frontend with ECharts and SSE streaming',
    ],
    githubUrl: 'https://github.com/JehanneDussert/llm_governance_monitoring',
  }

  const skills = {
    governance: ['Governance authoring', 'Risk taxonomy', 'AI Act', 'ANSSI PA-102', 'GDPR', 'Cross-functional coordination'],
    deployment: ['LLM API integration', 'Model benchmarking', 'Prompt engineering', 'A/B testing', 'TTFT / latency'],
    observability: ['Grafana', 'Prometheus', 'Loki', 'Alerting', 'Metrics → Governance'],
    engineering: ['Python', 'FastAPI', 'PostgreSQL', 'Vue.js', 'TypeScript', 'Docker', 'Redis'],
  }

  return { experiences, project, skills }
}