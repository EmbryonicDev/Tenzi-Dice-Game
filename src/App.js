import React, { useState } from 'react';
import uniqid from 'uniqid';
import Die from "./Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  const diceElements = dice.map(die =>
    <Die key={uniqid()} value={die} />)

  return (
    <main id="main">
      <div id="board">
        <div id='dieSet'>
          {diceElements}
        </div>
      </div>
    </main>
  );
}

export default App;
