const animalCards = {
  1: {
    name: "GIANT PANDA",
    location: "Native to Southwest China",
    animalImg: "../../assests/images/Rectangle-5.png",
    foodImg: "../../assests/images/banana-bamboo_icon.png",
    foodImgAlt: "banana",
    foodImgClassName: "image__banana",
  },
  2: {
    name: "EAGLES",
    location: "Native to South America",
    animalImg: "../../assests/images/Rectangle-4.png",
    foodImg: "../../assests/images/meet-fish_icon.png",
    foodImgAlt: "meat",
    foodImgClassName: "image__meet",
  },
  3: {
    name: "GORILLAS",
    location: "Native to CONGO",
    animalImg: "../../assests/images/Rectangle-3.png",
    foodImg: "../../assests/images/banana-bamboo_icon.png",
    foodImgAlt: "banana",
    foodImgClassName: "image__banana",
  },
  4: {
    name: "TWO-TOED SLOTH",
    location: "Mesoamerica, South America",
    animalImg: "../../assests/images/Rectangle-2.png",
    foodImg: "../../assests/images/banana-bamboo_icon.png",
    foodImgAlt: "banana",
    foodImgClassName: "image__banana",
  },
  5: {
    name: "ALLIGATORS",
    location: "Native to Southeastern U. S.",
    animalImg: "../../assests/images/Rectangle-6.png",
    foodImg: "../../assests/images/meet-fish_icon.png",
    foodImgAlt: "meat",
    foodImgClassName: "image__meet",
  },
  6: {
    name: "CHEETAHS",
    location: "Native to Africa",
    animalImg: "../../assests/images/Rectangle-1.png",
    foodImg: "../../assests/images/meet-fish_icon.png",
    foodImgAlt: "meat",
    foodImgClassName: "image__meet",
  },
  7: {
    name: "LION",
    location: "Native to Africa",
    animalImg: "../../assests/images/lion.png",
    foodImg: "../../assests/images/meet-fish_icon.png",
    foodImgAlt: "meat",
    foodImgClassName: "image__meet",
  },
  8: {
    name: "TIGER",
    location: "Native to Africa",
    animalImg: "../../assests/images/tiger.png",
    foodImg: "../../assests/images/meet-fish_icon.png",
    foodImgAlt: "meat",
    foodImgClassName: "image__meet",
  },
  9: {
    name: "TURTLE",
    location: "Native to North America",
    animalImg: "../../assests/images/turtle.png",
    foodImg: "../../assests/images/meet-fish_icon.png",
    foodImgAlt: "meat",
    foodImgClassName: "image__meet",
  },
  10: {
    name: "CAT",
    location: "Native to ancient Egypt",
    animalImg: "../../assests/images/cat.png",
    foodImg: "../../assests/images/meet-fish_icon.png",
    foodImgAlt: "meat",
    foodImgClassName: "image__meet",
  },
  11: {
    name: "FOX",
    location: "Native to Europe",
    animalImg: "../../assests/images/fox.png",
    foodImg: "../../assests/images/meet-fish_icon.png",
    foodImgAlt: "meat",
    foodImgClassName: "image__meet",
  },
  12: {
    name: "ELEPHANT",
    location: "Native to Africa",
    animalImg: "../../assests/images/elephant.png",
    foodImg: "../../assests/images/banana-bamboo_icon.png",
    foodImgAlt: "banana",
    foodImgClassName: "image__banana",
  },
};

const body = document.querySelector("body");

const buttonRight = document.querySelector(".rightButton");
const buttonLeft = document.querySelector(".leftButton");

const containerAnimalCards = document.querySelector(".container-animal-cards");
const animalCardString = [];
const randomNumbers = [];

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

for (let i = 0; i < 100; i++) {
  const randomNumber = randomInteger(1, 12);

  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber);
  }
}

for (let i = 0; i < 12; i++) {
  animalCardString.push(
    `<div class="container-animal-card">
    <img
      src=${animalCards[randomNumbers[i]].animalImg}
      alt=${animalCards[randomNumbers[i]].name.toLowerCase()}
      class="image__animal-card"
    />
    <div class="animal-card__sub-title">
      <h4 class="animal-card__title">${animalCards[randomNumbers[i]].name}</h4>
      <p class="animal-card__text">${animalCards[randomNumbers[i]].location}</p>
    </div>
    <img
      src=${animalCards[randomNumbers[i]].foodImg}
      alt=${animalCards[randomNumbers[i]].foodImgAlt}
      class=${animalCards[randomNumbers[i]].foodImgClassName}
    />
    <div class="container__hidden-title">
      <h1>${animalCards[randomNumbers[i]].name}</h1>
      <p>${animalCards[randomNumbers[i]].location}</p>
    </div>
  </div>`
  );
}

containerAnimalCards.innerHTML = `${animalCardString.join("")}`;

let bodyWidth = 1188,
  counter = 0,
  numberOfSlides = 2;

if (body.clientWidth > 640 && body.clientWidth <= 1000) bodyWidth = 970;
else if (body.clientWidth > 320 && body.clientWidth <= 640) {
  bodyWidth = 628;
  numberOfSlides = 3;
}

buttonRight.addEventListener("click", () => {
  containerAnimalCards.classList.add("transformAnimation");
  counter++;
  if (counter >= numberOfSlides) counter = 0;
  else null;
  containerAnimalCards.style.transform =
    "translateX(" + `${-bodyWidth * counter}px)`;
  console.log(counter);
});

buttonLeft.addEventListener("click", () => {
  if (counter <= 0) counter = numberOfSlides - 1;
  else counter--;
  containerAnimalCards.classList.add("transformAnimation");
  containerAnimalCards.style.transform =
    "translateX(" + `${-bodyWidth * counter}px)`;
  console.log(counter);
});
