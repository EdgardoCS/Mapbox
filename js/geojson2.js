exports.togeojson = function(arreglo) {

  var gea = makeGeo(arreglo);
  var customLayers = {
    layer: {
      "id": "Inmovilizado",
      "source": "markers",
      "type": "circle",
      "interactive": true,
      "paint": {
        "circle-radius": 8,
        "circle-color": "#16a0a0"
      }
    }
  }
  //console.log(customLayers);
  //console.log(customLayers.layer);

  console.log("success");
map.on('Inmovilizado', function() {
    for (i = 0; i < 3; i++) {

      var sit = customLayers[i]
      console.log(sit);
      console.log(sit.layer);
      //map.addSource('markers',gea);
      //map.addLayer(sit.layer);
    }
  });

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
