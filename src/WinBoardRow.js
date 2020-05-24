import React from 'react'
import Fruit from './Fruit'

function WinBoardRow(props) {
    return (
        <div className='Win-row'>
            <Fruit newFruit={props.index} styleClass='Fruit' size='16'/>
            <Fruit newFruit={props.index} styleClass='Fruit' size='16'/>
            <Fruit newFruit={(props.fruitCount < 3) ? 8 : props.index} styleClass='Fruit' size='16'/>
            <p> .......... {props.wins[props.index]}</p>
        </div>
    )
}

export default WinBoardRow
