"use strict";

const btn_higher = document.querySelector("#btn_higher");
const btn_guess = document.querySelector("#btn_guess");
const btn_lower = document.querySelector("#btn_lower");
const btn_correct = document.querySelector("#btn_correct");

const h2 = document.querySelector("h2");

// btn_start.addEventListener("click", guessIt);

const userNum = 34;

function computerGuess(min = 1, max = 100) {
  // find ud af, hvad halvdelen af min og max er
  let computerChoice = max;
  return max / 2;
}

console.log("computerGuess", computerGuess(0, 100));

btn_lower.addEventListener("click", tooHigh);

function tooHigh() {
  console.log("too high");
}

btn_higher.addEventListener("click", toolow);

function toolow() {
  console.log("too low");
}

btn_correct.addEventListener("click", guessedCorrect);

function guessedCorrect() {
  console.log("correct guess");
}

// function guessIt(computerGuess, userNum) {
//   return computerGuess;
// }

// console.log("resultat", momsBeregner(100));

// btn.addEventListener("click", click_btn);
// function click_btn() {
//   userGuess = parseInt(input.value);
//   console.log("click", computerNum);
//   let feedbackText;
//   if (userGuess === computerNum) {
//     feedbackText = "YAY! You guessed it";
//     h2.classList.add("wiggle");
//   } else if (userGuess > computerNum) {
//     feedbackText = "Too high. Try again";
//   } else {
//     feedbackText = "Too low. Try again";
//   }
//   h2.textContent = feedbackText;
//   console.log(feedbackText);
// }
//
//
//
//
// console.log("tilfældigt tal " + Math.floor(Math.random() * 10));
// const n1 = 1;
// const n2 = 2;
// const s1 = "1";
// const s2 = "2";
// console.log(s1 + n2);
