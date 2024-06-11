/* eslint-disable */

window.onload = function() {
  //write your code here

  function chooseRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  const chosenWhoFromRandomItem = chooseRandomItem(who);

  let action = ["ate", "peed", "crushed", "broke"];
  const chosenActionFromRandomItem = chooseRandomItem(action); 

  let what = ["my homework", "my phone", "the car"];
  const chosenWhatFromRandomItem = chooseRandomItem(what);

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  
  const chosenWhenFromRandomItem = chooseRandomItem(when);

  const newHeader = `${chosenWhoFromRandomItem} ${chosenActionFromRandomItem} ${chosenWhatFromRandomItem} ${chosenWhenFromRandomItem}`;
  const h1 = document.querySelector("#excuse");
  h1.textContent = newHeader;
};


