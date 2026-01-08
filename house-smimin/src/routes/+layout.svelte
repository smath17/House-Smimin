<script lang="ts">
  import '../app.css';
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  let { children } = $props();
  let darkModeActive = $state(false);
  let mouseX = $state(0);
  let mouseY = $state(0);
  let mobileMenuOpen = $state(false);
  let audio: HTMLAudioElement | null = null;

  function toggleDarkMode() {
    darkModeActive = !darkModeActive;
    if (darkModeActive) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(error => console.error("Error playing sound:", error));
    }
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function handleMouseMove(event: MouseEvent) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      
      if (typeof Audio !== "undefined") {
        audio = new Audio('/sounds/light-switch.mp3');
        audio.load();
      }

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  });
</script>

<style>
  .layout-grid {
    display: grid;
    grid-template-rows: 1fr;
    min-height: 100dvh;
    background-color: var(--secondary-cream);
    position: relative;
  }

  .content-area {
    padding: 1rem;
    overflow-y: auto;
  }

  /* Mobile Menu Button - Half Circle */
  .mobile-menu-button {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 40px;
    background-color: var(--primary-green);
    border: none;
    border-radius: 40px 40px 0 0;
    cursor: pointer;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-light);
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
  }

  .mobile-menu-button:hover {
    background-color: var(--accent-red);
  }

  .mobile-menu-button.active {
    background-color: var(--accent-red);
  }

  /* Mobile Navigation */
  .mobile-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--secondary-cream);
    transform: translateY(100%);
    transition: transform 0.3s ease;
    z-index: 9999;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 -5px 20px rgba(0,0,0,0.3);
    padding: 2rem 1rem 6rem 1rem;
    max-height: 80vh;
    overflow-y: auto;
  }

  .mobile-nav.open {
    transform: translateY(0);
  }

  .mobile-nav-content {
    display: grid;
    grid-template-rows: auto auto auto auto;
    gap: 1rem;
    text-align: center;
  }

  .dark-mode-row {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 1rem;
    font-size: 2.2rem;
    justify-content: center;
  }

  .mobile-nav .dark-mode-row button,
  .mobile-nav .dark-mode-row a {
    aspect-ratio: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-nav .dark-mode-row button {
    font-size: inherit !important;
    padding: 0 !important;
  }

  .mobile-nav .dark-mode-row a {
    padding: 0 !important;
  }

  .mobile-nav a {
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 500;
    padding: 1rem;
    border-radius: 8px;
    background-color: var(--secondary-cream);
    transition: all 0.2s ease;
    display: block;
    border: 2px solid var(--primary-green);
  }

  .mobile-nav a:hover {
    background-color: var(--accent-orange);
    color: var(--text-light);
  }

  .mobile-nav a.active {
    background-color: var(--primary-green);
    color: var(--text-light);
  }

  .mobile-nav button {
    background-color: var(--secondary-cream);
    color: var(--text-primary);
    border: 2px solid var(--primary-green);
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    font-size: 1rem;
  }

  .mobile-nav button:hover {
    background-color: var(--accent-orange);
    color: var(--text-light);
  }

  .mobile-nav button.active {
    background-color: var(--primary-green);
    color: var(--text-light);
  }

  /* Backdrop */
  .mobile-menu-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 9998;
    cursor: pointer;
  }

  .mobile-menu-backdrop.open {
    opacity: 1;
    visibility: visible;
  }

  /* Dark Mode Spotlight */
  .dark-mode-spotlight {
    position: fixed;
    inset: 0;
    background: radial-gradient(
      circle 150px at var(--mouseX) var(--mouseY),
      transparent 0%,
      rgba(0, 0, 0, 0.95) 100%
    );
    pointer-events: none;
    z-index: 9998;
  }

  /* Desktop Navigation */
  .desktop-nav {
    display: none;
  }

  /* Tablet and Desktop */
  @media (min-width: 768px) {
    .layout-grid {
      grid-template-rows: auto 1fr;
    }

    .desktop-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background-color: var(--primary-green);
      padding: 0.75rem 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      flex-wrap: wrap;
    }

    .desktop-nav a {
      text-decoration: none;
      color: var(--text-light);
      font-weight: 500;
      padding: 0.5rem 0.75rem;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .desktop-nav a:hover,
    .desktop-nav a.active {
      background-color: var(--accent-orange);
      color: var(--text-primary);
    }

    .dropdown {
      position: relative;
    }

    .dropdown::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      height: 1rem;
      background: transparent;
      z-index: 999;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      top: calc(100% + 1rem);
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      min-width: 100px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      border-radius: 6px;
      z-index: 1000;
      border: 1px solid var(--border-color);
      padding: 0.25rem 0;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdown-content a {
      color: var(--text-primary);
      padding: 0.5rem 0.75rem;
      text-decoration: none;
      display: block;
      font-weight: 500;
      border-radius: 0;
      transition: background-color 0.2s ease;
      white-space: nowrap;
      text-align: center;
    }

    .dropdown-content a:hover {
      background-color: var(--secondary-cream);
      color: var(--text-primary);
    }

    .desktop-nav button {
      background-color: transparent;
      color: var(--text-light);
      border: 1px solid var(--text-light);
      padding: 0.5rem 0.75rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .desktop-nav button:not(.active):hover {
      background-color: var(--secondary-cream);
      color: var(--text-primary);
      border-color: var(--secondary-cream);
    }

    .desktop-nav button.active {
      background-color: var(--accent-red);
      color: var(--text-light);
      border-color: var(--accent-red);
    }

    .desktop-nav button.active:hover {
      background-color: var(--accent-red);
      border-color: var(--accent-red);
    }

    .content-area {
      padding: 2rem;
    }

    .mobile-menu-button,
    .mobile-nav,
    .mobile-menu-backdrop {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    .content-area {
      padding: 2rem 4rem;
    }
  }
</style>

<div class="layout-grid" class:dark-mode={darkModeActive}>
  {#if darkModeActive}
    <div
      class="dark-mode-spotlight"
      style="--mouseX:{mouseX}px; --mouseY:{mouseY}px;"
    ></div>
  {/if}

  <!-- Desktop Navigation -->
  <nav class="desktop-nav">
    <a href="/" class:active={page.url.pathname === '/'}>Hjem</a>
    <div class="dropdown">
      <a href="/simon" class:active={page.url.pathname === '/simon' || page.url.pathname.startsWith('/simon/')}>Simon</a>
      <div class="dropdown-content">
        <a href="/simon/steder">🗺️ Steder</a>
      </div>
    </div>
    <a href="/projekter" class:active={page.url.pathname === '/projekter'}>Projekter</a>
    <button onclick={toggleDarkMode} class:active={darkModeActive}>
      {darkModeActive ? 'Light Mode' : 'Dark Mode'}
    </button>
  </nav>

  <!-- Main Content Area -->
  <main class="content-area">
    {@render children()}
  </main>

  <!-- Mobile Menu Button -->
  <button class="mobile-menu-button" class:active={mobileMenuOpen} onclick={toggleMobileMenu}>
    {mobileMenuOpen ? '✕' : '☰'}
  </button>

  <!-- Mobile Menu Backdrop -->
  {#if mobileMenuOpen}
    <div
      class="mobile-menu-backdrop open"
      onclick={toggleMobileMenu}
      role="button"
      tabindex="0"
      aria-label="Luk mobilmenu"
      onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMobileMenu(); } }}
    ></div>
  {/if}

  <!-- Mobile Navigation -->
  <nav class="mobile-nav" class:open={mobileMenuOpen}>
    <div class="mobile-nav-content">
      <!-- Row 1: Home -->
      <a href="/" class:active={page.url.pathname === '/'} onclick={toggleMobileMenu}>Hjem</a>
      
      <!-- Row 3: Projects -->
      <a href="/projekter" class:active={page.url.pathname === '/projekter'} onclick={toggleMobileMenu}>Projekter</a>
      
      <!-- Row 4: Dark Mode (3 columns) -->
      <div class="dark-mode-row">
        <button onclick={toggleDarkMode} class:active={darkModeActive}>
          <span>💡</span>
        </button>
        <a href="/simon/steder" class:active={page.url.pathname === '/simon/steder'} onclick={toggleMobileMenu}>🗺️</a>
        <a href="/simon" class:active={page.url.pathname === '/simon'} onclick={toggleMobileMenu}>🤓</a>
      </div>
    </div>
  </nav>
</div>