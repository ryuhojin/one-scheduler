/*****************************************************************************************
 * file - setting.tsx
 * description - 설정 페이지
 * ---------------------------------------------------------------------------------------
 * (수정자(이름) / 날짜 / 내용)
 * 류호진 / 2024.03.18 / 최초작성
 *****************************************************************************************/

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/setting')({
    component: Setting,
})

function Setting() {
    return (
        <div className="p-2">Setting
        </div>
    )
}