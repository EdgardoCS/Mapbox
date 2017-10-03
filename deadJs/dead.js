exports.slave = function(rut,estado) {
  db.run("UPDATE Test SET Estado=? WHERE Rut = ?", [estado, rut]);
  console.log("base de datos actualizada");
}
