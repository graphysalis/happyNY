const snowMaker = () => {
  const snow = document.createElement("snow");
  snow.classList.add("snow");
  document.body.appendChild(snow);
  const size = Math.random() * 5 + 1 + "px"; //pour obtenir un nombre entre 1px et 6px
  snow.style.height = size;
  snow.style.width = size;

  snow.style.bottom = Math.random() * 100 + 50 + "%";
  snow.style.left = Math.random() * 100 + "%";

  //si math.random sup à 0.5 renvoie 1 sinon(:) renvoie -1 (équivalent à if / else)
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  //-----------------------------------
  //--faire dériver de gauche à droite
  snow.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  //une bulle disparait completement  au bout de 4secondes:
  setTimeout(() => {
    snow.remove();
  }, 4000);
};
//  joue une bulle toutes les x dixième(1) de secondes":

const interval = setInterval(snowMaker, 10);

/********** music ******/
const musicOn = document.querySelector(".musicOn");
const musicOff = document.querySelector(".musicOff");
const music = new Audio();
music.src = "./assets/newYear.mp3";

musicOn.addEventListener("click", () => {
  musicOn.style.visibility = "hidden";
  musicOff.style.visibility = "visible";
  music.play();
});

musicOff.addEventListener("click", () => {
  musicOn.style.visibility = "visible";
  musicOff.style.visibility = "hidden";
  music.pause();
  music.currentTime = 0; //pour stopper (avec pause!) remettre au début l'audio.
});

//*****************glitter/star******
const starMaker = () => {
  const star = document.createElement("star");
  star.classList.add("star");
  document.body.appendChild(star);
  const size = Math.random() * 90 + 10 + "px"; //pour obtenir un nombre entre 10px et 100px
  star.style.height = size;
  star.style.width = size;

  star.style.bottom = Math.random() * 100 + 30 + "%";
  star.style.left = Math.random() * 100 + "%";

  //une star disparait completement  au bout de 4secondes:
  setTimeout(() => {
    star.remove();
  }, 4000);
};
//  joue une star toutes les x dixième(1) de secondes":

const interval2 = setInterval(starMaker, 150);
