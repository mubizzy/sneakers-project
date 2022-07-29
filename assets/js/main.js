/*======== MENU==========*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
/*========CAMBIO COLORS==========*/
const sizes = document.querySelectorAll(".size__tallas");
const colors = document.querySelectorAll(".sneaker__color");
const sneaker = document.querySelectorAll(".sneaker__img");

function changeSize() {
  sizes.forEach((size) => size.classList.remove("active"));
  this.classList.add("active");
}

sizes.forEach((size) => size.addEventListener("click", changeSize));

function changeColor() {
  let primary = this.getAttribute("primary");
  let color = this.getAttribute("color");
  let sneakerColor = document.querySelector(`.sneaker__img[color="${color}"]`);

  colors.forEach((c) => c.classList.remove("active"));
  this.classList.add("active");

  document.documentElement.style.setProperty("--primary", primary);

  sneaker.forEach((s) => s.classList.remove("shows"));
  sneakerColor.classList.add("shows");
}

colors.forEach((c) => c.addEventListener("click", changeColor));
// sizes.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.currentTarget.classList.add("active");
//   });
// });
