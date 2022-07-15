import React from 'react';
import Die from "./Die";

function App() {

  function randomDie() {
    return (
      Math.ceil(Math.random() * 6)
    )
  }

  return (
    <main id="main">
      <div id="board">
        <div id='dieSet'>
          <Die value={randomDie()} />
          <Die value={randomDie()} />
          <Die value={randomDie()} />
          <Die value={randomDie()} />
          <Die value={randomDie()} />
          <Die value={randomDie()} />
          <Die value={randomDie()} />
          <Die value={randomDie()} />
          <Die value={randomDie()} />
          <Die value={randomDie()} />
        </div>
      </div>
    </main>
  );
}

export default App;
