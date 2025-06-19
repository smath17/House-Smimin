<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 50px; /* Added padding to space content from nav */
    /* padding-left: 30px; */
    /* padding-right: 30px; */
    padding-bottom: 50px; /* Keep bottom padding for footer spacing */
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
    max-width: 700px; /* Max width for the main content */
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
    height: auto;
    max-width: 100%;
    object-fit: cover;
  }
  .image-credit {
    font-size: 0.8rem;
    color: #777;
    margin-top: 0.8rem; /* Adjust to pull it closer to the image */
    margin-bottom: 2rem;
  }
  .curiosity-text {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }
  .social-links {
    margin-top: 0.5rem; /* Reduced margin-top */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .social-links a {
    margin: 0 5px;
  }
  .footer {
    margin-top: 2rem;
    padding: 1rem 0 0 0;
    width: 100%;
    text-align: center;
    color: #555555;
    font-size: 0.95rem;
  }

  @media (max-width: 600px) {
    .container { /* Adjusted padding for smaller screens */
      padding-top: 1.5px;
      padding-left: 1px;
      padding-right: 1px;
      padding-bottom: 1px;
    }
  }
</style>

<div class="container">

    <h1 class="title">Smimins Super Seje Side</h1>
    <div class="subtitle">Et værested til features ingen har bedt om, og samle tidligere projekter.</div>
    <img class="image" src="images/simp.webp" alt="Simon bonk" />
    <p class="image-credit">Image by Mikkel Mathiasen</p>

    <p class="curiosity-text">Til de nysgerrige 👇</p>

    <div class="social-links">
      <a href="https://www.linkedin.com/in/smath-cs/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#0e76a8" aria-hidden="true">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
        </svg>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100007921995524" target="_blank" rel="noopener" aria-label="Facebook">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#0a66c2" aria-hidden="true">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      </a>
      <a href="https://discord.com/users/332601523639025666" target="_blank" rel="noopener" aria-label="Discord">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#5865F2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
        </svg>
      </a>

      <a href="https://github.com/smath17" target="_blank" rel="noopener" aria-label="GitHub">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#181717" aria-hidden="true">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>

      <a href="https://steamcommunity.com/profiles/76561197986771797/" target="_blank" rel="noopener" aria-label="Steam">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#000000" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
        </svg>
      </a>
      <a href="https://open.spotify.com/user/21lnsubw3y42z4o24nvk7kfea?si=2b617383611c45a5" target="_blank" rel="noopener" aria-label="Spotify">
        <svg width="32" height="32" viewBox="0 0 496 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"/>
          <path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z"/>
        </svg>
      </a>
    </div>
    <footer class="footer">
      &copy; {new Date().getFullYear()} Simon Mathiasen &ndash; Kontakt: <a href="mailto:smath@outlook.dk?subject=House%20of%20Smimin">smath@outlook.dk</a>
    </footer>
</div>