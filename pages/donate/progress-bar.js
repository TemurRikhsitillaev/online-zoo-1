const step = document.querySelector(".progress-circle");
const circle = document.querySelector(".progress-circle");
const allCircle = document.querySelectorAll(".progress-circle");
const count = document.querySelector(".progress-count ");
const countAll = document.querySelectorAll(".progress-count");
const bodyWidth = document.querySelector("body").clientWidth;
const dollar100 = document.querySelector(".dollar100");
const dollar100text = document.querySelector(".dollar100text");

if (bodyWidth == 640) {
  dollar100text.classList.add("countActive");
  dollar100.classList.add("circleActive");
}
// allCircle.addEventListener("click", () => {
//   countAll.classList.remove("countActive");
//   count.classList.add("countActive");

//   allCircle.classList.remove("circleActive");
//   circle.classList.add("circleActive");
// });
