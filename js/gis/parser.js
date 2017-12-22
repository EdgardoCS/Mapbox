var properties = [];
var geometry = [];
var name = [];
var coordinates = [];
var type = [];
var strcoor = [];
var clasification;

exports.parser = function(incoming) {

  var _l = incoming.features.length;
  clasification = incoming.name;

  for (i = 0; i < _l; i++) {

    properties[i] = incoming.features[i];
    name[i] = incoming.features[i].properties.Plaza;
    type[i] = incoming.features[i].properties.TIPO;
    coordinates[i] = incoming.features[i].geometry.coordinates;
    geometry[i] = incoming.features[i].geometry.type

    strcoor[i] = JSON.stringify(coordinates[i]);

  }


  console.log(type);
  console.log(clasification); 


  //console.log(strcoor);
  //type = incoming.features[0].geometry.type;
  //coordinates = incoming.features[0].geometry.coordinates;
  //geometry = incoming.features[0].geometry;
  //properties = incoming.features[0].properties;


  //console.log(geometry);
  //console.log(coordinates);

  //var strcoor = JSON.stringify(coordinates);
  //console.log(strcoor);

}
