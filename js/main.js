mapboxgl.accessToken = 'pk.eyJ1IjoiZWRnYXJkb3MiLCJhIjoiY2oydXNhM2t4MDAwZTJ2bGF6dWEzZmY1bSJ9.hqndt_ot8gOGH8p8C1qygg';
var map = new mapboxgl.Map({
  container: 'map',
  //style: 'mapbox://styles/mapbox/streets-v9',
  //style: 'mapbox://styles/mapbox/light-v9',
  //style: 'mapbox://styles/edgardos/cj478jwkc0qu82smufvk6k016',
  style: 'mapbox://styles/edgardos/cj49z39rt38gj2slf27g1cdp9',

  zoom: 12,
  pitch: 90,
  bearing: -170,
  center: [-71.631, -33.048]
});
map.addControl(new mapboxgl.NavigationControl());
