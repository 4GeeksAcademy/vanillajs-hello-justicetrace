/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  const chosenWho = chooseRandomItem(who);

  let action = ["ate", "peed", "crushed", "broke"];
  const chosenAction = chooseRandomItem(action);

  let what = ["my homework", "my phone", "the car"];
  const chosenWhat = chooseRandomItem(what);

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  const chosenWhen = chooseRandomItem(when);

  const newHeader = `${chosenWho} ${chosenAction} ${chosenWhat} ${chosenWhen}`;
  const h1 = document.querySelector("#excuse");
  h1.textContent = newHeader;

  function chooseRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
};
