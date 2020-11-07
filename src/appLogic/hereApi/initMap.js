var targetElement;
var defaultLayers;
var platform;
var H

function initMap(){
    platform = window.platform;
    H = window.H;
    window.targetElement = targetElement;
    window.defaultLayers = defaultLayers;
    // Retrieve the target element for the map:
    targetElement = document.getElementById('mapContainer');
    // Get the default map types from the platform object:
    defaultLayers = platform.createDefaultLayers();
    
    // Instantiate the map:
    var map = new H.Map(
      targetElement,
      defaultLayers.vector.normal.map,
  {
        zoom: 10,
        center: { lat: 33.84099, lng: -118.34807 }
  });

  window.map = map;
}

export default initMap;