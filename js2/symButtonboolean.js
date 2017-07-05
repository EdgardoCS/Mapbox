exports.purple = function(arreglo) {

  if (addPostrado == 1 || arreglo[0][1].id=="Busqueda") {
    map.addSource(arreglo[0][1].source, arreglo[0][0]);
    map.addLayer(arreglo[0][1]);
}
  if (removePostrado == 1) {
    map.removeLayer(arreglo[0][1].id);
    map.removeSource(arreglo[0][1].source);
  }

};
