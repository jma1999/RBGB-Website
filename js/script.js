const titleLines = document.querySelectorAll(".title-line");

let currentTitle = 0;

function rotateHeroTitle() {
  titleLines[currentTitle].classList.remove("active");

  currentTitle = (currentTitle + 1) % titleLines.length;

  titleLines[currentTitle].classList.add("active");
}

setInterval(rotateHeroTitle, 2800);