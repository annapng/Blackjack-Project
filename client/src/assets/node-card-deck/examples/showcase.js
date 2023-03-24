const cardDeck = require('../src/index.js');

const deck = new cardDeck.Deck();
var hand1 = [],
    hand2 = [];

deck.shuffle();

deck.dealMul([hand1, hand2], 5);
deck.deal(hand1, 2);

console.log(`hand1 has ${hand1.length} cards`);
hand1.forEach(card => console.log(card.displayShort));
console.log(`hand2 has ${hand2.length} cards`);
hand2.forEach(card => console.log(card.displayShort));

deck.insert(hand1.splice(0, 2));
console.log(`Inserted first two card from hand1 back to the deck, hand1 has now ${hand1.length} cards`);
console.log('------------------------------------------');

cardDeck.sortByRank(hand1);
cardDeck.sortBySuit(hand2);

console.log('hand1, sorted by rank:');
hand1.forEach(card => console.log(card.displayShort));
console.log('hand2, sorted by suit:');
hand2.forEach(card => console.log(card.displayShort));

console.log('------------------------------------------');

cardDeck.shuffle(hand1);
console.log('hand1, shuffled:');
hand1.forEach(card => console.log(card.displayShort));

hand1 = [];
hand2 = [];


console.log('------------------------------------------');
deck.reset();
console.log(`Deck reset, hand1 & hand2 are empty, deck has ${deck.remainingLength} cards`);
