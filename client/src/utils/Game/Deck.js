import React, { useState, useEffect } from 'react';

function DeckCreation( deck ) {



class Suit {
	constructor(_name, _shortName, _sortNum) {
		this.name = _name;
		this.shortName = _shortName;
		this.sortNum = _sortNum;

		Object.freeze(this);
	}
}

class Rank {
	constructor(_shortName, _longName, _sortNum) {
		this.shortName = _shortName;
		this.longName = _longName;
		this.sortNum = _sortNum;

		Object.freeze(this);
	}
}

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


class Card {
	constructor(_rank, _suit) {

		this.rank = _rank;
		this.suit = _suit;

		Object.freeze(this);
	}

	get displayShort() {
		if (this.rank.shortName === 'Joker') return `Joker`
		else return `${this.rank.shortName}${this.suit.shortName}`;
	}

	get displayText() {
		if (this.rank.shortName === 'Joker') return `Joker`
		else return `${this.rank.longName} of ${this.suit.name}`;
	}
}

let cards = [];

ranks.forEach(rank => suits.forEach(suit => cards.push(new Card(rank, suit))));

class Deck {
	constructor( _numOfDecks = 1, _deck = { cards }) {

		  

		for (let i = 0; i < _numOfDecks; i++) {
			cards.push(..._deck.cards);
		}

		this.cards = cards;
		this.initialCards = [...this.cards];
	}

	get remainingLength() {
		return this.cards.length;
	}

	deal(hand, count = 1) {
		if (!Array.isArray(hand)) throw new Error('Deck: Invalid hand to deal cards, must be an Array');
		if (count > this.cards.length) {
			console.log('Not enough cards in the deck to deal');
			return;
		}

		hand.push(...this.cards.splice(0, count));
	}

	dealMul(hands, count = 1) {
		if (count * hands.length > this.cards.length) {
			console.log('Not enough cards in the deck to deal');
			return;
		}

		for (let i = 0; i < count; i++) {
			hands.forEach(hand => {
				hand.push(...this.cards.splice(0, 1));
			});
		}
	}

	insert(cards) {
		this.cards.push(...cards);
	}

	reset() {
		this.cards = this.initialCards;
	}

	shuffle() {
		for (let i = this.cards.length - 1; i > 0;i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = this.cards[i];
			this.cards[i] = this.cards[j];
			this.cards[j] = temp;
		}
	}
}




const currentDeck = new Deck(0, 1, { cards })
  // 0 Jokers, 1 Deck of Cards, use our rules



currentDeck.shuffle();
    // shuffle   

//  console.log(currentDeck);

 return currentDeck;

}

export default DeckCreation;