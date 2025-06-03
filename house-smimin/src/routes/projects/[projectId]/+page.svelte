<script lang="ts">
    let { data } = $props();
</script>

{#if data.project}
    <div class="project-details">
        <h1>{data.project.title}</h1>
        {#if data.project.image}
            <img src={`/${data.project.image}`} alt={data.project.title} class="project-image" />
        {/if}
        <div class="project-description">{@html data.project.description}</div>
        {#if data.project.githubLink}
            <a href={data.project.githubLink} target="_blank" rel="noopener noreferrer" class="project-link">
                View Project on GitHub
            </a>
        {/if}
        <!-- Add other project details here -->
    </div>
{:else}
    <div class="error-message">
        <h1>Error: Project Not Found</h1>
        <p>The project you are looking for does not exist or could not be loaded.</p>
    </div>
{/if}

<style>
    .project-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 2rem auto;
        padding: 2rem;
        max-width: 800px;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .project-details h1 {
        margin-bottom: 1.5rem;
        color: #333;
    }

    .project-image {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .project-description {
        margin-bottom: 1.5rem;
        line-height: 1.6;
        color: #555;
        max-width: 100%; /* Ensures HTML content doesn't overflow */
    }

    .project-description :global(p) {
        margin-bottom: 1em;
    }

    .project-link {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }

    .project-link:hover {
        background-color: #0056b3;
    }

    .error-message {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 2rem;
        padding: 2rem;
        color: #d9534f; /* Bootstrap danger color */
        background-color: #f2dede; /* Bootstrap danger background */
        border: 1px solid #ebccd1; /* Bootstrap danger border */
        border-radius: 4px;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .error-message h1 {
        margin-bottom: 0.5rem;
    }
</style>