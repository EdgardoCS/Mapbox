var parse = require('../../js/gis/parser.js')
var sleep = require('../../js/gis/getcoord.js')
const fs = require("fs");
const {
  dialog
} = require("electron").remote;

document.getElementById("bt-read").addEventListener("click", () => {

  dialog.showOpenDialog((fileNames) => {
    if (fileNames === undefined) {
      console.log("no file selected");
      return;
    }

    fs.readFile(fileNames[0], "utf-8", (err, data) => {
      if (err) {
        console.log("cannot read", err);
        return;
      }

      var incoming = JSON.parse(data);

      if (incoming.name == "cerros_IMV") {

        sleep.drifting(incoming);
      } else {
        parse.parser(incoming);
      }


    });
  });
}, false);
