<script>
    import { page } from '$app/stores';
</script>

<div class="error-container">
    <h1>{$page.status}</h1>
    <p>{$page.error?.message || 'Oops! Something went wrong.'}</p>
    {#if $page.status === 404}
        <p>The page you're looking for doesn't exist.</p>
    {/if}
    <img src="somon.png" alt="Error illustration" class="error-image"/>
</div>

<style>
    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;
        text-align: center;
        font-family: Arial, sans-serif;
    }

    h1 {
        font-size: 5rem;
        margin-bottom: 0.5rem;
        color: #333;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #666;
    }

    .error-image {
        margin-top: 2rem;
        max-width: 300px; /* Adjust as needed */
        height: auto;
    }

    a {
        font-size: 1rem;
        color: #007bff;
        text-decoration: none;
    }
</style>