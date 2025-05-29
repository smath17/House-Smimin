<script>
  // Sample project data - replace with real data later
  const projects = [
    {
      id: 1,
      title: "House Renovation",
      description: "Complete renovation of the kitchen and living areas with modern design elements.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
      alt: "Modern kitchen renovation"
    },
    {
      id: 2,
      title: "Garden Design",
      description: "Landscaping project featuring native plants and sustainable water features.",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
      alt: "Beautiful garden design"
    },
    {
      id: 3,
      title: "Solar Panel Installation",
      description: "Renewable energy upgrade with rooftop solar panels for sustainable power generation.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
      alt: "Solar panel installation"
    },
    {
      id: 4,
      title: "Smart Home Integration",
      description: "Complete home automation system with voice control and energy-efficient features.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      alt: "Smart home devices"
    }
  ];
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
  
  .subtitle {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .project-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
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
  }
  
  .project-title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: #0a66c2;
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
    .project-card:nth-child(even) {
      flex-direction: row-reverse;
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
    <h1 class="title">Our Projects</h1>
    <p class="subtitle">Explore our latest work and creative endeavors at House of Smimin</p>
  </header>
  
  <div class="project-list">
    {#each projects as project (project.id)}
      <article class="project-card">
        <img 
          class="project-image" 
          src={project.image} 
          alt={project.alt}
          loading="lazy"
        />
        <div class="project-details">
          <h2 class="project-title">{project.title}</h2>
          <p class="project-description">{project.description}</p>
        </div>
      </article>
    {/each}
  </div>
  
  <a href="/" class="back-button">
    <span class="back-arrow">←</span> Back to Home
  </a>
</div>
