exports.purple = function(arreglo) {

  if (addPostrado == true || arreglo[0][1].id == "Busqueda") {
    map.addSource(arreglo[0][1].source, arreglo[0][0]);
    map.addLayer(arreglo[0][1]);

    //+++++++++++++GET INFO FROM POINT+++++++++++++++++++++\\
    map.on('click', arreglo[0][1]['id'], function(e) {
      tooltip = new mapboxgl.Popup()
        .setLngLat(e.features[0].geometry.coordinates)
        .setHTML(e.features[0].properties.description)
        .addTo(map);
    });
    map.on('mouseenter', arreglo[0][1]['id'], function() {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', arreglo[0][1]['id'], function() {
      map.getCanvas().style.cursor = '';
    });
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++\\
  }

  if (removePostrado == true) {
    map.removeLayer(arreglo[0][1].id);
    map.removeSource(arreglo[0][1].source);
    map.on('click', arreglo[0][1]['id'], function(e) {
      tooltip.remove();

    });
  }

};
