exports.dance = function(televators, add) {

  if (add[0] == true) {
    map.addSource(televators[1].source, televators[0]);
    map.addLayer(televators[1]);
  }

  if (add[1] == true) {
    map.addSource(televators[1].source, televators[0]);
    map.addLayer(televators[1]);
  }

}

exports.transmission = function(televators, remove) {

  if (remove[0] == true) {
    if (map.getLayer("Postrado")) {
      map.removeSource("markers1");
      map.removeLayer("Postrado");
    }
  }
  if (remove[1] == true) {
    if (map.getLayer("Recordatorio")) {
      map.removeSource("markers2");
      map.removeLayer("Recordatorio");
    }
  }
}
