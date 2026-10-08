import type { Content } from './types'

// French typography: a no-break space ( ) before : ; ? % and inside « ».

const fr: Content = {
  lang: 'fr',
  ogLocale: 'fr_FR',
  ui: {
    skip: 'Aller au contenu',
    nav: 'Principal',
    newTab: '(s’ouvre dans un nouvel onglet)',
    themeBefore: 'Passer au thème ',
    themeAfter: '',
    light: 'Clair',
    dark: 'Sombre',
    switchLang: { label: 'EN', name: 'English version' },
    problem: 'Problème',
    approach: 'Méthode',
    also: 'Aussi',
    play: 'Lire :',
    education: 'Formation',
  },
  home: {
    title: 'Jehanne Dussert — AI Governance Lead',
    description:
      'Ingénieure et juriste, AI Governance Lead chez AXA Group Operations. Je traduis les règles juridiques en code qui contrôle les systèmes d’IA pendant qu’ils fonctionnent.',
  },
  person: {
    name: 'Jehanne Dussert',
    intro:
      'Ingénieure et juriste, AI Governance Lead chez AXA Group Operations. Je traduis les règles juridiques en code qui contrôle les systèmes d’IA pendant qu’ils fonctionnent.',
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
        'Dans la moitié des quartiers parisiens, rejoindre un arrêt accessible prend 17 minutes en fauteuil roulant, contre 3 sans contrainte.',
    },
    govllm: {
      label: 'GovLLM',
      short: 'GovLLM',
      title: 'GovLLM — Jehanne Dussert',
      description:
        'Les exigences juridiques deviennent des règles qu’une machine peut vérifier. Un système d’IA déclaré conforme une fois, au lancement, continue d’évoluer ; GovLLM contrôle chaque réponse au regard de ces règles, en continu.',
    },
    path: {
      label: 'Parcours',
      short: 'Parcours',
      title: 'Parcours — Jehanne Dussert',
      description:
        'AI Governance Lead chez AXA Group Operations et experte évaluatrice pour la Commission européenne. Auparavant DGFiP, DINUM et Conseil de l’Europe (CEPEJ). École 42 et Université de Strasbourg.',
    },
    talks: {
      label: 'Interventions & écrits',
      short: 'Interventions',
      title: 'Interventions & écrits — Jehanne Dussert',
      description:
        'Contributions, interventions et écrits sur la gouvernance de l’IA : Nations unies, Commission européenne, Conseil de l’Europe, Hacktivate AI, Parlez-moi d’IA.',
    },
    commitments: {
      label: 'Engagements',
      short: 'Engagements',
      title: 'Engagements — Jehanne Dussert',
      description: 'Féminisme, protection de l’enfance, biais algorithmiques, endométriose.',
    },
  },
  underlaid: {
    tag: 'Projet indépendant · 2026',
    title: 'Underlaid',
    figure: { value: 17, unit: 'min', vs: 'contre 3' },
    lede: 'Dans la moitié des quartiers parisiens, rejoindre un arrêt accessible prend 17 minutes en fauteuil roulant, contre 3 sans contrainte.',
    problem:
      'Les données sur la chaleur, la pollution, le logement et l’accès aux soins à Paris sont publiques mais éparpillées, et rien ne dit combien de temps il faut pour rejoindre les lieux du quotidien en fauteuil roulant.',
    approach:
      'J’ai rassemblé ces sources pour les 2 752 quartiers de Paris et de la petite couronne, calculé les temps de trajet pour trois façons de se déplacer, et écrit mes hypothèses avant de lancer le moindre calcul.',
    also: [
      { key: '62 %', text: 'des quartiers très exposés de Seine-Saint-Denis comptent parmi ceux qui ont le moins de ressources' },
      { key: '1 sur 3', text: 'hypothèse vérifiée : les services publics sont plus loin des quartiers qui ont le plus de ressources' },
    ],
    buttons: [
      { label: 'Voir la carte', href: 'https://underlaid.fr', primary: true },
      { label: 'Code', href: 'https://github.com/JehanneDussert/underlaid' },
      { label: 'Citer', href: 'https://doi.org/10.5281/zenodo.23083312' },
    ],
    mapAlt:
      'Carte des 2 752 quartiers de Paris et de la petite couronne, colorés selon le nombre d’expositions cumulées',
  },
  govllm: {
    tag: 'Recherche open source · 2026',
    title: 'GovLLM',
    headline: 'Policy-as-code',
    lede: 'Les exigences juridiques deviennent des règles qu’une machine peut vérifier. Un système d’IA déclaré conforme une fois, au lancement, continue d’évoluer ; GovLLM contrôle chaque réponse au regard de ces règles, en continu.',
    problem:
      'Comment justifier le choix d’un modèle six mois après sa mise en production ? Un test ponctuel ne suffit pas, et les modèles d’IA utilisés comme juges ont leurs propres biais.',
    approach:
      'Gouvernance dès la conception : chaque cas d’usage reçoit un profil écrit en code, jusqu’à 14 critères rattachés à l’AI Act, au RGPD et aux exigences de l’ANSSI. De petits modèles locaux évaluent chaque réponse au regard de ce profil, et chaque requête part vers le modèle qui en respecte les règles.',
    also: [
      { key: 'OECD.AI', text: 'référencé dans le catalogue d’outils et de métriques de l’OCDE, juin 2026' },
      { key: 'arXiv', text: 'prépublication « Who judges the judges? », mai 2026' },
      { key: '30 ★', text: 'sur GitHub, et présenté dans Parlez-moi d’IA n°106' },
    ],
    buttons: [
      { label: 'Code', href: 'https://github.com/JehanneDussert/govllm', primary: true },
      { label: 'Prépublication', href: 'https://arxiv.org/abs/2605.24737' },
      { label: 'Jeu de données', href: 'https://huggingface.co/datasets/JehanneDussert/govllm-compliance-corpus' },
    ],
    videoLabel: 'Extrait de Parlez-moi d’IA n°106, sous-titré',
  },
  path: [
    { title: 'AI Governance Lead', subtitle: 'AXA Group Operations', year: '2026–' },
    {
      title: 'Tech Lead GenAI & coordinatrice de la gouvernance de l’IA',
      subtitle: 'DGFiP (Direction générale des Finances publiques)',
      year: '2024–26',
    },
    { title: 'Experte évaluatrice', subtitle: 'Commission européenne', year: '2025–' },
    {
      title: 'Membre de l’AI Advisory Board',
      subtitle: 'Conseil de l’Europe (CEPEJ)',
      year: '2024–25',
      href: 'https://www.coe.int/fr/web/cepej/-/cepej-appoints-members-for-its-artificial-intelligence-advisory-board-for-the-period-2024-2025',
    },
    { title: 'Ingénieure IA générative', subtitle: 'DINUM (Direction interministérielle du numérique)', year: '2023–24' },
    {
      title: 'Entrepreneuse d’intérêt général',
      subtitle: 'programme EIG · a conçu TwinCity, un Paris synthétique pour tester les biais de la vision par ordinateur',
      year: '2022–23',
    },
  ],
  education: [
    { title: 'Architecte en technologie numérique', subtitle: 'École 42, Paris', year: '2019–22' },
    { title: 'Master 2 Cyberjustice', subtitle: 'Faculté de droit, Université de Strasbourg', year: '2018–19' },
  ],
  talks: [
    {
      title: 'Dialogue mondial sur la gouvernance de l’IA',
      subtitle: 'Nations unies · contribution',
      year: '2026',
      href: 'https://www.un.org/global-dialogue-ai-governance/en/inputs',
    },
    { title: 'AI Act, article 50', subtitle: 'Commission européenne · contribution', year: '2026' },
    {
      title: 'Parlez-moi d’IA n°106',
      subtitle: 'Radio · Cause Commune',
      year: '2026',
      href: 'https://www.youtube.com/watch?v=VBzLZySLnWU&t=482s',
    },
    {
      title: 'Hacktivate AI',
      subtitle: 'Organisé par OpenAI · intervenante invitée · Bruxelles, 23 septembre',
      year: '2025',
      href: 'https://events.openai.com/hacktivateai/',
    },
    {
      title: 'Premier rapport sur l’IA dans la justice',
      subtitle: 'Conseil de l’Europe · AI Advisory Board (CEPEJ)',
      year: '2025',
      href: 'https://rm.coe.int/cepej-aiab-2024-4rev5-fr-premier-rapport-de-l-aiab-2763-5985-0252-v-1/1680b49df0',
    },
    {
      title: 'Le journal de Mia, 2042–2048',
      subtitle: 'Fiction · Flaash n°4, numéro IA',
      year: '2024',
      href: 'https://www.lalibrairiedesfables.fr/livre/23946623-flaash-n04-ia-automne-2024-la-revue-culturelle-et-technique-d-anticipation-lilia-hassaine-luc-julia-nicolas-gaudemet-ariel-kyrou-flaash',
    },
  ],
  commitments: ['Féminisme', 'Protection de l’enfance', 'Biais algorithmiques', 'Endométriose'],
}

export default fr
