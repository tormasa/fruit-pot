import React from 'react'
import FruitColumn from './FruitColumn'

function FruitContainer(props) {
    return (
        <div className='Fruit-container' width='192' height='192'>
            <FruitColumn update={props.playState} myFruits={props.columns[0]}/>
            <FruitColumn update={props.playState} myFruits={props.columns[1]}/>
            <FruitColumn update={props.playState} myFruits={props.columns[2]}/>
        </div>
    )
}

export default FruitContainer
