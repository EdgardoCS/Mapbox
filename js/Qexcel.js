var porcupine = require('../js/comparacion.js')

var result = [];
var row;
var rowNum;
var colNum;
var Id = [];

var url = "../xlsx/SECTORIZADA POSTRADOS 2016.xlsx";

var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

oReq.onload = function(e) {
  var arraybuffer = oReq.response;

  var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  var bstr = arr.join("");

  var workbook = XLS.read(bstr, {
    type: "binary"
  });
  var name_list = workbook.SheetNames;
  var sheet = workbook.Sheets[name_list[0]];

  var range = XLSX.utils.decode_range(sheet['!ref']);
  var rango = range.e.r;
  for (rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
    row = [];
    for (colNum = range.s.c; colNum <= range.e.c; colNum++) {
      var nextCell = sheet[
        XLSX.utils.encode_cell({
          r: rowNum,
          c: colNum
        })
      ];
      if (typeof nextCell === 'undefined') {
        row.push(void 0);
      } else row.push(nextCell.w);
    }
    result.push(row);
    if (result.length == rango) {
      for (i = 0; i < rango; i++) {
        Id.push(result[i][2]);

        if (Id.length== rango){
        porcupine.tree(Id);
      }
      }

    }
  }
  return result;
  /*
   */
}
oReq.send();
