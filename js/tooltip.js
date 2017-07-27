ProgramasArray = ["Postrado", "Recordatorio"];
ProgramasSource= ["markers1","markers2"];

for (i = 0; i < ProgramasSource.length; i++) {
  if (map.getLayer(ProgramasArray[i])) {

    map.on('click', ProgramasArray[i], function(e) {
      new mapboxgl.Popup()
        .setLngLat(e.features[0].geometry.coordinates)
        .setHTML(e.features[0].properties.description)
        .addTo(map);
    });
    map.on('mouseover', ProgramasArray[i], function() {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseout', ProgramasArray[i], function() {
      map.getCanvas().style.cursor = '';
    });

  }
};
/*
map.on('click', televators[1]['id'], function(e) {
  tooltip.remove();
});
*/
