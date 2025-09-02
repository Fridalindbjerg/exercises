"use strict";

const list = document.querySelector("ul");

const barArr = [];

setTimeout(generateBars, 500);

function generateBars() {
  barArr.push(Math.floor(Math.random() * 100));

  if (barArr.length > 6) {
    barArr.shift();
  }

  console.log(barArr);
  render();
}

function render() {
  document.querySelectorAll("li").forEach((elm, i) => {
    console.log("elm", elm);
    console.log("i", i);
    elm.style.setProperty("--height", barArr[i]);
  });
}
