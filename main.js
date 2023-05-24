const { app, BrowserWindow, screen, } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    title: 'Estrellitas',
    width: 800,
    height: 600,
    webPreferences: {
      devTools: false,
    },
    frame: false,
    resizable: true,
    icon: __dirname + '/icon.png'
  })

  win.loadFile('./dist/index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})