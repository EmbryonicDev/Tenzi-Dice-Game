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
        isHeld: false,
        id: uniqid()
      })
    }
    return newDice
  }

  function holdDice(id) {
    console.log("ID of die clicked: " + id)
  }

  const diceElements = dice.map(die =>
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />)

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
