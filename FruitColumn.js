import React from 'react'
import Fruit from './Fruit'

function FruitColumn(props)  {
    return (
        <div className='Fruit-column' width='64' height='192'>
            <Fruit newFruit={props.myFruits[2]} styleClass='Fruit' size='64'/>
            <Fruit newFruit={props.myFruits[1]} styleClass='Fruit-middle' size='64'/>
            <Fruit newFruit={props.myFruits[0]} styleClass='Fruit' size='64'/>
        </div>
    )
}

export default FruitColumn
