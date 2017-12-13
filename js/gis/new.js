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
      //console.log(data);
      var a = JSON.parse(data);
      console.log(a);

    });
  });
}, false);
