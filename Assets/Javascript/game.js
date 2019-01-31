var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var wins = 0;
var lost = 0;
var guesses = 10;

var lettersGuessed = [];

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function(event) {
  var playerGuess = event.key;

  if (event.key !== computerGuess && !lettersGuessed.includes(event.key)) {
    lettersGuessed.push(event.key);
  } else {
    guesses++;
  }

  document.getElementById(
    "lettersguessed"
  ).textContent = lettersGuessed.toString();

  if (playerGuess === computerGuess) {
    wins++;
    guesses = 10;
    document.getElementById("guesses").textContent = "Guesses: " + guesses;
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById("wins").textContent = "Wins: " + wins;

    lettersGuessed = [];

    document.getElementById(
      "lettersguessed"
    ).textContent = lettersGuessed.toString();
  }

  if (playerGuess !== computerGuess) {
    guesses--;

    document.getElementById("guesses").textContent = "Guesses: " + guesses;
  }

  if (guesses === 0) {
    lost++;
    guesses = 10;
    document.getElementById("guesses").textContent = "Guesses: " + guesses;
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById("lost").textContent = "Lost: " + lost;

    lettersGuessed = [];

    document.getElementById(
      "lettersguessed"
    ).textContent = lettersGuessed.toString();
  }
};
