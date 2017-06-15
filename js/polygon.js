var draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
      polygon: true,
      trash: true
      //  line_string: true,
      //  point:true,
    }
});
map.addControl(draw);
console.log("polygono");
var data=draw.getAll();

if (data.features.length>0){
console.log(data);
console.log("seleccion");
}
/*
var area = turf.area(data)
*/
