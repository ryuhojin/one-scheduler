/*****************************************************************************************
 * file - index.tsx
 * description - 진입 페이지
 * ---------------------------------------------------------------------------------------
 * (수정자(이름) / 날짜 / 내용)
 * 류호진 / 2024.03.18 / 최초작성
 *****************************************************************************************/

import { createFileRoute } from '@tanstack/react-router'
import Calendar from '@/components/calendar/Calendar'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2">
            <Calendar />
        </div>
    )
}