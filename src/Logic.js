import React, { Component } from 'react'
import PlayButton from './PlayButton'
import FruitContainer from './FruitContainer'
import TopInfo from './TopInfo'

let dummyArray = [[],[],[]]
let fruitsLength = 20
let odds = [0.14, 0.16, 0.12, 0.2, 0.1, 0.08, 0.03, 0.17]
let wins
let twoSameCut
let myInterval

class Logic extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
            play: false,
            fruitsCol: [[],[],[]],
            money: 10,
            lastWin: 0
        }

        wins = props.wins
        twoSameCut = props.twoSameCut

        this.rollfruits = this.rollfruits.bind(this)
    }

    componentDidMount() {
        this.setupFruitsArray()
    }

    getFruitIndex() {
        var rnd = Math.random()
        var cumul = 0

        for (let index = 0; index < odds.length; index++) {
            cumul += odds[index] 
            if (rnd <= cumul) return index
        }

        return odds.length-1
    }

    setupFruitsArray() {
        for (let index = 0; index < fruitsLength; index++) {
            for (let col = 0; col < 3; col++) {
                dummyArray[col].push(this.getFruitIndex())
            }
        }

        this.updateArrayState()
        
    }

    handlePlay = (playState) => {
        this.setState({
            play: playState,
            money: this.state.money - 1
        })

        if (playState) {
            myInterval = setInterval(this.rollfruits, 400)
        }
    }

    rollfruits() {
        if (dummyArray[0].length > 3) {
            for (let col = 0; col < 3; col++) {
                dummyArray[col].shift()
            }

            this.updateArrayState()
        }
        else {
            this.calculateWinnings()
            clearInterval(myInterval)
        }
    }

    updateArrayState() {
        this.setState({
            fruitsCol: dummyArray
        })
    }

    calculateWinnings() {
        var moneyWon = 0

        if(this.state.fruitsCol[0][1] === this.state.fruitsCol[1][1] && 
            this.state.fruitsCol[1][1] === this.state.fruitsCol[2][1]) {
            moneyWon = wins[this.state.fruitsCol[0][1]]
        }
        else if (this.state.fruitsCol[0][1] === this.state.fruitsCol[1][1]) {
            moneyWon = wins[this.state.fruitsCol[0][1]] / twoSameCut
        }

        var newPlayState = false;

        if (this.state.money <= 0 && moneyWon === 0) {
            newPlayState = true;
        }

        this.setState({
            play: newPlayState,
            money: this.state.money + moneyWon,
            lastWin: moneyWon
        })

        this.setupFruitsArray()
    }

    render() {
        return (
            <div>
                <TopInfo money={this.state.money} lastWin={this.state.lastWin} />

                <FruitContainer playState={this.state.play} columns={this.state.fruitsCol} />

                <PlayButton onPressPlay={this.handlePlay} playState={this.state.play} />

            </div>
        )
    }
}

export default Logic
