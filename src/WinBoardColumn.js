import React from 'react'
import WinBoardRow from './WinBoardRow'

function WinBoardColumn(props) {
    return (
        <div className='Win-col'>
            <WinBoardRow index={6} wins={props.wins} fruitCount={props.fruitCount}/>
            <WinBoardRow index={5} wins={props.wins} fruitCount={props.fruitCount}/>
            <WinBoardRow index={4} wins={props.wins} fruitCount={props.fruitCount}/>
            <WinBoardRow index={2} wins={props.wins} fruitCount={props.fruitCount}/>
            <WinBoardRow index={0} wins={props.wins} fruitCount={props.fruitCount}/>
            <WinBoardRow index={1} wins={props.wins} fruitCount={props.fruitCount}/>
            <WinBoardRow index={7} wins={props.wins} fruitCount={props.fruitCount}/>
            <WinBoardRow index={3} wins={props.wins} fruitCount={props.fruitCount}/>
        </div>
    )
}

export default WinBoardColumn
