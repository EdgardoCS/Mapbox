exports.todatabase2 = function(Rut,Longitude, Latitude, db) {
  console.log(Rut);
  db.run("UPDATE Inmovilizado SET Longitude=?,Latitude =? WHERE Rut = ?", [Longitude, Latitude,Rut]);
  console.log("success");
};
