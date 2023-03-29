function findValueofCard( card ){
    let cardValue = card.charAt(1);

    console.log(cardValue);

    switch(cardValue) {
        case "2":
            return "2";
        case "3":
            return "3";
        case "4":
            return "4";
        case "5":
            return "5";
        case "6":
            return "6";
        case "7":
            return "7";
        case "8":
            return "8";
        case "9":
            return "9";
        case "1":
            return "10";
        case "J":
            return "10";
        case "Q":
            return "10";
        case "K":
            return "10";
        case "A":
            return "1";
    }




    // if (cardValue === '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' ) {
    //     return cardValue;
    // } 
    // else if (cardValue === "1" || "J" || "Q" || "K" )
    // {
        
    //     return 10;
    // } else {
    //     let cardValueArray = [1, 11];
    //     return cardValueArray;
    // }



}


// function findValueofHand( array ){
   
//     for (let i = 0; i < array.length; i++) {
//         arrValue.push(array[i].rank.sortNum);   }





//     const initialValue = 0;
//     const sum = arrValue.reduce(
//         (accumulator, currentValue) =>
//         accumulator + currentValue, initialValue
//     );

//     return sum;
// }

function retrieveCardPNG( array ) {

    let cardPics = [];
        for (let i = 0; i < array.length; i++) {
            const singleCard = array[i];
            let suit = singleCard.suit.name;
            let rank = singleCard.rank.shortName;
            let letter = suit.charAt(0);

            cardPics.push(letter + rank);
        }




        
     //   console.log(cardPics)
    return cardPics;

    };

export { findValueofCard, retrieveCardPNG }