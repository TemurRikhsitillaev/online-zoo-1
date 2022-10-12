// const body = document.querySelector("body");
const scrollBar = document.querySelector("#scroll");
const feedbackCards = document.querySelector(".container__feedback-cards");
const feedbackCardAll = document.querySelectorAll(".container__feedback-card");
const feedbackCard = document.querySelector(".container__feedback-card");
const feedbackCardPopupOverlay = document.querySelector(
  ".feedback-card__popup__overlay"
);

const popupCard = document.querySelectorAll(".popup__feedback-card");

const container__feedback__popup = document.querySelector(
  ".container__feedback-cards__popup"
);

const closeButton = document.querySelector(".button__close");

// scroll bar
let step = 300;
if (body.clientWidth > 640 && body.clientWidth <= 1000) {
  step = 310;
  closeButton.classList.add("button__close__1000px");
} else if (body.clientWidth > 320 && body.clientWidth <= 640) {
  closeButton.classList.add("button__close__640px");
} else if (body.clientWidth > 0 && body.clientWidth <= 320) {
  closeButton.classList.add("button__close__320px");
}

scrollBar.oninput = () => {
  console.log(scrollBar.value);
  feedbackCards.classList.add("transformAnimation");
  feedbackCards.style.transform =
    "translateX(" + `${-scrollBar.value * step}px)`;
};

// pop up

feedbackCardAll.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    feedbackCardAll.forEach((elm) =>
      elm.classList.remove("popup__feedback-card__visible")
    );

    feedbackCardPopupOverlay.classList.add(
      "feedback-card__popup__overlay__visible"
    );

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("popup__feedback-card__visible");
  });
});

feedbackCardPopupOverlay.addEventListener("click", (e) => {
  if (e.target == feedbackCardPopupOverlay) {
    feedbackCardPopupOverlay.classList.remove(
      "feedback-card__popup__overlay__visible"
    );
    popupCard.forEach((el) => {
      el.classList.remove("popup__feedback-card__visible");
    });
  }
});

closeButton.addEventListener("click", (e) => {
  console.log(e.target);
  feedbackCardPopupOverlay.classList.remove(
    "feedback-card__popup__overlay__visible"
  );
  popupCard.forEach((el) => {
    el.classList.remove("popup__feedback-card__visible");
  });
});
