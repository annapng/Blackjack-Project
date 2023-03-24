# node-card-deck

Simple playing card library. Deal, shuffle cards or create decks.

Type `npm i node-card-deck` in a terminal.

```js
const cardDeck = require('node-card-deck');
const { Card, Deck, Rank, Suit } = cardDeck;
```

## Table of contents

* [Card](#card)
* [Deck](#deck)
* [Rank](#rank)
* [Suit](#suit)
* [Other functions](#other-methods)
* [Custom decks](#custom-Decks)
* [Examples](#examples)

## Documentation

<a name="card"></a>

### Card

Card class

* `_rank` Rank class
* `_suit` Suit class

```js
const card = new Card(new Rank('K', 'King', 13), new Suit('Spades', '\u2664', 1));
```

#### get remainingLength

Returns the number of remaining cards in deck

### displayShort

Returns a string consisting of the card's rank `_shortName` and suit's `_shortName`

```js
card.displayShort        // K♤ <= \u2664
```

### displayText

Returns a string consisting of the cards rank `_longName` and suits `_name`

```js
card.displayText        // King of Spades
```

<a name="deck"></a>

### Deck

Class that epresents a deck of playing cards.

* `_jokerCount` the number of Jokers in the deck. Default `0`
* `_numOfDecks` number of decks in Deck instance. Default `1`
* `_deck` object with cards, ranks, suits and jokers. Default `./src/ddecks/standard`

```js
const cardDeck = require('node-card-deck');

var deck = new Deck(3, 2);        // 3 jokers, 2 default decks
```

#### deal

Deals a number cards to hand and marks the given cards as `held`.

Arguments:

* `count` default 1 - how many cards to give the hand.
* `hand` array to push the cards.

```js
var hand1 = [];
var hand2 = [];

deck.deal(hand1, 5);        // deals hand1 5 cards
deck.deal(hand2);        // deals hand1 1 card
```

#### dealMul

Deals a number cards to multiple hand and marks the given cards as `held`.

Arguments:

* `count` default 1 - how many cards to give the hands.
* `hands` array of hands to push the cards.

```js
var mul1 = [];
var mul2 = [];

deck.deal([mul1, mul2], 5);        // deals5 cards to both mul1 and mul2
```

#### insert

Insert `Cards` back to the end of the deck and remove them from `deck.held` array. The order of inserted elements will be unchanged.

Arguments:

* `cards` array of Cards.

```js
var cards = [
  new Card(new Rank('Q', 'Queen', 12), new Suit('Clubs', '\u2667', 2)),
  new Card(new Rank('K', 'King', 13), new Suit('Clubs', '\u2667', 2))
]

deck.insert(cards);
```

#### reset

Sets the deck back to 52 cards + Jokers, if the exist. Sets the `deck.held` to an empty array.

```js
deck.reset();
```

#### shuffle

Randomize the order of remaining cards using the Fisher-Yates Algorithm.

```js
deck.shuffle();
```

#### Properties

* `deck.cards` array of cards in deck
* `deck.initialCards` array of cards used in `deck.restart()`

<a name="rank"></a>

### Rank

Rank class

* `_shortName` name displayed in `displayShort` Card getter.
* `_longName` name displayed in `displayText` Card getter.
* `_sortNum` used to differentiate card ranks.

```js
const rank = new Rank('K', 'King', 13);
```

<a name="suit"></a>

### Suit

Suit class

* `_name` name displayed in `displayText` Card getter.
* `_shortName` shortName character displayed in Card's `displayShort` method.
* `_sortNum` used to differentiate card suits.

```js
const suit = new Suit('Spades', '\u2664', 1);
```

<a name="other-methods"></a>

### Other methods

#### sortByRank

Sorts the hand first by ranks, then by suits in the rank. Sorts in ascending order.

```js
var hand = [8♡, 5♧, 8♤, 5♤];

nodeDeck.sortByRank(hand);
// rank phase         => [8♡, 8♤, 5♧, 5♤]
// suit phase (final) => [8♤, 8♡, 5♤, 5♧]
```

#### sortBySuit

Sorts the hand first by suits, then by ranks in the suit. Sorts in ascending order.

```js
var hand = [8♡, 5♧, 8♤, 5♤];

nodeDeck.sortBySuit(hand);
// suit phase         => [8♤, 5♤, 5♧, 8♡]
// rank phase (final) => [5♤, 8♤, 5♧, 8♡]
```

#### shuffle

Shuffles an array of cards.

See [shuffle in Deck class](#deck) for more information.

<a name="custom decks"></a>

## Custom Decks

All custom decks should have their own:

* Suits
* Ranks
* Jokers (if you plan on using them)
* Cards (constructed using the deck's Ranks and Suits)

To use your custom deck, create a new instance of the Deck class with the custom deck set as the `_deck` argument

```js
const ranks = [
  new Rank('1', '1rank', 1),
  new Rank('2', '2rank', 2),
  new Rank('3', '3rank', 3)
]

const suits = [
  new Suit('A', '§', 1),
  new Suit('B', '‡', 2)
]

var cards = [];

ranks.forEach(rank => {
  suits.forEach(suit => {
    cards.push(new Card(rank, suit));
  })
})

const joker = new Card(new Rank('Joker', 'Joker', 15), new Suit('\u00a7', '\u00a7', 0));

const deck = new Deck(0, 1, { cards, joker });
```

<a name="examples"></a>

## Examples

* [bot-war](/examples/bot-war.js)
* [showcase](/examples/showcase.js)

## Contribute

If you spot a bug, or want to improve this module, please contact me.
