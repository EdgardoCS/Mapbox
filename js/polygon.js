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
