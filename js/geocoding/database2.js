exports.todatabase2 = function(Rut,Latitud, Longitud, db) {
  db.run("UPDATE UsersNo SET Latitud =?,Longitud=? WHERE Rut = ?", [Latitud, Longitud,Rut]);
  console.log("success");
};
