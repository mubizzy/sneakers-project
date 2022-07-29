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

// sizes.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.currentTarget.classList.add("active");
//   });
// });
