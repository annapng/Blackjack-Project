import React, { useState, useEffect } from 'react';

function DeckCreation( deck ) {

const cardDeck = require('../../assets/node-card-deck');
const { Card, Deck, Rank, Suit } = cardDeck;

// Creating the deck with the correct values
const ranks = [
	{shortName: '2', longName: "Two", sortNum: 2},
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

//  console.log(currentDeck);

 return currentDeck;

}

export default DeckCreation;