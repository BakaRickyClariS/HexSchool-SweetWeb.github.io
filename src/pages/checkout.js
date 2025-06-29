import SimpleRouter from "../components/Router.js";

class CheckoutTransport extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <form class="w-full">
          <fieldset class="text-2xl p-10 space-y-6">
            <div class="grid grid-cols-2 gap-10">
              <h1 class="text-5xl text-white font-bold block w-full py-5">
                運送
              </h1>
              <div class="flex-rowBox items-center">
                <div
                  class="w-7 h-7 aspect-square rounded-full border-2 border-white flex items-center justify-center"
                >
                  <div
                    class="w-5 h-5 rounded-full border-2 border-white bg-white"
                  ></div>
                </div>
                <div class="w-full border-t-2 border-[#8DA291]"></div>
                <div
                  class="w-7 h-7 aspect-square rounded-full border-2 border-[#8DA291] flex items-center justify-center"
                >
                  <div class="w-5 h-5 rounded-full bg-[#3F5D45]"></div>
                </div>
                <div class="w-full border-t-2 border-[#8DA291]"></div>
                <div
                  class="w-7 h-7 aspect-square rounded-full border-2 border-[#8DA291] flex items-center justify-center"
                >
                  <div class="w-5 h-5 rounded-full bg-[#3F5D45]"></div>
                </div>
              </div>
            </div>

            <div class="flex-rowBox gap-5">
              <div class="flex flex-col w-1/2 gap-5">
                <label for="firstName" class="block text-white">姓氏</label>
                <input
                  type="name"
                  id="firstName"
                  name="firstName"
                  class="w-full bg-[#EAF0ED] p-5"
                  placeholder="王"
                  required
                />
              </div>
              <div class="flex flex-col w-1/2 gap-5">
                <label for="lastName" class="block text-white">名字</label>
                <input
                  type="name"
                  id="lastName"
                  name="lastName"
                  class="w-full bg-[#EAF0ED] p-5"
                  placeholder="小明"
                  required
                />
              </div>
            </div>
            <div class="flex-colBox gap-5">
              <label for="tel" class="block text-white">電話</label>
              <input
                type="text"
                id="tel"
                name="tel"
                class="w-full bg-[#EAF0ED] p-5"
                placeholder="0912-345-678"
                required
              />
            </div>
            <div class="flex-colBox gap-5">
              <label for="city" class="block text-white">地址</label>
              <div class="flex-rowBox items-center gap-5">
                <select id="city" name="city" class="w-1/2 bg-[#EAF0ED] p-5">
                  <option value="">請選擇縣市</option>
                  <option value="台北市">台北市</option>
                  <option value="台中市">台中市</option>
                  <option value="高雄市">高雄市</option>
                </select>
                <select
                  id="district"
                  name="district"
                  class="w-1/2 bg-[#EAF0ED] p-5"
                >
                  <option value="">請先選擇縣市</option>
                </select>
              </div>
              <input
                type="text"
                id="address"
                name="address"
                class="w-full bg-[#EAF0ED] p-5"
                placeholder="幸福路 520 號"
              />
            </div>
          </fieldset>
          <button type="submit" class="flex w-full">
            <a
              class="block w-full btn-y text-2xl py-6 px-6"
              href="#/checkout/payment"
              >下一步</a
            >
          </button>
        </form>
    `;
  }
}
class CheckoutPayment extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <form class="w-full">
          <fieldset class="text-2xl p-10 space-y-6">
            <div class="grid grid-cols-2 gap-10">
              <h1 class="text-5xl text-white font-bold block w-full py-5">
                付款
              </h1>
              <div class="flex-rowBox items-center">
                <div
                  class="w-7 h-7 aspect-square rounded-full border-white flex items-center justify-center"
                >
                  <div
                    class="w-5 h-5 rounded-full border-2 border-white bg-white"
                  >
                    <img
                      class="w-[24px]"
                      src="./src/assets/images/ic-check.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="w-full border-t-2 border-white"></div>
                <div
                  class="w-7 h-7 aspect-square rounded-full border-2 border-white flex items-center justify-center"
                >
                  <div
                    class="w-5 h-5 rounded-full border-2 border-white bg-white"
                  ></div>
                </div>
                <div class="w-full border-t-2 border-[#8DA291]"></div>
                <div
                  class="w-7 h-7 aspect-square rounded-full border-2 border-[#8DA291] flex items-center justify-center"
                >
                  <div class="w-5 h-5 rounded-full bg-[#3F5D45]"></div>
                </div>
              </div>
            </div>
            <div class="flex-colBox gap-5">
              <label for="card" class="block text-white">信用卡卡號</label>
              <div class="flex-rowBox bg-[#EAF0ED] p-5 items-center">
                <input
                  type="text"
                  id="card"
                  name="card"
                  class="w-full"
                  placeholder="9012-3456-7890-1234"
                  required
                />
                <img
                  class="w-10"
                  src="./src/assets/images/ic-creditCard.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="flex-rowBox">
              <div class="flex flex-col w-full gap-5">
                <label for="firstName" class="block text-white"
                  >持卡人姓名</label
                >
                <div class="flex-rowBox gap-5">
                  <input
                    type="name"
                    id="firstName"
                    name="firstName"
                    class="w-full bg-[#EAF0ED] p-5"
                    placeholder="王"
                    required
                  />
                  <input
                    type="name"
                    id="lastName"
                    name="lastName"
                    class="w-full bg-[#EAF0ED] p-5"
                    placeholder="小明"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="flex-colBox gap-5">
              <label for="date" class="block text-white">有效期限</label>
              <div id="date" class="flex-rowBox items-center gap-5">
                <select
                  id="mounth"
                  name="mounth"
                  class="w-1/2 bg-[#EAF0ED] p-5"
                >
                  <option value="" disabled>月</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select id="year" name="year" class="w-1/2 bg-[#EAF0ED] p-5">
                  <option value="" disabled>年</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>
            </div>
            <div class="flex-rowBox gap-5">
              <div class="flex flex-col w-1/2 gap-5">
                <label for="securityCode" class="block text-white"
                  >背面末三碼</label
                >
                <input
                  type="name"
                  id="securityCode"
                  name="securityCode"
                  class="w-full bg-[#EAF0ED] p-5"
                  placeholder="123"
                  required
                />
              </div>
            </div>
          </fieldset>
          <button type="submit" class="flex w-full">
            <a
              class="block w-full btn-y text-2xl py-6 px-6"
              href="#/checkout/invoice"
              >下一步</a
            >
          </button>
        </form>
    `;
  }
}
class CheckoutInvoice extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <form class="w-full">
          <fieldset class="text-2xl p-10 space-y-6">
            <div class="grid grid-cols-2 gap-10">
              <h1 class="text-5xl text-white font-bold block w-full py-5">
                付款
              </h1>
              <div class="flex-rowBox items-center">
                <div
                  class="w-7 h-7 aspect-square rounded-full border-white flex items-center justify-center"
                >
                  <div
                    class="w-5 h-5 rounded-full border-2 border-white bg-white"
                  >
                    <img
                      class="w-[24px]"
                      src="./src/assets/images/ic-check.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="w-full border-t-2 border-white"></div>
                <div
                  class="w-7 h-7 aspect-square rounded-full border-white flex items-center justify-center"
                >
                  <div
                    class="w-5 h-5 rounded-full border-2 border-white bg-white"
                  >
                    <img
                      class="w-[24px]"
                      src="./src/assets/images/ic-check.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="w-full border-t-2 border-white"></div>
                <div
                  class="w-7 h-7 aspect-square rounded-full border-2 border-white flex items-center justify-center"
                >
                  <div
                    class="w-5 h-5 rounded-full border-2 border-white bg-white"
                  ></div>
                </div>
              </div>
            </div>
            <div
            id="invoiceChange"
              class="flex w-full divide-x-3 divide-[#EAF0ED] text-3xl border-3 border-[#EAF0ED]"
            >
              <div class="flex w-full">
                <input
                  type="radio"
                  id="electronic"
                  name="invoice"
                  class="peer/electronic hidden"
                  value="電子發票"
                  checked
                />
                <label
                  for="electronic"
                  class="w-full bg-[#EAF0ED] font-bold text-[#3F5D45] p-5 text-center cursor-pointer peer-checked/electronic:bg-[#EAF0ED] peer-checked/electronic:text-[#3F5D45] peer-checked/electronic:font-bold bg-transparent text-[#EAF0ED]"
                >
                  電子發票
                </label>

                <input
                  type="radio"
                  id="mail"
                  name="invoice"
                  class="peer/mail hidden"
                  value="郵寄發票"
                />
                <label
                  for="mail"
                  class="w-full bg-transparent font-bold text-[#EAF0ED] p-5 text-center cursor-pointer peer-checked/mail:bg-[#EAF0ED] peer-checked/mail:text-[#3F5D45]"
                >
                  郵寄發票
                </label>
              </div>
            </div>
            <div id="invoiceType" class="flex-colBox gap-5">
              <label for="email" class="block text-white">電子郵件信箱</label>
              <input
                type="text"
                id="email"
                name="email"
                class="w-full bg-[#EAF0ED] p-5"
                placeholder="example@email.com"
                required
              />
            </div>
            <div class="flex-colBox gap-5">
              <label for="taxID" class="block text-white"
                >統一編號（選填）</label
              >
              <input
                type="text"
                id="taxID"
                name="taxID"
                class="w-full bg-[#EAF0ED] p-5"
                placeholder="12345678"
                required
              />
            </div>
          </fieldset>
          <button type="submit" class="flex w-full">
            <a
              class="block w-full btn-y text-2xl py-6 px-6"
              href="#/checkout/complete"
              >確認結帳</a
            >
          </button>
        </form>
    `;
    console.log(document.querySelector("#invoiceChange"));

    this.querySelectorAll('input[name="invoice"]').forEach((input) => {
      input.addEventListener("change", (e) => {
        if (e.target.value === "電子發票") {
          document.querySelector("#invoiceType").innerHTML = `
        <label for="email" class="block text-white">電子郵件信箱</label>
              <input
                type="text"
                id="email"
                name="email"
                class="w-full bg-[#EAF0ED] p-5"
                placeholder="example@email.com"
                required
              />
        `;
        } else if (e.target.value === "郵寄發票") {
          document.querySelector("#invoiceType").innerHTML = `
        <label
                for="city"
                class="flex justify-between items-center text-white"
                >地址
                <div class="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    class="h-5 w-5"
                    required
                  />
                  <label for="checkbox" class="hidden md:block text-white text-sm">
                    同運送地址
                  </label>
                </div>
              </label>
              <div class="flex-rowBox items-center gap-5">
                <select id="city" name="city" class="w-1/2 bg-[#EAF0ED] p-5">
                  <option value="" disabled>請選擇縣市</option>
                  <option value="台北市">台北市</option>
                  <option value="台中市">台中市</option>
                  <option value="高雄市">高雄市</option>
                </select>
                <select
                  id="district"
                  name="district"
                  class="w-1/2 bg-[#EAF0ED] p-5"
                >
                  <option value="" disabled>請先選擇縣市</option>
                </select>
              </div>
              <input
                type="text"
                id="address"
                name="address"
                class="w-full bg-[#EAF0ED] p-5"
                placeholder="幸福路 520 號"
              />
        `;
        }
      });
    });
  }
}
class CheckoutComplete extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <section
      class="flex-colBox flex-boxCenter max-w-screen-xl mx-auto overflow-hidden h-[460px] relative bg-[url('https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c5a2cf31c693f5c15fb08135bf1adf2&auto=format&fit=crop&w=2160&q=80')] bg-cover bg-center bg-no-repeat gap-10 md:mb-10 fade-section"
    >
      <div class="flex-rowBox items-center max-w-[240px] fade-section">
        <div
          class="w-7 h-7 aspect-square rounded-full border-[#3F5D45] flex items-center justify-center"
        >
          <div
            class="w-5 h-5 rounded-full border-2 border-[#3F5D45] bg-[#3F5D45]"
          >
            <img
              class="w-[24px] grayscale brightness-500"
              src="./src/assets/images/ic-check.svg"
              alt=""
            />
          </div>
        </div>
        <div class="w-full border-t-2 border-[#3F5D45]"></div>
        <div
          class="w-7 h-7 aspect-square rounded-full border-[#3F5D45] flex items-center justify-center"
        >
          <div
            class="w-5 h-5 rounded-full border-2 border-[#3F5D45] bg-[#3F5D45]"
          >
            <img
              class="w-[24px] grayscale brightness-500"
              src="./src/assets/images/ic-check.svg"
              alt=""
            />
          </div>
        </div>
        <div class="w-full border-t-2 border-[#3F5D45]"></div>
        <div
          class="w-7 h-7 aspect-square rounded-full border-[#3F5D45] flex items-center justify-center"
        >
          <div
            class="w-5 h-5 rounded-full border-2 border-[#3F5D45] bg-[#3F5D45]"
          >
            <img
              class="w-[24px] grayscale brightness-500"
              src="./src/assets/images/ic-check.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <h1 class="block text-center w-full custom-title text-6xl poem-line">付款成功</h1>
      <a
        href="#/products"
        class="flex w-full py-5 text-3xl btn-y md:w-[300px] justify-center absolute bottom-0 md:static block-item fade-section"
        >繼續逛逛</a
      >
    </section>
    `;
  }
}

customElements.define("checkout-transport", CheckoutTransport);
customElements.define("checkout-payment", CheckoutPayment);
customElements.define("checkout-invoice", CheckoutInvoice);
customElements.define("checkout-complete", CheckoutComplete);

class Checkout extends HTMLElement {
  constructor() {
    super();
  }

  renderContent() {
    const cartItems = [
      {
        name: "焦糖馬卡龍",
        price: 900,
        quantity: 2,
        img: "https://images.unsplash.com/photo-1504855328839-2f4baf9e0fd7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db0c8e5539456faeca0e49c79e2ccb16&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "焦糖馬卡龍",
        price: 900,
        quantity: 2,
        img: "https://images.unsplash.com/photo-1504855328839-2f4baf9e0fd7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db0c8e5539456faeca0e49c79e2ccb16&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "焦糖馬卡龍",
        price: 900,
        quantity: 2,
        img: "https://images.unsplash.com/photo-1504855328839-2f4baf9e0fd7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db0c8e5539456faeca0e49c79e2ccb16&auto=format&fit=crop&w=800&q=60",
      },
    ];
    const transportFee = 300;
    const cartTotal = cartItems.reduce((total, item, i) => {
      cartItems[i].total = item.price * item.quantity;
      return total + item.total;
    }, 0);

    const currentHash = window.location.hash;
    if (currentHash === "#/checkout/complete") {
      this.innerHTML = `<checkout-complete></checkout-complete>`;
      return;
    } else if (currentHash === "#/checkout") {
      this.innerHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center">
          <!-- 模糊背景層 -->
          <div class="absolute inset-0 bg-opacity-70 backdrop-blur-sm"></div>
          <!-- 清晰的 spinner（在模糊層之上） -->
          <div role="status" class="absolute z-10">
            <svg aria-hidden="true" class="w-16 h-16 text-[#3F5D45] animate-spin fill-[#EAF0ED]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      `;
      // 1秒後自動轉址
      setTimeout(() => {
        window.location.hash = "#/checkout/transport";
      }, 1000);
      return;
    }

    this.innerHTML = `
    <section
      class="flex-colBox md:flex-row items-start max-w-screen-lg mx-auto md:py-15 text-[#8DA291] gap-5 fade-section"
    >
      <div class="flex-colBox flex-boxCenter bg-[#3F5D45]">
        <div id="checkout-outlet" class="w-full"></div>
      </div>
      <div class="hidden md:flex flex-col w-1/2 items-start gap-5 fade-section">
        <div class="w-full border-1 border-gray-200">
          <h1
            class="text-3xl font-bold block w-full bg-[#EAF0ED] py-5 text-center font-bold"
          >
            訂單摘要
          </h1>
          <ul class="space-y-6 text-lg p-5">
            <li class="flex-rowBox justify-between w-full">
              <p>小計</p>
              <p>NT$ ${cartTotal}</p>
            </li>
            <li class="flex-rowBox justify-between w-full">
              <p>運費</p>
              <p>NT$ ${transportFee}</p>
            </li>
            <li class="flex-rowBox justify-between w-full font-bold text-2xl">
              <p>總計</p>
              <p>NT$ ${cartTotal + transportFee}</p>
            </li>
          </ul>
        </div>
        <div class="w-full border-1 border-gray-200">
          <h1
            class="text-3xl font-bold block w-full bg-[#EAF0ED] py-5 text-center font-bold"
          >
            購物清單
          </h1>
          <ul class="space-y-6 text-lg p-5">
          ${cartItems.map(
            (item) => `
            <li class="grid grid-cols-2 justify-between w-full gap-5">
              <img
                class="flex w-full aspect-video object-cover"
                src="${item.img}"
                alt=""
              />
              <div class="flex-colBox justify-center">
                <p>${item.name}（${item.quantity}）</p>
                <p class="font-bold text-2xl">NT$ ${item.total}</p>
              </div>
            </li>
            `
          )}
          </ul>
        </div>
      </div>
    </section>
    `;
    this.checkoutRouter = new SimpleRouter("checkout-outlet");
    this.checkoutRouter.addRoute("/checkout/transport", "checkout-transport");
    this.checkoutRouter.addRoute("/checkout/payment", "checkout-payment");
    this.checkoutRouter.addRoute("/checkout/invoice", "checkout-invoice");
    this.checkoutRouter.addRoute("/checkout/complete", "checkout-complete");
    this.checkoutRouter.resolve();
  }
  connectedCallback() {
    window.addEventListener("hashchange", () => this.renderContent());
    this.renderContent();
  }
}

export default Checkout;
