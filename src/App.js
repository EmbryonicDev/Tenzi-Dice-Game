import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Confetti from 'react-confetti';
import Die from "./Die";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  function randomNum() {
    return Math.ceil(Math.random() * 6);
  }

  useEffect(() => {
    if (dice.every(die => die.isHeld &&
      die.value === dice[0].value)) {
      setTenzies(true);
      console.log("You won!")
    };
  }, [dice])

  function rollDice() {
    if (tenzies) {
      setDice(allNewDice());
      setTenzies(false);
    } else {
      setDice(prevState => prevState.map(die => {
        return !die.isHeld ?
          { ...die, value: randomNum() } :
          die
      }))
    }
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
    !tenzies &&
      setDice(prevState => prevState.map(die => {
        return die.id === id ?
          { ...die, isHeld: !die.isHeld } :
          die
      }))
  }

  const diceElements = dice.map(die =>
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  )

  return (
    <main id="main">
      <div id="board">
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </p>
        <div id='dieSet'>{diceElements}</div>
        <button
          id='rollBtn'
          onClick={rollDice}>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </div>
    </main>
  );
}

export default App;
