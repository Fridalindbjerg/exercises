"use strict";
let result;
const people = ["harry", "ron", "john"];
result = people.push("frida");

console.log("people", people);
console.log("result", result);
//push addere

result = people.pop();
console.log("people", people);
console.log("result", result);

// pop nævner sidste adderede?

result = people.push("neville");
console.log("people", people);
console.log("result", result);

//addere

result = people.push("luna");
console.log("people", people);
console.log("result", result);

//addere igen

result = people.slice(0, 3);
console.log("people", people);
console.log("result", result);

//viser 1-3

result = people.splice(1, 0, "cho");
console.log("people", people);
console.log("result", result);

//tilføjer ??? plus mere måske

people[1] = "ginny";
console.log("people", people);
console.log("result", result);

// sætter ginny ind på plads 2

result = people.push("fred", "marry");
console.log("people", people);
console.log("result", result);

//addere fred og mary

result = people.indexOf("luna");
console.log("people", people);
console.log("result", result);

//fortælller lunas arrayplads

result = people.splice(result, 1);
console.log("people", people);
console.log("result", result);

//laver nyt array?

result = people.unshift("luna");
console.log("people", people);
console.log("result", result);

//tilføjer

result = people.shift("luna");
console.log("people", people);
console.log("result", result);

//fjerner
