const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", click);

function click() {
  let str = "";

  console.log(str);

  bc.forEach((elm, taeller, arr) => {
    console.log("elm", elm.name, taeller);

    //   console.log(str);
    if (taeller === arr.length - 1) {
      str += `<li>  ${elm.name} </li>`;
      bc.shift();

      console.log("tæller", taeller);
    } else {
      str += `<li> <a href="">${elm.name}</a> &nbsp/&nbsp </li>`;
    }
  });

  document.querySelector("ul").innerHTML = str;
}

// bc.splice(1, 1);
// &nbsp;
