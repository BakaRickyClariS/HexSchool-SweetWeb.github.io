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
            <a class="py-5 gsap-btn" href="#/" alt="logo">
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
              <a id="menuToggle" class="px-5 py-5 gsap-btn">
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
                  class="h-full py-5 block w-full gsap-btn"
                  href="#/"
                  alt="home"
                  >首頁</a
                >
              </li>
              <li class="w-full h-full">
                <a
                  class="h-full py-5 block w-full gsap-btn"
                  href="#/products"
                  alt="products"
                  >甜點</a
                >
              </li>
              <li class="w-full h-full">
                <a
                  class="h-full py-5 block w-full gsap-btn"
                  href="#/login"
                  alt="login"
                  >登入</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="flex">
          <a class="p-5 gsap-btn" href="#/cart" alt="cart"
            ><img
              class="w-[48px] h-auto md:max-w-[24px]"
              src="src/assets/images/shopping_cart.png"
              alt=""
          /></a>
        </div>
      </nav>
    </header>
    <div id="hiddenBar"></div>
    `;
    this.handleResize = this.handleResize.bind(this);
    window.addEventListener("resize", this.handleResize);
    this.querySelector("#menuToggle").addEventListener("click", () =>
      this.toggleMenu()
    );
    this.btnEffect();
  }
  handleResize() {
    const hiddenBar = this.querySelector("#hiddenBar");
    // 當視窗寬度 >= 768px（Tailwind的md斷點）時自動關閉
    if (window.innerWidth >= 768 && hiddenBar.innerHTML.trim() !== "") {
      this.closeMenu();
    }
  }

  // 提取關閉菜單邏輯
  closeMenu() {
    const hiddenBar = this.querySelector("#hiddenBar");
    if (!hiddenBar || hiddenBar.innerHTML.trim() === "") return;

    gsap.to(hiddenBar.querySelector("ul"), {
      y: -40,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        hiddenBar.innerHTML = "";
      },
    });
  }
  toggleMenu() {
    const hiddenBar = this.querySelector("#hiddenBar");
    if (!hiddenBar) return;

    if (hiddenBar.innerHTML.trim() === "") {
      hiddenBar.innerHTML = `
            <ul
              class="flex-colBox items-center text-center text-[#3F5D45] font-black text-lg w-full"
            >
              <li class="w-full h-full">
                <a
                  class="h-full py-5 block w-full hover:text-white hover:bg-[#3F5D45]"
                  href="#/"
                  alt="home"
                  >首頁</a
                >
              </li>
              <li class="w-full h-full border-b-1 border-t-1 border-gray-200">
                <a
                  class="h-full py-5 block w-full hover:text-white hover:bg-[#3F5D45]"
                  href="#/products"
                  alt="products"
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
            </ul>`; // 你的菜單HTML
      gsap.from(hiddenBar.querySelector("ul"), {
        y: -40,
        opacity: 0,
        duration: 0.5,
      });
    } else {
      this.closeMenu();
    }
  }

  // 元件移除時清理事件監聽
  disconnectedCallback() {
    window.removeEventListener("resize", this.handleResize);
  }

  btnEffect() {
    const group = document.querySelector("nav");

    group.addEventListener("mouseover", function (event) {
      const btn = event.target.closest(".gsap-btn");
      if (btn && group.contains(btn)) {
        gsap.to(btn, {
          y: -10,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    });

    group.addEventListener("mouseout", function (event) {
      const btn = event.target.closest(".gsap-btn");
      if (btn && group.contains(btn)) {
        gsap.to(btn, {
          y: 0,
          opacity: 0.7,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    });

    // 點擊動畫（彈跳 scale 效果）
    group.addEventListener("click", function (event) {
      const btn = event.target.closest(".gsap-btn");
      if (btn && group.contains(btn)) {
        gsap.fromTo(
          btn,
          { scale: 0.9 },
          { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" }
        );
      }
    });
  }
}

export default Navbar;
