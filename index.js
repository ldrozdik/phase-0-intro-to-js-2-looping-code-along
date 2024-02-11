// Code your solutions in this file

const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
    let thankYouMessages = []
    for (let i = 0; i < cards.length; i++) {
        thankYouMessages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
}

const messages = writeCards(cards);
console.log(messages)

function countDown() {
    let countDown = 10
    while (countDown >= 0) {
        console.log(countDown--);
    }
}

countDown(10);