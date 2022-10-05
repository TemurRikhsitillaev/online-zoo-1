const step = document.querySelector(".progress-circle");
const circle = document.querySelector(".progress-circle");
const allCircle = document.querySelectorAll(".progress-circle");
const count = document.querySelector(".progress-count");
const countAll = document.querySelectorAll(".progress-count");

allCircle.addEventListener("click", () => {
  countAll.classList.remove("countActive");
  count.classList.add("countActive");

  allCircle.classList.remove("circleActive");
  circle.classList.add("circleActive");
});
