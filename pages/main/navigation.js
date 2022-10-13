const menuBtn = document.querySelector(".button__nav-menu");
const navigation = document.querySelector(".nav__small");
const wrapper = document.querySelector(".nav__small__wrapper");

let menuOpen = false;

// alert(
//   "Здравствуйте, когда будите проверять, после того как изменили разрешение, обновите страницу. Иначе объекту будут отображаться некорректно"
// );

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
