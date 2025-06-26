import SimpleRouter from "./components/Router.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/home.js";
import Products from "./pages/products.js";
import Login from "./pages/login.js";
import Cart from "./pages/cart.js";
import Checkout from "./pages/checkout.js";

import Animation from "./components/function.js";

// 組件註冊
customElements.define("my-navbar", Navbar);
customElements.define("my-footer", Footer);

// 頁面註冊
customElements.define("my-home", Home);
customElements.define("my-products", Products);
customElements.define("my-login", Login);
customElements.define("my-cart", Cart);
customElements.define("my-checkout", Checkout);

let router;

document.addEventListener("DOMContentLoaded", () => {
  // 路由初始化
  router = new SimpleRouter("outlet");
  router.addRoute("/", "my-home");
  router.addRoute("/login", "my-login");
  router.addRoute("/products", "my-products");
  router.addRoute("/cart", "my-cart");
  router.addRoute("/checkout", "my-checkout");
  router.addRoute("/checkout/transport", "my-checkout");
  router.addRoute("/checkout/payment", "my-checkout");
  router.addRoute("/checkout/invoice", "my-checkout");
  router.addRoute("/checkout/complete", "my-checkout");
  router.resolve();
});

// 創建全局動畫實例
export const AnimatePage = new Animation();

// 動畫初始化函數
function initAnimations() {
  // 銷毀舊動畫
  AnimatePage.killAllAnimations();

  // 等待DOM更新後重新初始化
  setTimeout(() => {
    AnimatePage.scrambleText();
    AnimatePage.blockEffect();
    AnimatePage.initScrollAnimations();

    // 刷新ScrollTrigger以重新計算位置
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  }, 50);
}

// 監聽hash變化（路由變化） <== 這裡是重點
window.addEventListener("hashchange", () => {
  setTimeout(initAnimations, 10);
});

// 初始化首頁動畫
initAnimations();
