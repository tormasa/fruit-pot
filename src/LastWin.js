import React from 'react'

function LastWin(props) {
    return (
        <div className='Last-win'> 
            <p>Last win: {props.lastWin}</p>
        </div>
    )
}

export default LastWin
