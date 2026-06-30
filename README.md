<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Astrid Yami — Computer Science ePortfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    --bg: #FAFAF6;
    --ink: #1C2230;
    --ink-soft: #4A5160;
    --line: #DDD9CE;
    --teal: #2A7F7E;
    --amber: #C97C3D;
    --card: #FFFFFF;
    --max: 880px;
  }
  *{ box-sizing: border-box; }
  html{ scroll-behavior: smooth; }
  body{
    margin:0;
    background: var(--bg);
    color: var(--ink);
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  a{ color: var(--teal); text-decoration: none; }
  a:hover{ text-decoration: underline; }
  a:focus-visible, button:focus-visible{
    outline: 2px solid var(--teal);
    outline-offset: 3px;
  }
  .wrap{ max-width: var(--max); margin: 0 auto; padding: 0 28px; }

  /* ---------- Header / Hero ---------- */
  header.hero{
    padding: 100px 0 70px;
    border-bottom: 1px solid var(--line);
  }
  .eyebrow{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    letter-spacing: .04em;
    color: var(--teal);
    margin: 0 0 18px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .eyebrow::before{
    content: "";
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--teal);
    display: inline-block;
  }
  h1{
    font-family: 'Fraunces', serif;
    font-weight: 600;
    font-size: clamp(40px, 6vw, 58px);
    line-height: 1.05;
    margin: 0 0 18px;
    letter-spacing: -0.01em;
  }
  .tagline{
    font-size: 19px;
    color: var(--ink-soft);
    max-width: 620px;
    margin: 0 0 30px;
  }
  .hero-links{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .pill{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    padding: 9px 16px;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--ink);
    background: var(--card);
    transition: border-color .15s ease, transform .15s ease;
  }
  .pill:hover{
    border-color: var(--teal);
    text-decoration: none;
    transform: translateY(-1px);
  }

  /* ---------- Sections ---------- */
  section{ padding: 64px 0; border-bottom: 1px solid var(--line); }
  section:last-of-type{ border-bottom: none; }
  .section-label{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: var(--amber);
    text-transform: uppercase;
    letter-spacing: .06em;
    margin: 0 0 14px;
  }
  h2{
    font-family: 'Fraunces', serif;
    font-weight: 500;
    font-size: 30px;
    margin: 0 0 20px;
  }
  p{ color: var(--ink-soft); margin: 0 0 16px; max-width: 680px; }
  p:last-child{ margin-bottom: 0; }

  /* ---------- Artifact card ---------- */
  .card{
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 28px 28px 24px;
    margin-top: 28px;
  }
  .card h3{
    font-family: 'Inter', sans-serif;
    font-size: 19px;
    font-weight: 600;
    margin: 0 0 8px;
  }
  .tags{
    display: flex; flex-wrap: wrap; gap: 8px;
    margin: 14px 0 18px;
  }
  .tag{
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: var(--ink-soft);
    background: #F1EFE6;
    border-radius: 6px;
    padding: 4px 9px;
  }
  .card .links{ display:flex; gap: 18px; font-family: 'JetBrains Mono', monospace; font-size: 14px; }

  /* ---------- Status note ---------- */
  .note{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: var(--ink-soft);
    background: #F1EFE6;
    border-left: 3px solid var(--amber);
    padding: 12px 16px;
    border-radius: 4px;
    margin-top: 20px;
  }

  /* ---------- Footer ---------- */
  footer{
    padding: 40px 0 60px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: var(--ink-soft);
  }

  @media (max-width: 600px){
    header.hero{ padding: 70px 0 50px; }
    section{ padding: 48px 0; }
  }
</style>
</head>
<body>

<header class="hero">
  <div class="wrap">
    <p class="eyebrow">Computer Science ePortfolio — SNHU, CS 499</p>
    <h1>Astrid Yami</h1>
    <p class="tagline">Data analyst building stronger software, security, and systems thinking underneath the analytics work I already do.</p>
    <div class="hero-links">
      <a class="pill" href="#self-assessment">Self-Assessment</a>
      <a class="pill" href="#artifact">Artifact</a>
      <a class="pill" href="https://github.com/AstridYami" target="_blank" rel="noopener">GitHub Profile</a>
      <a class="pill" href="mailto:your.email@example.com">Contact</a>
    </div>
  </div>
</header>

<section id="self-assessment">
  <div class="wrap">
    <p class="section-label">Start here</p>
    <h2>Professional Self-Assessment</h2>
    <p>This section introduces my background, the skills I've built across the Computer Science program, and how this ePortfolio reflects my growth. It covers collaboration, communicating with stakeholders, data structures and algorithms, software engineering and databases, and security.</p>
    <p><em>Self-assessment content will be added here in Module Seven.</em></p>
  </div>
</section>

<section id="code-review">
  <div class="wrap">
    <p class="section-label">Planning</p>
    <h2>Code Review</h2>
    <p>A recorded walkthrough of the original artifact, its existing functionality, areas identified for improvement, and the enhancement plan for each category below.</p>
    <p><em>Video will be linked here once recorded.</em></p>
  </div>
</section>

<section id="artifact">
  <div class="wrap">
    <p class="section-label">The work</p>
    <h2>Artifact: EventTrackerApp</h2>
    <p>An Android event reminder application originally built for CS-360: Mobile Architecture and Programming. Users register, log in, and manage events stored in a SQLite database. This single artifact is being enhanced across all three required categories: software design and engineering, algorithms and data structures, and databases.</p>

    <div class="card">
      <h3>Software Design &amp; Engineering</h3>
      <p>Consolidating duplicated, non-persistent screens into one consistent data flow, and building a scheduling feature that connects event data to SMS reminders.</p>
      <div class="tags">
        <span class="tag">architecture cleanup</span>
        <span class="tag">scheduling logic</span>
      </div>
      <div class="links">
        <a href="https://github.com/AstridYami/EventTrackerApp" target="_blank" rel="noopener">View repository →</a>
      </div>
    </div>

    <div class="card">
      <h3>Algorithms &amp; Data Structures</h3>
      <p>Adding efficient search and filtering, faster lookup of the next upcoming event, and smarter list updates in place of full list redraws.</p>
      <div class="tags">
        <span class="tag">search &amp; filter</span>
        <span class="tag">time complexity</span>
      </div>
      <div class="links">
        <a href="https://github.com/AstridYami/EventTrackerApp" target="_blank" rel="noopener">View repository →</a>
      </div>
    </div>

    <div class="card">
      <h3>Databases</h3>
      <p>Replacing plain text password storage with salted hashing, and correcting the schema so events are properly scoped to the user who created them.</p>
      <div class="tags">
        <span class="tag">security</span>
        <span class="tag">schema design</span>
      </div>
      <div class="links">
        <a href="https://github.com/AstridYami/EventTrackerApp" target="_blank" rel="noopener">View repository →</a>
      </div>
    </div>

    <p class="note">Narratives explaining the reasoning behind each enhancement will be added here as they're completed in Modules Two through Four.</p>
  </div>
</section>

<footer>
  <div class="wrap">
    Built for CS 499 — Southern New Hampshire University · Updated June 2026
  </div>
</footer>

</body>
</html>
