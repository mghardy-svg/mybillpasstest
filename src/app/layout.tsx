<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>California Proposition Predictor & Analyzer</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy: #1e3a8a;
    --navy-dark: #172554;
    --red: #b91c1c;
    --red-dark: #991b1b;
    --gold: #b45309;
    --ink: #111827;
    --ink-mid: #374151;
    --ink-light: #6b7280;
    --rule: #d1d5db;
    --bg: #f9f7f4;
    --white: #ffffff;
    --green: #15803d;

    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: 'Source Serif 4', Georgia, serif;
    --font-label: 'Oswald', 'Arial Narrow', sans-serif;
  }

  body {
    font-family: var(--font-body);
    background: var(--bg);
    color: var(--ink);
    -webkit-font-smoothing: antialiased;
  }

  /* ─── TOP RULE BAR ─────────────────────────── */
  .rule-bar {
    height: 5px;
    background: linear-gradient(to right, var(--navy) 50%, var(--red) 50%);
  }

  /* ─── NAV ──────────────────────────────────── */
  nav {
    background: var(--white);
    border-bottom: 1px solid var(--rule);
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
  }

  .nav-brand {
    font-family: var(--font-label);
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--navy);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .nav-links a {
    font-family: var(--font-label);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-mid);
    text-decoration: none;
  }

  .nav-links a:hover { color: var(--navy); }

  /* ─── HERO ─────────────────────────────────── */
  .hero {
    background: var(--white);
    border-bottom: 3px double var(--rule);
    padding: 3.5rem 2rem 3rem;
    text-align: center;
    position: relative;
  }

  .hero::before {
    content: '★ ★ ★';
    display: block;
    font-size: 0.6rem;
    letter-spacing: 0.5em;
    color: var(--rule);
    margin-bottom: 1.25rem;
  }

  .hero-eyebrow {
    display: inline-block;
    font-family: var(--font-label);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--white);
    background: var(--navy);
    padding: 0.35rem 1.1rem;
    margin-bottom: 1.75rem;
    border-left: 3px solid var(--red);
  }

  .hero h1 {
    font-family: var(--font-display);
    font-size: clamp(2.6rem, 5vw, 4.2rem);
    font-weight: 800;
    line-height: 1.1;
    color: var(--ink);
    letter-spacing: -0.02em;
    max-width: 780px;
    margin: 0 auto 0.25rem;
  }

  .hero h1 em {
    font-style: italic;
    color: var(--navy);
  }

  .hero-rule {
    width: 80px;
    height: 3px;
    background: var(--red);
    margin: 1.5rem auto;
  }

  .hero p {
    font-family: var(--font-body);
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.75;
    color: var(--ink-mid);
    max-width: 600px;
    margin: 0 auto;
    font-style: italic;
  }

  /* ─── STATS STRIP ──────────────────────────── */
  .stats-strip {
    background: var(--navy-dark);
    border-bottom: 3px solid var(--red);
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .stat-item {
    padding: 1.4rem 1rem;
    text-align: center;
    border-right: 1px solid rgba(255,255,255,0.1);
    position: relative;
  }

  .stat-item:last-child { border-right: none; }

  .stat-icon {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-family: var(--font-label);
    font-weight: 500;
    color: rgba(255,255,255,0.45);
    margin-bottom: 0.3rem;
  }

  .stat-number {
    font-family: var(--font-label);
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.3rem;
  }

  .stat-number.white { color: var(--white); }
  .stat-number.blue { color: #93c5fd; }
  .stat-number.green { color: #86efac; }
  .stat-number.red { color: #fca5a5; }

  .stat-label {
    font-family: var(--font-label);
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
  }

  /* ─── FILTER BAR ───────────────────────────── */
  .filter-section {
    padding: 1.5rem 2rem;
    background: var(--white);
    border-bottom: 2px solid var(--navy);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .search-wrap {
    flex: 1;
    min-width: 260px;
    position: relative;
  }

  .search-wrap svg {
    position: absolute;
    left: 0.9rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--ink-light);
    width: 15px;
    height: 15px;
  }

  .search-input {
    width: 100%;
    padding: 0.6rem 0.9rem 0.6rem 2.4rem;
    font-family: var(--font-body);
    font-size: 0.92rem;
    border: 1.5px solid var(--rule);
    background: var(--bg);
    color: var(--ink);
    outline: none;
    transition: border-color 0.15s;
  }

  .search-input:focus { border-color: var(--navy); }
  .search-input::placeholder { color: var(--ink-light); font-style: italic; }

  .filter-select {
    padding: 0.6rem 1.8rem 0.6rem 0.85rem;
    font-family: var(--font-label);
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border: 1.5px solid var(--rule);
    background: var(--bg);
    color: var(--ink);
    outline: none;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%236b7280'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.65rem center;
    cursor: pointer;
    transition: border-color 0.15s;
  }

  .filter-select:focus { border-color: var(--navy); }

  /* ─── RESULTS HEADER ───────────────────────── */
  .results-header {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.75rem;
    border-bottom: 1px solid var(--rule);
  }

  .results-count {
    font-family: var(--font-label);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-mid);
  }

  .results-count strong {
    color: var(--navy);
    font-weight: 700;
  }

  .badge-row {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .badge {
    font-family: var(--font-label);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.85rem;
    border: 2px solid;
  }

  .badge-upcoming { color: var(--navy); border-color: var(--navy); background: #dbeafe; }
  .badge-passed   { color: var(--green); border-color: var(--green); background: #dcfce7; }
  .badge-failed   { color: var(--red); border-color: var(--red); background: #fee2e2; }

  /* ─── CARDS GRID ───────────────────────────── */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-top: 1px solid var(--rule);
  }

  .prop-card {
    background: var(--white);
    border-right: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    padding: 1.5rem 1.5rem 1.25rem;
    position: relative;
    cursor: pointer;
    transition: background 0.15s;
  }

  .prop-card:nth-child(3n) { border-right: none; }
  .prop-card:hover { background: #f8faff; }

  .card-accent-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: var(--navy);
  }

  .card-accent-bar.red { background: var(--red); }

  .card-tags {
    display: flex;
    gap: 0.4rem;
    margin-bottom: 0.85rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .tag-group {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
  }

  .tag {
    font-family: var(--font-label);
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.2rem 0.55rem;
    border: 1.5px solid;
  }

  .tag-upcoming { color: var(--white); background: var(--navy); border-color: var(--navy); }
  .tag-gov { color: var(--ink-mid); border-color: var(--rule); background: transparent; }
  .tag-civil { color: var(--ink-mid); border-color: var(--rule); background: transparent; }

  .card-prop-id {
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--rule);
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .card-title {
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.3;
    margin-bottom: 0.55rem;
    letter-spacing: -0.01em;
  }

  .card-desc {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--ink-mid);
    line-height: 1.55;
    margin-bottom: 1rem;
    font-weight: 300;
  }

  .card-footer {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: var(--font-label);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-light);
    padding-top: 0.85rem;
    border-top: 1px solid var(--rule);
  }

  .card-footer svg {
    width: 12px;
    height: 12px;
    color: var(--navy);
  }
</style>
</head>
<body>

<div class="rule-bar"></div>

<nav>
  <div class="nav-brand">CA Proposition Tracker</div>
  <ul class="nav-links">
    <li><a href="#">Propositions</a></li>
    <li><a href="#">Analysis</a></li>
    <li><a href="#">Finance Data</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-eyebrow">Beta Release — 2026 Election Cycle</div>
  <h1>California Proposition<br><em>Predictor &amp; Analyzer</em></h1>
  <div class="hero-rule"></div>
  <p>Data-driven analysis for statewide ballot measures using real campaign finance data from Cal-Access and historical voting results from Ballotpedia and the CA Secretary of State.</p>
</section>

<!-- STATS STRIP -->
<div class="stats-strip">
  <div class="stat-item">
    <div class="stat-icon">Total</div>
    <div class="stat-number white">1,045</div>
    <div class="stat-label">Propositions</div>
  </div>
  <div class="stat-item">
    <div class="stat-icon">On Ballot</div>
    <div class="stat-number blue">4</div>
    <div class="stat-label">Upcoming</div>
  </div>
  <div class="stat-item">
    <div class="stat-icon">Enacted</div>
    <div class="stat-number green">592</div>
    <div class="stat-label">Passed</div>
  </div>
  <div class="stat-item">
    <div class="stat-icon">Rejected</div>
    <div class="stat-number red">449</div>
    <div class="stat-label">Failed</div>
  </div>
</div>

<!-- FILTER BAR -->
<div class="filter-section">
  <div class="search-wrap">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    <input class="search-input" type="text" placeholder="Search propositions…">
  </div>
  <select class="filter-select">
    <option>All Categories</option>
    <option>Government</option>
    <option>Civil Rights</option>
    <option>Taxation</option>
    <option>Education</option>
  </select>
  <select class="filter-select">
    <option>All Years</option>
    <option>2026</option>
    <option>2024</option>
    <option>2022</option>
  </select>
  <select class="filter-select">
    <option>All Status</option>
    <option>Upcoming</option>
    <option>Passed</option>
    <option>Failed</option>
  </select>
</div>

<!-- RESULTS HEADER -->
<div class="results-header">
  <div class="results-count">Showing <strong>1,045</strong> propositions</div>
  <div class="badge-row">
    <span class="badge badge-upcoming">4 Upcoming</span>
    <span class="badge badge-passed">592 Passed</span>
    <span class="badge badge-failed">449 Failed</span>
  </div>
</div>

<!-- CARDS -->
<div class="cards-grid">

  <div class="prop-card">
    <div class="card-accent-bar"></div>
    <div class="card-tags">
      <div class="tag-group">
        <span class="tag tag-upcoming">Upcoming</span>
        <span class="tag tag-gov">Government</span>
      </div>
      <div class="card-prop-id">SB42</div>
    </div>
    <div class="card-title">Proposition SB42</div>
    <div class="card-desc">Allow Public Financing of Election Campaigns Measure</div>
    <div class="card-footer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      Nov 2026
    </div>
  </div>

  <div class="prop-card">
    <div class="card-accent-bar"></div>
    <div class="card-tags">
      <div class="tag-group">
        <span class="tag tag-upcoming">Upcoming</span>
        <span class="tag tag-gov">Government</span>
      </div>
      <div class="card-prop-id">SCA1</div>
    </div>
    <div class="card-title">Proposition SCA1</div>
    <div class="card-desc">Eliminate Successor Election at a State Officer Recall Election…</div>
    <div class="card-footer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      Nov 2026
    </div>
  </div>

  <div class="prop-card">
    <div class="card-accent-bar red"></div>
    <div class="card-tags">
      <div class="tag-group">
        <span class="tag tag-upcoming">Upcoming</span>
        <span class="tag tag-civil">Civil Rights</span>
      </div>
      <div class="card-prop-id">ACA13</div>
    </div>
    <div class="card-title">Proposition ACA13</div>
    <div class="card-desc">Vote Requirements for Initiatives Requiring…</div>
    <div class="card-footer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      Nov 2026
    </div>
  </div>

</div>

</body>
</html>
