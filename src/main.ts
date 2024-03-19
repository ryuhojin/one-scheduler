/*****************************************************************************************
 * file - main.tsx
 * description - Electron App Root
 * - 일렉트론 앱 구동
 * - 브라우저 생성 및 로딩
 * - 로컬 api리시버 활성화
 * ---------------------------------------------------------------------------------------
 * (수정자(이름) / 날짜 / 내용)
 * 류호진 / 2024.03.18 / 최초작성
 *****************************************************************************************/

import { app, BrowserWindow } from 'electron';
import path from 'path';

/** IPC 통신을 위한 핸들러 정의 */
import createIpcHandler from './electron/ipcHandler';
/** 로컬 API수신을 위한 리시버 정의 */
import apiReciever from './electron/apiReciever';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
  apiReciever.close();
}
createIpcHandler();

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    resizable: true,
    frame: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }


};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
      BrowserWindow.getAllWindows().length === 0 && createWindow();
    })
    apiReciever.listen(8080, () => {
      console.log("ELECTRON_SERVER RUNNING ON 8080");
    })
});

app.on('before-quit', () => {
  apiReciever.close();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
    apiReciever.close();
  }
});



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
