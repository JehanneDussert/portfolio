<template>
  <footer class="footer">
    <div class="inner">
      <div class="left">
        <span class="name">Jehanne Dussert</span>
        <span class="dot">·</span>
        <span class="tag">AI Governance by Design</span>
      </div>
      <div class="links">
        <a href="https://www.linkedin.com/in/jehanne-dussert" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/JehanneDussert" target="_blank" rel="noopener">GitHub</a>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { border-top: 1px solid var(--b); padding: 1.75rem 3rem; background: var(--bg-2); }
.inner { display: flex; align-items: center; justify-content: space-between; }
.left { display: flex; align-items: center; gap: 10px; }
.name { font-size: 13px; font-weight: 500; color: var(--txt); }
.dot { color: var(--txt-4); }
.tag { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-3); letter-spacing: .06em; }
.links { display: flex; gap: 1.75rem; }
.links a { font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: .07em; color: var(--txt-3); transition: color .18s; }
.links a:hover { color: var(--teal); }
</style>
