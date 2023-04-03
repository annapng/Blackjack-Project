/*
 * bots compare cards one by one,
 * bot with a better card (higher rank) gets both cards
 * if cards are equal, each bot places 2 cards and compares the last placed,
 * bot with a better card gets all of the cards
 *
 * eg. bot1   8-8   bot2
 *       A ?? 8-8 ?? 10
 * bot1 wins and gets the cards (Ace > 10)
 *
 * the game continues until a bot is out of cards
 */


const cardDeck = require('../src/index');
const deck = new cardDeck.Deck();

console.log(deck.remainingLength);

deck.shuffle();

var bot1 = [],
    bot2 = [],
    turn = 1;

// give each bot half of the deck
deck.dealMul([bot1, bot2], deck.remainingLength / 2);

console.log('Game begins!');
console.log('------------------------------------------');

function loop() {
	var a = bot1.shift(),
	    b = bot2.shift();

	console.log(`Turn ${turn}
bot1: ${a.displayShort}, ${bot1.length} cards left
bot2: ${b.displayShort}, ${bot2.length} cards left`);

	if (a.rank.sortNum === b.rank.sortNum) {        // if both cards are equal, war begins
		war([a, b]);
	}
	else if (a.rank.sortNum >  b.rank.sortNum){
		console.log('> bot1 wins the turn!');
		bot1.push(...[a, b]);
	}
	else {
		console.log('> bot2 wins the turn!');
		bot1.push(...[a, b]);
	}

	console.log('------------------------------------------');

	if (bot1.length === 0) {
		console.log('> bot1 is out of cards. bot2 wins the game!');
		return;
	}
	if (bot2.length === 0) {
		console.log('> bot2 is out of cards. bot1 wins the game!');
		return;
	}

	turn++;

	setTimeout(() =>  {
		loop();
	}, 1 * 1000);
}

function war(pile) {
	console.log('> War!\n==========================================');

	if (bot1.length < 3) {
		return;
	}
	if (bot2.length < 3) {
		return;
	}

	pile.push(bot1.shift(), bot2.shift());

	// c and d are the cards to bo compared. The better card decides who gets the pile
	var c = bot1.shift(),
		d = bot2.shift();

	console.log(`The pile has ${pile.length} cards
bot1: ${c.displayShort}, ${bot1.length} cards left
bot2: ${d.displayShort}, ${bot2.length} cards left`);

	if (c.rank.sortNum === d.rank.sortNum) {
		war(pile.push(c, d));
	}
	else if (c.rank.sortNum >  d.rank.sortNum){
		console.log('> bot1 wins the war and gets the pile!');
		bot1.push(c, d, ...pile);
	}
	else {
		console.log('> bot2 wins the war and gets the pile!');
		bot2.push(c, d, ...pile);
	}
}

loop();
