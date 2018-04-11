function viewclearAll() {

  LayersArray = ["cerroAlegre", "cerroMiraflores", "cerroCarcel", "cerroPanteon", "cerroLaLoma", "cerroJimenez", "cerroSanJuandeDios",
    "cerroYungay", "cerroBellavista", "cerroFlorida", "cerroMariposas", "cerroMonjas", "territorio", "sector18", "sector27", "18A", "18B", "18C", "27A", "27B", "27C"
  ];
  UnidadesArray = ["unidad21", "unidad22", "unidad23", "unidad24", "unidad25", "unidad26", "unidad27", "unidad66", "unidad67", "unidad68",
    "unidad69", "unidad70", "unidad71", "unidad72", "unidad76", "unidad77", "unidad78", "unidad125", "unidad126", "unidad142", "unidad166", "unidad194", "unidad195"
  ];
  GeoArray = ["Limite_Comunal", "Limite_Urbano", "Plazas", "Sectores_dideco", "Unidades_vecinales", "juntas_vecinos", "levantamiento_completo", "establecimientos_hospitalarios", "establecimientos_salud", "seremi_salud", "servicios_salud", "ascensores", "recorridos_microbuses", "recorridos_taxicolectivos"];

  for (i = 0; i < LayersArray.length; i++) {
    if (map.getLayer(LayersArray[i])) {
      map.removeLayer(LayersArray[i]);
    }
  }
  for (i = 0; i < UnidadesArray.length; i++) {
    if (map.getLayer(UnidadesArray[i])) {
      map.removeLayer(UnidadesArray[i]);
    }
  }
  for (i = 0; i < GeoArray.length; i++) {
    if (map.getLayer(GeoArray[i])) {
      map.removeLayer(GeoArray[i]);
    }
  }
}


function viewclearSearch() {
  SearchArray = ["Busqueda"];
  SearchSource = ["busquedaMarkers"];
  if (map.getLayer(SearchArray[0])) {
    map.removeLayer(SearchArray[0])
  }
  if (map.getSource(SearchSource[0])) {
    map.removeSource(SearchSource[0])
  }
}
