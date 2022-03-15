// function playAudio(K) {
//   var audio = document.getElementById(K);
//   audio.play(K);
// }

// function pauseAudio() {
//   var audio = document.getElementById("K");
//   audio.pause();
// }

// function playAudio(A) {
//   var audio = document.getElementById(A);
//   audio.play(A);
// }

// function pauseAudio() {
//   var audio = document.getElementById("A");
//   audio.pause();
// }

// function playAudio(M) {
//   var audio = document.getElementById(M);
//   audio.play(M);
// }

// function pauseAudio() {
//   var audio = document.getElementById("M");
//   audio.pause();
// }

// function playAudio(V) {
//   var audio = document.getElementById(V);
//   audio.play(V);
// }

// function pauseAudio() {
//   var audio = document.getElementById("V");
//   audio.pause();
// }

// function playAudio(L) {
//   var audio = document.getElementById(L);
//   audio.play(L);
// }

// function pauseAudio() {
//   var audio = document.getElementById("L");
//   audio.pause();
// }
// function playAudio(E) {
//   var audio = document.getElementById(E);
//   audio.play(E);
// }
// function pauseAudio() {
//   var audio = document.getElementById("E");
//   audio.pause();
// }

// function playAudio(T) {
//   var audio = document.getElementById(T);
//   audio.play(T);
// }

// function pauseAudio() {
//   var audio = document.getElementById("T");
//   audio.pause();
// }
// function playAudio(H) {
//   var audio = document.getElementById(H);
//   audio.play(H);
// }

// function pauseAudio() {
//   var audio = document.getElementById("H");
//   audio.pause();
// }

let sound = null;
const playsound = (event) => {
  if (sound !== null) {
    sound.pause();
    sound.currentTime = 0;
  }
  id = event.target.value;
  if (id === "Q") id = "Q";
  if (id === "W") id = "W";
  sound = document.getElementById(id);
  var instrument =
    sound !== null && sound.src.split("/")[sound.src.split("/").length - 1];
  document.getElementById("display").innerHTML = instrument.replace(".mp3", "");
  sound.play();
};
window.addEventListener("click", playsound);
