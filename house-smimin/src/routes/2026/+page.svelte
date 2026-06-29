<script lang="ts">
  import './+page.css';
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
