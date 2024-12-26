import './MainPage.css'

// @ts-ignore
import XIcon from './../../images/x.svg?react'
// @ts-ignore
import OIcon from './../../images/o.svg?react'
import { useState } from 'react'
import classNames from 'classnames'

const MainPage = () => {
    const [way, setWay] = useState('x')

    return (
        <div className={'mainPage'}>
            <div className={'groupIcons'}>
                <XIcon /> <OIcon />
            </div>

            <div className={'blockChoose'}>
                <div className={'title'}>
                    PICK PLAYER 1’S MARK
                </div>

                <div className={'buttonsChoose'}>
                    <button
                        className={classNames('button' , {
                            'buttonChose': way == 'x'
                        })}
                        onClick={() => setWay('x')}
                    >
                        <XIcon />
                    </button>

                    <button
                        className={classNames('button' , {
                            'buttonChose': way == 'o'
                        })}
                        onClick={() => setWay('o')}
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
                >
                    NEW GAME (VS CPU)
                </button>
                <button
                    className={classNames('buttonLime', 'buttonText')}
                >
                    NEW GAME  (VS PLAYER)
                </button>
            </div>
        </div>
    )
}

export default MainPage