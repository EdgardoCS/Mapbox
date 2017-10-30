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
    //width: 1200,
    //height: 600,
    width: 1600,
    height: 800,
    minWidth: 420,
    minHeight: 480,
    autoHideMenuBar: true,
    fullscreen: false
  });
  mainWindow.openDevTools();
  mainWindow.loadURL('file://' + __dirname + '/src/mainIndex.html');
  //mainWindow.maximize()
  //mainWindow.loadURL('http://127.0.0.1:5000')
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
