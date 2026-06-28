<script lang="ts">
    import './+page.css';
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