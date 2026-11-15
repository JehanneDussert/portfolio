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
    upcoming: 'Upcoming',
  },
  home: {
    title: 'Jehanne Dussert — Group AI Governance Lead',
    description:
      'Trained in both law and computer science, Group AI Governance Lead at AXA Group Operations. I turn legal rules into code that checks AI systems while they run.',
  },
  person: {
    name: 'Jehanne Dussert',
    intro:
      'Trained in both law and computer science, Group AI Governance Lead at AXA Group Operations. I turn legal rules into code that checks AI systems while they run.',
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
        'Group AI Governance Lead at AXA Group Operations and Expert Evaluator for the European Commission. Previously DGFiP, DINUM, CNFPT and the Council of Europe (CEPEJ). École 42 and University of Strasbourg.',
    },
    talks: {
      label: 'Talks & writing',
      short: 'Talks',
      title: 'Talks & writing — Jehanne Dussert',
      description:
        'Contributions, talks and writing on AI governance: United Nations, European Commission, Council of Europe, Hacktivate AI, Parlez-moi d’IA.',
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
    ],
    buttons: [
      { label: 'Code', href: 'https://github.com/JehanneDussert/govllm', primary: true },
      { label: 'Preprint', href: 'https://arxiv.org/abs/2605.24737' },
      { label: 'Dataset', href: 'https://huggingface.co/datasets/JehanneDussert/govllm-compliance-corpus' },
    ],
    videoLabel: "Excerpt from Parlez-moi d'IA n°106, in French, subtitled",
  },
  path: [
    {
      title: 'Group AI Governance Lead',
      subtitle: 'AXA Group Operations',
      year: '2026–',
      description:
        'Leads AI governance for the Group across 17 countries, with a focus on agentic AI: a risk-based approach with Risk and Compliance, a federated model with the entities, and rules turned into enforceable controls (policy-as-code). Product Owner of the Group AI governance tool.',
    },
    {
      title: 'Tech Lead GenAI & AI Governance Coordinator',
      subtitle: 'DGFiP, France’s public finance and tax administration',
      year: '2024–26',
      description:
        'Led the national AI usage doctrine and shipped LLM systems to more than 95,000 users; represented France in the EU Fiscalis working group on generative AI.',
    },
    {
      title: 'Expert Evaluator',
      subtitle: 'European Commission',
      year: '2025–',
      description: 'Evaluates AI research proposals for Horizon Europe: risk, feasibility, impact.',
    },
    {
      title: 'Generative AI trainer',
      subtitle: 'CNFPT (French national centre for local civil service)',
      year: '2024–26',
      description: 'Trained local government staff on the uses and limits of generative AI.',
    },
    {
      title: 'AI Advisory Board member',
      subtitle: 'Council of Europe (CEPEJ)',
      year: '2024–25',
      description: 'Appointed member; co-author of the board’s first report on AI in judicial systems.',
      href: 'https://www.coe.int/fr/web/cepej/-/cepej-appoints-members-for-its-artificial-intelligence-advisory-board-for-the-period-2024-2025',
    },
    {
      title: 'Generative AI Engineer',
      subtitle: 'DINUM, the French government’s digital agency',
      year: '2023–24',
      description:
        'Developer on Albert, the French government’s generative AI, through to its launch; shortlisted for the Victoires des acteurs publics 2024.',
    },
    {
      title: 'Government Innovation Fellow',
      subtitle: 'EIG (Entrepreneurs d’intérêt général), the French government’s tech fellowship',
      year: '2022–23',
      description:
        'Designed TwinCity, a synthetic Paris for testing bias in computer vision; led a team of three and wrote the project’s governance protocol.',
    },
  ],
  education: [
    { title: 'Digital Technology Architect', subtitle: 'École 42, Paris', year: '2019–22' },
    { title: 'Master’s degree in Cyberjustice', subtitle: 'Faculty of Law, University of Strasbourg', year: '2018–19' },
  ],
  // Newest first. Items with a `date` on or after the day of the build are listed under “Upcoming”.
  talks: [
    {
      title: 'Hacktivate AI 2.0',
      subtitle: 'Track captain, “Agentic AI Governance” · CEPS, ECIPE and OpenAI · Brussels',
      year: '1 Dec 2026',
      date: '2026-12-01',
      href: 'https://events.openai.com/hacktivateai/',
    },
    {
      title: 'Governing agentic AI at scale',
      subtitle: 'Talk · Chief Data & AI Officers meeting hosted by Umake',
      year: '26 Nov 2026',
      date: '2026-11-26',
    },
    {
      title: 'Parlez-moi d’IA n°106',
      subtitle: 'Radio · Cause Commune',
      year: 'Sep 2026',
      href: 'https://www.youtube.com/watch?v=VBzLZySLnWU&t=482s',
    },
    { title: 'AI Act, Article 50', subtitle: 'European Commission · contribution', year: 'Jun 2026' },
    {
      title: 'Global Dialogue on AI Governance',
      subtitle: 'United Nations · contribution',
      year: 'Apr 2026',
      href: 'https://www.un.org/global-dialogue-ai-governance/en/inputs',
    },
    {
      title: 'Hacktivate AI',
      subtitle: 'Organised by OpenAI · invited speaker · Brussels',
      year: '23 Sep 2025',
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
      year: 'Autumn 2024',
      href: 'https://www.lalibrairiedesfables.fr/livre/23946623-flaash-n04-ia-automne-2024-la-revue-culturelle-et-technique-d-anticipation-lilia-hassaine-luc-julia-nicolas-gaudemet-ariel-kyrou-flaash',
    },
  ],
  organisers: {
    title: 'For event organisers',
    bio: {
      label: 'Short bio',
      text: 'Jehanne Dussert is trained in both law and computer science and is Group AI Governance Lead at AXA. She leads AI governance for the Group across 17 countries, with a focus on agentic AI and policy-as-code. She previously led the national AI usage doctrine at the French tax administration. She has contributed to work by the United Nations, the European Commission and the Council of Europe, and her open-source framework GovLLM is listed in the OECD.AI Catalogue.',
    },
    copy: 'Copy',
    copied: 'Copied',
    facts: [
      {
        label: 'Topics',
        text: 'Agentic AI governance · Continuously verified compliance (policy-as-code) · Generative AI in the public sector',
      },
      { label: 'Formats & languages', text: 'Keynote, panel, workshop · French, English' },
    ],
    contact: { label: 'Contact', email: 'research.jehannedussert@gmail.com' },
    // HD photos, e.g. { label: 'Portrait, 3000 × 2000 px', href: '/media/jehanne-dussert-portrait.jpg' }
    photos: { label: 'Photos', items: [] },
  },
}

export default en
