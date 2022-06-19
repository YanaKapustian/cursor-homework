const container = document.querySelector(".container");
const doNote = new Audio("audio/zvuk-notyi-do.mp3");
const reNote = new Audio("audio/zvuk-notyi-re.mp3");
const miNote = new Audio("audio/zvuk-notyi-mi.mp3");
const faNote = new Audio("audio/zvuk-notyi-fa.mp3");
const solNote = new Audio("audio/zvuk-notyi-sol.mp3");
const lyaNote = new Audio("audio/zvuk-notyi-lya.mp3");
const siNote = new Audio("audio/zvuk-notyi-si.mp3");
const doNote2 = new Audio("audio/zvuk-notyi-do2.mp3");

document.addEventListener("keydown", (e) => playNote(e));

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("note")) {
    playNote(e.target);
  }
});

function playNote(e) {
  switch (e.code || e.id) {
    case "KeyS":
      doNote.play();
      break;
    case "KeyD":
      reNote.play();
      break;
    case "KeyF":
      miNote.play();
      break;
    case "KeyG":
      faNote.play();
      break;
    case "KeyH":
      solNote.play();
      break;
    case "KeyJ":
      lyaNote.play();
      break;
    case "KeyK":
      siNote.play();
      break;
    case "KeyL":
      doNote2.play();
      break;
  }
}
