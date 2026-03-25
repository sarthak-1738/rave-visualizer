<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RAVE.EXE — Visual Sound Machine</title>
<meta name="description" content="Drop a track. Watch it explode. Real-time audio visualiser that goes absolutely unhinged.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Custom cursor -->
<div class="cursor" id="cursor"></div>
<div class="cursor-trail" id="cursor-trail"></div>

<!-- Noise overlay -->
<div class="noise"></div>

<!-- NAV -->
<nav class="nav" id="nav">
  <a href="index.html" class="nav-logo">RAVE<span>.EXE</span></a>
  <div class="nav-links">
    <a href="#about">ABOUT</a>
    <a href="#features">FEATURES</a>
    <a href="visualiser.html" class="nav-cta">LAUNCH APP →</a>
  </div>
  <button class="nav-hamburger" id="hamburger">
    <span></span><span></span>
  </button>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-bg">
    <canvas id="hero-canvas"></canvas>
  </div>

  <div class="hero-content">
    <div class="hero-tag">
      <span class="dot"></span>
      REAL-TIME AUDIO VISUALISER
    </div>
    <h1 class="hero-title">
      <span class="line" data-delay="0">DROP</span>
      <span class="line accent" data-delay="100">THE</span>
      <span class="line" data-delay="200">TRACK.</span>
    </h1>
    <p class="hero-sub">Watch your music become a weapon of mass visual destruction. Five scenes. Real-time BPM. Goes absolutely unhinged.</p>
    <div class="hero-actions">
      <a href="visualiser.html" class="btn-primary">
        <span>LAUNCH VISUALISER</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="#features" class="btn-ghost">SEE FEATURES</a>
    </div>
    <div class="hero-stats">
      <div class="stat"><span class="stat-num">5</span><span class="stat-lbl">Visual Scenes</span></div>
      <div class="stat-divider"></div>
      <div class="stat"><span class="stat-num">∞</span><span class="stat-lbl">BPM Detected</span></div>
      <div class="stat-divider"></div>
      <div class="stat"><span class="stat-num">0ms</span><span class="stat-lbl">Latency</span></div>
    </div>
  </div>

  <div class="hero-scroll">
    <div class="scroll-line"></div>
    <span>SCROLL</span>
  </div>
</section>

<!-- PREVIEW STRIP -->
<div class="scene-strip" id="features">
  <div class="scene-strip-inner">
    <div class="scene-card" style="--accent:#ff006e">
      <div class="scene-card-num">01</div>
      <div class="scene-card-visual plasma-preview"></div>
      <div class="scene-card-name">PLASMA</div>
      <div class="scene-card-desc">Psychedelic color fields that breathe with your bass</div>
    </div>
    <div class="scene-card" style="--accent:#8338ec">
      <div class="scene-card-num">02</div>
      <div class="scene-card-visual laser-preview"></div>
      <div class="scene-card-name">LASERS</div>
      <div class="scene-card-desc">Club-grade beam rotation synced to every beat</div>
    </div>
    <div class="scene-card" style="--accent:#00f5d4">
      <div class="scene-card-num">03</div>
      <div class="scene-card-visual tunnel-preview"></div>
      <div class="scene-card-name">TUNNEL</div>
      <div class="scene-card-desc">Infinite hex warp that accelerates with your drops</div>
    </div>
    <div class="scene-card" style="--accent:#ffbe0b">
      <div class="scene-card-num">04</div>
      <div class="scene-card-visual particle-preview"></div>
      <div class="scene-card-name">PARTICLES</div>
      <div class="scene-card-desc">200-node swarm that explodes on transients</div>
    </div>
    <div class="scene-card" style="--accent:#fb5607">
      <div class="scene-card-num">05</div>
      <div class="scene-card-visual bars-preview"></div>
      <div class="scene-card-name">BARS</div>
      <div class="scene-card-desc">Full spectrum analyzer with mirror reflection</div>
    </div>
  </div>
</div>

<!-- ABOUT / HOW IT WORKS -->
<section class="about" id="about">
  <div class="about-grid">
    <div class="about-left">
      <div class="section-tag">WHAT IS THIS</div>
      <h2 class="about-title">Your music,<br><em>visualized</em><br>in real time.</h2>
      <p class="about-body">RAVE.EXE uses the Web Audio API to analyze your track frequency-by-frequency — bass, mids, highs — and maps every millisecond of sound into exploding visuals. No plugins. No install. Just a browser and a banger.</p>
      <a href="visualiser.html" class="btn-primary" style="margin-top:2rem;display:inline-flex">
        <span>TRY IT NOW</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>
    <div class="about-right">
      <div class="feature-list">
        <div class="feature-item">
          <div class="feature-icon" style="--fi:#ff006e">♪</div>
          <div>
            <div class="feature-title">Upload any audio</div>
            <div class="feature-desc">MP3, WAV, OGG, FLAC — drop it and watch it go</div>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon" style="--fi:#8338ec">◉</div>
          <div>
            <div class="feature-title">Live mic input</div>
            <div class="feature-desc">Point it at your speakers at a party. Instant visuals</div>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon" style="--fi:#00f5d4">⟳</div>
          <div>
            <div class="feature-title">Auto BPM detection</div>
            <div class="feature-desc">Tracks your tempo in real time. Adapts on every drop</div>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon" style="--fi:#ffbe0b">⚡</div>
          <div>
            <div class="feature-title">Zero latency</div>
            <div class="feature-desc">Runs entirely in your browser. No server. No lag</div>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon" style="--fi:#fb5607">◈</div>
          <div>
            <div class="feature-title">FX chain</div>
            <div class="feature-desc">Strobe, mirror, invert — stack them for chaos</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA SECTION -->
<section class="cta-section">
  <div class="cta-bg-text">RAVE</div>
  <div class="cta-content">
    <h2 class="cta-title">Ready to<br><span class="cta-glitch" data-text="LOSE IT?">LOSE IT?</span></h2>
    <p class="cta-sub">Upload a track. Hit fullscreen. Turn it up.</p>
    <a href="visualiser.html" class="btn-primary btn-large">
      <span>OPEN RAVE.EXE</span>
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-logo">RAVE<span>.EXE</span></div>
    <div class="footer-mid">Built for the loud ones. Works in Chrome + Firefox.</div>
    <div class="footer-right">NO COOKIES. NO TRACKING. JUST VIBES.</div>
  </div>
</footer>

<script src="main.js"></script>
</body>
</html>
