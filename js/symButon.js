var largoInm;
var largoRec;
var largoAct;

exports.symButon = function(objects) {
  /*
  console.log(objects);
  largoInm = objects[0][0].data.features.length;
  largoRec = objects[1][0].data.features.length;
  largoAct = objects[2][0].data.features.length;
*/
  exports.symButonADD = function(add) {

    if (map.getLayer("Inmovilizado")) {
      map.removeSource("inmovilizadoMarkers")
      map.removeLayer("Inmovilizado");
    }
    if (map.getLayer("Recordatorio")) {
      map.removeSource("recordatorioMarkers");
      map.removeLayer("Recordatorio");
    }
    if (map.getLayer("AdultoMayor")) {
      map.removeSource("adultoMarkers");
      map.removeLayer("AdultoMayor");
    }
    if (add[0] == true) {
      map.addSource(objects[0][1].source, objects[0][0]);
      map.addLayer(objects[0][1]);
    }
    if (add[1] == true) {
      map.addSource(objects[1][1].source, objects[1][0]);
      map.addLayer(objects[1][1]);
    }
    if (add[2] == true) {
      map.addSource(objects[2][1].source, objects[2][0]);
      map.addLayer(objects[2][1]);
    }

  }
}
