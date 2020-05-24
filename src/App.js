import React, { useEffect } from 'react';
import Logic from './Logic'
import Header from './Header'
import WinBoard from './WinBoard'
import './App.css'

// let fruits = ['apple', 'banana', 'blueberry', 'cherry', 'lemon', 'pear', 'star', 'strawberry']
let wins = [16, 12, 20, 4, 40, 60, 100, 8]
let winTwoSameCut = 4

function App() {

  useEffect(() => {
    document.title = 'Fruit Pot';
  });
  
  return (
    <div>
      <Header/>
      <Logic wins={wins} twoSameCut={winTwoSameCut}/>
      <WinBoard wins={wins} twoSameCut={winTwoSameCut}/>
    </div>
  );
}

export default App;
