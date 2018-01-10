var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
const {
  crashReporter
} = require('electron');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({

    width: 1200,
    height: 900,
    minWidth: 420,
    minHeight: 480,
    autoHideMenuBar: true,
    fullscreen: false
  });
  /*
  mainWindow.maximize()
  mainWindow.loadURL('file://' + __dirname + '/src/html/main.html');
  */
  mainWindow.loadURL('file://' + __dirname + '/src/html/test.html');
  mainWindow.openDevTools();


  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

crashReporter.start({
  productName: 'Geropolis DesktopApp',
  companyName: 'Universidad de Valparaiso',
  submitURL: 'https://0.0.0.0:4242',
  autoSubmit: false
});
