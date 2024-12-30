import './App.css'
import MainPage from './pages/mainPage/MainPage.tsx'
import GamePage from './pages/gamePage/GamePage.tsx'
import { useState } from 'react'

export type Player = 'X' | 'O' | null;

function App() {
  const [isGameBegin, setIsGameBegin] = useState<boolean>(false)
  const [mode, setMode] = useState<string>('')
  const [player, setPlayer] = useState<Player>(null)

  return (
    <>
      {!isGameBegin ? (
        <MainPage
            startGame={() => setIsGameBegin(true)}
            setMode={(value) => setMode(value)}
            setPlayer={(value) => setPlayer(value)}
        />
      ) : (
        <GamePage
            stopGame={() => setIsGameBegin(false)}
            mode={mode}
            player={player}
        />
      )}
    </>
  )
}

export default App
