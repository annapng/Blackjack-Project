import React, { useState, useEffect } from 'react';
import { findValueofHand, retrieveCardPNG } from './CardFunctions.js';
import DeckCreation from './Deck.js';
import cardBack from '../../assets/playing card pngs/black back2.png';
import returnImage from './Images.js';



function StartGame() {

    let Deck = [];

    Deck = DeckCreation();
        console.log(Deck);

    const [cardImg, setCardImg] = useState(cardBack);
    
          let cardPngs = retrieveCardPNG(Deck.cards);
          console.log(cardPngs);
          let card1 = cardPngs[0];
        console.log(card1);

        let img = returnImage(card1);
        console.log(img);

    const bet = () => {

         setCardImg(img);
      
    }


    return (
        <div className='Game'>
        <button id="bet" 
                value="bet"
                onClick={bet}  
                      >Bet</button>
        <button id="stand" value="stand">Stand</button>
        <button id="hit" value="hit">Hit</button>
        <div id ="cardPlaceholder"> </div>

        <img src={cardImg} />
        </div>

    )




}







// currentDeck.dealMul([hand, dealer], 5);
//     // deal 5 cards to both hands

// console.log(dealer); // All of Dealer's Cards
// console.log(dealer[0]); // Dealer's first card info
// console.log(dealer[0].rank.sortNum); // Value of card

// const sum = findValueofHand(dealer);
// console.log(sum);

// to find the value of a hand


// let cardPics = retrieveCardPNG(dealer);
// console.log(cardPics);

// send any array of Cards here and it'll spit out the corrensponding name of all of the cards' .png files!


// function betFunc(){


//     currentDeck.dealMul([hand, dealer], 1);
//     let handPicHelper = retrieveCardPNG(hand);
//     let dealerPicHelper = retrieveCardPNG(dealer);

//     let handPic = pngURL + handPicHelper[0];
//     console.log(handPic);
    

//  //   cardPlaceholder.innerHTML = `<img src="${pngURL}${handPic}"   />`;
//     console.log(pngURL);
//     console.log(handPic[0]);


// }

console.log("hi");

// betBtn.onclick = betFunc();


//}; // end of window.onload



export default StartGame;