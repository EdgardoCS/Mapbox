exports.endbuton = function(objects) {

  exports.option = function(add) {
    if (map.getLayer("Inmovilizado")) {
      map.removeLayer("Inmovilizado");
    }
    if (map.getLayer("Recordatorio")) {
      map.removeLayer("Recordatorio");
    }
    if (map.getLayer("AdultoMayor")) {
      map.removeLayer("AdultoMayor");
    }
    if (add[0] == true) {
      map.addLayer(objects[0]);
    }
    if (add[1] == true) {
      map.addLayer(objects[1]);
    }
    if (add[2] == true) {
      map.addLayer(objects[2]);
      // console.log(objects[2]); 
    }

  }
}
