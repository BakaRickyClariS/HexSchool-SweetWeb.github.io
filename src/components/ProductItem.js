class ProductItem extends HTMLElement {
  constructor() {
    super();
    this.itemInfo = JSON.parse(this.getAttribute("itemInfo") || "[]");
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
          <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        ${this.itemInfo
          .map(
            (item) => `
          <li class="flex-colBox text-center text-[#3F5D45]">
            <div class="relative w-full">
              <img
                class="w-full aspect-square"
                src="${item.img}"
                alt=""
              />
              <div class="absolute top-0 left-8 p-5 bg-[#3F5D45] text-white">
                <h1
                  class="vlText font-bold text-2xl"
                >
                  本日精選
                </h1>
              </div>
              <div class="absolute top-5 right-8">
                <button>
                  <img
                    class="w-10"
                    src="src/assets/images/favorite_border.png"
                    alt="favorite"
                  />
                </button>
              </div>
            </div>
            <div
              class="flex-colBox divide-y-1 divide-gray-200 border-1 border-gray-200"
            >
              <div
                class="flex-rowBox divide-x-1 divide-gray-200 text-3xl md:text-2xl items-center"
              >
                <h1 class="p-5 w-3/5">${item.name}</h1>
                <h1 class="p-5 w-2/5 font-bold">NT$ ${item.price}</h1>
              </div>
              <div class="flex w-full text-4xl font-bold">
                <button class="py-8 bg-[#EAF0ED] flex w-full justify-center">
                  加入購物車
                </button>
              </div>
            </div>
          </li>
          `
          )
          .join("")}
        </ul>
    `;
  }
  update(itemInfo) {
    this.itemInfo = itemInfo;
    this.render();
  }
}

customElements.define("product-item", ProductItem);

export default ProductItem;
