exports.togeojson2 = function(arreglo) {
  var gea2 = makeGeo2(arreglo2);
  console.log(gea2);
  };
  makeGeo2 = function(features) {
    var geo = {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": features
      }
    }
    return geo;
  };

  /*
  map.on('load', function() {
    map.addSource('markers1', gea1);
    map.addLayer({
      "id": "Recordatorio",
      "source": "markers1",
      "type": "circle",
      "interactive": true,
      'layout': {
        'visibility': 'visible'
      },
      "paint": {
        "circle-radius": 8,
        "circle-color": "#a06115"
    });

    //+++++++++++++GET INFO FROM POINT+++++++++++++++++++++\\
    map.on('click', 'Inmovilizado', function(e) {
      new mapboxgl.Popup()
        .setLngLat(e.features[0].geometry.coordinates)
        .setHTML(e.features[0].properties.description)
        .addTo(map);
    });
    map.on('mouseenter', 'Inmovilizado', function() {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'Inmovilizado', function() {
      map.getCanvas().style.cursor = '';
    });
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++\\
    */
/*
 */
