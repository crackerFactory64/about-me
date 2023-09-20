let userName = "";

/*while (!userName) {
  userName = prompt("Welcome visitor! What is your name?");
}

alert(
  "Welcome, " +
    userName +
    "! Thank you for your interest in my web page, I hope you enjoy it."
);
*/
let score = 0;

let answerOne = "";
let answerTwo = "";
let answerThree = "";
let answerFour = "";
let answerFive = "";
let answerSix = 0;

function startQuiz() {
  /*  while (answerOne !== "true" && answerOne !== "false") {
    answerOne = prompt(
      "True of false: The airfield at the village I live in played an important role in the Battle of Britain."
    ).toLowerCase();
  }

  if (answerOne === "true") {
    score = score + 1;
    alert("Correct! That was true.");
  } else {
    alert("Incorrect! That was true.");
  }

  while (answerTwo !== "true" && answerTwo !== "false") {
    answerTwo = prompt(
      "True of false: I attended the University of Cambridge."
    ).toLowerCase();
  }

  if (answerTwo === "false") {
    score = score + 1;
    alert("Correct! That was false.");
  } else {
    alert("Incorrect! That was false");
  }

  while (answerThree !== "true" && answerThree !== "false") {
    answerThree = prompt(
      "True of false: Die Hard is my favourite film."
    ).toLowerCase();
  }

  if (answerThree === "false") {
    score = score + 1;
    alert("Correct! That was false.");
  } else {
    alert("Incorrect! That was false.");
  }

  while (answerFour !== "true" && answerFour !== "false") {
    answerFour = prompt(
      "True of false: I worked for popular high street chemist Boots."
    ).toLowerCase();
  }

  if (answerFour === "true") {
    score = score + 1;
    alert("Correct! That was true.");
  } else {
    alert("Incorrect! That was true.");
  }

  while (answerFive !== "true" && answerFive !== "false") {
    answerFive = prompt(
      "True of false: I like to ride a road bicycle."
    ).toLowerCase();
  }

  if (answerFive === "true") {
    score = score + 1;
    alert("Correct! That was true.");
  } else {
    alert("Incorrect! That was true.");
  }
*/

  let chances = 4;

  while (answerSix !== 6 && chances > 1) {
    if (answerSix === 0) {
      answerSix = parseInt(
        prompt("Guess my favourite number between 1 and 10!")
      );
    } else if (answerSix > 0 && answerSix < 6) {
      chances--;
      answerSix = parseInt(
        prompt("Too low! You have " + chances + " chances remaining.")
      );
    } else if (answerSix > 6 && answerSix <= 10) {
      chances--;
      answerSix = parseInt(
        prompt("Too high! You have " + chances + " chances remaining.")
      );
    } else {
      answerSix = parseInt(
        prompt("Please enter a whole number between 1 and 10.")
      );
    }
  }

  if (answerSix === 6) {
    alert("You got it!");
    score = score + 1;
  } else {
    alert("Unlucky! It was 6.");
  }

  switch (score) {
    case 1:
      alert("You scored 1/6. You don't know me at all!");
      break;
    case 2:
      alert("You scored 2/6. Better luck next time.");
      break;
    case 3:
      alert("You scored 3/6. Good job.");
      break;
    case 4:
      alert("You scored 4/6. Nice one!");
      break;
    case 5:
      alert("You scored 5/6. You know me better than some family members!");
      break;
    case 6:
      alert("You scored 6/6. You know me better than Google!");
      break;
    default:
      alert("You scored 0... :(");
  }

  //resets the user's answers and score so they can play again

  answerOne = "";
  answerTwo = "";
  answerThree = "";
  answerFour = "";
  answerFive = "";
  answerSix = 0;
  score = 0;
}
