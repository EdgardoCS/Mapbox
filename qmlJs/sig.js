var convert = require('xml-js');
var xml = require('fs').readFileSync('./qml/test2.qml', 'utf8');
var endors = require('../qmlJs/layer.js');

var result = convert.xml2json(xml, {
  compact: true,
  spaces: 4
});

var qml = JSON.parse(result);
console.log(qml);

var rgbcolors = [];
var size = [];
var properties = [];
var id = [];
var head = [];
var hexcolors = [];
var tojson = [];

var lencat = qml.qgis['renderer-v2'].categories.category.length

rgbtohex = function() {
  for (i = 0; i < lencat; i++) {
    var colors = rgbcolors[i].map(function(x) {
      x = parseInt(x).toString(16);
      return (x.length == 1) ? "0" + x : x;
    });
    colors = "#" + colors.join("");

    hexcolors.push(colors);
  }
  return hexcolors;
};
makejson = function(id, head, hexcolors, size) {
  var json = {
    "type": "json",
    "id": id,
    "properties": {
      "head": head,
      "color": hexcolors,
      "size": size,
    }
  }
  return json
}

for (i = 0; i < lencat; i++) {

  id[i] = qml.qgis['renderer-v2'].symbols.symbol[i]._attributes.name;
  head[i] = qml.qgis['renderer-v2'].categories.category[i]._attributes.label;
  rgbcolors[i] = qml.qgis['renderer-v2'].symbols.symbol[i].layer.prop[1]._attributes.v.split(',');
  size[i] = qml.qgis['renderer-v2'].symbols.symbol[i].layer.prop[14]._attributes.v;
  properties[i] = qml.qgis['renderer-v2'].symbols.symbol[i].layer.prop;


  rgbcolors[i].splice(3, 1);
}

rgbtohex(rgbcolors);

for (i = 0; i < lencat; i++) {
  tojson[i] = makejson(id[i], head[i], hexcolors[i], size[i]);
}
endors.toi(tojson)
