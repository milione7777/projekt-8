// завдання 1

// for
let arr = [1, 3, 5, 3, 9, 7, 9];
let result = 0;

for (let i = 0; i < arr.length; i += 1) {
  result += arr[i];
  if (i !== arr.length - 1) {
    result += ", ";
  }
}
console.log("for:", result);

//join
let a = [5, 7, 2, 5, 7, 8, 10, 5];
let r = a.join(", ");
console.log("join: ", r);

// завдання 2
let card = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5"
]

// завдання 3
let cardToRemove = card[2];
let indexToRemove = card.indexOf(cardToRemove);

if (indexToRemove !== -1) {
    card.splice(indexToRemove, 1)
}
console.log("Видалили карточку: ", card);
// завдання 4
let cardToInsert = "Карточка-6";
let indexToInsertAfter = 5;
card.splice(indexToInsertAfter + 1, 0, cardToInsert);
console.log("Додали карту:", card);

// завдання 6

let cardToUpdade = 4;
let newCard = "оновлена Карточка-4";
card[cardToUpdade] = newCard;
console.log("Оновили карту: ", card);