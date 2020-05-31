// Canada Website w/ Quiz - Quiz Code
// Serag Elgamal
// 5/31/2020

// declare correct answers in an array
let answers = [
    document.getElementById('a1'),
    document.getElementById('a2'),
    document.getElementById('a3'),
    document.getElementById('a4'),
    document.getElementById('a5'),
    document.getElementById('a6'),
    document.getElementById('a7'),
    document.getElementById('a8'),
    document.getElementById('a9'),
    document.getElementById('a10'),
]

// declare mark button and HTML score display
let markButton = document.getElementById('markButton');
let scoreText = document.getElementById('scoreText');

// mark button event listener
markButton.addEventListener('click', mark);

// event function
function mark() {
    // declare a variable for the score and set it to 0
    let score = 0;

    // check whether the correct answers have been selected and add 1 to the score for each correct answer
    for (let n = 0; n < answers.length; n++) {
        if (answers[n].checked) {
            score++;
        }
    }

    // display final score
    scoreText.innerHTML = score;
}