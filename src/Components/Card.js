import React from "react";


export default function Card(props) {

    const {card, handleCardClick} = props;

   return(
       <div className="card">
           <img src={card.url} alt="card image" onClick={handleCardClick.bind(this, card.name)}/>
       </div>
   );
}