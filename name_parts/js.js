const str = "Peter Heronimous Lind";

console.log("fornavn", str.lastIndexOf(" "));
str.substring(str.lastIndexOf(" "));

//efternavn
console.log("_" + str.substring(str.lastIndexOf(" ") + 1) + "_");

//fornavn
console.log("_" + str.substring(0, str.indexOf(" ")) + "_");

//mellemnavn

console.log("mellenavn", str.substring(str.indexOf(" ") + 1, str.lastIndexOf(" ")));
