
import React from "react";
import Header from '../Components/Header';
import GameBoard from '../Components/GameBoard';
import Card from '../Components/Card';

function MemoryGame() {

    const numberOfImages = 12;
    let images = [];
    for(let i=0; i<numberOfImages; i++){
        let imageUrl = i+1;
        let card = {url: "../Images/"+imageUrl+".jpg"};
        images.push(card);
    }

    const [game, setGame] = React.useState({
        currentScore: 0,
        bestScore: 0,
        cards: images
    });

  return (
    <>
      <Header currentScore={game.currentScore} bestScore={game.bestScore}/>
      <GameBoard cards={game.cards}/>
    </>
  );
}

export default MemoryGame;
