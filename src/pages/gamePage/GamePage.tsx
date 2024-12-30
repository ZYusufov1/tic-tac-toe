import { useEffect, useState } from 'react'
import { calculateWinner } from '../utils/calculateWinner.ts'
import './GamePage.css'
import { calculateBestMove } from '../utils/calculateBestMove.ts'
import GroupIcons from '../../components/groupIcons/GroupIcons.tsx'
import ResultRound from '../../components/resultRound/ResultRound.tsx'
import Square from '../../components/renderSquare/RenderSquare.tsx'
import type { Player } from '../../App.tsx'

// @ts-ignore
import XIcon from './../../images/x.svg?react'
// @ts-ignore
import OIcon from './../../images/o.svg?react'
// @ts-ignore
import XEmptyIcon from './../../images/xEmpty.svg?react'
// @ts-ignore
import OEmptyIcon from './../../images/oEmpty.svg?react'
// @ts-ignore
import ResetIcon from './../../images/reset.svg?react'
import classNames from 'classnames'

const getOpponent = (player: Player): Player => (player === 'X' ? 'O' : 'X')

interface GamePageProps {
    mode: string,
    stopGame: () => void,
    player: Player
}

const GamePage = ({ mode, stopGame, player = 'X' }: GamePageProps) => {

    const [board, setBoard] = useState<Player[]>(Array(9).fill(null))
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [leftCount, setLeftCount] = useState<number>(0)
    const [midCount, setMidCount] = useState<number>(0)
    const [rightCount, setRightCount] = useState<number>(0)
    const [isXNext, setIsXNext] = useState<boolean>(true)
    const [isShow, setIsShow] = useState<boolean>(false)

    const winner = calculateWinner(board)

    useEffect(() => {
        if (!winner) return

        if (winner) setIsShow(true)

        if (winner === 'DRAW') {
            setMidCount((prev) => prev + 1)
        } else {
            const isLeftPlayer = winner === player
            if (isLeftPlayer) {
                setLeftCount((prev) => prev + 1)
            } else {
                setRightCount((prev) => prev + 1)
            }
        }
    }, [winner, player])

    useEffect(() => {
        if (mode !== 'PlayerVSCPU' || winner) return

        const opponent = getOpponent(player)

        if ((!isXNext && player === 'X') || (isXNext && player === 'O')) {
            const bestMove = calculateBestMove(board, opponent)
            if (bestMove !== null) {
                const newBoard = [...board]
                newBoard[bestMove] = opponent
                setBoard(newBoard)
                setIsXNext(!isXNext)
            }
        }
    }, [isXNext, board, winner, player, mode])

    const handleClick = (index: number): void => {
        if (board[index] || winner) return

        const newBoard = [...board]

        if (mode === 'PlayerVSPlayer') {
            newBoard[index] = isXNext ? 'X' : 'O'
        } else if (mode === 'PlayerVSCPU' && ((isXNext && player === 'X') || (!isXNext && player === 'O'))) {
            newBoard[index] = player
        }

        setBoard(newBoard)
        setIsXNext(!isXNext)
    }

    const handleReset = (): void => {
        setBoard(Array(9).fill(null))
        setIsShow(false)
        setIsXNext(true)
    }

    return (
        <div className="game">
            <ResultRound
                isOpen={isShow}
                onClose={() => stopGame()}
                onReset={handleReset}
                whoWins={
                    winner == 'DRAW' ? winner :
                        mode == 'PlayerVSCPU' ?
                            (player == winner ? 'you' : 'cpu') :
                            (player == winner ? 'first' : 'second')
                }
                winnersIcon={
                    winner == 'DRAW' ? null :
                        player == winner ? winner : getOpponent(player)
                }
            />

            <div className="board">
                <GroupIcons/>

                <div className={'turn'}>
                    {isXNext ? <XIcon/> : <OIcon/>} TURN
                </div>

                <button
                    aria-label="Reset option"
                    onClick={handleReset}
                    className="reset"
                >
                    <ResetIcon/>
                </button>

                {board.map((value, index) => (
                    <Square
                        key={index}
                        index={index}
                        value={value}
                        isHovered={hoveredIndex === index}
                        isXNext={isXNext}
                        handleClick={handleClick}
                        handleMouseEnter={(i) => setHoveredIndex(i)}
                        handleMouseLeave={() => setHoveredIndex(null)}
                    />
                ))}

                <div className={classNames('count', 'leftCount')}>
                    {player} {mode === 'PlayerVSCPU' ? '(YOU)' : '(Player 1)'}
                    <strong>{leftCount}</strong>
                </div>

                <div className={classNames('count', 'midCount')}>
                    TIES
                    <strong>{midCount}</strong>
                </div>

                <div className={classNames('count', 'rightCount')}>
                    {mode === 'PlayerVSCPU' ? `${getOpponent(player)} (CPU)` : `${getOpponent(player)} (Player 2)`}
                    <strong>{rightCount}</strong>
                </div>
            </div>
        </div>
    )
}

export default GamePage
