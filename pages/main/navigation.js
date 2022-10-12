const menuBtn = document.querySelector(".button__nav-menu");
const navigation = document.querySelector(".nav__small");
const wrapper = document.querySelector(".nav__small__wrapper");

let menuOpen = false;

alert(
  "Здравствуйте, сайт ещё в процессе разработки. Был бы очень рад если бы вы проверили мою работу вечером 13 октября"
);

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    wrapper.style.display = "block";
    menuOpen = true;
    navigation.classList.remove("display-none");
  } else {
    menuBtn.classList.remove("open");
    wrapper.style.display = "none";
    menuOpen = false;
    navigation.classList.add("display-none");
  }
});

wrapper.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  wrapper.style.display = "none";
  menuOpen = false;
  navigation.classList.add("display-none");
});
