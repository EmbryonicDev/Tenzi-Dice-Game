import React from 'react';
import Die from "./Die";

function App() {

  function allNewDies() {
    return (
      Math.ceil(Math.random() * 6)
    )
  }

  return (
    <main id="main">
      <div id="board">
        <div id='dieSet'>
          <Die value={allNewDies()} />
          <Die value={allNewDies()} />
          <Die value={allNewDies()} />
          <Die value={allNewDies()} />
          <Die value={allNewDies()} />
          <Die value={allNewDies()} />
          <Die value={allNewDies()} />
          <Die value={allNewDies()} />
          <Die value={allNewDies()} />
          <Die value={allNewDies()} />
        </div>
      </div>
    </main>
  );
}

export default App;
