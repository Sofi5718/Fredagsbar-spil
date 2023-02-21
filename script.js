"use strict";
window.addEventListener("load", start);

let points = 0;
let lives = 3;

function start() {
  console.log("JavaScript kører!");

  // Start animationer
  document.querySelector("#coin1_container").classList.add("falling");
  document.querySelector("#bomb_container").classList.add("falling");

  // Registrer click
  document.querySelector("#coin1_container").addEventListener("click", clickCoin);
  document.querySelector("#bomb_container").addEventListener("click", clickBomb);

  document.querySelector("#heart_container").addEventListener("click", clickHeart);

}

function clickCoin() {
  console.log("Click coin");
  // Forhindr gentagne clicks
  document
    .querySelector("#coin1_container")
    .removeEventListener("click", clickCoin);

  // Stop coin container
  document.querySelector("#coin1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#coin1_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#coin1_container").addEventListener("animationend", coinGone);
  incrementPoints();
}

//Funktioner vi laver som øvelse i timen
function incrementPoints() {
  points += 1;
  console.log(points);
  displayPoints();
}
function displayPoints() {
  console.log("displayPoints");
  document.querySelector("#coin_count").textContent = points;
}
//Funktioner vi laver som øvelse i timen

function coinGone() {
  // fjern event der bringer os herind
  document.querySelector("#coin1_container").removeEventListener("animationend", coinGone);

  // fjern forsvind-animation
  document.querySelector("#coin1_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#coin1_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#coin1_container").classList.remove("falling");
  document.querySelector("#coin1_container").offsetWidth;
  document.querySelector("#coin1_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#coin1_container")
    .addEventListener("click", clickCoin);
}

function clickBomb() {
  console.log("Click bomb");
  // Forhindr gentagne clicks
  document.querySelector("#bomb_container").removeEventListener("click", clickBomb);

  // Stop coin container
  document.querySelector("#bomb_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#bomb_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#bomb_container").addEventListener("animationend", bombGone);
  //Mist liv i korrekt rækkefælge, ved at klikke på bombe
  decrementLives();
}
function decrementLives() {
  console.log("decrementLives");
  displayDecrementedLives();
  lives -=1; 
  console.log(lives);
}
function displayDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
  
}

  //Mist liv i korrekt rækkefælge, ved at klikke på bombe

function bombGone() {
  // fjern event der bringer os herind
  document.querySelector("#bomb_container").removeEventListener("animationend", bombGone);

  // fjern forsvind-animation
  document.querySelector("#bomb_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#bomb_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#bomb_container").classList.remove("falling");
  document.querySelector("#bomb_container").offsetWidth;
  document.querySelector("#bomb_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#bomb_container")
    .addEventListener("click", clickBomb);
}
function clickHeart() {
  console.log("click");
   document.querySelector("#bomb_container").removeEventListener("click", clickHeart);

   // Stop coin container
   document.querySelector("#heart_container").classList.add("paused");

   // sæt forsvind-animation på coin
   document.querySelector("#heart_sprite").classList.add("zoom_in");

   // når forsvind-animation er færdig: coinGone
  document.querySelector("#heart_container").addEventListener("animationend", heartGone);
  incrementLives();
}
function heartGone() {
  // fjern event der bringer os herind
  document.querySelector("#heart_container").removeEventListener("animationend", heartGone);

  // fjern forsvind-animation
  document.querySelector("#heart_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#heart_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#heart_container").classList.remove("falling");
  document.querySelector("#heart_container").offsetWidth;
  document.querySelector("#heart_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#heart_container")
    .addEventListener("click", clickHeart);
}
function incrementLives() {
  lives += 1;
  displayincrementLives();
  
}
function displayincrementLives() {
  document.querySelector("#heart" + lives).classList.remove("broken_heart");
  document.querySelector("#heart" + lives).classList.add("active_heart");
}
