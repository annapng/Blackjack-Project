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

function retrieveCardPNG( array ) {

    let cardPics = [];
        for (let i = 0; i < array.length; i++) {
            const singleCard = array[i];
            let suit = singleCard.suit.name;
            let rank = singleCard.rank.shortName;
            let letter = suit.charAt(0);

            cardPics.push(letter + rank);
        }




        
        console.log(cardPics)
    return cardPics;

    };

export { findValueofHand, retrieveCardPNG }