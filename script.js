"use strict";
window.addEventListener("load", start);

let points = 0;
let lives = 3;

function start() {
  console.log("JavaScript kører!");

  // Start animationer
  document.querySelector("#vodka_container").classList.add("falling");
  document.querySelector("#mælk_container").classList.add("falling");
  document.querySelector("#shot_container").classList.add("falling");
  document.querySelector("#øl_container").classList.add("falling");
  document.querySelector("#heart_container").classList.add("falling");

  // Registrer click
  document.querySelector("#vodka_container").addEventListener("click", clickVodka);
  document.querySelector("#shot_container").addEventListener("click", clickShot);
  document.querySelector("#heart_container").addEventListener("click", clickHeart);

}

function clickVodka() {

  // Forhindr gentagne clicks
  document.querySelector("#vodka_container").removeEventListener("click", clickVodka);

  // Stop coin container
  document.querySelector("#vodka_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#vodka_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#vodka_container").addEventListener("animationend", vodkaGone);
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

function vodkaGone() {
  // fjern event der bringer os herind
  document.querySelector("#vodka_container").removeEventListener("animationend", vodkaGone);

  // fjern forsvind-animation
  document.querySelector("#vodka_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#vodka_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#vodka_container").classList.remove("falling");
  document.querySelector("#vodka_container").offsetWidth;
  document.querySelector("#vodka_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document.querySelector("#vodka_container").addEventListener("click", clickVodka);
}

function clickShot() {
  console.log("Click shot");
  // Forhindr gentagne clicks
  document.querySelector("#shot_container").removeEventListener("click", clickShot);

  // Stop coin container
  document.querySelector("#shot_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#shot_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#shot_container").addEventListener("animationend", shotGone);
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
  document.querySelector("#life" + lives).classList.remove("active_heart");
  document.querySelector("#life" + lives).classList.add("broken_heart");
  
}

  //Mist liv i korrekt rækkefælge, ved at klikke på bombe

function shotGone() {
  // fjern event der bringer os herind
  document.querySelector("#shot_container").removeEventListener("animationend", shotGone);

  // fjern forsvind-animation
  document.querySelector("#shot_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#shot_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#shot_container").classList.remove("falling");
  document.querySelector("#shot_container").offsetWidth;
  document.querySelector("#shot_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document.querySelector("#shot_container").addEventListener("click", clickShot);
}

function clickHeart() {
  console.log("click");
   document.querySelector("#heart_container").removeEventListener("click", clickHeart);

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
