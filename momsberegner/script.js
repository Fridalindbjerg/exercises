"use strict";

function momsBeregner(belob, moms = 25) {
  return (belob * moms) / 100 + belob;
}

console.log("resultat", momsBeregner(100, 33));

//100 er beløb. hvis ikke 2. tal indsættes bruges defalt momsen på 25%
