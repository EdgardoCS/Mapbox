exports.dance = function(televators, add) {

  if (televators[1].source == "markers0") {

    //map.addSource(televators[1].source, televators[0]);
    //map.addLayer(televators[1]);
  }

  if (add[0] == true) {
    console.log(televators[1].source);
    console.log(televators[0]);
    console.log(televators[1]);

  }

  if (add[1] == true) {
    map.addSource(televators[1].source, televators[0]);
    map.addLayer(televators[1]);

  }
}

exports.transmission = function(remove) {

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
