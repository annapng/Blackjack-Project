import React, { useState, useEffect, useRef } from 'react';
import { findValueofCard, retrieveCardPNG } from './CardFunctions.js';
import DeckCreation from './Deck.js';
import cardBack from '../../assets/playing card pngs/black back2.png';
import returnImage from './Images.js';
import '../../assets/styles/game.css';
import fx from 'fireworks';



function StartGame() {


    


    let Deck = [];

    Deck = DeckCreation();
    //    console.log(Deck);

    

    const [playerCardImg, setPlayerCardImg] = useState(cardBack);
    const [dealerCardImg, setDealerCardImg] = useState(cardBack);
    const [dealerCardImg2, setDealerCardImg2] = useState('');
    const [dealerCardImg3, setDealerCardImg3] = useState('');
    const [dealerCardImg4, setDealerCardImg4] = useState('');
    const [dealerCardImg5, setDealerCardImg5] = useState('');
    const [playerCardImg2, setPlayerCardImg2] = useState('');
    const [playerCardImg3, setPlayerCardImg3] = useState('');
    const [playerCardImg4, setPlayerCardImg4] = useState('');
    const [playerCardImg5, setPlayerCardImg5] = useState('');
    const [hit1, sethitHidden1] = useState(false);
    const [hit2, sethitHidden2] = useState(true);
    const [hit3, sethitHidden3] = useState(true);
    const [hit4, sethitHidden4] = useState(true);
    const [startGame, setStartGame] = useState(false);
    const [isBetDisabled, setBetDisabled] = useState(false);
    const [ishitDisabled, sethitDisabled] = useState(true);
    const [ishit2Disabled, sethit2Disabled] = useState(true);
    const [ishit3Disabled, sethit3Disabled] = useState(true);
    const [ishit4Disabled, sethit4Disabled] = useState(true);
    const [isstandDisabled, setstandDisabled] = useState(true);
    const [busted, setBusted] = useState(false);
    const [hideEndGame, setHideEndGame] = useState(true);
    const [hideBust, setHideBust] = useState(true);
    const [hideLoser, setHideLoser] = useState(true);
    const [hideWinner, setHideWinner] = useState(true);
    const [disablePlay, setDisablePlay] = useState(true);
    const [hiddenPlay, setHiddenPlay] = useState(true);

        
    const initialValue = 0;
    const playerCardValue = useRef(initialValue);
    const dealerCardValue = useRef(initialValue);
    const hiddenDealerCard = useRef('');
    const playerAces = useRef(initialValue);
    const dealerAces = useRef(initialValue);

        let cardPngs = retrieveCardPNG(Deck.cards);
      //  console.log(cardPngs);

        let cardArray = [];

        cardPngs.forEach(element => {
            for (let i = 0; i < cardPngs.length; i++) {
                cardArray[i] = returnImage(cardPngs[i]);
            }
        });

        cardArray.value = cardPngs;


    const updatePlayerValue = (value) => {
        
        if (value === "A") {
            playerAces.current++;
        }

         let num1 = findValueofCard(value);
         console.log(num1);
         
        let num2 = playerCardValue.current;

        console.log(num2);

        let sum = parseFloat(num1) + parseFloat(num2);

        console.log(sum);

        playerCardValue.current = sum;

        console.log(playerCardValue);

      }

      const updateDealerValue = (value) => {

        if (value === "A") {
            dealerAces.current++;
        }

        let num1 = findValueofCard(value);
        console.log(num1);
        
       let num2 = dealerCardValue.current;

       console.log(num2);

       let sum = parseFloat(num1) + parseFloat(num2);

       console.log(sum);

       dealerCardValue.current = sum;

       console.log(dealerCardValue);

     }


    const bet = (event) => {

        setPlayerCardImg(cardArray[0]);
        updatePlayerValue(cardArray.value[0]);

        cardArray.shift();
        cardArray.value.shift();

        setDealerCardImg(cardArray[0]);
        updateDealerValue(cardArray.value[0]);

        cardArray.shift();
        cardArray.value.shift();

        setPlayerCardImg2(cardArray[0]);
        updatePlayerValue(cardArray.value[0]);
       

        cardArray.shift();
        cardArray.value.shift();

        setDealerCardImg2(cardBack);

        hiddenDealerCard.current = cardArray[0];
        console.log(hiddenDealerCard);
        updateDealerValue(cardArray.value[0]);
        cardArray.shift();
        cardArray.value.shift();


        setStartGame(true);
        setBetDisabled(true);
        sethitDisabled(false);
        setstandDisabled(false);

    }

    


    const hit = () => {
        setPlayerCardImg3(cardArray[0]);
        updatePlayerValue(cardArray.value[0]);
        cardArray.shift();
        cardArray.value.shift();
        sethitHidden1(true);
        sethitDisabled(true);
        sethit2Disabled(false);
        sethitHidden2(false);
        console.log('1st hit')
        endGame();
    }

    const hittwo = () => {
        setPlayerCardImg4(cardArray[0]);
        updatePlayerValue(cardArray.value[0]);
        cardArray.shift();
        cardArray.value.shift();
        sethitHidden2(true);
        sethit2Disabled(true);
        sethitHidden3(false);
        sethit3Disabled(false);
        console.log('2nd hit')
        endGame();
    }

    const hitthree = () => {
        setPlayerCardImg5(cardArray[0]);
        updatePlayerValue(cardArray.value[0]);
        cardArray.shift();
        cardArray.value.shift();
        sethitHidden3(true);
        endGame();
    }

    const stand = () => {

        sethitDisabled(true);
        sethit2Disabled(true);
        sethit3Disabled(true);
        sethit4Disabled(true);
        setstandDisabled(true);
        setDealerCardImg2(hiddenDealerCard.current);




            while(dealerCardValue.current <= 16){

                setDealerCardImg3(cardArray[0]);
                updateDealerValue(cardArray.value[0]);
                cardArray.shift();
                cardArray.value.shift();

                if (dealerCardValue.current >= 17) {            
                    break;
                } 

                setDealerCardImg4(cardArray[0]);
                updateDealerValue(cardArray.value[0]);
                cardArray.shift();
                cardArray.value.shift();

                setDealerCardImg4(cardArray[0]);
                updateDealerValue(cardArray.value[0]);
                cardArray.shift();
                cardArray.value.shift();
            }

        if (dealerCardValue.current >= 17){
            console.log('wow')
            
            const values = [];
            values.push(dealerCardValue.current, playerCardValue.current);
            console.log(values);


            const goal = 21;

            const output = values.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);

            console.log(output);

            if (output === dealerCardValue.current) {
                setHideLoser(false);
                setDisablePlay(false);
                setHiddenPlay(false);
                setHideEndGame(false);
            } else {
                setHideWinner(false);
                fireworks();
                setDisablePlay(false);
                setHiddenPlay(false);
                setHideEndGame(false);
            }

        }

    }


const endGame = () => {

    if (playerCardValue.current >= 11 && playerAces.current === 1 ){
        playerCardValue.current = playerCardValue.current + 9;
    }

    if (playerCardValue.current === 21) {
        setHideWinner(false);
        fireworks();
        setDisablePlay(false);
        setHiddenPlay(false);
        setHideEndGame(false);

        sethitDisabled(true);
        sethit2Disabled(true);
        sethit3Disabled(true);
        sethit4Disabled(true);
        setstandDisabled(true);

    }

    if (playerCardValue.current >= 22) {
        // setHideBust(false);
       //  console.log('end game')
       //  bust();
       console.log('end game')
 
      // setBusted(true);
       setHideBust(false);
       setDisablePlay(false);
       setHiddenPlay(false);
       setHideEndGame(false);
       
       sethitDisabled(true);
       sethit2Disabled(true);
       sethit3Disabled(true);
       sethit4Disabled(true);
       setstandDisabled(true);
     }

}

const reload = () => {

    setPlayerCardImg(cardBack);
    setDealerCardImg(cardBack);
    setDealerCardImg2('');
    setDealerCardImg3('');
    setDealerCardImg4('');
    setDealerCardImg5('');
    setPlayerCardImg2('');
    setPlayerCardImg3('');
    setPlayerCardImg4('');
    setPlayerCardImg5('');
    sethitHidden1(false);
    sethitHidden2(true);
    sethitHidden3(true);
    sethitHidden4(true);
    setStartGame(false);
    setBetDisabled(false);
    sethitDisabled(true);
    sethit2Disabled(true);
    sethit3Disabled(true);
    sethit4Disabled(true);
    setstandDisabled(true);
    setBusted(false);
    setHideBust(true);
    setHideLoser(true);
    setHideWinner(true);
    setDisablePlay(true);
    setHiddenPlay(true);
    setHideEndGame(true);

    playerCardValue.current = initialValue;
    dealerCardValue.current = initialValue;
    hiddenDealerCard.current = '';
    playerAces.current = initialValue;
    dealerAces.current = initialValue;

}

const fireworks = () => {
    let range = n => [...new Array(n)]

    range(6).map(() =>
    fx({
        x: Math.random(window.innerWidth / 2) + window.innerWidth / 4,
        y: Math.random(window.innerWidth / 2) + window.innerWidth / 4,
        colors: ['#FFFFFF', '#000000', '#FF5555'],
        count: 10,
        canvasHeight: 800,
        canvasWidth: 800
    })  )

    let range2 = n => [...new Array(n)]

    range2(6).map(() =>
    fx({
        x: Math.random(window.innerWidth / 2) + window.innerWidth / 4,
        y: Math.random(window.innerWidth / 2) + window.innerWidth / 4,
        colors: ['#FFFFFF', '#000000', '#FF5555'],
        count: 10,
        canvasHeight: 800,
        canvasWidth: 800,
        canvasLeftOffset: 200,
        canvasTopOffset: 20
    })  )

    let range3 = n => [...new Array(n)]

    range3(6).map(() =>
    fx({
        x: Math.random(window.innerWidth / 2) + window.innerWidth / 4,
        y: Math.random(window.innerWidth / 2) + window.innerWidth / 4,
        colors: ['#FFFFFF', '#000000', '#FF5555'],
        count: 10,
        canvasHeight: 800,
        canvasWidth: 800,
        canvasLeftOffset: 0,
        canvasTopOffset: 200
    })  
    )
}


    return (
        <div className='Game'>

        <div className="fireworkContainer">

            <div className="mainButtons">
        <div className="anotherButtonDiv">
        <button id="bet" 
                className="buttons"
                value="bet"
                disabled={isBetDisabled}
                onClick={bet}  
                      >Bet</button>

        <button id="stand" 
                className="buttons"
                value="stand" 
                disabled={isstandDisabled}
                onClick={stand}
                >Stand</button>

        <button id="hit" 
                value="hit" 
                className="buttons"
                disabled={ishitDisabled}
                onClick={hit}
                hidden={hit1}
                >Hit</button>

        <button id="hit" 
                value="hit" 
                onClick={hittwo}
                disabled={ishit2Disabled}
                hidden={hit2}
                >Hit</button>

        <button id="hit" 
                value="hit" 
                onClick={hitthree}
                disabled={ishit3Disabled}
                hidden={hit3}
                >Hit</button>

        <button id="hit" 
                value="hit" 
                onClick={hitthree}
                disabled={ishit4Disabled}
                hidden={hit4}
                >Hit</button>
        </div>
        </div>
        <div id="endGame" 
            hidden={hideEndGame}>
            <div id="innerEndGame">

        <div    id="busted"
                hidden={hideBust}
        >
            BUSTED
        </div>

        <div    id="winner"
                hidden={hideWinner}
        >
            YOU WON
        </div>

        <div    id="loser"
                hidden={hideLoser}
        >
            YOU LOST
        </div>

        <button id="playAgain" 
                value="playAgain" 
                onClick={reload}
                disabled={disablePlay}
                hidden={hiddenPlay}
                >Play Again!!!</button>
        </div>
        </div>

        <div id="cardPlaceholder"> 

        <div id="dealCards">
        <img className="card" id="dealCard" src={dealerCardImg} />
        <img className="card" id="dealCard" src={dealerCardImg2} />
        <img className="card" id="dealCard" src={dealerCardImg3} />
        <img className="card" id="dealCard" src={dealerCardImg4} />
        <img className="card" id="dealCard" src={dealerCardImg5} />
        </div>
        </div><div id="dealCardPlaceholder">
        
        <div id="cards">
        <img className="card" id="playCard" src={playerCardImg} />
        <img className="card" id="playCard" src={playerCardImg2} />
        <img className="card" id="playCard" src={playerCardImg3} />
        <img className="card" id="playCard" src={playerCardImg4} />
        <img className="card" id="playCard" src={playerCardImg5} />
        </div>
        </div>
  
        </div>

  

        </div>
    )
}


export default StartGame;