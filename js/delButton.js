
exports.tosym = function(negative, largo){
  if (largo == 1) {
  map.removeLayer(arreglo[0][1])
  map.removeSource(arreglo[0][1].source, arreglo[0][0]);
} else {
  map.removeLayer(arreglo[0][1]);
  map.removeLayer(arreglo[1][1]);
  map.removeSource(arreglo[0][1].source, arreglo[0][0]);
  map.removeSource(arreglo[1][1].source, arreglo[1][0]);
}
}
