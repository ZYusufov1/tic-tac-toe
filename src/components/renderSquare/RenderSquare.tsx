import React from 'react'
// @ts-ignore
import XIcon from './../../images/x.svg?react'
// @ts-ignore
import OIcon from './../../images/o.svg?react'
// @ts-ignore
import XEmptyIcon from './../../images/xEmpty.svg?react'
// @ts-ignore
import OEmptyIcon from './../../images/oEmpty.svg?react'
import { Player } from '../../pages/gamePage/GamePage.tsx'
import './RenderSquare.css'

type SquareProps = {
    index: number;
    value: Player;
    isXNext: boolean;
    isHovered: boolean;
    handleClick: (index: number) => void;
    handleMouseEnter: (index: number) => void;
    handleMouseLeave: () => void;
};

const Square: React.FC<SquareProps> = ({ index, value, isHovered, isXNext, handleClick, handleMouseEnter, handleMouseLeave }) => (
    <button
        className="square"
        onClick={() => handleClick(index)}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
    >
        {value === 'X' ? (
            <XIcon style={{ scale: '2' }} />
        ) : value === 'O' ? (
            <OIcon style={{ scale: '2' }} />
        ) : isHovered ? (
            isXNext ? <XEmptyIcon /> : <OEmptyIcon />
        ) : (
            <></>
        )}
    </button>
)

export default Square
