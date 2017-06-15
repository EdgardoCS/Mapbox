//+++++++++++++GET INFO FROM POINT+++++++++++++++++++++\\
map.on('click', 'Recordatorio', function(e) {
  new mapboxgl.Popup()
    .setLngLat(e.features[0].geometry.coordinates)
    .setHTML(e.features[0].properties.description)
    .addTo(map);
});
map.on('mouseenter', 'Recordatorio', function() {
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'Recordatorio', function() {
  map.getCanvas().style.cursor = '';
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++\\
