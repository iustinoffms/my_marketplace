const productsContainer = document.getElementById("products-container");
renderProducts(productsContainer, listOfProducts);

const select = document.getElementById("product-filter");
const priceRange = document.getElementById("price-range");
const sort = document.getElementById("sort");

select.addEventListener("change", function () {
  productsContainer.innerHTML = " ";
  if (select.value === "all") {
    let filteredList = listOfProducts.filter((item) => item);
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
  }
  if (select.value === "salcam") {
    let filteredList = listOfProducts.filter((item) => item.name === "Miere de Salcam");
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
  }
  if (select.value === "tei") {
    let filteredList = listOfProducts.filter((item) => item.name === "Miere de Tei");
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
  }
  if (select.value === "poliflora") {
    let filteredList = listOfProducts.filter((item) => item.name === "Miere Poliflora");
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
  }
  if (select.value === "mana") {
    let filteredList = listOfProducts.filter((item) => item.name === "Miere de Mana");
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
  }
  if (select.value === "floarea-soarelui") {
    let filteredList = listOfProducts.filter((item) => item.name === "Miere de Foloarea Soarelui");
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
  }
  if (select.value === "salcioara") {
    let filteredList = listOfProducts.filter((item) => item.name === "Miere de Salcioara");
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
  }
  if (select.value === "polen") {
    let filteredList = listOfProducts.filter((item) => item.name === "Polen");
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
    // let message = document.createElement("p");
    // message.innerText = "0 produse afisate";
    // select.appendChild(message);
  }
});

priceRange.addEventListener("change", function () {
  productsContainer.innerHTML = " ";
  if (priceRange.value === "all") {
    console.log(priceRange.value);
    let filteredList = listOfProducts.filter((item) => item);
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
  }
  if (priceRange.value === "0-to-20") {
    let filteredList = listOfProducts.filter((item) => item.pret <= 20);
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
  }
  if (priceRange.value === "20-to-50") {
    let filteredList = listOfProducts.filter((item) => 20 <= item.pret && item.pret <= 50);
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
  }
  if (priceRange.value === "50-to-100") {
    let filteredList = listOfProducts.filter((item) => 50 <= item.pret && item.pret <= 100);
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
  }
  if (priceRange.value === "100+") {
    let filteredList = listOfProducts.filter((item) => item.pret >= 120);
    console.log(filteredList);
    renderProducts(productsContainer, filteredList);
  }
});

sort.addEventListener("change", function () {
  productsContainer.innerHTML = "";
  if (sort.value === "all") {
    renderProducts(productsContainer, listOfProducts);
    console.log(listOfProducts);
  }
  if (sort.value === "small-to-big") {
    let sortedList = listOfProducts.sort((x, y) => x.pret - y.pret);
    console.log(sortedList);
    renderProducts(productsContainer, sortedList);
  }
  if (sort.value === "big-to-small") {
    let sortedList = listOfProducts.sort(function fn(x, y) {
      return x.pret === y.pret ? 0 : x.pret < y.pret ? 1 : -1;
    });
    console.log(sortedList);
    renderProducts(productsContainer, sortedList);
  }
});

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-dropdown");
const closeMenuBtn = document.getElementById("close-menu-btn");
console.log(menuBtn);

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
