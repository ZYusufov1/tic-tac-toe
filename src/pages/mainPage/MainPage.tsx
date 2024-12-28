import './MainPage.css'

// @ts-ignore
import XIcon from './../../images/x.svg?react'
// @ts-ignore
import OIcon from './../../images/o.svg?react'
import { useState } from 'react'
import classNames from 'classnames'
import GroupIcons from '../../components/groupIcons/GroupIcons.tsx'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
    const [way, setWay] = useState('X')
    const navigate = useNavigate()    
    
    const handleNavigation = (mode: string, player: string) => {
        navigate(`/game?mode=${mode}&player=${player}`)
    }
    
    return (
        <div className={'mainPage'}>
            <GroupIcons />

            <div className={'blockChoose'}>
                <div className={'title'}>
                    PICK PLAYER 1’S MARK
                </div>

                <div className={'buttonsChoose'}>
                    <button
                        className={classNames('button' , {
                            'buttonChose': way == 'X'
                        })}
                        onClick={() => setWay('X')}
                    >
                        <XIcon />
                    </button>

                    <button
                        className={classNames('button' , {
                            'buttonChose': way == 'O'
                        })}
                        onClick={() => setWay('O')}
                    >
                        <OIcon />
                    </button>
                </div>

                <div className={'member'}>
                    REMEMBER : X GOES FIRST
                </div>
            </div>

            <div className={'modeButtons'}>

                <button
                    className={classNames('buttonYellow', 'buttonText')}
                    onClick={() => handleNavigation('PlayerVSCPU', way)}
                >
                    NEW GAME (VS CPU)
                </button>
                <button
                    className={classNames('buttonLime', 'buttonText')}
                    onClick={() => handleNavigation('PlayerVSPlayer', way)}
                >
                    NEW GAME  (VS PLAYER)
                </button>
            </div>
        </div>
    )
}

export default MainPage