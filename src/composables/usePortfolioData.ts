import type { Experience, Project } from '@/types'

export function usePortfolioData() {
  const experiences: Experience[] = [
    {
      period: '2024 – Present',
      org: 'French Tax Administration (DGFiP)',
      role: 'Tech Lead – Generative AI & AI Governance Coordinator',
      bullets: [
        'Authored national AI governance deployed across 11 directorates, covering 50+ evaluated use cases — 3-level supervision model, risk taxonomy, tool and data tiers.',
        'Coordinated 40+ cross-functional contributors (legal, security, compliance, engineering) to produce governance frameworks that hold in production.',
        'Deployed internal GenAI assistants serving 95,000+ civil servants; integrated open-source models and designed prompt systems for operational workflows.',
        'Built monitoring and alerting stack (Grafana/Prometheus): uptime, latency, TTFT, errors, user signals.',
        'Benchmarked models, set acceptance thresholds with data scientists, ran A/B tests and tuning cycles.',
        'Represent France in EU Fiscalis working group on GenAI integration.',
      ],
      impact: 'Standardised safe GenAI rollout across 11 divisions, directly influencing executive deployment decisions.',
    },
    {
      period: '2025 – Present',
      org: 'European Commission',
      role: 'EU Horizon — Expert Evaluator',
      bullets: [
        'Assessed AI research proposals submitted to the European Commission\'s Horizon Europe programme.',
        'Evaluation criteria: technical feasibility, risk assessment, societal impact, and regulatory alignment.',
        'Selected from a pool of independent experts for proposals in the field of trustworthy AI.',
      ],
      impact: 'Contributing to the quality and safety standards of publicly funded AI research across Europe.',
    },
    {
      period: '2024',
      org: 'Council of Europe',
      role: 'AI Advisory Board — Appointed Member (1 of 5)',
      bullets: [
        'One of five experts appointed to the CEPEJ AI Advisory Board on AI in justice systems.',
        'Co-authored the 1st AIAB Report on the Use of Artificial Intelligence in the Judiciary.',
        'Addressed transparency, accountability, and human oversight requirements for AI tools used in courts across member states.',
      ],
      impact: 'Shaped Council of Europe guidance on AI governance in judicial contexts.',
    },
    {
      period: '2023 – 2024',
      org: 'Interministerial Digital Directorate (DINUM)',
      role: 'Generative AI Product Engineer',
      bullets: [
        'Led frontend implementation of AI-assisted workflows.',
        'Proposed product features based on multi-ministry feedback.',
        'Presented tool capabilities and limitations in interministerial settings.',
      ],
      impact: 'Improved adoption readiness of the French government\'s shared GenAI platform (Albert), deployed across ministries.',
    },
    {
      period: '2022 – 2023',
      org: 'Interministerial Digital Directorate (DINUM) & Ministry of Interior',
      role: 'Government Innovation Fellow  – Unreal Engine C++ Developer',
      bullets: [
        'Developed synthetic data generator in high-security institutional context.',
        'Led cross-functional team (2 developers, 1 designer).',
        'Designed governance framework for synthetic data generation: use cases, co-decision methodology, and data extraction protocol for the Paris digital twin (3D semantic segmentation).',
      ],
      impact: 'Delivered a data generation tool for public administration needs.',
      githubUrl: 'https://github.com/twin-city/unreal-project',
    },
  ]

  const project: Project = {
    title: 'LLM Governance Monitoring Platform',
    description:
      'How do you justify a model choice six months after go-live? govllm is my attempt to answer that — a self-hosted governance monitoring stack built for regulated environments. Configurable LLM judge mapped to the AI Act, ANSSI PA-102, and OWASP LLM Top 10.',
    stack: [
      'FastAPI', 'Redis pub/sub', 'LiteLLM', 'Langfuse',
      'Prometheus', 'Grafana', 'Ollama', 'Vue 3', 'TypeScript', 'Docker Compose',
    ],
    highlights: [
      'Governance-driven model routing — each use case resolves to a model via its configured governance profile',
      '4 built-in governance profiles: AI Act Compliance, Data Protection, Security, Accessibility & Inclusion',
      '11 configurable evaluation criteria with per-profile weights',
      'Local SLMs via Ollama — data sovereignty by design',
      'Vue 3 frontend with ECharts and SSE streaming',
    ],
    githubUrl: 'https://github.com/JehanneDussert/govllm',
  }

  const skills = {
    governance: ['Governance authoring', 'Risk taxonomy', 'AI Act', 'ANSSI PA-102', 'GDPR', 'Cross-functional coordination'],
    deployment: ['LLM API integration', 'Model benchmarking', 'Prompt engineering', 'A/B testing', 'TTFT / latency'],
    observability: ['Grafana', 'Prometheus', 'Loki', 'Alerting', 'Metrics → governance'],
    engineering: ['Python', 'FastAPI', 'PostgreSQL', 'Vue.js', 'TypeScript', 'Docker', 'Redis'],
  }

  return { experiences, project, skills }
}