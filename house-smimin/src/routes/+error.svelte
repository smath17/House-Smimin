<script>
    import { page } from '$app/state';
</script>

<div class="error-container">
    <h1>{page.status}</h1>
    <p>{page.error?.message || 'Oops! Something went wrong.'}</p>
    {#if page.status === 404}
        <p>The page you're looking for doesn't exist.</p>
    {/if}
    <img src="somon.png" alt="Error illustration" class="error-image"/>
</div>

<style>
    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center; /* Keeps content horizontally centered */
        justify-content: flex-start; /* Aligns content to the top */
        height: 100vh;
        text-align: center;
        font-family: Arial, sans-serif;
        position: relative;
        overflow: hidden;
        padding-top: 2rem; /* Adds some space from the top edge */
        box-sizing: border-box; /* Ensures padding is included in height calculation */
    }

    .error-container::before,
    .error-container::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 200%; /* Make it long enough to cross the container */
        height: 50px; /* Adjust tape thickness */
        background: repeating-linear-gradient(
            45deg,
            #ffd700, /* Yellow */
            #ffd700 20px, /* Yellow stripe width */
            #000000 20px, /* Black */
            #000000 40px /* Black stripe width */
        );
        z-index: 1; /* Tape above image */
    }

    .error-container::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    .error-container::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    /* Ensure text is above the tape, and image is below tape */
    h1, p {
        position: relative;
        z-index: 2; /* Text above tape */
    }

    .error-image {
        position: relative;
        z-index: 0; /* Image below tape */
        margin-top: 2rem;
        max-width: 300px; /* Adjust as needed */
        height: auto;
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

    /* .error-image specific z-index is now handled above */
    /* Remove .error-image from the grouped z-index rule if it was there */
</style>