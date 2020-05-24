import React from 'react'
import WinBoardColumn from './WinBoardColumn'

function WinBoard(props) {
    
    var winsCut = []

    for (let index = 0; index < props.wins.length; index++) {
        winsCut.push(props.wins[index] / props.twoSameCut)
    }

    return (
        <div className='Win-board'>
            <WinBoardColumn wins={props.wins} fruitCount={3}/>
            <WinBoardColumn wins={winsCut} fruitCount={2}/>
        </div>
    )
}

export default WinBoard

