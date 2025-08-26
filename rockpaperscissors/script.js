"use strict";

let userChoice;
let computerChoice;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const p1 = document.querySelector("#player1");
const p2 = document.querySelector("#player2");

function addEventListenersToButtons() {
  rockBtn.addEventListener("click", rockClick);
  paperBtn.addEventListener("click", paperClick);
  scissorsBtn.addEventListener("click", scissorsClick);
}

function resetTexts() {
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
}

function rockClick() {
  resetTexts();
  //   console.log("rock");
  userChoice = "rock";
  computerGuess();
}
function paperClick() {
  resetTexts();

  //   console.log("paper");
  userChoice = "paper";
  computerGuess();
}
function scissorsClick() {
  resetTexts();

  //   console.log("scissors");
  userChoice = "scissors";
  computerGuess();
}

function computerGuess() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choiceArray[randomNum];

  console.log("computerChoice:", computerChoice);

  console.log(userChoice);
  //   computerChoice = "paper";
  animationStarter();
}

function animationStarter() {
  // start shake med rock
  p1.classList.remove("paper", "scissors");
  p1.classList.add("rock", "shake");
  // tilføj event listener, der kalder din funktion
  p1.addEventListener("animationend", animationEnd);

  p2.classList.remove("paper", "scissors");
  p2.classList.add("rock", "shake");

  p2.addEventListener("animationend", animationEnd);
}

function animationEnd() {
  p1.classList.remove("shake", "rock");
  p1.classList.add(userChoice);

  // fjern listener så den ikke kører flere gange
  p1.removeEventListener("animationend", animationEnd);

  p2.classList.remove("shake", "rock");
  p2.classList.add(computerChoice); // skift til computerens valg
  p2.removeEventListener("animationend", animationEnd);

  showResult();
}

function showResult() {
  if (computerChoice === userChoice) {
    document.querySelector("#draw").classList.remove("hidden");
  } else if (computerChoice !== userChoice) {
    // her kan du så tjekke om du vinder eller taber
    if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
      document.querySelector("#win").classList.remove("hidden");
    } else {
      document.querySelector("#lose").classList.remove("hidden");
    }
  }
}

addEventListenersToButtons();
