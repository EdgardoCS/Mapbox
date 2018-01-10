var properties = [];
var geometry = [];
var name = [];
var coordinates = [];
var type = [];
var strcoor = [];
var clasification;
var div_pol_adm;
var lev_comp_cat;
var salud_geocoor;
var transporte_geocoor;
var div_obj = [];
var lev_obj = [];

exports.parser = function(incoming) {

  var _l = incoming.features.length;
  clasification = incoming.name;

  if (clasification == "Limite_Comunal" || clasification == "Limite_Urbano" || clasification == "Plazas" || clasification == "Sectores_dideco" || clasification == "Unidades_vecinales") {
    div_pol_adm = incoming;
    for (i = 0; i < _l; i++) {
      var coor = div_pol_adm.features[i].geometry.coordinates[0];
      var desc = div_pol_adm.features[i].properties.OBSERVACIO;
      var nam = div_pol_adm.features[i].properties.Plaza;
      var typ = div_pol_adm.features[i].properties.TIPO;
      console.log(nam);
      div_obj[i] = make_gunner(coor, nam, desc, typ);
    }
    div_layer = make_tail(div_obj);
    div_source = tailgunner(clasification);
    console.log(div_layer);
    console.log(div_source);
  }

  if (clasification == "levantamiento_completo" || clasification == "juntas_vecinos") {
    lev_comp_cat = incoming;
    for (i = 0; i < _l; i++) {
      var coor = [lev_comp_cat.features[i].geometry.coordinates[0], lev_comp_cat.features[i].geometry.coordinates[1]];
      var nam = lev_comp_cat.features[i].properties.nom_calle;
      var desc = lev_comp_cat.features[i].properties.descriptio;
      var typ = lev_comp_cat.features[i].properties.TIPOLOGIA;
      console.log(nam);
      console.log(typ); 
      lev_obj[i] = make_gunner(coor, nam, desc, typ);
    }
    lev_layer = make_tail(lev_obj);
    lev_source = tailgunner(clasification);
    console.log(lev_layer);
    console.log(lev_source);
  }
  if (clasification == "establecimientos_hospitalarios" || clasification == "establecimientos_salud" || clasification == "seremi_salud" || clasification == "servicios_salud") {
    salud_geocoor = incoming;
    //  tailgunner(salud_geocoor);
  }
  if (clasification == "ascensores" || clasification == "recorridos_microbuses" || clasification == "recorridos_taxicolectivos") {
    transporte_geocoor = incoming;
    //  tailgunner(transporte_geocoor);
  }
}

make_gunner = function(coor, nam, desc, typ) {
  var features;
  var shape;
  if (clasification == "Limite_Comunal" || clasification == "Limite_Urbano" || clasification == "Plazas" || clasification == "Sectores_dideco" || clasification == "Unidades_vecinales") {
    shape = "Polygon"
  }
  if (clasification == "levantamiento_completo" || clasification == "juntas_vecinos") {
    shape = "Point"
  }
  features = {
    "type": "Feature",
    "geometry": {
      "type": shape,
      "coordinates": coor
    },
    "properties": {
      "nombre": nam,
      "tipo": typ,
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
tailgunner = function(clasification) {
  var color;
  var type;
  if (clasification == "Limite_Comunal" || clasification == "Limite_Urbano" || clasification == "Plazas" || clasification == "Sectores_dideco" || clasification == "Unidades_vecinales") {
    if (clasification == "Limite_Comunal") {
      color = "#fc2900";
      type = "fill";
    }
    if (clasification == "Limite_Urbano") {
      color = "#c13c22";
      type = "fill";
    }
    if (clasification == "Plazas") {
      color = "#913c2b";
      type = "fill";
    }
    if (clasification == "Sectores_dideco") {
      color = "#603127";
      type = "fill";
    }
    if (clasification == "Unidades_vecinales") {
      color = "#492d27";
      type = "fill";
    }
    var paint = {
      "fill-color": color,
      "fill-opacity": 0.8
    };
  }
  if (clasification == "levantamiento_completo" || clasification == "juntas_vecinos") {
    var paint = {
      "circle-radius": 5,
      "circle-color": "#ffffff",
      "circle-stroke-width": 3,
      "circle-stroke-color": color,
    };
  }
  source = {
    "id": clasification,
    "type": type,
    "source": clasification,
    "layout": {
      "visibility": "visible"
    },
    paint,
  }
  return source
}
