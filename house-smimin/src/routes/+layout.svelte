<script lang="ts">
  import '../app.css';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	let { children } = $props();
	let darkModeActive = $state(false);
	let mouseX = $state(0);
	let mouseY = $state(0);
	let audio: HTMLAudioElement | null = null;

	function toggleDarkMode() {
		darkModeActive = !darkModeActive;
		if (darkModeActive) {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}

		// Play sound
		if (audio) {
			audio.currentTime = 0; // Rewind to start if playing again
			audio.play().catch(error => console.error("Error playing sound:", error));
		}
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
				audio.load(); // Some browsers might need this to explicitly start loading
			}

			return () => {
				window.removeEventListener('mousemove', handleMouseMove);
			};
		}
	});
</script>

<!-- svelte-ignore css_unused_selector -->
<style>
  @import '../app.css';

  .layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: 100dvh;
    background-color: #e0e0e0; /* Simple light concrete gray for general background */
  }

  .main-nav {
    width: 100%;
    background-color: #f8f9fa; /* Standard light background for nav */
    /* background-image, border-bottom removed */
    padding: 0.75rem 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    position: relative; /* Ensure nav is on top of layout background */
    z-index: 10; 
  }

  .main-nav a {
    text-decoration: none;
    color: #0a66c2; /* Original link color */
    font-weight: 500;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .main-nav a:hover,
  .main-nav a.active {
    background-color: #0a66c2; 
    color: white;
  }

  /* Base style for the dark mode button */
  .main-nav button {
    background-color: #f8f9fa; /* Match nav background */
    color: #0a66c2; /* Link color */
    border: 1px solid #0a66c2; /* Border to differentiate */
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }

  /* Hover style for the button when not active */
  .main-nav button:not(.active):hover {
    background-color: #e9ecef; /* Slightly darker nav background */
    color: #0056b3; /* Darker blue */
    border-color: #0056b3;
  }

  /* Style for the button when dark mode is active */
  .main-nav button.active {
    background-color: #0a66c2; /* Highlighted background */
    color: white;
    border-color: #0a66c2;
  }

  /* Hover style for the button when active */
  .main-nav button.active:hover {
    background-color: #0855a0; /* Darker highlighted background */
    border-color: #0855a0;
  }

  .content-area {
    flex-grow: 1;
    width: 100%;
    /* Padding/margins for content will be handled by individual pages or a nested layout */
    /* If content areas should have a different background (e.g., white cards), 
       that should be styled within the page components or here if globally desired. */
  }

  .dark-mode-spotlight {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
      circle 150px at var(--mouseX) var(--mouseY),
      transparent 0%, /* Percentage from circe center that is not affected by gradient */
      rgba(0, 0, 0, 0.95) 100%
    );
    pointer-events: none; /* Allows clicks to pass through */
    z-index: 9999; /* Ensure it's on top */
  }
  
  @media (max-width: 600px) {
    .main-nav {
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;
    }
    .main-nav a {
      width: 100%;
      text-align: center;
    }
  }
</style>

<div class="layout-container" class:dark-mode={darkModeActive}>
  {#if darkModeActive}
    <div
      class="dark-mode-spotlight"
      style="--mouseX:{mouseX}px; --mouseY:{mouseY}px;"
    ></div>
  {/if}
  <nav class="main-nav">
    <a href="/" class:active={page.url.pathname === '/'}>Hjem</a>
    <a href="/simon" class:active={page.url.pathname === '/about'}>Simon</a>
    <a href="/projects" class:active={page.url.pathname === '/projects'}>Projekter</a>
    <a href="/404" class:active={page.url.pathname === '/contact'}>4̷̮͉̔̏͜͠0̸̱̆͊̓̎͌͌͊̚4̸̡͍͍̝̰͔̣̿̋̅̃̐̈̓̑</a>
    <button onclick={toggleDarkMode} class:active={darkModeActive}>
      {darkModeActive ? 'Light Mode' : 'Dark Mode'}
    </button>
  </nav>
  <main class="content-area">
    {@render children()}
  </main>
</div>
