<template>
  <section class="s">
    <div class="s-head reveal">
      <span class="idx">00</span>
      <h2>Approach</h2>
    </div>
    <div class="content">
      <div class="text reveal reveal-delay-1">
        <p>
          Before deployment: intuition, risk modelling, regulatory mapping.
          After: production metrics, drift detection, real user behaviour.
          Governance is never finished —
          <em>it's a feedback loop, not a deliverable.</em>
        </p>
        <p>
          Treating governance as a dynamic tool means the framework
          evolves with the system it governs: acceptance thresholds adjust,
          supervision levels shift, authorised use cases get refined
          as the production reality becomes clearer.
        </p>

        <div class="example-block">
          <p class="example-label">Concrete example — governance-driven routing</p>
          <p>
            A summarisation task configured with
            <span class="tag-inline teal">confidentiality</span> and
            <span class="tag-inline teal">traceability</span> criteria
            automatically routes to a different model than the same task
            with relaxed constraints.
            The governance profile <em>is</em> the routing logic —
            no manual override, no separate config.
          </p>
          <p class="example-sub">
            Implemented in the side project: use case × criteria matrix
            stored in Redis, resolved at inference time.
          </p>
        </div>
      </div>

      <div class="diagram reveal reveal-delay-2">
        <svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg" style="width:100%">
          <defs>
            <marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </marker>
          </defs>

          <!-- Before deployment -->
          <rect x="10" y="10" width="115" height="42" rx="5"
            fill="rgba(240,165,0,0.08)" stroke="rgba(240,165,0,0.25)" stroke-width="0.8"/>
          <text x="67" y="27" text-anchor="middle"
            font-family="'JetBrains Mono',monospace" font-size="11" fill="#f0a500" font-weight="500">Before go-live</text>
          <text x="67" y="42" text-anchor="middle"
            font-family="'Inter',sans-serif" font-size="10" fill="#5c6480">Intuition · risk model</text>

          <!-- Arrow down -->
          <line x1="67" y1="52" x2="67" y2="74"
            stroke="#f0a500" stroke-width="1" marker-end="url(#arr2)" opacity="0.5"/>

          <!-- Governance criteria box -->
          <rect x="0" y="76" width="130" height="52" rx="5"
            fill="rgba(124,140,248,0.08)" stroke="rgba(124,140,248,0.25)" stroke-width="0.8"/>
          <text x="67" y="95" text-anchor="middle"
            font-family="'JetBrains Mono',monospace" font-size="11" fill="#7c8cf8" font-weight="500">Governance profile</text>
          <text x="67" y="110" text-anchor="middle"
            font-family="'Inter',sans-serif" font-size="10" fill="#5c6480">criteria · thresholds</text>
          <text x="67" y="122" text-anchor="middle"
            font-family="'Inter',sans-serif" font-size="10" fill="#5c6480">supervision level</text>

          <!-- Arrow right to router -->
          <line x1="130" y1="102" x2="158" y2="102"
            stroke="#7c8cf8" stroke-width="1" marker-end="url(#arr2)" opacity="0.6"/>

          <!-- Router -->
          <rect x="160" y="76" width="100" height="52" rx="5"
            fill="rgba(0,212,184,0.08)" stroke="rgba(0,212,184,0.3)" stroke-width="0.8"/>
          <text x="210" y="95" text-anchor="middle"
            font-family="'JetBrains Mono',monospace" font-size="11" fill="#00d4b8" font-weight="500">Router</text>
          <text x="210" y="110" text-anchor="middle"
            font-family="'Inter',sans-serif" font-size="10" fill="#5c6480">use case ×</text>
          <text x="210" y="122" text-anchor="middle"
            font-family="'Inter',sans-serif" font-size="10" fill="#5c6480">criteria matrix</text>

          <!-- Arrows to models -->
          <line x1="260" y1="96" x2="288" y2="56"
            stroke="#00d4b8" stroke-width="0.8" marker-end="url(#arr2)" opacity="0.5"/>
          <line x1="260" y1="102" x2="288" y2="110"
            stroke="#00d4b8" stroke-width="0.8" marker-end="url(#arr2)" opacity="0.5"/>
          <line x1="260" y1="108" x2="288" y2="164"
            stroke="#00d4b8" stroke-width="0.8" marker-end="url(#arr2)" opacity="0.5"/>

          <!-- Model A -->
          <rect x="290" y="40" width="100" height="32" rx="4"
            fill="rgba(232,234,240,0.04)" stroke="rgba(232,234,240,0.1)" stroke-width="0.8"/>
          <text x="340" y="53" text-anchor="middle"
            font-family="'JetBrains Mono',monospace" font-size="10" fill="#9da4b8">qwen2.5:1.5b</text>
          <text x="340" y="65" text-anchor="middle"
            font-family="'Inter',sans-serif" font-size="9" fill="#363d52">low risk · fast</text>

          <!-- Model B — highlighted -->
          <rect x="290" y="94" width="100" height="32" rx="4"
            fill="rgba(0,212,184,0.08)" stroke="rgba(0,212,184,0.3)" stroke-width="0.8"/>
          <text x="340" y="107" text-anchor="middle"
            font-family="'JetBrains Mono',monospace" font-size="10" fill="#00d4b8">deepseek-r1</text>
          <text x="340" y="119" text-anchor="middle"
            font-family="'Inter',sans-serif" font-size="9" fill="#5c6480">traceability · audit</text>

          <!-- Model C -->
          <rect x="290" y="148" width="100" height="32" rx="4"
            fill="rgba(232,234,240,0.04)" stroke="rgba(232,234,240,0.1)" stroke-width="0.8"/>
          <text x="340" y="161" text-anchor="middle"
            font-family="'JetBrains Mono',monospace" font-size="10" fill="#9da4b8">gemma3:1b</text>
          <text x="340" y="173" text-anchor="middle"
            font-family="'Inter',sans-serif" font-size="9" fill="#363d52">privacy · local only</text>

          <!-- After: feedback arrow back up -->
          <path d="M210 128 Q210 210 67 210 Q67 210 67 215"
            fill="none" stroke="#f0a500" stroke-width="0.8"
            stroke-dasharray="4 3" marker-end="url(#arr2)" opacity="0.35"/>

          <!-- After deployment label -->
          <rect x="10" y="217" width="115" height="42" rx="5"
            fill="rgba(240,165,0,0.05)" stroke="rgba(240,165,0,0.15)" stroke-width="0.8"/>
          <text x="67" y="234" text-anchor="middle"
            font-family="'JetBrains Mono',monospace" font-size="11" fill="#f0a500" font-weight="500">After go-live</text>
          <text x="67" y="249" text-anchor="middle"
            font-family="'Inter',sans-serif" font-size="10" fill="#5c6480">metrics refine criteria</text>

          <!-- Caption -->
          <text x="200" y="282" text-anchor="middle"
            font-family="'Inter',sans-serif" font-size="10" fill="#363d52">governance profile = routing logic</text>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.s {
  padding: 5rem 3rem;
  border-top: 1px solid var(--b);
  background: var(--bg-2);
}
.s-head { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2.5rem; }
.idx { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); letter-spacing: .1em; }
.s-head h2 { font-size: 1.55rem; font-weight: 600; color: var(--txt); letter-spacing: -.01em; }
.content { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
@media (max-width: 768px) { .content { grid-template-columns: 1fr; gap: 2rem; } .diagram { display: none; } }
.text { display: flex; flex-direction: column; gap: 1.1rem; }
.text p { font-size: 14px; color: var(--txt-2); line-height: 1.85; }
.text em { font-style: italic; color: var(--txt); }

.example-block {
  border-left: 2px solid rgba(0,212,184,0.3);
  padding: 1rem 1.25rem;
  background: rgba(0,212,184,0.04);
  border-radius: 0 var(--r-md) var(--r-md) 0;
  display: flex; flex-direction: column; gap: 0.65rem;
}
.example-label {
  font-family: var(--ff-mono) !important;
  font-size: 10px !important;
  font-weight: 500 !important;
  text-transform: uppercase;
  letter-spacing: .09em;
  color: var(--teal) !important;
}
.example-sub {
  font-size: 12px !important;
  color: var(--txt-3) !important;
  line-height: 1.6 !important;
}
.tag-inline {
  display: inline-block;
  font-family: var(--ff-mono);
  font-size: 11px;
  padding: 1px 7px;
  border-radius: 2px;
  vertical-align: middle;
}
.tag-inline.teal {
  color: var(--teal);
  background: var(--teal-dim);
  border: 1px solid rgba(0,212,184,0.2);
}
.diagram { padding-top: 0.5rem; }
</style>