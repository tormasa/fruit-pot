import React from 'react'
import apple from './apple.png'
import banana from './banana.png'
import blueberry from './blueberry.png'
import cherry from './cherry.png'
import lemon from './lemon.png'
import pear from './pear.png'
import star from './star.png'
import strawberry from './strawberry.png'
import line from './line.png'

let fruits = [apple, banana, blueberry, cherry, lemon, pear, star, strawberry, line]

function Fruit(props) {
    return (
        <div>
            <img src={fruits[props.newFruit]} className={props.styleClass} width={props.size} height={props.size} alt='fruit' />
        </div>
    )
}

export default Fruit
