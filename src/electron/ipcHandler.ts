/*****************************************************************************************
 * file - ipcHandler.ts
 * description - ipc통신을 등록하는 소스 코드
 * ---------------------------------------------------------------------------------------
 * (수정자(이름) / 날짜 / 내용)
 * 류호진 / 2024.03.18 / 최초작성
 *****************************************************************************************/

import { ipcMain } from "electron";
import Store from "electron-store";

const store = new Store();

const createIpcHandler = () => {
    ipcMain.handle('setStoreValue', (event, data) => {
        const { key, value } = data;
        store.set(key, value);
        event.sender.send('updateStoreValue', { key, value })
    })

    ipcMain.handle('getStoreValue', (event, key) => {
        return store.get(key);
    })
};


export default createIpcHandler;