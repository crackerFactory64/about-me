let userName = "";

while (!userName) {
  userName = prompt("Welcome visitor! What is your name?");
}

alert(
  "Welcome, " +
    userName +
    "! Thank you for your interest in my web page, I hope you enjoy it."
);

let score = 0;
let answerOne = "";
let answerTwo = "";
let answerThree = "";
let answerFour = "";
let answerFive = "";

function startQuiz() {
  answerOne = prompt(
    "True of false: The airfield at the village I live in played an important role in Battle of Britain."
  ).toLowerCase();

  if (answerOne === "true") {
    score = score + 1;
    alert("Correct! That was true.");
  } else {
    alert("Incorrect! That was true.");
  }

  answerTwo = prompt(
    "True of false: I attended the University of Cambridge."
  ).toLowerCase();

  if (answerTwo === "false") {
    score = score + 1;
    alert("Correct! That was false.");
  } else {
    alert("Incorrect! That was false");
  }

  answerThree = prompt(
    "True of false: Die Hard is my favourite film."
  ).toLowerCase();

  if (answerThree === "false") {
    score = score + 1;
    alert("Correct! That was false.");
  } else {
    alert("Incorrect! That was false.");
  }

  answerFour = prompt(
    "True of false: I worked for popular high street chemist Boots."
  ).toLowerCase();

  if (answerFour === "true") {
    score = score + 1;
    alert("Correct! That was true.");
  } else {
    alert("Incorrect! That was true.");
  }

  answerFive = prompt(
    "True of false: I like to ride a road bicycle."
  ).toLowerCase();

  if (answerFive === "true") {
    score = score + 1;
    alert("Correct! That was true.");
  } else {
    alert("Incorrect! That was true.");
  }

  switch (score) {
    case 1:
      alert("You scored 1/5. You don't know me at all!");
      break;
    case 2:
      alert("You scored 2/5. Better luck next time.");
      break;
    case 3:
      alert("You scored 3/5. Good job.");
      break;
    case 4:
      alert("You scored 4/5. Nice one!");
      break;
    case 5:
      alert("You scored 5/5. You know me better than some family members!");
      break;
    default:
      alert("You scored 0... :(");
  }
}
