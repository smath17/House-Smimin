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
    /* justify-content: center; */ 
    /* min-height: 100vh; */ /* Handled by layout */
    /* min-height: 100dvh; */ /* Handled by layout */
    text-align: center;
    padding-top: 2rem; /* Added padding to space content from nav */
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem; /* Keep bottom padding for footer spacing */
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
    max-width: 700px; /* Max width for the main content */
  }

  /* .main-nav CSS removed */
  /* .main-nav a CSS removed */
  /* .main-nav a:hover, .main-nav a.active CSS removed */
  
  /* .content-wrapper removed, .container now serves this purpose */

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
  .image-credit {
    font-size: 0.8rem;
    color: #777;
    margin-top: -1.5rem; /* Adjust to pull it closer to the image */
    margin-bottom: 2rem; /* Keep original bottom margin */
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
    color: #555555;
    font-size: 0.95rem;
  }
  /* Network Graph CSS removed */

  @media (max-width: 600px) {
    /* .main-nav media queries removed */
    .container { /* Adjusted padding for smaller screens */
      padding-top: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
    }
    /* Network graph media query removed */
  }
</style>

<div class="container">
  <!-- Navigation HTML removed -->

  <!-- <div class="content-wrapper"> --> <!-- This div is no longer needed -->
    <h1 class="title">House of Smimin</h1>
    <div class="subtitle">Simse, Sobbers & Simsalabim</div>
    <img class="image" src="simp.png" alt="Simon bonk" />
    <p class="image-credit">Image by Mikkel Mathiasen</p>

    <div class="social-links">
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <!-- LinkedIn SVG icon -->
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
        </svg>
      </a>
    </div>
    <footer class="footer">
      &copy; {new Date().getFullYear()} Simon Mathiasen &ndash; Contact: <a href="mailto:smath@outlook.dk">smath@outlook.dk</a>
    </footer>
  <!-- </div> -->
</div>