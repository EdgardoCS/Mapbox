var nam;
var typ;
var coor;
var desc;
var lev_layer;
var lev_source;
var lev_obj = [];

exports.desert = function(lev_comp_cat, _l, clasification) {

  if (clasification == "juntas_vecinos") {
    nam = lev_comp_cat.name;
    for (i = 0; i < _l; i++) {
      typ = lev_comp_cat.features[i].geometry.type;
      coor = lev_comp_cat.features[i].geometry.coordinates;
      desc = lev_comp_cat.features[i].properties;

      lev_obj[i] = make_light(nam, typ, coor, desc);
    }
    lev_layer = make_white(lev_obj);
    lev_source = whitelight(clasification, nam, typ, lev_layer);

  }
  if (clasification == "levantamiento_completo") {
    nam = lev_comp_cat.name;
    for (i = 0; i < _l; i++) {
      typ = lev_comp_cat.features[i].geometry.type;
      coor = [lev_comp_cat.features[i].geometry.coordinates[0],lev_comp_cat.features[i].geometry.coordinates[1]];
      desc = lev_comp_cat.features[i].properties;

      lev_obj[i] = make_light(nam, typ, coor, desc);
    }
    lev_layer = make_white(lev_obj);
    lev_source = whitelight(clasification, nam, typ, lev_layer);

  }
  // console.log(lev_source);
  // console.log(lev_layer);
  map.addLayer(lev_source);
}


make_light = function(nam, typ, coor, desc) {
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
    },
  }
  return features;
}
make_white = function(features) {
  var tail = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    },
  }
  return tail;
}
whitelight = function(clasification, nam, typ, lev_layer) {
  if (clasification == "juntas_vecinos") {
    color = "#1481a0";
  }
  if (clasification == "levantamiento_completo") {
    color = "#2614a0";
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
      "circle-radius": 4,
      "circle-color": color,
    };
  }
  if (typ == "LineString" || typ == "MultiLineString") {
    var type = "line";
    var paint = {
      "line-color": color,
      "line-width": 3
    }
  }
  weather = {
    "id": clasification,
    "type": type,
    "source": lev_layer,
    "layout": {
      "visibility": "visible"
    },
    paint,
  }
  return weather
}
