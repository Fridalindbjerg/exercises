"use strict";

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let str = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";

let isClicked = false;
document.querySelector("button").addEventListener("click", click);

function click() {
  if (isClicked === true) {
    console.log("jeg har været klikket");

    console.log("str", str);
  } else {
    isClicked = true;
    console.log("første gang");
    str = str.replaceAll("var", curseWords[0].good);
    str = str.replaceAll("float", curseWords[1].good);
    str = str.replaceAll("marquee", curseWords[2].good);
    document.querySelector("p").textContent = str;
  }
}
