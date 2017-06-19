mapboxgl.accessToken = 'pk.eyJ1IjoiZWRnYXJkb3MiLCJhIjoiY2oydXNhM2t4MDAwZTJ2bGF6dWEzZmY1bSJ9.hqndt_ot8gOGH8p8C1qygg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v8',
    zoom: 12,
    center: [-71.63116246461868,-33.04887799524245]
});
map.addControl(new mapboxgl.NavigationControl());
