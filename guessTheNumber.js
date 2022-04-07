alert(
  "I'm thinking of a number between 1 and 100. Guess the number!\nYou only have 5 guesses!"
);

let guess = prompt("What's your guess?");
const answer = 69;

for (let i = 0; i < 4; i++) {
  if (guess == answer) {
    alert("Ayyyye, you got it. Nice.");
    break;
  } else if (guess == null) {
    break;
  } else if (guess !== answer) {
    guess = prompt(`Try again. You have ${4 - [i]} guesses left.`);
  }
}
