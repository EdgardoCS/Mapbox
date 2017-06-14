exports.purple = function(arreglo) {

  map.on('load', function() {

    map.addSource(arreglo[0][1].source, arreglo[0][0]);
    map.addSource(arreglo[1][1].source, arreglo[1][0]);
    map.addLayer(arreglo[0][1])
    map.addLayer(arreglo[1][1])
    console.log(arreglo[0][1].source);
    console.log(arreglo[0][0]);
    console.log(arreglo[1][1].source);
    console.log(arreglo[1][0]);
  });
};

/*
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
*/
