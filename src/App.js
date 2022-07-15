import React from 'react';
import Die from "./Die";

function App() {

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }
  console.log(allNewDice())

  return (
    <main id="main">
      <div id="board">
        <div id='dieSet'>
          <Die value={3} />
          <Die value={6} />
          <Die value={1} />
          <Die value={4} />
          <Die value={5} />
          <Die value={5} />
          <Die value={4} />
          <Die value={1} />
          <Die value={3} />
          <Die value={6} />
        </div>
      </div>
    </main>
  );
}

export default App;
