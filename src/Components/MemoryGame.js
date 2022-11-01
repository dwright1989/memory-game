
import React, { useEffect } from "react";
import Header from '../Components/Header';
import GameBoard from '../Components/GameBoard';
import Modal from '../Components/Modal';
import Image1 from "../Images/1.jpg"
import Image2 from "../Images/2.jpg"
import Image3 from "../Images/3.jpg"
import Image4 from "../Images/4.jpg"
import Image5 from "../Images/5.jpg"
import Image6 from "../Images/6.jpg"
import Image7 from "../Images/7.jpg"
import Image8 from "../Images/8.jpg"
import Image9 from "../Images/9.jpg"
import Image10 from "../Images/10.jpg"
import Image11 from "../Images/11.jpg"
import Image12 from "../Images/12.jpg"


function MemoryGame() {

    let images = [
        {url: Image1, name: "1", hasBeenClicked:false},
        {url: Image2, name: "2", hasBeenClicked:false},
        {url: Image3, name: "3", hasBeenClicked:false},
        {url: Image4, name: "4", hasBeenClicked:false},
        {url: Image5, name: "5", hasBeenClicked:false},
        {url: Image6, name: "6", hasBeenClicked:false},
        {url: Image7, name: "7", hasBeenClicked:false},
        {url: Image8, name: "8", hasBeenClicked:false},
        {url: Image9, name: "9", hasBeenClicked:false},
        {url: Image10, name: "10", hasBeenClicked:false},
        {url: Image11, name: "11", hasBeenClicked:false},
        {url: Image12, name: "12", hasBeenClicked:false},
        
    ];

    const [game, setGame] = React.useState({
        currentScore: 0,
        bestScore: 0,
        cards: images
    });

    const [modal, setModal] = React.useState({
        open: false,
        modalMessage: ""
    })


    function handleCardClick(name){
        let cardObject = game.cards.filter(obj=>{
            return obj.name===name;
        });
        if(cardObject[0].hasBeenClicked){
            setModal({
                open: true,
                modalMessage: "Oh No! You've already clicked that card.  GAME OVER."
            })
            resetGame();
        }else{
            const newCards = game.cards.map((card)=>{
                if(card.name===name){
                    card.hasBeenClicked=true;
                }
                return card;
            });
            let newBestScore = game.bestScore;
            if(game.currentScore+1>newBestScore){
                newBestScore = game.currentScore+1;
            }
            setGame(prevGame => ({
                bestScore: newBestScore,
                currentScore: prevGame.currentScore+1,
                cards: newCards
            }))
        }
    }

    function resetGame(){
        setGame(prevGame => ({
            ...prevGame,
            currentScore: 0,
            cards: images
        }))
    }

    function shuffle(){
        let newCardsArray = game.cards;
            newCardsArray.sort(()=>Math.random()-0.5);
            setGame(prevGame=>({
                ...prevGame,
                cards: newCardsArray
        }))
    }

    function win(){
        setModal({
            open: true,
            modalMessage: "WOW! You've beat the game. Well Done."
        })
        resetGame();
    }

    useEffect(() =>{
            shuffle();
            let allClicked = true;
            for(let i=0; i<game.cards.length; i++){
                if(!game.cards[i].hasBeenClicked){
                    allClicked = false;
                    break;
                }
            }
            if(allClicked){
                win();
            }           
    },[game.currentScore]);

  return (
    <>
      <Header currentScore={game.currentScore} bestScore={game.bestScore}/>
      <GameBoard cards={game.cards} handleCardClick={handleCardClick}/>
      <Modal open={modal.open} onClose={() => setModal(prevModal=>({...prevModal, open:false}))}>{modal.modalMessage}</Modal>
    </>
  );
}

export default MemoryGame;
