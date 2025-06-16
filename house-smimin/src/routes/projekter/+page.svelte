<script lang="ts">
  	let { data } = $props();
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    min-height: 100dvh;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    box-sizing: border-box;
  }
  
  header {
    text-align: center;
    margin-bottom: 3rem;
    width: 100%;
  }
  
  .title {
    font-size: clamp(2rem, 5vw, 2.5rem);
    margin-bottom: 0.5rem;
    color: #222;
  }
  
  .project-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .project-link-wrapper { /* Added for the anchor tag wrapper */
    display: block; /* Makes the link take up the full card space */
    text-decoration: none; /* Removes underline from the link */
    color: inherit; /* Ensures text color is not changed by the link */
  }
  
  .project-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  .project-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  .project-details {
    padding: 1.5rem;
    position: relative; /* Added for positioning context */
  }
  
  .project-date { /* Added for project date */
    position: absolute;
    top: 0.75rem; 
    right: 1.5rem;
    font-size: 0.8rem;
    color: #777;
  }

  .project-title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: #0a66c2;
  }

  h3.project-title {
    font-size: 1.1rem; /* Smaller than h2 */
    color: #222; /* Black color */
    margin-top: -0.5rem; /* Adjust spacing if needed */
    margin-bottom: 0.75rem;
  }
  
  .project-description {
    color: #444;
    line-height: 1.6;
  }
  
  .back-button {
    margin-top: 3rem;
    padding: 0.75rem 1.5rem;
    background-color: #0a66c2;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .back-button:hover {
    background-color: #084e96;
  }
  
  .back-arrow {
    font-size: 1.2rem;
  }
  
  @media (min-width: 768px) {
    .project-card {
      display: flex;
      height: 250px;
    }
    
    .project-image {
      width: 40%;
      height: 100%;
    }
    
    .project-details {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    /* Alternate layout for even-numbered projects */
    /* Apply to .project-card if its wrapper (a) is even, or if the card itself (article) is even */
    .project-list > a.project-link-wrapper:nth-child(even) .project-card,
    .project-list > article.project-card:nth-child(even) {
      flex-direction: row-reverse;
    }

    /* Apply to .project-date if it's within any even child of .project-list */
    .project-list > *:nth-child(even) .project-date {
      right: auto; /* Unset the default right positioning */
      left: 1.5rem; /* Position to the left */
    }
  }
  
  @media (max-width: 767px) {
    .container {
      padding: 1.5rem;
    }
    
    header {
      margin-bottom: 2rem;
    }
  }
</style>

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
