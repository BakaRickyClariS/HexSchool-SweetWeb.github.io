import Pagination from "../components/Pagination.js";

class Products extends HTMLElement {
  constructor() {
    super();
    const shopInfo = [
      {
        name: "焦糖瑪卡龍",
        price: "450",
        img: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c376ffa487bcd258df29dc881b10703&auto=format&fit=crop&w=700&q=60",
      },
      {
        name: "焦糖瑪卡龍",
        price: "450",
        img: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c376ffa487bcd258df29dc881b10703&auto=format&fit=crop&w=700&q=60",
      },
      {
        name: "焦糖瑪卡龍",
        price: "450",
        img: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c376ffa487bcd258df29dc881b10703&auto=format&fit=crop&w=700&q=60",
      },
    ];
    this.innerHTML = `
    <main class="flex-colBox">
      <section class="relative max-w-content flex-colBox items-center md:pb-20 fade-section">
        <div
          class="flex-colBox md:px-10 flex-boxCenter overflow-hidden max-h-[763px]"
        >
          <img
          class="w-full scale-130"
            src="https://images.unsplash.com/photo-1512484457149-266d165a4eca?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <h1
              class="absolute top-[30px] xl:top-[100px] right-5 vlText custom-title md:text-5xl md:leading-[80px] xl:text-6xl xl:leading-[100px] fade-section"
            >
              <span
                class="h-[400px] w-[400px]"
              >
                <span class="poem-line">想吃甜點</span><span class="poem-line">||</span><br />&nbsp;<span class="poem-line">是不需要理由的。</span></span
              >
            </h1>
      </section>
      <section class="max-w-content flex-colBox md:flex-row gap-10 md:gap-5 fade-section">
      <div class="flex w-full md:w-1/5">
      <ul class="flex-colBox text-center text-[#3F5D45] text-4xl md:text-2xl font-bold">
      <li class="w-full bg-[#3F5D45] text-white py-5">甜點類別</li>
      <li><button class="w-full py-10 md:py-5 border-b-1 border-x-1 border-gray-200 hover:bg-[#EAF0ED]">所有甜點（48）</button></li>
      <li><button class="w-full py-10 md:py-5 border-b-1 border-x-1 border-gray-200 hover:bg-[#EAF0ED]">本日精選（10）</button></li>
      <li><button class="w-full py-10 md:py-5 border-b-1 border-x-1 border-gray-200 hover:bg-[#EAF0ED]">人氣推薦（26）</button></li>
      <li><button class="w-full py-10 md:py-5 border-b-1 border-x-1 border-gray-200 hover:bg-[#EAF0ED]">新品上市（12）</button></li>
      </ul>
      </div>
        <product-item class="flex w-full px-10 md:px-0 md:w-4/5" itemInfo='${JSON.stringify(
          shopInfo
        )}'></product-item>
      </section>
      <my-pagination class="max-w-content w-full fade-section"></my-pagination>
    </main>
    `;
  }
}

export default Products;
