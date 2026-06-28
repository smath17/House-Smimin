<!-- TODO: Improve cursor interaction with tape -->
<script>
    import './+error.css';
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