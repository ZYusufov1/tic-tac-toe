import './MainPage.css'

// @ts-ignore
import XIcon from './../../images/x.svg?react'
// @ts-ignore
import OIcon from './../../images/o.svg?react'
import { useState } from 'react'
import classNames from 'classnames'
import GroupIcons from '../../components/groupIcons/GroupIcons.tsx'
import { Player } from '../../App.tsx'

interface MainPageProps {
    setMode: (value: string) => void,
    setPlayer: (value: Player) => void,
    startGame: () => void
}

const MainPage = ({ setMode, setPlayer, startGame }: MainPageProps) => {
    const [way, setWay] = useState<Player>('X')

    const handleStartGame = (mode: string, player: Player) => {
        setPlayer(player)
        setMode(mode)
        startGame()
    }

    return (
        <div className={'mainPage'}>
            <GroupIcons/>

            <div className={'blockChoose'}>
                <div className={'title'}>
                    PICK PLAYER 1’S MARK
                </div>

                <div className={'buttonsChoose'}>
                    <button
                        aria-label="Chose X option"
                        className={classNames('button', {
                            'buttonChose': way == 'X'
                        })}
                        onClick={() => setWay('X')}
                    >
                        <XIcon/>
                    </button>

                    <button
                        aria-label="Chose O option"
                        className={classNames('button', {
                            'buttonChose': way == 'O'
                        })}
                        onClick={() => setWay('O')}
                    >
                        <OIcon/>
                    </button>
                </div>

                <div className={'member'}>
                    REMEMBER : X GOES FIRST
                </div>
            </div>

            <div className={'modeButtons'}>
                <button
                    aria-label="CPU option"
                    className={classNames('buttonMode', 'yellow', 'buttonText')}
                    onClick={() => handleStartGame('PlayerVSCPU', way)}
                >
                    NEW GAME (VS CPU)
                </button>

                <button
                    aria-label="Player option"
                    className={classNames('buttonMode', 'lime', 'buttonText')}
                    onClick={() => handleStartGame('PlayerVSPlayer', way)}
                >
                    NEW GAME (VS PLAYER)
                </button>
            </div>
        </div>
    )
}

export default MainPage