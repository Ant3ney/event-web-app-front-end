function testDirections(toCords){
  var mapHolder = window.useHook({getMap: true});
  var platform = mapHolder.platform;
  var H = mapHolder.H;  
    var userCords = {};
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position.coords);
          userCords.lat = position.coords.latitude;
          userCords.long = position.coords.longitude;

          var routingParameters = {
            'routingMode': 'fast',
            'transportMode': 'car',
            'origin': (userCords.lat + ',' + userCords.long),
            'destination': (toCords.lat + ',' + toCords.long),
            'return': 'polyline'
          };
      
          console.log("Routing params below");
          console.log(routingParameters);
          // Define a callback function to process the routing response:
          var onResult = function(result) {
            // ensure that at least one route was found
            if (result.routes.length) {
              result.routes[0].sections.forEach((section, i) => {
                var map = window.map;
                if(i > 0){
                  return;
                }
                  // Create a linestring to use as a point source for the route line
                  let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
      
                  // Create a polyline to display the route:
                  let routeLine = new H.map.Polyline(linestring, {
                    style: { strokeColor: 'blue', lineWidth: 3 }
                  });
      
                  // Create a marker for the start point:
                  let startMarker = new H.map.Marker(section.departure.place.location);
      
                  // Create a marker for the end point:
                  let endMarker = new H.map.Marker(section.arrival.place.location);
                  try{
                    if(window.preObjs){
                      map.removeObjects(window.preObjs).then(() => {
                      });
                    }
                  }
                  catch{
                    console.error("Could not delete all objs");
                  }
                  // Add the route polyline and the two markers to the map:
                  window.map.addObjects([routeLine, startMarker, endMarker]);
      
                  // Set the map's viewport to make the whole route visible:
                  map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
                  window.preObjs = [routeLine, startMarker, endMarker];
              });
            }
          };
      
          // Get an instance of the routing service version 8:
          var router = platform.getRoutingService(null, 8);
      
          // Call calculateRoute() with the routing parameters,
          // the callback and an error callback function (called if a
          // communication error occurs):
          router.calculateRoute(routingParameters, onResult, function(error) {
              alert(error.message);
          });
        });
    } else {
        console.error("Geolocation is not supported by this browser!");
    }

    
}

export default testDirections;