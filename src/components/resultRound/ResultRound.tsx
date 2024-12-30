import Modal from '../../pages/ui/modal/Modal.tsx'
import './ResultRound.css'
// @ts-ignore
import XIcon from './../../images/x.svg?react'
// @ts-ignore
import OIcon from './../../images/o.svg?react'
import classNames from 'classnames'
import { FC, useState } from 'react'

interface ResultRoundProps {
    isOpen: boolean;
    onClose: () => void;
    onReset: () => void;
    whoWins: 'first' | 'second' | 'you' | 'cpu' | 'DRAW';
    winnersIcon?: 'X' | 'O' | null;
}

const ResultMessage: FC<{ whoWins: string; winnersIcon?: 'X' | 'O' | null }> = ({ whoWins, winnersIcon }) => {
    const messages: Record<string, string> = {
        first: 'PLAYER 1 WINS!',
        second: 'PLAYER 2 WINS!',
        cpu: 'OH NO, YOU LOST…',
        you: 'YOU WON!',
        DRAW: 'ROUND TIED',
    }

    const message = messages[whoWins] || 'Something Wrong'

    return (
        <>
            {whoWins !== 'DRAW' ? (
                <>
                    <div className="title">{message}</div>
                    <div
                        className={classNames('result','icon', {
                            x: winnersIcon === 'X',
                            o: winnersIcon === 'O',
                        })}
                    >
                        {winnersIcon === 'X' ? <XIcon /> : <OIcon />}
                        TAKES THE ROUND
                    </div>
                </>
            ) : (
                <div className={classNames('result', 'draw')}>{message}</div>
            )}
        </>
    )
}

const ResultRound: FC<ResultRoundProps> = ({ isOpen, onClose, onReset, whoWins, winnersIcon }) => {
    const [isShow, setIsShow] = useState(false)

    const handleQuit = () => {
        onClose()
    }

    const handleReset = () => {
        onReset()
        setIsShow(false)
    }

    return (
        <Modal isOpen={isOpen}>
            <div className="content">
                {!isShow ? (
                    <>
                        <ResultMessage whoWins={whoWins} winnersIcon={winnersIcon} />

                        <div className="groupButtons">
                            <button
                                aria-label="Quit option"
                                className="grayButton"
                                onClick={handleQuit}
                            >
                                QUIT
                            </button>

                            <button
                                aria-label="Next round option"
                                className="yellowButton"
                                onClick={() => setIsShow(true)}
                            >
                                NEXT ROUND
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={classNames('result', 'draw')}>RESTART GAME?</div>

                        <div className="groupButtons">
                            <button

                                aria-label="Cancel option"
                                className="grayButton"
                                onClick={handleQuit}
                            >
                                NO, CANCEL
                            </button>

                            <button
                                aria-label="Restart option"
                                className="yellowButton"
                                onClick={handleReset}
                            >
                                YES, RESTART
                            </button>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    )
}

export default ResultRound
