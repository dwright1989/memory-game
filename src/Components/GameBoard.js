import React from "react";
import Card from '../Components/Card';

export default function GameBoard(props) {

    const {cards, handleCardClick} = props;
    
   

   return(
       <div id="gameBoard">
           {cards.map((card)=>(
                <Card card={card} key={card.name} hasBeenClicked={card.hasBeenClicked} handleCardClick={handleCardClick}/>
           ))}
       </div>
   );
}