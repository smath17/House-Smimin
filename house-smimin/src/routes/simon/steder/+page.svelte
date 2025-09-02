<script lang="ts">
  import { onMount } from 'svelte';

  let mapContainer: HTMLDivElement;

  onMount(() => {
    // Initialize Google Map
    if (typeof window !== 'undefined' && (window as any).google && (window as any).google.maps) {
      initMap();
    } else {
      // Load Google Maps API if not already loaded
      loadGoogleMapsAPI();
    }
  });

  function loadGoogleMapsAPI() {
    if (typeof window === 'undefined') return;
    
    // Get API key from environment variable
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    
    if (!apiKey) {
      // Show a placeholder map if no API key is provided
      showPlaceholderMap();
      return;
    }
    
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    // Set up the callback function globally
    (window as any).initMap = initMap;
  }

  function showPlaceholderMap() {
    if (!mapContainer) return;
    
    mapContainer.innerHTML = `
      <div style="
        width: 100%; 
        height: 100%; 
        background: linear-gradient(45deg, #e8f5e8 25%, transparent 25%), 
                    linear-gradient(-45deg, #e8f5e8 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #e8f5e8 75%), 
                    linear-gradient(-45deg, transparent 75%, #e8f5e8 75%);
        background-size: 20px 20px;´´
        background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #666;
        font-family: Arial, sans-serif;
      ">
        <div style="background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; max-width: 300px;">
          <h3 style="margin-top: 0; color: #333;">🗺️ Google Maps</h3>
          <p style="margin-bottom: 1rem; font-size: 0.9rem;">For at se det rigtige kort, skal du tilføje din Google Maps API nøgle i koden.</p>
          <div style="background: #f0f0f0; padding: 1rem; border-radius: 5px; font-size: 0.8rem;">
            <strong>Lokation:</strong> Aalborg, Danmark<br>
            <strong>Koordinater:</strong> 57.0488, 9.9217
          </div>
        </div>
      </div>
    `;
  }

  function initMap() {
    if (typeof window === 'undefined' || !mapContainer) return;
    
    // Default location - you can change this to any location you prefer
    // const defaultLocation = { lat: 57.0488, lng: 9.9217 }; // Aalborg, Denmark
    const centerLocation = { lat: 57.31971035919828, lng: 10.03577420973761 };

    const map = new (window as any).google.maps.Map(mapContainer, {
      zoom: 9,
      center: centerLocation,
      mapTypeId: 'roadmap'
    });

    // Create house icon
    const houseIcon = {
      url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#2563eb">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      `),
      scaledSize: new (window as any).google.maps.Size(32, 32),
      anchor: new (window as any).google.maps.Point(16, 32)
    };

    // Create education icon (solid)
    const educationIcon = {
      url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#000000">
          <path d="M9.5 14C9.5 14 9 13.32 9 12.5c0-.82.5-1.5.5-1.5s.5.68.5 1.5c0 .82-.5 1.5-.5 1.5M12 2L2 7l10 5 10-5-10-5zM2 17v3h2v-3H2zm4 0v3h2v-3H6zm4 0v3h2v-3h-2zm4 0v3h2v-3h-2zm4 0v3h2v-3h-2z"/>
          <path d="M12 13l-7-3.5v3l7 3.5 7-3.5v-3L12 13z"/>
        </svg>
      `),
      scaledSize: new (window as any).google.maps.Size(32, 32),
      anchor: new (window as any).google.maps.Point(16, 32)
    };

    // Add markers with house icons
    new (window as any).google.maps.Marker({
      position: { lat: 57.466358598436514, lng: 9.803489716697532 },
      map: map,
      title: 'ishavsvej',
      icon: houseIcon
    });

    new (window as any).google.maps.Marker({
      position: { lat: 57.45280311473584, lng: 9.989951748854576 },
      map: map,
      title: 'kærparken',
      icon: houseIcon
    });

    new (window as any).google.maps.Marker({
      position: { lat: 57.01925947426525, lng: 9.950380324970169 },
      map: map,
      title: 'scoresbysundvej',
      icon: houseIcon
    });

    new (window as any).google.maps.Marker({
      position: { lat: 56.19109362885152, lng: 9.55286008042207 },
      map: map,
      title: 'bredhøj',
      icon: houseIcon
    });

    // Education marker
    new (window as any).google.maps.Marker({
      position: { lat: 57.46075238734557, lng: 9.869798523024473 },
      map: map,
      title: 'skallerup skole',
      icon: educationIcon
    });

    // HPR marker
    new (window as any).google.maps.Marker({
      position: { lat: 57.456822380411, lng: 9.997013057952872 },
      map: map,
      title: 'HPR',
      icon: educationIcon
    });

    // EUC Nord marker
    new (window as any).google.maps.Marker({
      position: { lat: 57.45854347143067, lng: 10.014588178479217 },
      map: map,
      title: 'EUC Nord',
      icon: educationIcon
    });

    // AAU Basis marker
    new (window as any).google.maps.Marker({
      position: { lat: 57.053461265434066, lng: 9.91171798933991 },
      map: map,
      title: 'AAU Basis',
      icon: educationIcon
    });

    // AAU Cassiopeia marker
    new (window as any).google.maps.Marker({
      position: { lat: 57.012339714420726, lng: 9.991050405703254 },
      map: map,
      title: 'AAU cassiopeia',
      icon: educationIcon
    });
  }
</script>

<svelte:head>
  <title>Steder - Simon</title>
</svelte:head>

<div class="container">
  <div class="header">
    <h1>Steder</h1>
    <p>Smap: En kort fortælling</p>
  </div>
  
  <div class="map-container">
    <div bind:this={mapContainer} class="map"></div>
  </div>
  
  <div class="navigation">
    <a href="/simon" class="back-link">← Tilbage til Simon</a>
  </div>
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  .header p {
    font-size: 1.2rem;
    color: #666;
  }

  .map-container {
    width: 100%;
    height: 650px;
    border: 2px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .map {
    width: 100%;
    height: 100%;
  }

  .navigation {
    margin-top: 2rem;
    text-align: center;
  }

  .back-link {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .back-link:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
    
    .map-container {
      height: 400px;
    }
    
    .header h1 {
      font-size: 2rem;
    }
  }
</style>
