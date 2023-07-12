const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");
const circle = document.querySelectorAll(".circle");
const progressDiv = document.querySelectorAll(".progress");

let count = 0;

const nextButton = () => {
  progressDiv[count].style.width = "100%";
  if (count < 3) count++;
};
btnNext.addEventListener("click", nextButton);

const prevButton = () => {
  if (count > 0) count--;
  progressDiv[count].style.width = "0";
};

btnPrev.addEventListener("click", prevButton);


