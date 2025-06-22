class Cart extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <section class="flex-colBox md:flex-row items-start max-w-content text-center md:py-15 gap-5">
      <div class="flex-colBox text-[#3F5D45] justify-center gap-5">
        <div class="w-full bg-[#EAF0ED] flex-boxCenter"><h1 class="block text-3xl p-5 font-bold">您的購物車</h1></div>
        <div class="px-10 py-5 md:px-0 flex-rowBox items-center w-full">
        <div class="flex-colBox md:flex-row text-2xl pb-5 border-b-1 border-gray-200">
        <div class="flex-rowBox pb-5">
        <img class="flex max-w-[200px] aspect-video md:aspect-square object-cover" src="https://images.unsplash.com/photo-1504855328839-2f4baf9e0fd7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db0c8e5539456faeca0e49c79e2ccb16&auto=format&fit=crop&w=800&q=60" alt="" />
            
            <div class="grid grid-cols-1 w-full md:grid-cols-2 items-center px-5">
            <div class="flex-colBox text-left">
                <h1 class="block">焦糖馬卡龍</h1>
                <h1 class="block">NT$ 450</h1>
            </div>
            <ul class="grid grid-cols-3 w-full justify-center divide-x-1 divide-gray-200 border-1 border-gray-200 mt-5">
                <li>
                <button class="aspect-square py-5">-</button>
                </li>
                <li>
                <button class="aspect-square py-5">1</button>
                </li>
                <li>
                <button class="aspect-square py-5">+</button>
                </li>
            </ul>
            </div>
            </div>
            <div class="md:flex md:items-center md:justify-center md:w-1/3 border-t-1 border-gray-200 text-right pt-2 md:border-0 md:pt-0">
            <h1 class="block ">NT$ 900</h1>
            </div>
            </div>
            <img class=" w-[24px] hidden md:flex object-cover" src="src/assets/images/ic-delete.svg" alt="" />
        </div>
      </div>
      <div class="flex-colBox md:w-1/2 text-[#3F5D45] md:text-[#8DA291] flex-boxCenter md:bg-[#3F5D45] md:order-2">
        <div class="space-y-6 w-full">
            <ul class="space-y-6 text-2xl p-10">
              <h1 class="text-5xl md:text-white font-bold block w-full bg-[#EAF0ED] md:bg-[#3F5D45] py-5 border-b-2 border-white ">訂單摘要</h1>
              <li class="flex-rowBox justify-between w-full">
                <p>小計</p>
                <p>NT$ 2,700</p>
              </li>
              <li class="flex-rowBox justify-between w-full">
                <p>運費</p>
                <p>NT$ 300</p>
              </li>
              <li class="flex-rowBox justify-between w-full font-bold text-3xl md:text-white">
                <p>總計</p>
                <p>NT$ 3,000</p>
              </li>
            </ul>
            <button
              type="submit"
              class="w-full bg-[#FFE180] hover:bg-[#EAF0ED] text-[#3F5D45] hover:text-white text-4xl font-bold py-6 px-6 transition-colors"
            >
              結帳
            </button>
          </div>
      </div>
    </section>
    `;
  }
}

export default Cart;
