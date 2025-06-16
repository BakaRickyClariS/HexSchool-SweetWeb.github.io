class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <header>
      <nav
        class="flex flex-row justify-center items-center max-w-screen-xl mx-auto md:px-10 w-full"
      >
        <div class="flex flex-row-reverse md:flex-row w-full">
          <div class="flex items-center justify-center md:justify-start w-full">
            <a class="py-5" href="#/" alt="logo">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcset="src/assets/images/logotype-lg-dark.svg"
                />
                <img
                  class="w-[200px] h-auto"
                  src="src/assets/images/logo-all-dark.svg"
                  alt="logo"
                />
              </picture>
            </a>
          </div>
          <div class="flex md:w-full items-center">
            <div class="flex items-center md:hidden">
              <a class="px-5 py-5" href="#/">
                <img
                  class="w-[48px] h-auto"
                  src="src/assets/images/dehaze-24px.png"
                  alt="hidden bar"
                />
              </a>
            </div>
            <ul
              class="hidden md:grid grid-cols-3 items-center text-center text-[#3F5D45] font-black text-lg pl-20 pr-10 w-full"
            >
              <li class="w-full h-full">
                <a
                  class="h-full py-5 block w-full hover:text-white hover:bg-[#3F5D45]"
                  href="#/"
                  alt="home"
                  >首頁</a
                >
              </li>
              <li class="w-full h-full">
                <a
                  class="h-full py-5 block w-full hover:text-white hover:bg-[#3F5D45]"
                  href="#/shop"
                  alt="shop"
                  >甜點</a
                >
              </li>
              <li class="w-full h-full">
                <a
                  class="h-full py-5 block w-full hover:text-white hover:bg-[#3F5D45]"
                  href="#/login"
                  alt="login"
                  >登入</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="flex">
          <a class="px-5 py-5 md:px-0" href="#/cart" alt="cart"
            ><img
              class="w-[48px] h-auto md:max-w-[24px]"
              src="src/assets/images/shopping_cart.png"
              alt=""
          /></a>
        </div>
      </nav>
    </header>
    `;
  }
}

export default Navbar;
