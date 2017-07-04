exports.purple = function(arreglo, rooster) {


  if (rooster[0].length == 1) {
    map.addSource(arreglo[0][1].source, arreglo[0][0]);
    map.addLayer(arreglo[0][1]);
  }
  if (rooster[1].length == 1) {
    map.removeLayer(arreglo[0][1].id);
    map.removeSource(arreglo[0][1].source);
  }

  if (rooster[0].length == 2) {
    map.addSource(arreglo[0][1].source, arreglo[0][0]);
    map.addLayer(arreglo[0][1]);
  }
  if (rooster[1].length == 2) {
    map.removeLayer(arreglo[0][1].id);
    map.removeSource(arreglo[0][1].source);
  }
console.log(map.getLayer(arreglo[0][1]['id']));

  //+++++++++++++GET INFO FROM POINT+++++++++++++++++++++\\
  for (i = 0; i < rooster[0].length; i++) {
    map.on('click', arreglo[i][1]['id'], function(e) {
      new mapboxgl.Popup()
        .setLngLat(e.features[0].geometry.coordinates)
        .setHTML(e.features[0].properties.description)
        .addTo(map);
    });
    map.on('mouseenter', arreglo[i][1]['id'], function() {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', arreglo[i][1]['id'], function() {
      map.getCanvas().style.cursor = '';
    });
    /*
*/
}
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++\\


};
