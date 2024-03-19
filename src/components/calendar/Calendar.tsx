/*****************************************************************************************
 * file - Calendar.tsx
 * description - 캘린더 페이지
 * ---------------------------------------------------------------------------------------
 * (수정자(이름) / 날짜 / 내용)
 * 류호진 / 2024.03.18 / 최초작성
 *****************************************************************************************/

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

interface CalendarProps {
    events?: any[]
}

const Calendar = ({ events = [] }: CalendarProps) => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
        />
    )
}

export default Calendar;