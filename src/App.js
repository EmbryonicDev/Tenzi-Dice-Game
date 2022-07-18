import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Die from "./Die";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  function randomNum() {
    return Math.ceil(Math.random() * 6);
  }

  useEffect(() => {
    console.log('Dice state changed')
  }, [dice])

  function rollDice() {
    setDice(prevState => prevState.map(die => {
      return !die.isHeld ?
        { ...die, value: randomNum() } :
        die
    }))
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: randomNum(),
        isHeld: false,
        id: uniqid()
      })
    }
    return newDice
  }

  function holdDice(id) {

    setDice(prevState => prevState.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    }))

    // ↓ ↓ ↓ Different but longer way ↓ ↓ ↓ 
    // setDice(prevState => {
    //   const newArr = [];
    //   for (let i = 0; i < prevState.length; i++) {
    //     const oldDie = prevState[i];
    //     oldDie.id === id
    //       ? newArr.push({ ...oldDie, isHeld: !oldDie.isHeld })
    //       : newArr.push(oldDie);
    //   }
    //   return newArr
    // })
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
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div id='dieSet'>{diceElements}</div>
        <button id='rollBtn' onClick={rollDice}>Roll</button>
      </div>
    </main>
  );
}

export default App;
