import type { Content } from './types'

const en: Content = {
  lang: 'en',
  ogLocale: 'en_GB',
  ui: {
    skip: 'Skip to content',
    nav: 'Main',
    newTab: '(opens in a new tab)',
    themeBefore: 'Switch to ',
    themeAfter: ' theme',
    light: 'Light',
    dark: 'Dark',
    switchLang: { label: 'FR', name: 'Version française' },
    problem: 'Problem',
    approach: 'Approach',
    also: 'Also',
    play: 'Play:',
    education: 'Education',
  },
  home: {
    title: 'Jehanne Dussert — AI Governance Lead',
    description:
      'Engineer and jurist, AI Governance Lead at AXA Group Operations. I turn legal rules into code that checks AI systems while they run.',
  },
  person: {
    name: 'Jehanne Dussert',
    intro:
      'Engineer and jurist, AI Governance Lead at AXA Group Operations. I turn legal rules into code that checks AI systems while they run.',
    links: [
      { label: 'Email', href: 'mailto:research.jehannedussert@gmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jehanne-dussert' },
      { label: 'GitHub', href: 'https://github.com/JehanneDussert' },
    ],
  },
  sections: {
    underlaid: {
      label: 'Underlaid',
      short: 'Underlaid',
      title: 'Underlaid — Jehanne Dussert',
      description:
        'In half of Parisian neighbourhoods, reaching an accessible stop takes 17 minutes in a wheelchair, against 3 without constraint.',
    },
    govllm: {
      label: 'GovLLM',
      short: 'GovLLM',
      title: 'GovLLM — Jehanne Dussert',
      description:
        'Legal requirements become rules a machine can check. An AI system declared compliant once, at launch, keeps changing; GovLLM checks every response against those rules, while it runs.',
    },
    path: {
      label: 'Path',
      short: 'Path',
      title: 'Path — Jehanne Dussert',
      description:
        'AI Governance Lead at AXA Group Operations and Expert Evaluator for the European Commission. Previously DGFiP, DINUM and the Council of Europe (CEPEJ). École 42 and University of Strasbourg.',
    },
    talks: {
      label: 'Talks & writing',
      short: 'Talks',
      title: 'Talks & writing — Jehanne Dussert',
      description:
        'Contributions, talks and writing on AI governance: United Nations, European Commission, Council of Europe, Hacktivate AI, Parlez-moi d’IA.',
    },
    commitments: {
      label: 'Commitments',
      short: 'Commitments',
      title: 'Commitments — Jehanne Dussert',
      description: 'Feminism, child protection, algorithmic bias, endometriosis.',
    },
  },
  underlaid: {
    tag: 'Independent project · 2026',
    title: 'Underlaid',
    figure: { value: 17, unit: 'min', vs: 'vs 3' },
    lede: 'In half of Parisian neighbourhoods, reaching an accessible stop takes 17 minutes in a wheelchair, against 3 without constraint.',
    problem:
      'Data on heat, pollution, housing and access to care in Paris is public but scattered, and nothing says how long everyday places take to reach in a wheelchair.',
    approach:
      'I brought these sources together for the 2,752 neighbourhoods of Paris and its inner suburbs, computed travel times for three ways of getting around, and wrote my hypotheses down before running any calculation.',
    also: [
      { key: '62%', text: 'of highly exposed neighbourhoods in Seine-Saint-Denis are among those with the fewest resources' },
      { key: '1 of 3', text: 'hypotheses held: public services are farther from the neighbourhoods with the most resources' },
    ],
    buttons: [
      { label: 'Open the map', href: 'https://underlaid.fr', primary: true },
      { label: 'Code', href: 'https://github.com/JehanneDussert/underlaid' },
      { label: 'Cite', href: 'https://doi.org/10.5281/zenodo.23083312' },
    ],
    mapAlt:
      'Map of the 2,752 neighbourhoods of Paris and its inner suburbs, shaded by how many exposures each one cumulates',
  },
  govllm: {
    tag: 'Open-source research · 2026',
    title: 'GovLLM',
    headline: 'Policy-as-code',
    lede: 'Legal requirements become rules a machine can check. An AI system declared compliant once, at launch, keeps changing; GovLLM checks every response against those rules, while it runs.',
    problem:
      'How do you justify a model choice six months after go-live? One-off benchmarks cannot answer, and the AI models used as judges have biases of their own.',
    approach:
      'Governance by design: each use case gets a profile written as code, up to 14 criteria mapped to the AI Act, GDPR and ANSSI. Small local models judge every output against it, and each request goes to the model that meets its rules.',
    also: [
      { key: 'OECD.AI', text: 'listed in the Catalogue of Tools and Metrics, June 2026' },
      { key: 'arXiv', text: 'preprint “Who judges the judges?”, May 2026' },
      { key: '30 ★', text: 'on GitHub, and discussed on Parlez-moi d’IA n°106' },
    ],
    buttons: [
      { label: 'Code', href: 'https://github.com/JehanneDussert/govllm', primary: true },
      { label: 'Preprint', href: 'https://arxiv.org/abs/2605.24737' },
      { label: 'Dataset', href: 'https://huggingface.co/datasets/JehanneDussert/govllm-compliance-corpus' },
    ],
    videoLabel: "Excerpt from Parlez-moi d'IA n°106, in French, subtitled",
  },
  path: [
    { title: 'AI Governance Lead', subtitle: 'AXA Group Operations', year: '2026–' },
    {
      title: 'Tech Lead GenAI & AI Governance Coordinator',
      subtitle: 'DGFiP, France’s public finance and tax administration',
      year: '2024–26',
    },
    { title: 'Expert Evaluator', subtitle: 'European Commission', year: '2025–' },
    {
      title: 'AI Advisory Board member',
      subtitle: 'Council of Europe (CEPEJ)',
      year: '2024–25',
      href: 'https://www.coe.int/fr/web/cepej/-/cepej-appoints-members-for-its-artificial-intelligence-advisory-board-for-the-period-2024-2025',
    },
    { title: 'Generative AI Engineer', subtitle: 'DINUM, the French government’s digital agency', year: '2023–24' },
    {
      title: 'Government Innovation Fellow',
      subtitle:
        'EIG (Entrepreneurs d’intérêt général), the French government’s tech fellowship · built TwinCity, a synthetic Paris to test bias in computer vision',
      year: '2022–23',
    },
  ],
  education: [
    { title: 'Digital Technology Architect', subtitle: 'École 42, Paris', year: '2019–22' },
    { title: 'Master’s degree in Cyberjustice', subtitle: 'Faculty of Law, University of Strasbourg', year: '2018–19' },
  ],
  talks: [
    {
      title: 'Global Dialogue on AI Governance',
      subtitle: 'United Nations · contribution',
      year: '2026',
      href: 'https://www.un.org/global-dialogue-ai-governance/en/inputs',
    },
    { title: 'AI Act, Article 50', subtitle: 'European Commission · contribution', year: '2026' },
    {
      title: 'Parlez-moi d’IA n°106',
      subtitle: 'Radio · Cause Commune',
      year: '2026',
      href: 'https://www.youtube.com/watch?v=VBzLZySLnWU&t=482s',
    },
    {
      title: 'Hacktivate AI',
      subtitle: 'Organised by OpenAI · invited speaker · Brussels, 23 September',
      year: '2025',
      href: 'https://events.openai.com/hacktivateai/',
    },
    {
      title: 'First report on AI in the judiciary',
      subtitle: 'Council of Europe · AI Advisory Board (CEPEJ)',
      year: '2025',
      href: 'https://rm.coe.int/cepej-aiab-2024-4rev5-en-first-aiab-report-2788-0938-9324-v-1/1680b49def',
    },
    {
      title: 'The diary of Mia, 2042–2048',
      subtitle: 'Fiction · Flaash n°4, AI issue',
      year: '2024',
      href: 'https://www.lalibrairiedesfables.fr/livre/23946623-flaash-n04-ia-automne-2024-la-revue-culturelle-et-technique-d-anticipation-lilia-hassaine-luc-julia-nicolas-gaudemet-ariel-kyrou-flaash',
    },
  ],
  commitments: ['Feminism', 'Child protection', 'Algorithmic bias', 'Endometriosis'],
}

export default en
