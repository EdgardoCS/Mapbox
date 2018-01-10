var beginners = require('../../js/gis/div.js')
var barefoot = require('../../js/gis/lev.js')
var muddy = require('../../js/gis/sal.js')
var down = require('../../js/gis/tra.js')

var clasification;
var div_pol_adm;
var lev_comp_cat;
var salud_geocoor;
var transporte_geocoor;

exports.parser = function(incoming) {

  var _l = incoming.features.length;
  clasification = incoming.name;

  if (clasification == "Limite_Comunal" || clasification == "Limite_Urbano" || clasification == "Plazas" || clasification == "Sectores_dideco" || clasification == "Unidades_vecinales") {
    div_pol_adm = incoming;
    beginners.luck(div_pol_adm,_l,clasification);
  }
  if (clasification == "levantamiento_completo" || clasification == "juntas_vecinos") {
    lev_comp_cat = incoming;
    barefoot.desert(lev_comp_cat, _l, clasification);
  }
  if (clasification == "establecimientos_hospitalarios" || clasification == "establecimientos_salud" || clasification == "seremi_salud" || clasification == "servicios_salud") {
    salud_geocoor = incoming;
    muddy.water(salud_geocoor,_l,clasification);
  }
  if (clasification == "ascensores" || clasification == "recorridos_microbuses" || clasification == "recorridos_taxicolectivos") {
    transporte_geocoor = incoming;
    down.thesink(transporte_geocoor,_l,clasification);
  }
}
