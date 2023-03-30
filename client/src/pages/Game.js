import React from 'react';
import Header from '../components/header/index.js';
import StartGame from '../utils/Game/Blackjack.js';

function Game() {
    return (
    <>
    <Header />
    <br></br>
    
    <StartGame />;
    </>
    )
};


export default Game;