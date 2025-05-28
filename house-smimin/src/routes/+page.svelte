<style>
  /* html, body, #svelte {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    box-sizing: border-box;
  } */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-height: 100dvh; /* Use dynamic viewport height for better mobile support */
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
  }
  .title {
    font-size: clamp(2rem, 5vw, 2.5rem); /* Responsive font size */
    margin-bottom: 0.5rem;
  }
  .subtitle {
    font-size: clamp(1rem, 2vw, 1.2rem); /* Responsive font size */
    margin-bottom: 1.5rem;
    color: #555;
  }
  .image {
    width: min(300px, 90vw);
    border-radius: 12px;
    margin-bottom: 2rem;
    height: auto;
    max-width: 100%;
    object-fit: cover;
  }
  .social-links {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .social-links a {
    margin: 0 0.5rem;
    color: #0a66c2;
    text-decoration: none;
    font-size: 1.5rem;
  }
  .footer {
    margin-top: 2rem;
    padding: 1rem 0 0 0;
    width: 100%;
    text-align: center;
    color: #888;
    font-size: 0.95rem;
    border-top: 1px solid #eee;
  }
  .network-graph {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.5rem;
    margin: 2.5rem 0 1.5rem 0;
    position: relative;
  }
  .network-node {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 1;
    width: 120px;
  }
  .network-node img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #0a66c2;
    margin-bottom: 0.5rem;
    background: #fff;
    box-shadow: 0 2px 8px rgba(10,102,194,0.08);
    transition: transform 0.2s;
  }
  .network-node img:hover {
    transform: scale(1.08);
    border-color: #004182;
  }
  .network-node-title {
    font-size: 1rem;
    color: #222;
    margin-top: 0.2rem;
  }
  /* Simple lines between nodes (for 3 nodes) */
  .network-graph::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 60%;
    height: 2px;
    background: #cce0f6;
    z-index: 0;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  @media (max-width: 600px) {
    .network-graph {
      flex-direction: column;
      gap: 1.5rem;
    }
    .network-graph::before {
      width: 2px;
      height: 60%;
    }
  }
</style>

<div class="container">
  <h1 class="title">House of Smimin</h1>
  <div class="subtitle">Simm, sobbers & lude4</div>
  <img class="image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Haus Bild" />

  <!-- Network Graph Navigation -->
  <div class="network-graph">
    <a class="network-node" href="/about">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80" alt="About" />
      <div class="network-node-title">About</div>
    </a>
    <a class="network-node" href="/gallery">
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80" alt="Gallery" />
      <div class="network-node-title">Gallery</div>
    </a>
    <a class="network-node" href="/contact">
      <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80" alt="Contact" />
      <div class="network-node-title">Contact</div>
    </a>
  </div>

  <div class="social-links">
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
      <!-- LinkedIn SVG icon -->
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
      </svg>
    </a>
  </div>
  <footer class="footer">
    &copy; {new Date().getFullYear()} Smimin &ndash; Contact: <a href="mailto:smath@outlook.dk">smath@outlook.dk</a>
  </footer>
</div>