/*****************************************************************************************
 * file - useElectron.ts
 * description - 일렉트론의 store 라이브러리를 이용하여 데이터를 관리하기 위한 hook
 * ---------------------------------------------------------------------------------------
 * (수정자(이름) / 날짜 / 내용)
 * 류호진 / 2024.03.18 / 최초작성
 *****************************************************************************************/


import { useEffect, useState, useCallback } from "react";

const { ipcRenderer } = window;

const useElectronState = (key: string, initialState: any) => {
    const [value, setValue] = useState(initialState);

    const fetchData = useCallback(async () => {
        try {
            const storeValue = await ipcRenderer.invoke('getStoreValue', key);
            if (storeValue !== value) {
                setValue(storeValue);
            }
        } catch (error) {
            console.error('스토어 저장 실패');
        }
    }, [key, value]);

    useEffect(() => {
        if (!ipcRenderer) return;

        fetchData();

        const updateStoreValue = (event: any, data: any) => {
            const { key: updatedKey, value: updatedValue } = data;
            if (key === updatedKey && updatedValue !== value) {
                setValue(updatedValue);
            }
        };

        ipcRenderer.on('updateStoreValue', updateStoreValue);

        return () => {
            ipcRenderer.removeListener('updateStoreValue', updateStoreValue);
        };
    }, [key, value, fetchData]);

    const setStoreValue = async (newValue: any) => {
        try {
            await ipcRenderer.invoke('setStoreValue', { key, value: newValue });
            setValue(newValue);
        } catch (error) {
            console.error('데이터저장실패');
        }
    };

    return [value, setStoreValue] as [any, typeof setStoreValue];
};

export default useElectronState;
