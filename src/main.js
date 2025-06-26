import SimpleRouter from "./components/Router.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/home.js";
import Products from "./pages/products.js";
import Login from "./pages/login.js";
import Cart from "./pages/cart.js";
import Checkout from "./pages/checkout.js";

// 組件註冊
customElements.define("my-navbar", Navbar);
customElements.define("my-footer", Footer);

// 頁面註冊
customElements.define("my-home", Home);
customElements.define("my-products", Products);
customElements.define("my-login", Login);
customElements.define("my-cart", Cart);
customElements.define("my-checkout", Checkout);

// 路由初始化
const router = new SimpleRouter("outlet");
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
