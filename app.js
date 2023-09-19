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

  answerTwo = prompt(
    "True of false: I attended the University of Cambridge."
  ).toLowerCase();
  answerThree = prompt(
    "True of false: Die Hard is my favourite film."
  ).toLowerCase();
  answerFour = prompt(
    "True of false: I worked for popular high street chemist Boots."
  ).toLowerCase();
  answerFive = prompt(
    "True of false: I like to ride a road bicycle."
  ).toLowerCase();

  if (answerOne === "true") {
    score = score + 1;
  }

  if (answerTwo === "false") {
    score = score + 1;
  }

  if (answerThree === "false") {
    score = score + 1;
  }

  if (answerFour === "true") {
    score = score + 1;
  }

  if (answerFive === "true") {
    score = score + 1;
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
