map.on('load', function() {
  getRoute();
});

function getRoute() {
  var waypoint = [-71.627841, -33.052820]
  var end = [-71.620285, -33.045015]

  var start = [-71.620333, -33.045072] // Huito
  var waypoint1 = [-71.628140, -33.040933]
  var waypoint2 = [-71.632951, -33.047816]
  var waypoint3 = [-71.630985, -33.049052] // MENA
  var waypoint4 = [-71.615695, -33.055893]
  var waypoint5 = [-71.614577, -33.046214]
  var waypoint6 = [-71.597399, -33.056861]


  //var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] +';'+ waypoint[0] + ',' + waypoint[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
  //  var directionsRequest = 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/' + start[0] + ',' + start[1] + ';' + waypoint[0] + ',' + waypoint[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
  //var directionsRequest = 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/' + start[0] + ',' + start[1] + ';' + waypoint1[0] + ',' + waypoint1[1] + ';' + waypoint2[0] + ',' + waypoint2[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
  //var directionsRequest = 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/' + start[0] + ',' + start[1] + ';' + waypoint1[0] + ',' + waypoint1[1] + ';' + waypoint2[0] + ',' + waypoint2[1] + ';' + waypoint3[0] + ',' + waypoint3[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
  var directionsRequest = 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/' + start[0] + ',' + start[1] + ';' + waypoint1[0] + ',' + waypoint1[1] + ';' + waypoint2[0] + ',' + waypoint2[1] + ';' + waypoint3[0] + ',' + waypoint3[1] + ';'+waypoint4[0]+','+waypoint4[1]+'?geometries=geojson&access_token=' + mapboxgl.accessToken;

//  console.log(directionsRequest);
  $.ajax({
    method: 'GET',
    url: directionsRequest,
  }).done(function(data) {

    console.log(data);
    console.log("distancia recorrida: " + data.trips[0].distance + " mts");
    var time = data.trips[0].duration / 60;
    console.log("tiempo estimado: " + time + " minutos");
    console.log(data.waypoints);
    var route = data.trips[0].geometry;

    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: route
        }
      },
      paint: {
        'line-width': 2,
        'line-color': "#223ff9",
      }
    });
    map.addLayer({
      id: 'start',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: start
          }
        }
      },
      "paint": {
        "circle-radius": 5,
        "circle-color": "#ed20ed"
      }
    });

    /*
    map.addLayer({
      id: 'waypoint',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: waypoint
          }
        }
      },
      "paint": {
        "circle-radius": 5,
        "circle-color": "#2298f9"
      }
    });
    map.addLayer({
      id: 'end',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: end
          }
        }
      },
      "paint": {
        "circle-radius": 5,
        "circle-color": "#2298f9"
      }
    });
    */
  });
}
