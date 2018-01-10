var stars = require('../../js/gis/put.js');

var nam;
var typ;
var coor;
var desc;
var div_layer;
var div_source;
var div_obj = [];

exports.luck = function(div_pol_adm, _l, clasification) {

  if (clasification == "Limite_Comunal") {
    nam = div_pol_adm.name;
    typ = div_pol_adm.features[0].geometry.type;
    coor = div_pol_adm.features[0].geometry.coordinates;
    desc = div_pol_adm.features[0].properties;
    div_obj[0] = make_gunner(nam, typ, coor, desc);
    div_layer = make_tail(div_obj);
    div_source = tailgunner(clasification, nam, typ);
  }
  if (clasification == "Limite_Urbano") {
    nam = div_pol_adm.name;
    typ = div_pol_adm.features[0].geometry.type;
    coor = div_pol_adm.features[0].geometry.coordinates;
    desc = div_pol_adm.features[0].properties;
    div_obj[0] = make_gunner(nam, typ, coor, desc);
    div_layer = make_tail(div_obj);
    div_source = tailgunner(clasification, nam, typ);
  }
  if (clasification == "Plazas") {
    nam = div_pol_adm.name;
    for (i = 0; i < _l; i++) {
      typ = div_pol_adm.features[i].geometry.type;
      coor = div_pol_adm.features[i].geometry.coordinates[0];
      desc = div_pol_adm.features[i].properties;
      div_obj[i] = make_gunner(nam, typ, coor, desc);
    }
    div_layer = make_tail(div_obj);
    div_source = tailgunner(clasification, nam, typ);
  }
  if (clasification == "Sectores_dideco") {
    nam = div_pol_adm.name;
    for (i = 0; i < _l; i++) {
      typ = div_pol_adm.features[i].geometry.type;
      coor = div_pol_adm.features[i].geometry.coordinates[0];
      desc = div_pol_adm.features[i].properties;
      div_obj[i] = make_gunner(nam, typ, coor, desc);
    }
    div_layer = make_tail(div_obj);
    div_source = tailgunner(clasification, nam, typ);
  }
  if (clasification == "Unidades_vecinales") {
    nam = div_pol_adm.name;
    for (i = 0; i < _l; i++) {
      typ = div_pol_adm.features[i].geometry.type;
      coor = div_pol_adm.features[i].geometry.coordinates[0];
      desc = div_pol_adm.features[i].properties;
      div_obj[i] = make_gunner(nam, typ, coor, desc);
    }
    div_layer = make_tail(div_obj);
    div_source = tailgunner(clasification, nam, typ);
  }

  stars.die(div_layer, div_source);

}

make_gunner = function(nam, typ, coor, desc) {
  var features;
  features = {
    "type": "Feature",
    "geometry": {
      "type": typ,
      "coordinates": coor
    },
    "properties": {
      "nombre": nam,
      "descripcion": desc,
    }
  }
  return features;
}
make_tail = function(features) {
  var tail = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    },
  }
  return tail;
}
tailgunner = function(clasification, nam, typ) {
  if (clasification == "Limite_Comunal") {
    color = "#fc2900";
  }
  if (clasification == "Limite_Urbano") {
    color = "#c13c22";
  }
  if (clasification == "Plazas") {
    color = "#913c2b";
  }
  if (clasification == "Sectores_dideco") {
    color = "#603127";
  }
  if (clasification == "Unidades_vecinales") {
    color = "#492d27";
  }
  if (typ == "Polygon" || typ == "MultiPolygon") {
    var type = "fill";
    var paint = {
      "fill-color": color,
      "fill-opacity": 0.8
    };
  }
  if (typ == "Point") {
    var type = "circle";
    var paint = {
      "circle-radius": 5,
      "circle-color": color,
      // "circle-stroke-width": 3,
      // "circle-stroke-color": color,
    };
  }
  if (typ == "LineString" || typ == "MultiLineString") {
    var type = "line";
    var paint = {
      "line-color": color,
      "line-width": 8
    }
  }
  source = {
    "id": clasification,
    "type": type,
    "source": clasification,
    "layout": {
      "visibility": "visible"
    },
    paint,
    // "filter": ["==", "$type", "Polygon"]
  }
  return source
}
