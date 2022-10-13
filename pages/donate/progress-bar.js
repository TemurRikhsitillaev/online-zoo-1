const step = document.querySelector(".progress-circle");
const circle = document.querySelector(".progress-circle");
const allCircle = document.querySelectorAll(".progress-circle");
const count = document.querySelector(".progress-count ");
const countAll = document.querySelectorAll(".progress-count");
const bodyWidth = document.querySelector("body").clientWidth;
const dollar100 = document.querySelector(".dollar100");
const dollar100text = document.querySelector(".dollar100text");

const inputNumber = document.querySelectorAll(".input-amount");
const inputNumberOne = document.querySelector(".input-amount");

const inputNumberID = document.querySelector("#input__number");
console.log(inputNumber.value);

let numbers = [5000, 2000, 1000, 500, 250, 100, 50];

if (bodyWidth == 640 || bodyWidth == 320) {
  dollar100text.classList.add("countActive");
  dollar100.classList.add("circleActive");
  inputNumberOne.value = `${100}`;
  numbers = [500, 250, 100, 50];
} else if (bodyWidth > 640 || bodyWidth <= 1000) {
  numbers = [2000, 1000, 500, 250, 100, 50];
  inputNumberOne.value = `${100}`;
} else if (bodyWidth > 320 || bodyWidth <= 640) {
  dollar100text.classList.add("countActive");
  dollar100.classList.add("circleActive");
  inputNumberOne.value = `${100}`;
  numbers = [500, 250, 100, 50];
} else if (bodyWidth > 1000 || bodyWidth <= 1600) {
  dollar100text.classList.add("countActive");
  dollar100.classList.add("circleActive");
  inputNumberOne.value = `${100}`;
}
console.log(countAll);

allCircle.forEach((el) => {
  el.addEventListener("click", (e) => {
    for (let i = 0; i < allCircle.length; i++) {
      allCircle[i].classList.remove("circleActive");
      countAll[i].classList.remove("countActive");
    }
    const currentDollar = e.currentTarget.getAttribute("data-dollar");
    console.log(currentDollar);

    e.currentTarget.classList.add("circleActive");
    inputNumberOne.value = `${currentDollar}`;

    for (let i = 0; i < countAll.length; i++) {
      if (countAll[i].getAttribute("data-dollar") == currentDollar) {
        inputNumber.placeholder = `$ ${currentDollar}`;
        countAll[i].classList.add("countActive");
      }
    }
  });
});

Array.from(inputNumber).forEach((input) => {
  const min = +input.min;
  const max = +input.max;

  input.addEventListener("input", (e) => {
    const value = +input.value;
    if (value > max) {
      input.value = max;
    } else if (value < min) {
      input.value = min;
    }
  });
});

console.log(inputNumberID.value);
inputNumberID.oninput = () => {
  console.log(inputNumberID.value);

  if (!numbers.includes(inputNumberID.value)) {
    countAll.forEach((el) => el.classList.remove("countActive"));
    allCircle.forEach((el) => el.classList.remove("circleActive"));
  }

  for (let i = 0; i < countAll.length; i++) {
    if (inputNumberID.value == countAll[i].getAttribute("data-dollar")) {
      countAll.forEach((el) => el.classList.remove("countActive"));
      allCircle.forEach((el) => el.classList.remove("circleActive"));
      countAll[i].classList.add("countActive");
      allCircle[i].classList.add("circleActive");
    }
    console.log(
      inputNumberID.value !== countAll[i].getAttribute("data-dollar")
    );
  }
};
