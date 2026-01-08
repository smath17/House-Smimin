<script lang="ts">
  let iframeLoaded = $state(false);
  
  function handleIframeLoad() {
    iframeLoaded = true;
  }
</script>


<div class="trello-container">
  <h1 class="page-title">Års-listen</h1>
  
  <div class="trello-embed-wrapper">
    {#if !iframeLoaded}
      <div class="loading-state">
        <p>Indlæser Trello board...</p>
      </div>
    {/if}
    
    <iframe
      src="https://trello.com/b/oFblwoWT.html"
      class="trello-iframe"
      class:loaded={iframeLoaded}
      onload={handleIframeLoad}
      title="2026 Trello Board"
    ></iframe>
  </div>
</div>

<style>
  .trello-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0rem 1rem;
  }

  .page-title {
    font-size: clamp(2rem, 5vw, 2.5rem);
    margin: 0 0 1rem 0;
    text-align: center;
    color: var(--text-primary);
  }

  .trello-embed-wrapper {
    position: relative;
    width: 100%;
    height: calc(100vh - 200px);
    min-height: 600px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    background-color: white;
  }

  .loading-state {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  .loading-state p {
    font-size: 1.2rem;
    color: #555;
  }

  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .trello-iframe {
    width: 100%;
    height: 100%;
    border: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .trello-iframe.loaded {
    opacity: 1;
  }

  @media (max-width: 600px) {
    .trello-container {
      padding: 1rem 0.5rem;
    }

    .page-title {
      margin-bottom: 1rem;
    }

    .trello-embed-wrapper {
      height: calc(100vh - 150px);
      min-height: 400px;
      border-radius: 8px;
    }
  }
</style>
