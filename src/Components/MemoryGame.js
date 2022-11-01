
import React from "react";
import Header from '../Components/Header';

function MemoryGame() {
    // State current score, best score and the card array
    const [game, setGame] = React.useState({
        currentScore: 0,
        bestScore: 0,
        cards: []
    })
  return (
    <>
      <Header currentScore={game.currentScore} bestScore={game.bestScore}/>
    </>
  );
}

export default MemoryGame;
