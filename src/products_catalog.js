let listOfProducts = [
  {
    id: "0d930198-9a71-44ee-aff0-5b8f1b6c125e",
    name: "Miere de Salcam",
    gramaj: "500g",
    pret: "32RON",
    img: "https://picsum.photos/200/300",
  },
  {
    id: "f3eb5d31-fcf6-4f69-8499-2d07a44c616a",
    name: "Miere Poliflora",
    gramaj: "500g",
    pret: "21RON",
    img: "https://picsum.photos/200/300",
  },
  {
    id: "264b4aa5-ca60-45c1-afe7-dc38f35e6693",
    name: "Miere de Tei",
    gramaj: "500g",
    pret: "20RON",
    img: "https://picsum.photos/200/300",
  },
  {
    id: "9b4bc0b0-e1ff-49ed-9423-27a2457c49e5",
    name: "Miere x ",
    gramaj: "500g",
    pret: "20RON",
    img: "https://picsum.photos/200/300",
  },
  {
    id: "b47f9952-a648-4393-8cde-2e4560d319ef",
    name: "Miere de Tei",
    gramaj: "500g",
    pret: "20RON",
    img: "https://picsum.photos/200/300",
  },
  {
    id: "37dff93a-5d63-4259-9a5f-d37f955edf75",
    name: "Miere de Tei",
    gramaj: "500g",
    pret: 20,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "aea2813d-7040-495e-8565-d275f5451295",
    name: "Miere de Tei",
    gramaj: "500g",
    pret: "20RON",
    img: "https://picsum.photos/200/300",
  },
];

function renderProducts(container, list, limit) {
  const stop = limit ?? list.length;

  for (let i = 0; i < stop; i++) {
    const product = list[i];

    let productElement = document.createElement("div");
    productElement.innerHTML = `<div
      id="${product.id}"
      class="card relative flex flex-col items-center gap-2 rounded-md bg-white shadow-md shadow-zinc-400 hover:shadow-lg hover:shadow-zinc-500 hover:ease-in duration-100"
    >
      <a class="w-full flex justify-center px-8" href="./salcam_mare_prod.html">
        <img class="w-full mt-4" src="https://picsum.photos/200/300" alt="miere de albine"/>
      </a>  
    <div
  class="produs-local bg-amber-400 rounded-full w-[55px] h-[55px] flex items-center justify-center absolute top-0 left-0 m-2"
  >
  <p class="text-[12px] text-center">Produs local</p>
  </div>
  <div class="card-info flex flex-col items-center">
  <h3 class="card-product-title font-black py-1">
    <a href="./products.html">${product.name}</a>
  </h3>
  <p class="text-sm text-zinc-400">Cantitate regăsită în vas, ${product.gramaj}</p>
  <p class="text-amber-400 font-black py-2 text-lg">${product.pret}RON</p>
  </div>
  <a class="w-full" href="./cart.html"
  ><div
    class="add-to-cart bg-amber-400 text-center hover:bg-amber-500 flex justify-between px-2 py-3 rounded-b-md"
  >
    <span class="material-icons">
      <span class="material-icons-outlined text-white text-2xl">
        shopping_cart
      </span> </span
    ><button class="btn text-white flex-1 text-center text-base">Adauga in Cos</button>
  </div></a
  >
  </div>`;

    container.appendChild(productElement);
  }
}
