exports.togeojson = function(arreglo) {
  var gea = makeGeo(arreglo);
  map.addSource('markers', gea);
  map.addLayer({
    "id": "Mostrar",
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
};
var toggleableLayerIds = [ 'Mostrar' ];
for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('b');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
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
    var layers = document.getElementById('minimenu');
    layers.appendChild(link);
}
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
