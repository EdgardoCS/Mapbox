map.on('load', function() {
  getRoute();
});

function getRoute() {
  var start = [-71.637098, -33.028325];
  var end = [-71.631017, -33.049073];

  var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
  $.ajax({
    method: 'GET',
    url: directionsRequest,
  }).done(function(data) {
    var route = data.routes[0].geometry;
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
  });
}
