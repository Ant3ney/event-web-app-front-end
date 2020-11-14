var targetElement;
var defaultLayers;
var platform;
var H;
var useHook = window.useHook({getMap: true});

function initMap(){
    platform = useHook.platform;
    H = useHook.H;
    useHook.targetElement = targetElement;
    useHook.defaultLayers = defaultLayers;
    // Retrieve the target element for the map:
    targetElement = document.getElementById('mapContainer');
    // Get the default map types from the platform object:
    defaultLayers = platform.createDefaultLayers();
    
    // Instantiate the map:
    var map = new H.Map(targetElement, defaultLayers.vector.normal.map, {
        zoom: 10,
        center: { lat: 33.84099, lng: -118.34807 }
    });
  useHook.map = map;
  window.map = map;
}

export default initMap;