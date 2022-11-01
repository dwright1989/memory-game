import React from "react";


export default function Header(props) {

    const {currentScore, bestScore} = props;
        return(
            <div id="header">
                <h1>Memory Game</h1>
                <p>Try to click all the cards without clicking the same one twice!</p>
                <div>
                    Current Score: {currentScore}
                </div>
                <div>
                    Best Score: {bestScore}
                </div>
            </div>
        );
}