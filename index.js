const { app, BrowserWindow } = require('electron')

// global to avoid garbage collection
let win

const createWindow = () => {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadFile('public/index.html')
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // quit application unless on macOS
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
