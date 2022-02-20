const similarProducts = document.getElementById("similar-products");

renderProducts(similarProducts, listOfProducts, 4);

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-dropdown");
const closeMenuBtn = document.getElementById("close-menu-btn");
console.log(menuBtn);

menuBtn.addEventListener("click", function () {
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
});

closeMenuBtn.addEventListener("click", function () {
  menu.style.display = "none";
  menuBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
});
