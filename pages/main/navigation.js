const menuBtn = document.querySelector(".button__nav-menu");
const navigation = document.querySelector(".nav__small");
let menuOpen = false;

alert(
  "Здравствуйте, сайт ещё в процессе разработки. Был бы очень рад если бы вы проверили мою работу 13 октября"
);

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    navigation.classList.remove("display-none");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    navigation.classList.add("display-none");
  }
});
