/*****************************************************************************************
 * file - app.tsx
 * description - React App Root
 * ---------------------------------------------------------------------------------------
 * (수정자(이름) / 날짜 / 내용)
 * 류호진 / 2024.03.18 / 최초작성
 *****************************************************************************************/


import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(<StrictMode>
    <RouterProvider router={router} />
</StrictMode>,);