class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <header class="">
      <nav
        class="flex flex-row justify-center md:justify-between items-center max-w-screen-xl mx-auto py-5 md:px-10 w-full"
      ><div class="flex flex-row-reverse justify-between md:flex-row w-full">
        <div class="flex justify-center md:pl-0 md:pb-0 w-full">
          <a href="#/">
            
            <picture>
              <source
                media="(max-width: 768px)"
                srcset="src/assets/images/logotype-lg-dark.svg"
              />
              <img class="h-[48px]" src="src/assets/images/logo-all-dark.svg" alt="logo" />
            </picture>
          </a>
        </div>
        <div class="flex w-full items-center">
          <ul
            class="hidden md:flex flex-row justify-end text-center space-x-15 text-[#3F5D45] font-black text-lg w-full"
          >
            <li class="py-5">
              <a href="#/">首頁</a>
            </li>
            <li class="py-5">
              <a href="#/shop">甜點</a>
            </li>
            <li class="py-5">
              <a href="#/login">登入</a>
            </li>
          </ul>
          
        </div>
        </div>
        <div class="py-5 pl-20">
              <a href="#/cart"><img src="src/assets/images/shopping_cart.png" alt=""></a>
            </div>
      </nav>
    </header>
    `;
  }
}

export default Navbar;
