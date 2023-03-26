const changerBackground = document.querySelector("body");
const headerChangerButton = document.querySelector(".header__changer");
const headerBurger = document.querySelector(".header__burger")
const headerNavbar = document.querySelector(".header__navbar")

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("header__burger--opened");

  if(!headerNavbar.classList.contains("header__navbar--opening")) {
    headerNavbar.classList.add("header__navbar--opening");
  } else if (headerNavbar.classList.contains("header__navbar--opening")) {
    headerNavbar.classList.add("header__navbar--closing");
  }
})

headerNavbar.addEventListener("animationend", (evt) => {
  if (evt.animationName === "header-closing") {
    headerNavbar.classList.remove("header__navbar--opening");
    headerNavbar.classList.remove("header__navbar--closing");
  }
})

headerChangerButton.addEventListener("click", () => {
  if (!changerBackground.classList.contains("black-display")) {
    changerBackground.classList.add("black-display");
  } else if(changerBackground.classList.contains("black-display")) {
    changerBackground.classList.remove("black-display");
  }
})