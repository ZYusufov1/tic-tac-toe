import { Player } from '../gamePage/GamePage.tsx'

export const calculateBestMove = (board: Player[], cpu: Player): number | null => {
    const lines: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let line of lines) {
        const [a, b, c] = line
        if (board[a] === cpu && board[b] === cpu && board[c] === null) return c
        if (board[a] === cpu && board[c] === cpu && board[b] === null) return b
        if (board[b] === cpu && board[c] === cpu && board[a] === null) return a
    }

    const player = cpu === 'X' ? 'O' : 'X'
    for (let line of lines) {
        const [a, b, c] = line
        if (board[a] === player && board[b] === player && board[c] === null) return c
        if (board[a] === player && board[c] === player && board[b] === null) return b
        if (board[b] === player && board[c] === player && board[a] === null) return a
    }

    for (let i = 0; i < board.length; i++) {
        if (board[i] === null) return i
    }

    return null
}