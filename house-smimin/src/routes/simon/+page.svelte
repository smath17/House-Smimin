<div class="simon-container">
  <div class="character-section">
    <img 
      src="/images/sketchmon.webp" 
      alt="Sketchmon" 
      class="sketchmon-image"
    />
    <!-- Podium: offset to the right and wider -->
    <!-- <div style="position: absolute; left: 20px; top: calc(100% - 3px); width: 400px; display: flex; justify-content: center; pointer-events: none;">
      <div style="background: #fde047; width: 100%; height: 400px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; align-items: flex-end; justify-content: center;">
      </div>
    </div> -->
    <!-- <div style="position: absolute; right: 500px; top: calc(100% - 80px); width: 350px; display: flex; justify-content: center; pointer-events: none;">
      <div style="background: #C0C0C0; width: 100%; height: 400px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; align-items: flex-end; justify-content: center;">
      </div>
    </div> -->
  </div>
  <div class="speech-bubble">
    <!-- Speech Bubble Tail (Border) -->
    <div class="bubble-tail-border"></div>
    <!-- Speech Bubble Tail (Fill) -->
    <div class="bubble-tail-fill"></div>
      
    <h2 class="question">
      Figuren er ikke baseret på mig, selvom man kunne tro det. Den er dog inkluderet for dens likeness
      <br />
      Den kommer fra Google SketchUp, hvor den bruges som skala model.
    </h2>
  </div>
</div>

<style>
  .simon-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    gap: 2rem;
    margin-top: 2rem;
  }

  .character-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex-shrink: 1;
  }

  .sketchmon-image {
    width: min(350px, 40vw);
    height: auto;
    display: block;
    max-width: 100%;
  }

  .speech-bubble {
    position: relative;
    background: white;
    border: 2px solid black;
    border-radius: 10px;
    padding: 0.5rem;
    margin-left: -60px;
    z-index: 1;
    flex-shrink: 0;
    max-width: min(300px, 50vw);
  }

  .bubble-tail-border {
    position: absolute;
    top: 70px;
    left: -32px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 17px 30px 17px 0;
    border-color: transparent black transparent transparent;
  }

  .bubble-tail-fill {
    position: absolute;
    top: 72px;
    left: -30px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 28px 15px 0;
    border-color: transparent white transparent transparent;
  }

  .question {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    color: #333;
  }

  @media (max-width: 600px) {
    .simon-container {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
    }

    .sketchmon-image {
      width: min(280px, 70vw);
    }

    .speech-bubble {
      margin-left: 0;
      max-width: 90vw;
    }

    .bubble-tail-border,
    .bubble-tail-fill {
      display: none;
    }

    .question {
      font-size: 1rem;
    }
  }
</style>
