<script lang="ts">
  	import './+page.css';
  	let { data } = $props();
</script>

<div class="container">
  <header>
    <h1 class="title">Ambition + Kreativitet > Kompetencer</h1>
    <!-- <p class="subtitle"></p> -->
  </header>
  
  <div class="project-list">
    {#each data.projects as project (project.id)}
      {#if project.githubLink}
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          class="project-link-wrapper"
        >
          <article class="project-card">
            <img 
              class="project-image" 
              src={project.image} 
              alt={"image of " + project.title}
              loading="lazy"
            />
            <div class="project-details">
              {#if project.date}
                <p class="project-date">{project.date}</p>
              {/if}
              <h2 class="project-title">{project.title}</h2>          
              {#if project.name}
                <h3 class="project-title">{project.name}</h3>
              {/if}
              <p class="project-description" style="white-space: pre-line;">{project.description}</p>
            </div>
          </article>
        </a>
      {:else}
        <article class="project-card">
          <img 
            class="project-image" 
            src={project.image} 
            alt={"image of " + project.title}
            loading="lazy"
          />
          <div class="project-details">
            {#if project.date}
              <p class="project-date">{project.date}</p>
            {/if}
            <h2 class="project-title">{project.title}</h2>          
            {#if project.name}
              <h3 class="project-title">{project.name}</h3>
            {/if}
            <p class="project-description" style="white-space: pre-line;">{project.description}</p>
          </div>
        </article>
      {/if}
    {/each}
  </div>
  
  <a href="/" class="back-button">
    <span class="back-arrow">←</span> Back to Home
  </a>
</div>
