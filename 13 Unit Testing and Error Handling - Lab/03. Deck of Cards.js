function printDeckOfCards(cards) {
    let avalibleCard = [];
    for (const card of cards) {
        let face = card.length === 3 ? '10' : card[0];
        let suit = card.length === 3 ? Array.from(card)[2] : card[1];

        createCard(face, suit);

        function createCard(face, suit) {
            const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'A', 'K'];
            const validSuits = ['S', 'H', 'D', 'C'];

            try {
                if (validFaces.indexOf(face.toString()) === -1 || validSuits.indexOf(suit) === -1) {
                    throw new Error(`Invalid card: ${card}`);
                }
            } catch (ex) {
                console.log(ex.message);
                return;
            }


            switch (suit) {
                case 'S': suit = '\u2660'; break;
                case 'H': suit = '\u2665'; break;
                case 'D': suit = '\u2666'; break;
                case 'C': suit = '\u2663'; break;
            }

            avalibleCard.push(face + suit.toString());
        }
    }

    console.log(avalibleCard.join(' '));
}

printDeckOfCards(
    ['5S', '3D', 'QD', '1C']
);
