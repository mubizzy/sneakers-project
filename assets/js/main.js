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
const sizes = document.querySelector(".size__tallas");
const colors = document.querySelector(".sneaker__color");
const sneaker = document.querySelector(".sneaker__img");

function changeSize() {
  sizes.forEach((size) => size.classList.remove("active"));
  this.classList.add("active");
}
