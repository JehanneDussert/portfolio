<template>
  <section id="contributions" class="s">
    <div class="s-head reveal">
      <span class="idx">05</span>
      <h2 class="section-title">Contributions</h2>
    </div>
    <div class="list">
      <article v-for="c in contributions" :key="c.title" class="item reveal">
        <div class="item-top" @click="toggle(c.title)" data-hover>
          <div class="item-left">
            <span class="item-year">{{ c.year }}</span>
            <span class="item-org">{{ c.org }}</span>
          </div>
          <div class="item-center">
            <h3 class="item-title">{{ c.title }}</h3>
            <p class="item-sub">{{ c.sub }}</p>
          </div>
          <span class="item-chevron" :class="{ open: expanded === c.title }">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="v-line"/><line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
        </div>
        <Transition name="expand">
          <div v-if="expanded === c.title" class="item-body">
            <p v-if="c.intro" class="item-intro">{{ c.intro }}</p>
            <ul v-if="c.args && c.args.length" class="args-list">
              <li v-for="a in c.args" :key="a">{{ a }}</li>
            </ul>
            <div v-if="c.themes" class="themes">
              <span v-for="t in c.themes" :key="t" class="theme-tag">{{ t }}</span>
            </div>
            <a v-if="c.url" :href="c.url" target="_blank" rel="noopener" class="item-link">View source →</a>
          </div>
        </Transition>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expanded = ref<string | null>(null)
function toggle(title: string) {
  expanded.value = expanded.value === title ? null : title
}

const contributions = [
  {
    year: '2026', org: 'United Nations',
    title: 'UN Global Dialogue on AI Governance — Written Submission',
    sub: 'Technical Community Stakeholder · Geneva, July 6–7 2026',
    intro: 'Addresses the structural gap between declaratory AI governance frameworks and operational compliance evidence in public sector deployments — arguing that accountability requires continuous production observability, not only point-in-time documentation.',
    args: [
      'Governance frameworks, including the EU AI Act, operate on a snapshot logic that does not reflect how LLM behaviour evolves in production.',
      'Public administrations need self-hostable, multi-framework evaluation infrastructure to exercise genuine evaluative sovereignty.',
      'Interoperability of governance approaches requires a shared evaluation vocabulary across regulatory regimes — not harmonisation of the regimes themselves.',
      'Capacity-building should prioritise open tooling interpretable by non-technical governance actors over additional policy documentation.',
    ],
    themes: ['Transparency & accountability', 'Safe & trustworthy AI', 'Interoperability', 'Capacity-building'],
    url: 'https://www.un.org/global-dialogue-ai-governance/en',
  },
  {
    year: '2024', org: 'Council of Europe',
    title: '1st AIAB Report on the Use of AI in the Judiciary',
    sub: 'AI Advisory Board · Appointed member (1 of 5) · CEPEJ',
    intro: 'Co-authored report examining the deployment of AI systems in judicial contexts across Council of Europe member states — covering transparency, accountability, and human oversight requirements.',
    args: [
      'Assessment of AI use cases across judicial systems: case management, legal research, sentencing assistance, and document analysis.',
      'Governance recommendations grounded in the European Convention on Human Rights and the Council of Europe AI Convention.',
      'Risk typology for AI in high-stakes decision-making environments where fundamental rights are at stake.',
      'Guidance for member states on procurement, audit, and human oversight of AI systems in court settings.',
    ],
    themes: ['AI in justice systems', 'Fundamental rights', 'Human oversight', 'Council of Europe'],
    url: 'https://rm.coe.int/cepej-aiab-2024-4rev5-en-first-aiab-report-2788-0938-9324-v-1/1680b49def',
  },
  {
    year: '2024', org: 'Vuibert',
    title: 'Co-author — Public Sector & Digital Transformation',
    sub: '200 fiches, schémas et vidéos pour développer sa culture numérique dans la fonction publique',
    intro: 'Contributed several chapters to a comprehensive reference guide for public sector professionals navigating digital transformation. Covered both technical and regulatory dimensions of digital public services.',
    args: [
      'Video surveillance and digital oversight in public spaces.',
      'Digital accessibility and RGAA compliance for public services.',
      'Illectronism and digital exclusion — barriers to access in administrative contexts.',
      'Digital inclusion policies and universal service obligations.',
      'Smart cities — governance, data infrastructure, and citizen rights.',
      'Quality of public service in the digital era — Rolland\'s laws revisited.',
      'APIs in public administration — interoperability and open data.',
      'Digital divide — structural inequalities and public policy responses.',
    ],
    themes: ['Public sector', 'Digital transformation', 'Accessibility', 'Digital inclusion', 'Smart cities'],
    url: 'https://www.fnac.com/a19819108/Olivier-Bellego-200-fiches-schemas-et-videos-pour-developper-sa-culture-numerique-dans-la-fonction-publique',
  },
  {
    year: '2024', org: 'Flaash · N°04',
    title: 'Fiction — AI & the Judiciary',
    sub: 'Cultural & technical foresight journal · Autumn 2024',
    intro: 'Narrative piece written from the perspective of Mia — an AI reflecting on her life in 2124. Explores how algorithmic tools reshape judicial decision-making, accountability, and the relationship between human magistrates and automated decision support. Published alongside an AI-generated version.',
    args: [],
    themes: ['AI fiction', 'Justice & AI', 'Speculative writing', 'Human vs AI authorship'],
    url: 'https://www.lalibrairiedesfables.fr/livre/23946623-flaash-n04-ia-automne-2024-la-revue-culturelle-et-technique-d-anticipation-lilia-hassaine-luc-julia-nicolas-gaudemet-ariel-kyrou-flaash',
  },
  {
    year: '2019', org: 'Cyberjustice Laboratory',
    title: 'Inventory of Best Practices — Algorithmic Systems in Public Services',
    sub: 'University of Montreal · Master\'s in Cyberjustice',
    intro: 'Contributed to an inventory of best practices for the deployment of algorithmic systems aimed at improving citizen-facing public services — examining transparency, accountability, and governance requirements.',
    args: [],
    themes: ['Algorithmic governance', 'Public services', 'Transparency', 'Cyberjustice'],
    url: 'https://www.cyberjustice.ca/2019/07/24/mise-en-place-de-systemes-algorithmiques-en-vue-dameliorer-la-fourniture-de-services-aux-citoyens-le-laboratoire-devoile-son-inventaire-des-bonnes-pratiques-les-plus-repandues/',
  },
]
</script>

<style scoped>
.s { padding: 5rem 3rem; border-top: 1px solid var(--b); background: var(--bg-2); }
.s-head { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2.5rem; }
.idx { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); letter-spacing: .1em; }
.section-title { font-size: 1.55rem; font-weight: 600; color: var(--txt); letter-spacing: -.01em; }
.list { display: flex; flex-direction: column; }
.item { border-top: 1px solid var(--b); }
.item:last-child { border-bottom: 1px solid var(--b); }
.item-top { display: grid; grid-template-columns: 120px 1fr 24px; gap: 2rem; padding: 1.5rem 0; cursor: pointer; transition: opacity .18s; }
.item-top:hover { opacity: .8; }
.item-left { padding-top: 2px; }
.item-year { display: block; font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); margin-bottom: 5px; }
.item-org { display: block; font-family: var(--ff-mono); font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: .08em; color: var(--teal); }
.item-title { font-size: 14px; font-weight: 600; color: var(--txt); margin-bottom: 4px; line-height: 1.3; }
.item-sub { font-size: 12px; color: var(--txt-3); font-family: var(--ff-mono); }
.item-chevron {
  color: var(--teal);
  align-self: center;
  flex-shrink: 0;
  width: 24px; height: 24px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid rgba(0,212,184,.25);
  border-radius: 50%;
  background: rgba(0,212,184,.06);
  transition: background .2s, transform .25s;
}
.item-chevron:hover { background: rgba(0,212,184,.12); }
.item-chevron .v-line { transition: transform .25s; transform-origin: center; }
.item-chevron.open .v-line { transform: scaleY(0); }
.item-body { padding: 0 0 1.75rem 152px; display: flex; flex-direction: column; gap: 1.25rem; }
.item-intro { font-size: 13.5px; color: var(--txt-2); line-height: 1.8; }
.args-list { list-style: none; display: flex; flex-direction: column; gap: 8px; border-left: 2px solid var(--teal); padding-left: 1.25rem; }
.args-list li { font-size: 13px; color: var(--txt-2); line-height: 1.7; }
.themes { display: flex; flex-wrap: wrap; gap: 7px; }
.theme-tag { font-size: 11.5px; color: var(--txt-3); background: var(--bg-3); border: 1px solid var(--b); padding: 4px 10px; border-radius: var(--r-sm); }
.item-link { font-family: var(--ff-mono); font-size: 12px; color: var(--teal); border-bottom: 1px solid rgba(0,212,184,.25); padding-bottom: 1px; align-self: flex-start; transition: border-color .18s; }
.item-link:hover { border-color: var(--teal); }
.expand-enter-active, .expand-leave-active { transition: opacity .25s, transform .25s; }
.expand-enter-from, .expand-leave-to { opacity: 0; transform: translateY(-6px); }
.item-top { cursor: none; }
@media (max-width: 768px) {
  .s { padding: 4rem 1.25rem; }
  .item-top { grid-template-columns: 1fr 20px; gap: 1rem; }
  .item-left { display: none; }
  .item-body { padding-left: 0; }
}
</style>