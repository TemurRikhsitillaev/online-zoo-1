const menuBtn = document.querySelector(".button__nav-menu");
const navigation = document.querySelector(".nav__small");
let menuOpen = false;
alert(
  "Здравтсвуйте, я был бы очень благодарен если бы вы проверили бы мою работу 6 октября. Спасибо за понимание"
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
