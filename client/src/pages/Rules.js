import React from "react";
import Header from "../components/header";
import'./Rules.css'
const Rules = () => {
    return (
        <div>
       <Header />
       <br></br>

       <h1>Blackjack Rules for Easy Reference</h1>
        <br>
        </br>
        <div id="gambling">
            <h1>If you or someone you 
know has a gambling 
problem, help is 
available. Contact the 
Problem Gambling Helpline at (800)-522-4700</h1>
        </div>
<div id="bodyText">

<h2>Object of the Game:</h2>
    Each Participant attempts to beat the dealer by getting a count as close to 21 as possible, without going over 21.
        <br></br>
<h2>Card Values/Scoring: </h2>
    Ace is worth either 1 or 11. Face cards are 10 and any other card is its number value.
        <br></br>
<h2>Dealing:</h2>
    After bets are in, The dealer gives one card face up to each player, then one face up to themselves. Another round of cards is then dealt face up to each player, but the dealer takes the second card face down. 
        <br></br>
<h2>The Play:</h2>
    Player goes first and must decide whether to "stand" (not ask for another card) or "hit" (ask for another card in an attempt to get closer to a count or 21, or hit 21 exactly). If they hit, they will receive additional cards one at a time, until they stand on the total (if it is 21 or under) or go "bust" (if it is over 21).
        <br></br>
<h2>The Dealer's Play:</h2>
    After the player has stood / settled on their count, they face their card up. If the total is 17 or more, they must stand. If the total is 16 or under, they must take a card. The dealer must continue to take cards until the total is 17 or more, at which point the dealer must stand. If the dealer has an ace, and counting it as 11 would bring the total to 17 or more (but not over 21), and they must count the ace as 11 and stand. 
        <br></br>
<h2>Splitting Pairs (To Implement or not Implement?):</h2>
    If a player's first two cards are of the same denomination, such as two jacks or two sixes, they may choose to treat them as two seperate hands when their hand comes around. The amount of the original bet goes to one of the cards and an equal amount must be placed as a bet on the other card. The player first plays the hand to their left by standing or hitting, only then is the right hand played. The two hands are treated seperately. With a pair of aces, the player is given one card for each ace and may not draw again. If a ten-card is dealt to one of these aces, the payoff is equal to the bet (rather than 1.5).
        <br></br>
<h2>Doubling Down:</h2>
    Another option open to the play is doubling their bet when the original two cards dealt total 9, 10, or 11. When the player's turn comes, they place a bet equal to the original bet, and the dealer gives the player just one card, which is placed face down and is not turned up until the bets are settled at the end of the hand. With two fives, the player may split a pair, double down, or just play the hand in the regular way.
       </div></div>
    )
}

export default Rules