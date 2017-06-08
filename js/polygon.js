var draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
        line_string: true,
        point:true,
        polygon: true,
        trash: true
    }
});
map.addControl(draw);
