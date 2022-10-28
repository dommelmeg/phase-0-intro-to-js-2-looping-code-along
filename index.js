// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }

//     return gifts;
// }

// wrapGifts(gifts);

const newArray = [];

const writeCards = (names, events) => {
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return newArray;
}

const countDown = () => {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    }    
}