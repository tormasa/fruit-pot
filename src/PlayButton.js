import React, { Component } from 'react'

class PlayButton extends Component {
    clickHandeler = () => {
        var playState = true;
        this.props.onPressPlay(playState);
    }

    render() {
        var cName = (this.props.playState) ? 'Play-button disabled' : 'Play-button';

        return (
            <div className='Play-button-container'>
                <div className='Play-button-center'>
                <button className={cName} onClick={this.clickHandeler} disabled={this.props.playState}>PLAY</button>
                </div>
            </div>
        )
    }
}

export default PlayButton
