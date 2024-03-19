/*****************************************************************************************
 * file - __route.tsx
 * description - 파일 라우팅을 위한 라우팅 루트파일
 * ---------------------------------------------------------------------------------------
 * (수정자(이름) / 날짜 / 내용)
 * 류호진 / 2024.03.18 / 최초작성
 *****************************************************************************************/

import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <Outlet />
            {process.env.NODE_ENV == 'development' && <TanStackRouterDevtools />}
        </>
    ),
})