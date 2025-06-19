class Login extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <ul class="grid md:grid-cols-2 max-w-content flex-wrap h-full">
      <li class="flex w-full text-white flex-boxCenter bg-[#3F5D45]">
        <h1 class="text-3xl">會員登入</h1>
      </li>
      <li class="flex-colBox text-[#8DA291] flex-boxCenter bg-[#EAF0ED]">
        <h1 class="text-3xl block">—— 連結社群帳號tt ——</h1>
        <img src="src/assets/images/ic-facebook-logotype@2x.png" alt="" />
        <img src="src/assets/images/ic-google@2x.png" alt="" />
        <img src="src/assets/images/ic-yahoo@2x.png" alt="" />
      </li>
      <li class="flex w-full text-white flex-boxCenter bg-[#3F5D45]">
        <h1 class="text-3xl">會員登入</h1>
      </li>
    </ul>
    `;
  }
}

export default Login;
