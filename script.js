"use strict";
window.addEventListener("load", ready);

let points =0;
let lives = 3;

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", start);
}

function start() {
  console.log("JavaScript kører!");
  document.querySelector("#start_lyd").play();
  document.querySelector("#background_lyd").play();
     // skjul startskærm
  document.querySelector("#start").classList.add("hidden");

  // Start animationer
  document.querySelector("#vodka_container").classList.add("falling");
  document.querySelector("#mælk_container").classList.add("falling");
  document.querySelector("#shot_container").classList.add("falling");
  document.querySelector("#øl_container").classList.add("falling");
  document.querySelector("#heart_container").classList.add("falling");
  document.querySelector("#drink_container").classList.add("falling");
  
  // Registrer click
  document.querySelector("#vodka_container").addEventListener("click", clickVodka);
  document.querySelector("#mælk_container").addEventListener("click", clickMælk);
  document.querySelector("#shot_container").addEventListener("click", clickShot);
  document.querySelector("#øl_container").addEventListener("click", clickØl);
  document.querySelector("#heart_container").addEventListener("click", clickHeart);
  document.querySelector("#drink_container").addEventListener("click", clickDrink);
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
  decrementPoints();
  displayPoints();
}

function clickMælk() {
  document.querySelector("#mælk_container").removeEventListener("click", clickMælk);
  document.querySelector("#mælk_container").classList.add("paused");
  document.querySelector("#mælk_sprite").classList.add("zoom_out");
  document.querySelector("#mælk_container").addEventListener("animationend", MælkGone);
  decrementLives();
  document.querySelector("#").play();
  document.querySelector("#").currentTime=0;

}
function clickØl() {
  document.querySelector("#øl_container").removeEventListener("click", clickØl);
  document.querySelector("#øl_container").classList.add("paused");
  document.querySelector("#øl_sprite").classList.add("zoom_out");
  document.querySelector("#øl_container").addEventListener("animationend", ØlGone);
  incrementPoints();
  displayPoints();
}
function clickDrink() {
  console.log("drink");
  document.querySelector("#drink_container").removeEventListener("click", clickDrink);
  document.querySelector("#drink_container").classList.add("paused");
  document.querySelector("#drink_sprite").classList.add("zoom_out");
  document.querySelector("#drink_container").addEventListener("animationend", DrinkGone);
  incrementPoints();
  displayPoints();
}
//Funktioner vi laver som øvelse i timen
function incrementPoints() {
  points += 1;
  console.log(points);
  displayPoints();
  if (points >= 10) {
    levelComplete();
  }
}
function displayPoints() {
  console.log("displayPoints");
  document.querySelector("#point_count").textContent =points;
}
function decrementPoints() {
  points -= 1;
  console.log(points);
  displayPoints();
}
//Funktioner vi laver som øvelse i timen

function ØlGone() {
  document.querySelector("#øl_container").removeEventListener("animationend", ØlGone);
  document.querySelector("#øl_sprite").classList.remove("zoom_out");
  document.querySelector("#øl_container").classList.remove("paused");
  document.querySelector("#øl_container").classList.remove("falling");
  document.querySelector("#øl_container").offsetWidth;
  document.querySelector("#øl_container").classList.add("falling");
  document.querySelector("#øl_container").addEventListener("click", clickØl);
}
function DrinkGone() {
  document.querySelector("#drink_container").removeEventListener("animationend", DrinkGone);
  document.querySelector("#drink_sprite").classList.remove("zoom_out");
  document.querySelector("#drink_container").classList.remove("paused");
  document.querySelector("#drink_container").classList.remove("falling");
  document.querySelector("#drink_container").offsetWidth;
  document.querySelector("#drink_container").classList.add("falling");
  document.querySelector("#drink_container").addEventListener("click", clickDrink);
}

function MælkGone() {
  document.querySelector("#mælk_container").removeEventListener("animationend", MælkGone);
  document.querySelector("#mælk_sprite").classList.remove("zoom_out");
  document.querySelector("#mælk_container").classList.remove("paused");
  document.querySelector("#mælk_container").classList.remove("falling");
  document.querySelector("#mælk_container").offsetWidth;
  document.querySelector("#mælk_container").classList.add("falling");
  document.querySelector("#mælk_container").addEventListener("click", clickMælk);
}

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
  incrementPoints();
  displayPoints();
}

function decrementLives() {
  if (lives <= 1) {
    console.log("tabt");
    displaygameOver();
  }
  displayDecrementedLives();
  lives -= 1;
  }
  
function displayDecrementedLives() {
  document.querySelector("#life" + lives).classList.remove("active_life");
  document.querySelector("#life" + lives).classList.add("broken_life");
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
   document.querySelector("#heart_container").removeEventListener("click", clickHeart);

   // Stop coin container
   document.querySelector("#heart_container").classList.add("paused");

   // sæt forsvind-animation på coin
   document.querySelector("#heart_sprite").classList.add("zoom_in");

   // når forsvind-animation er færdig: coinGone
  document.querySelector("#heart_container").addEventListener("animationend", heartGone);
  incrementLives()
  displayincrementLives();
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
  document.querySelector("#life" + lives).classList.remove("broken_life");
  document.querySelector("#life" + lives).classList.add("active_life");
}

function displaygameOver() {
  document.querySelector("#game_over").classList.remove("hidden");
}

function levelComplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
}