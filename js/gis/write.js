var sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/gisTest.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("conectado a base de datos");
});
/*
db.each("SELECT info FROM lorem", function(err, row) {
  if (err) {
    throw err;
  }
  console.log(row);
});
*/
db.serialize(function() {
  db.run("CREATE TABLE nueva (colA STRING, colB STRING)");


  /*
  db.run("CREATE TABLE ipsum (info STRING)");

  var innercell = db.prepare("INSERT INTO ipsum VALUES(?)");
  for (j = 0; j < 10; j++) {
    innercell.run("Loyalty " + j);
  }
  innercell.finalize();

  var stmt = db.prepare("INSERT INTO lorem VALUES(?)");
  for (i = 0; i < 10; i++) {
    stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
    console.log(row.id + ": " + row.info);
  });
*/

});
db.close();
