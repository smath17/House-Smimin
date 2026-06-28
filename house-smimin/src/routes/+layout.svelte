<script lang="ts">
  import '../app.css';
  import './+layout.css';
  import { resolve } from '$app/paths';
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

<div class="layout-grid" class:dark-mode={darkModeActive}>
  {#if darkModeActive}
    <div
      class="dark-mode-spotlight"
      style="--mouseX:{mouseX}px; --mouseY:{mouseY}px;"
    ></div>
  {/if}

  <!-- Desktop Navigation -->
  <nav class="desktop-nav">
    <a href={resolve('/')} class:active={page.url.pathname === '/'}>Hjem</a>
    <div class="dropdown">
      <a href={resolve('/simon')} class:active={page.url.pathname === '/simon' || page.url.pathname.startsWith('/simon/')}>Simon</a>
      <div class="dropdown-content">
        <a href={resolve('/simon/steder')}>🗺️ Steder</a>
      </div>
    </div>
    <a href={resolve('/projekter')} class:active={page.url.pathname === '/projekter'}>Projekter</a>
    <a href={resolve('/recipes')} class:active={page.url.pathname === '/recipes' || page.url.pathname.startsWith('/recipes/')}>Opskrifter</a>
    <a href={resolve('/2026')} class:active={page.url.pathname === '/2026'}>2026</a>
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
      <a href={resolve('/')} class:active={page.url.pathname === '/'} onclick={toggleMobileMenu}>Hjem</a>
      
      <!-- Row 2: Projects -->
      <a href={resolve('/projekter')} class:active={page.url.pathname === '/projekter'} onclick={toggleMobileMenu}>Projekter</a>
      
      <!-- Row 3: Recipes -->
      <a href={resolve('/recipes')} class:active={page.url.pathname === '/recipes' || page.url.pathname.startsWith('/recipes/')} onclick={toggleMobileMenu}>Opskrifter</a>
      
      <!-- Row 4: 2026 -->
      <a href={resolve('/2026')} class:active={page.url.pathname === '/2026'} onclick={toggleMobileMenu}>2026</a>
      
      <!-- Row 5: Dark Mode (3 columns) -->
      <div class="dark-mode-row">
        <button onclick={toggleDarkMode} class:active={darkModeActive}>
          <span>💡</span>
        </button>
        <a href={resolve('/simon/steder')} class:active={page.url.pathname === '/simon/steder'} onclick={toggleMobileMenu}>🗺️</a>
        <a href={resolve('/simon')} class:active={page.url.pathname === '/simon'} onclick={toggleMobileMenu}>🤓</a>
      </div>
    </div>
  </nav>
</div>