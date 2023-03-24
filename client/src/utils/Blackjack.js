const betBtn = document.getElementById("bet")
const standBtn = document.getElementById("stand")
const hitBtn = document.getElementById("hit")
let cardPlaceholder = document.getElementById("cardPlaceholder");

const pngURL = "../assets/playing card pngs/black/"

const cardDeck = require('../assets/node-card-deck');
const { Card, Deck, Rank, Suit } = cardDeck;

// Creating the deck with the correct values
const ranks = [
	new Rank('2', 'Two', 2),
	new Rank('3', 'Three', 3),
	new Rank('4', 'Four', 4),
	new Rank('5', 'Five', 5),
	new Rank('6', 'Six', 6),
	new Rank('7', 'Seven', 7),
	new Rank('8', 'Eight', 8),
	new Rank('9', 'Nine', 9),
	new Rank('10', 'Ten', 10),
	new Rank('J', 'Jack', 10),
	new Rank('Q', 'Queen', 10),
	new Rank('K', 'King', 10),
	new Rank('A', 'Ace', 1||11)
]

const suits = [
	new Suit('Club', '\u2667', 2),
	new Suit('Diamond', '\u2662', 3),
	new Suit('Heart', '\u2661', 4),
	new Suit('Spade', '\u2664', 1)
]

let cards = [];
let hand = [];
let dealer = [];

ranks.forEach(rank => suits.forEach(suit => cards.push(new Card(rank, suit))));

const currentDeck = new Deck(0, 1, { cards })
  // 0 Jokers, 1 Deck of Cards, use our rules

currentDeck.shuffle();
    // shuffle   



// currentDeck.dealMul([hand, dealer], 5);
//     // deal 5 cards to both hands

// console.log(dealer); // All of Dealer's Cards
// console.log(dealer[0]); // Dealer's first card info
// console.log(dealer[0].rank.sortNum); // Value of card

// const sum = findValueofHand(dealer);
// console.log(sum);

// to find the value of a hand
function findValueofHand( array ){
    let arrValue = [];
    for (let i = 0; i < array.length; i++) {
        arrValue.push(array[i].rank.sortNum);   }

    const initialValue = 0;
    const sum = arrValue.reduce(
        (accumulator, currentValue) =>
        accumulator + currentValue, initialValue
    );
    return sum;
}

// let cardPics = retrieveCardPNG(dealer);
// console.log(cardPics);

// send any array of Cards here and it'll spit out the corrensponding name of all of the cards' .png files!
function retrieveCardPNG( array ) {
    let cardPics = [];
        for (let i = 0; i < array.length; i++) {
            const singleCard = array[i];
            let suit = singleCard.suit.name;
            let rank = singleCard.rank.shortName;

            cardPics.push(suit + '-' + rank + '.png');
        }
    return cardPics;

    };

betBtn.onclick = function(){

    currentDeck.dealMul([hand, dealer], 1);
    let handPic = retrieveCardPNG(hand);
    let dealerPic = retrieveCardPNG(dealer);
    cardPlaceholder.innerHTML = `<img src="${pngURL}${handPic}"   />`;
    console.log(pngURL);
    console.log(handPic);


}

console.log("hi");