import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Confetti from 'react-confetti';
import Die from "./Die";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rollCounter, setRollCounter] = useState(0);
  const [bestGame, setBestGame] = useState(localStorage.getItem('bestGame') || '')

  function randomNum() {
    return Math.ceil(Math.random() * 6);
  }

  useEffect(() => {
    if (dice.every(die => die.isHeld &&
      die.value === dice[0].value)) {
      setTenzies(true);
    };
  }, [dice])

  useEffect(() => {
    if (tenzies) {
      setBestGame(prevState => {
        if (prevState.length < 1) {
          return rollCounter
        } else {
          if (prevState > rollCounter) {
            return rollCounter
          } else {
            return prevState
          }
        }
      });
      localStorage.setItem('bestGame', bestGame);
    }
  }, [tenzies, rollCounter, bestGame]);

  function rollDice() {
    if (tenzies) {
      setDice(allNewDice());
      setTenzies(false);
      setRollCounter(0);
    } else {
      setDice(prevState => prevState.map(die => {
        return !die.isHeld ?
          { ...die, value: randomNum() } :
          die
      }));
      setRollCounter(prevState => prevState + 1)
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
        <h4 id='rollCounter'>Number of Rolls: {rollCounter}</h4>
        <h4 id='bestGame'>Best Game: {bestGame.length < 1 ? '?' : bestGame} Rolls</h4>
      </div>
    </main>
  );
}
export default App;
