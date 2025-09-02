<script lang="ts">
  import { onMount } from 'svelte';
  import { mapMarkers, mapConfig, mapIcons, mapStyles, type MarkerData } from './mapData';

  let mapContainer: HTMLDivElement;
  let map: any;
  let hideGoogleMarkers = true;

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
    
    map = new (window as any).google.maps.Map(mapContainer, {
      zoom: mapConfig.zoom,
      center: mapConfig.center,
      mapTypeId: mapConfig.mapTypeId,
      styles: hideGoogleMarkers ? mapStyles.hideGoogleMarkers : mapStyles.showGoogleMarkers
    });

    // Create icon objects for Google Maps
    const houseIcon = {
      url: mapIcons.house.url,
      scaledSize: new (window as any).google.maps.Size(mapIcons.house.scaledSize.width, mapIcons.house.scaledSize.height),
      anchor: new (window as any).google.maps.Point(mapIcons.house.anchor.x, mapIcons.house.anchor.y)
    };

    const educationIcon = {
      url: mapIcons.education.url,
      scaledSize: new (window as any).google.maps.Size(mapIcons.education.scaledSize.width, mapIcons.education.scaledSize.height),
      anchor: new (window as any).google.maps.Point(mapIcons.education.anchor.x, mapIcons.education.anchor.y)
    };

    // Create markers from data
    mapMarkers.forEach((markerData: MarkerData) => {
      const marker = new (window as any).google.maps.Marker({
        position: markerData.position,
        map: map,
        title: markerData.title,
        icon: markerData.type === 'house' ? houseIcon : educationIcon
      });

      const infoWindow = new (window as any).google.maps.InfoWindow({
        content: markerData.infoContent
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  }

  function toggleGoogleMarkers() {
    hideGoogleMarkers = !hideGoogleMarkers;
    if (map) {
      map.setOptions({
        styles: hideGoogleMarkers ? mapStyles.hideGoogleMarkers : mapStyles.showGoogleMarkers
      });
    }
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
    <div class="map-controls">
      <button 
        class="toggle-button" 
        on:click={toggleGoogleMarkers}
        title={hideGoogleMarkers ? "Vis Google markører" : "Skjul Google markører"}
      >
        {hideGoogleMarkers ? "📍 Vis Google markører" : "🚫 Skjul Google markører"}
      </button>
    </div>
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
    position: relative;
  }

  .map-controls {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1000;
  }

  .toggle-button {
    background-color: white;
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    font-family: inherit;
  }

  .toggle-button:hover {
    background-color: #f8f9fa;
    border-color: #007bff;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .toggle-button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
