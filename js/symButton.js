exports.purple = function(arreglo) {

  map.on('load', function() {

    map.addSource(arreglo[0][1].source, arreglo[0][0]);
    map.addSource(arreglo[1][1].source, arreglo[1][0]);
    map.addLayer(arreglo[0][1])
    map.addLayer(arreglo[1][1])

    console.log(arreglo[0][1]['id']);
    console.log(arreglo[1][1]['id']);
    console.log(arreglo.length);
    /*
    */
    //+++++++++++++GET INFO FROM POINT+++++++++++++++++++++\\
    for (i=0;i<arreglo.length;i++){
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
  }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++\\
  });
};
