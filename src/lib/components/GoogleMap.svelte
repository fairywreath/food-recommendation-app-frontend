<!-- GoogleMap.svelte -->
<script>
  import { onMount } from 'svelte';

  export let latitude; // Latitude of the map center
  export let longitude; // Longitude of the map center
  export let markers = []; // Array of marker objects

  let mapContainer;

  // Function to initialize the map
  function initializeMap() {
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 12,
    };
    map = new google.maps.Map(mapContainer, mapOptions);

    // Add markers to the map
    markers.forEach((marker) => {
      const markerOptions = {
        position: { lat: marker.latitude, lng: marker.longitude },
        map: map,
        title: marker.title,
      };
      new google.maps.Marker(markerOptions);
    });
  }

  onMount(() => {
    // Load the Google Maps API
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDgna15xLCoY7e63FK3XCJos96b4fuKjcE&libraries=places`;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = initializeMap;
    } else {
      // Google Maps API is already loaded
      initializeMap();
    }
  });
</script>

<div bind:this={mapContainer} style="width: 100%; height: 500px;"></div>
