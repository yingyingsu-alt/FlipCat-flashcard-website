// Flashcards example data
const cards = [
    { front: "What is the largest planet in our solar system?", back: "Jupiter" },
    { front: "What is the fastest animal on land?", back: "The cheetah" },
    { front: "How many colors are in the rainbow?", back: "Seven" }
];

let index = 0;

// DOM references
const flashcard = document.getElementById("flashcard");
const front = document.getElementById("card-front");
const back = document.getElementById("card-back");
const count = document.getElementById("Cardcount");

// Load card content
function loadCard() {
    front.textContent = cards[index].front;
    back.textContent = cards[index].back;
    count.textContent = `${index + 1} / ${cards.length}`;
    flashcard.classList.remove("is-flipped");
}

// Flip card on click
flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("is-flipped");
});

function nextcard() {
    index = (index + 1) % cards.length;
    loadCard();
}

function prevcard() {
    index = (index - 1 + cards.length) % cards.length;
    loadCard();
}


loadCard();
