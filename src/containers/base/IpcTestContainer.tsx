/*****************************************************************************************
 * file - IpcTestContainer.ts
 * description - IPC 통신 이해를 위한 테스트 컨트롤러
 * 단순 이해를 돕고자 만든 테스트 컨트롤러 입니다.
 * ---------------------------------------------------------------------------------------
 * (수정자(이름) / 날짜 / 내용)
 * 류호진 / 2024.03.22 / 최초작성
 *****************************************************************************************/

import { useCallback, useState } from "react";

const IpcTestContainer = () => {

  const [data, setData] = useState('');

  const onClickInvoke = useCallback(async () => {
    //Async하게 통신이 가능하다.
    const ipcRenderer = window.ipcRenderer;
    const response = await ipcRenderer.invoke('testInvoke','성공')
    setData(response);
  }, []);

  const onClickSend = useCallback(() => {
    //just Call용의 통신이 가능하다.
    const ipcRenderer = window.ipcRenderer;
    ipcRenderer.send('testSend',{data:'aa'})
  }, []);

  return (
    <div>
      <button onClick={onClickInvoke}> IPC 통신 호출 </button>
      <button onClick={onClickSend}> IPC 통신 호출 </button>
      <span>도착한 IPC 통신완료 : {data}</span>
    </div>
  );
};

export default IpcTestContainer;
