const container = document.getElementById("homepage-products");
renderProducts(container, listOfProducts, 4);

// let cart = [
//   { id: "aea2813d-7040-495e-8565-d275f5451295", quantity: 1 },
//   { id: "b47f9952-a648-4393-8cde-2e4560d319ef", quantity: 3 },
// ];

// function renderCartItems(cartItems) {
//   for (let item of cartItems) {
//     const product = listOfProducts.find((x) => x.id === item.id);
//     console.log({ product, item });
//   }
// }

// renderCartItems(cart);

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-dropdown");
const closeMenuBtn = document.getElementById("close-menu-btn");

menuBtn.addEventListener("click", function (event) {
  event.preventDefault;
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
});

closeMenuBtn.addEventListener("click", function (event) {
  event.preventDefault;
  menu.style.display = "none";
  menuBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
});

// const bodyElement = document.getElementById("body");
// bodyElement.addEventListener("click", function (event) {
//   event.preventDefault;
//   menu.style.display = "none";
// });
