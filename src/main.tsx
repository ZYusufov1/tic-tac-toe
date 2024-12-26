import { StrictMode } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
// @ts-ignore
import '@fontsource/outfit'
import MainPage from './pages/mainPage/MainPage.tsx'
import GamePage from './pages/gamePage/GamePage.tsx'

const router = createHashRouter(
    [
        { path: '/', element: <MainPage /> },
        { path: '/game', element: <GamePage /> },
    ],
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
