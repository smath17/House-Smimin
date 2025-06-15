<!-- TODO: Improve cursor interaction with tape -->
<script>
    import { page } from '$app/state';
    import { onMount, onDestroy } from 'svelte';

    let tape1_x = 0;
    let tape1_y = 0;
    const tape1_rotation = 45;

    let tape2_x = 0;
    let tape2_y = 0;
    const tape2_rotation = -45;

    /**
     * @type {{ startMouseX: any; startMouseY: any; tapeId: any; startTapeX: any; startTapeY: any; } | null}
     */
    let dragging = null; // { tapeId: 'tape1' | 'tape2', startMouseX, startMouseY, startTapeX, startTapeY }

    /**
     * @param {MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }} event
     * @param {string} tapeId
     */
    function handleMouseDown(event, tapeId) {
        event.preventDefault();
        const currentTapeX = tapeId === 'tape1' ? tape1_x : tape2_x;
        const currentTapeY = tapeId === 'tape1' ? tape1_y : tape2_y;
        dragging = {
            tapeId,
            startMouseX: event.clientX,
            startMouseY: event.clientY,
            startTapeX: currentTapeX,
            startTapeY: currentTapeY,
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    /**
     * @param {{ clientX: number; clientY: number; }} event
     */
    function handleMouseMove(event) {
        if (!dragging) return;
        const dx = event.clientX - dragging.startMouseX;
        const dy = event.clientY - dragging.startMouseY;

        if (dragging.tapeId === 'tape1') {
            tape1_x = dragging.startTapeX + dx;
            tape1_y = dragging.startTapeY + dy;
        } else {
            tape2_x = dragging.startTapeX + dx;
            tape2_y = dragging.startTapeY + dy;
        }
    }

    function handleMouseUp() {
        if (!dragging) return;
        dragging = null;
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    }

    // Ensure listeners are cleaned up if component is destroyed while dragging
    onDestroy(() => {
        if (dragging) {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    });

</script>

<div class="error-container">
    <h1>{page.status}</h1>
    <p>{page.error?.message || 'Oops! Something went wrong.'}</p>
    {#if page.status === 404}
        <p>The page you're looking for doesn't exist.</p>
    {/if}
    <img src="images/somon.webp" alt="Error illustration" class="error-image"/>

    <div
        class="tape"
        style="transform: translate(-50%, -50%) translate({tape1_x}px, {tape1_y}px) rotate({tape1_rotation}deg); cursor: {dragging && dragging.tapeId === 'tape1' ? 'grabbing' : 'grab'};"
        on:mousedown={(e) => handleMouseDown(e, 'tape1')}
        role="button"
        tabindex="0"
        aria-label="Drag tape 1"
    ></div>
    <div
        class="tape"
        style="transform: translate(-50%, -50%) translate({tape2_x}px, {tape2_y}px) rotate({tape2_rotation}deg); cursor: {dragging && dragging.tapeId === 'tape2' ? 'grabbing' : 'grab'};"
        on:mousedown={(e) => handleMouseDown(e, 'tape2')}
        role="button"
        tabindex="0"
        aria-label="Drag tape 2"
    ></div>
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

    .tape {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 90%; /* Make it long enough to cross the container */
        height: 50px; /* Adjust tape thickness */
        background: repeating-linear-gradient(
            90deg, /* Changed from 45deg to 90deg */
            #ffd700, /* Yellow */
            #ffd700 20px, /* Yellow stripe width */
            #000000 20px, /* Black */
            #000000 40px /* Black stripe width */
        );
        z-index: 1; /* Tape above image, below text */
        user-select: none; /* Prevent text selection on tape */
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
</style>