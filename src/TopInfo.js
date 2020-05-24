import React from 'react'
import MyMoneys from './MyMoneys'
import LastWin from './LastWin'

function TopInfo(props) {
    return (
        <div className='Top-info'>
            <MyMoneys money={props.money}/>
            <LastWin lastWin={props.lastWin}/>
        </div>
    )
}

export default TopInfo
