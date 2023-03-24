import React from 'react';
import blackjack from './utils/Blackjack.js';

function Game() {
    return(
        <div>
        <button id="bet" value="bet">Bet</button>
        <button id="stand" value="stand"></button>
        <button id="hit" value="hit"></button>
        <div id ="cardPlaceholder"> </div>
        </div>

    )
}

export default Game;