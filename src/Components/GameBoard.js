import React from "react";
import Card from '../Components/Card';


export default function GameBoard(props) {

    const cards = props.cards;
    console.log(cards);

   return(
       <div id="gameBoard">
           {cards.map((card)=>(
                <Card url={card.url} hasBeenClicked="false"/>
           ))}
       </div>
   );
}