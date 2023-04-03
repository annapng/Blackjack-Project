//"use strict";

const Rank = require('./rank.js');
const Suit = require('./suit.js');

module.exports = class Card {
	constructor(_rank, _suit) {
		if (!(_rank instanceof Rank)) throw new Error('Card: Invalid card rank provided, must be an instance of Rank');
		if (!(_suit instanceof Suit)) throw new Error('Card: Invalid card suit provided, must be an instance of Suit');

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
