/*****************************************************************************************
 * file - index.tsx
 * description - 진입 페이지
 * ---------------------------------------------------------------------------------------
 * (수정자(이름) / 날짜 / 내용)
 * 류호진 / 2024.03.18 / 최초작성
 *****************************************************************************************/

import IpcTestContainer from '@/containers/base/IpcTestContainer'
import { createFileRoute } from '@tanstack/react-router'


//실제로는 IpcTestContainer import를 지워주시고 아래 컴포넌트도 지우고 사용하면 됩니다.

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2">
            <IpcTestContainer/>
        </div>
    )
}