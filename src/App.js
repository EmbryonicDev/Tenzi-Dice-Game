import React, { useState } from 'react';
import uniqid from 'uniqid';
import Die from "./Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function rollDice() {
    setDice(allNewDice())
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      })
    }
    return newDice
  }

  const diceElements = dice.map(die =>
    <Die key={uniqid()} value={die.value} />)

  return (
    <main id="main">
      <div id="board">
        <div id='dieSet'>{diceElements}</div>
        <button id='rollBtn' onClick={rollDice}>Roll</button>
      </div>
    </main>
  );
}

export default App;
