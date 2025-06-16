class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer class="flex bg-[#AA0601]">
      <div
        class="max-w-screen-xl text-white font-bold flex flex-col justify-center mx-auto w-full py-15 px-10"
      >
        <div class="flex flex-row justify-between border-b-2 border-white">
          <div class="md:pt-3">
            <div class="hidden md:flex">
              <ul
                class="flex items-center flex-row space-x-5 lg:space-x-10 xl:space-x-15"
              >
                <li><a href="#/">首頁</a></li>
                <li><a href="#/shop">系列鏡框</a></li>
                <li><a href="#/location">門市據點</a></li>
                <li><a href="#/blog">部落格</a></li>
                <li><a href="#/problem">常見問題</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="py-10 flex flex-col md:flex-row md:justify-between">
          <p class="flex text-3xl md:text-base">
            Copyright © 2020 Glasses.All rights reserved.
          </p>
          <div class="flex flex-col md:flex-row md:gap-15">
          <p class="flex text-3xl md:text-base">隱私權政策</p>
          <p class="flex text-3xl md:text-base">服務條款</p>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

export default Footer;
