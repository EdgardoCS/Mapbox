exports.togeojson = function(arreglo) {
  var gea = makeGeo(arreglo);

  map.on('load', function() {
    map.addSource('markers', gea);
    map.addLayer({
      "id": "Inmovilizado",
      "source": "markers",
      "type": "circle",
      "interactive": true,
      'layout': {
        'visibility': 'visible'
      },
      "paint": {
        "circle-radius": 8,
        "circle-color": "#16a0a0"
      },
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
  });
};
makeGeo = function(features) {
  var geo = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    }
  }
  return geo;
};
var toggleableLayerIds = ['Inmovilizado'];
for (var i = 0; i < toggleableLayerIds.length; i++) {
  var id = toggleableLayerIds[i];

  var link = document.createElement('a');
  link.href = '#';
  link.className = 'active';
  link.textContent = id;

  link.onclick = function(e) {
    var clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();

    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

    if (visibility === 'visible') {
      map.setLayoutProperty(clickedLayer, 'visibility', 'none');
      this.className = '';
    } else {
      this.className = 'active';
      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    }

  };
  var layers = document.getElementById('menu');
  layers.appendChild(link);
}
/*
 */
