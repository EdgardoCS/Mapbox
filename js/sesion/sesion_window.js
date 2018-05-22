function sistam_window() {
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;

  var sisWindow = new BrowserWindow({
    width: 1600,
    height: 800,
    minWidth: 420,
    minHeight: 480,
    autoHideMenuBar: true,
    fullscreen: false
  });

  sisWindow.openDevTools();
  sisWindow.loadURL('file://' + __dirname + '/main.html');
  sisWindow.on('closed', function() {
    auxWindow = null;
  });

  sisWindow.webContents.on('did-finish-load', () => {
    sisWindow.show();
    sisWindow.focus();
  });
}
