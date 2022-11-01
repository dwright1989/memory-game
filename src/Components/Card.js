import React from "react";


export default function Card(props) {

   return(
       <div id="card">
           url: {props.url}
           hasBeenClicked: {props.hasBeenClicked}
       </div>
   );
}