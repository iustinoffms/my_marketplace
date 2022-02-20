let listOfProducts = [
  {
    id: "0d930198-9a71-44ee-aff0-5b8f1b6c125e",
    name: "Miere de Salcam",
    gramaj: "1000g",
    pret: 35,
    img: "https://picsum.photos/200/300",
    link: "./salcam_mare_prod.html",
  },
  {
    id: "f3eb5d31-fcf6-4f69-8499-2d07a44c616a",
    name: "Miere Poliflora",
    gramaj: "1000g",
    pret: 21,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "264b4aa5-ca60-45c1-afe7-dc38f35e6693",
    name: "Miere de Tei",
    gramaj: "1000g",
    pret: 20,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "9b4bc0b0-e1ff-49ed-9423-27a2457c49e5",
    name: "Miere de Mana",
    gramaj: "1000g",
    pret: 30,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "b47f9952-a648-4393-8cde-2e4560d319ef",
    name: "Miere de Foloarea Soarelui",
    gramaj: "1000g",
    pret: 20,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "3ac434f0-eb3f-4350-b591-8859deaec804",
    name: "Miere de Salcioara",
    gramaj: "1000g",
    pret: 28,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "37dff93a-5d63-4259-9a5f-d37f955edf75",
    name: "Miere de Salcam",
    gramaj: "500g",
    pret: 18,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "aea2813d-7040-495e-8565-d275f5451295",
    name: "Miere Poliflora",
    gramaj: "500g",
    pret: 11,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "415069c4-1812-40ad-a61c-371257152ff0",
    name: "Miere de Tei",
    gramaj: "500g",
    pret: 11,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "1ca10cc7-018d-45b2-8d51-7adb4f3a1d9f",
    name: "Miere de Mana",
    gramaj: "500g",
    pret: 16,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "d8a205df-5deb-43be-9aa2-31963664278a",
    name: "Miere de Foloarea Soarelui",
    gramaj: "500g",
    pret: 11,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "cd138b45-a083-4986-8507-1dbdd26a4d13",
    name: "Miere de Salcioara",
    gramaj: "500g",
    pret: 15,
    img: "https://picsum.photos/200/300",
  },
];

function renderProducts(container, list, limit) {
  const stop = limit ?? list.length;

  for (let i = 0; i < stop; i++) {
    const singleProduct = list[i];

    let productElement = document.createElement("div");
    productElement.innerHTML = `<div
      id="${singleProduct.id}"
      class="card relative flex flex-col items-center gap-2 rounded-md bg-white shadow-md shadow-zinc-400 hover:shadow-lg hover:shadow-zinc-500 hover:ease-in duration-100"
    >
      <a class="w-full flex justify-center px-8" href=${singleProduct.link}>
        <img class="w-full mt-4" src="https://picsum.photos/200/300" alt="miere de albine"/>
      </a>  
    <div
  class="produs-local bg-amber-400 rounded-full w-[55px] h-[55px] flex items-center justify-center absolute top-0 left-0 m-2"
  >
  <p class="text-[12px] text-center">Produs local</p>
  </div>
  <div class="card-info flex flex-col items-center">
  <h3 class="card-product-title font-black py-1">
    <a href="./products.html">${singleProduct.name}</a>
  </h3>
  <p class="text-sm text-zinc-400">Cantitate regăsită în vas, ${singleProduct.gramaj}</p>
  <p class="text-amber-400 font-black py-2 text-lg">${singleProduct.pret} RON</p>
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

function productDisplay(container, list) {
  for (let i = 0; i < list.length; i++) {
    let productPage = document.createElement("div");
    productPage.innerHTML = `<div class="product-wrapper p-10 grid md:grid-cols-2 md:p-10 md:gap-10">
    <div class="prod-image flex justify-center">
      <img src="https://picsum.photos/300/400/" alt="borcan cu miere" class="5/6" />
    </div>
    <div
      class="prod-details-description-section flex flex-col justify-between md:flex md:flex-col md:gap-10"
    >
      <div
        class="prod-details flex flex-col items-center py-8 md:flex md:flex-col md:items-start md:p-2"
      >
        <h2
          class="card-product-title font-extrabold py-1 text-[1.3rem] ease-in duration-75 md:text-[2rem]"
        >
          MIERE DE SALCÂM
        </h2>

        <p class="text-sm text-zinc-400 md:text-[1rem]">500g</p>

        <p class="text-amber-400 font-black py-2 text-[1.2rem] md:text-[1.5rem]">32 RON</p>

        <div class="button-and-counter flex items-center gap-5 mt-10">
          <div
            class="add-to-cart bg-amber-400 text-center hover:bg-amber-500 flex gap-2 justify-between px-2 py-1.5 rounded-sm"
          >
            <span class="material-icons">
              <span class="material-icons-outlined text-white text-2xl">
                shopping_cart
              </span> </span
            ><button class="btn text-white flex-1 text-center text-base">Adauga in Cos</button>
          </div>
          <div class="counter border border-solid border-zinc-400 flex">
            <button
              class="border border-solid border-zinc-400 p-2 w-[30px] flex items-center justify-center text-zinc-500"
            >
              <span class="material-icons"> remove </span>
            </button>
            <input
              type="text"
              name="quantity"
              placeholder="1"
              disabled
              class="border border-solid border-zinc-400 p-2 w-[50px] focus:outline-none text-center"
            />
            <button
              class="border border-solid border-zinc-400 p-2 w-[30px] flex items-center justify-center"
            >
              <span class="material-icons"> add </span>
            </button>
          </div>
        </div>
      </div>
      <div class="prod-description p-2">
        <div class="description-title mb-6">
          <h2>Descriere produs</h2>
          <hr />
        </div>

        <p class="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium, et
          debitis praesentium dolores dolor, minus officiis eligendi, veritatis nostrum minima
          dicta quaerat aliquam eum magnam tempore magni doloribus. Quidem pariatur distinctio
          dolor sunt ratione quaerat asperiores, in ut laboriosam, itaque nemo provident dolorem
          vero maxime eligendi numquam sapiente necessitatibus.
        </p>
        <hr />
      </div>
    </div>
  </div>`;
    container.appendChild(productPage);
  }
}
