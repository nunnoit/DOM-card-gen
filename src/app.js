/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let type = ["♦", "♥", "♠", "♣"];
  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let suitecolorlist = ["#ff0000", "#000000"];
  let suitecolor =
    suitecolorlist[Math.floor(Math.random() * suitecolorlist.length)];
  console.log("suitecolorlis1: ", suitecolor);

  let textoh1 = document.querySelector("#gen1");
  let aux1 = "";
  aux1 = "<p>" + type[Math.floor(Math.random() * type.length)] + "</p>";
  textoh1.innerHTML = aux1;
  textoh1.style.color = suitecolor;
  console.log("");

  console.log(textoh1);

  let textoh2 = document.querySelector("#gen2");
  let aux2 = "";
  aux2 = "<p>" + number[Math.floor(Math.random() * number.length)] + "</p>";
  textoh2.innerHTML = aux2;
  textoh2.style.color = suitecolor;
  console.log(textoh2);

  let textoh3 = document.querySelector("#gen3");
  let aux3 = aux1;
  textoh3.innerHTML = aux3;
  textoh3.style.color = suitecolor;
  console.log(textoh3);
};
