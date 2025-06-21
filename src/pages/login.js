class Login extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <ul class="grid grid-cols-1 md:grid-cols-2 items-center max-w-screen-lg mx-auto text-center py-15">
    <li class="flex-colBox text-[#8DA291] flex-boxCenter bg-[#3F5D45] md:hidden"><h1 class="text-5xl text-white font-bold block w-full py-5">會員登入</h1></li>
      
      <li class="flex-rowBox md:flex-col text-[#8DA291] flex-boxCenter bg-[#EAF0ED] p-10 md:gap-5 divide-x-1 divide-gray-200 md:order-3">
        <h1 class="hidden md:block text-3xl p-5">—— 連結社群帳號 ——</h1>
        <button class="p-5 flex flex-boxCenter bg-white w-full h-[80px] hover:invert"><img class=" w-full flex object-cover md:w-1/2" src="src/assets/images/ic-facebook-logotype@2x.png" alt="facebook" /></button>
        <button class="p-5 flex flex-boxCenter bg-white w-full h-[80px] hover:invert"><img class=" w-full flex object-cover md:w-1/2" src="src/assets/images/ic-google@2x.png" alt="google" /></button>
        <button class="p-5 flex flex-boxCenter bg-white w-full h-[80px] hover:invert"><img class=" w-full flex object-cover md:w-1/2" src="src/assets/images/ic-yahoo@2x.png" alt="yahoo" /></button>
      </li>
      <li class="flex-colBox text-[#8DA291] flex-boxCenter bg-[#3F5D45] md:order-2">
        <form class="space-y-6 w-full">
            <fieldset class="space-y-6 text-2xl p-10">
              <h1 class="text-5xl text-white font-bold hidden w-full py-5 md:block">會員登入</h1>
              <div class="flex-rowBox bg-[#EAF0ED] p-5 items-center gap-5">
                <label
                  for="email"
                  class="block"
                  ><img src="src/assets/images/ic-person.svg" alt="email"></label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full"
                  placeholder="電子信箱/手機號碼"
                  required
                />
              </div>
              <div class="flex-rowBox bg-[#EAF0ED] p-5 items-center gap-5">
                <label
                  for="password"
                  class="block"
                  ><img src="src/assets/images/ic-key.svg" alt="password"></label
                >
                <input
                  type="text"
                  id="password"
                  name="password"
                  class="w-full"
                  placeholder="請輸入使用者密碼"
                  required
                />
              </div>

              <div class="flex items-center space-x-2 mt-6">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  class="h-5 w-5"
                  required
                />
                <label for="checkbox" class="text-white">
                  記住我
                </label>
              </div>
            </fieldset>
            <button
              type="submit"
              class="w-full bg-[#FFE180] hover:bg-[#EAF0ED] text-[#3F5D45] hover:text-white text-2xl font-bold py-6 px-6 transition-colors"
            >
              登入帳號
            </button>
          </form>
      </li>
    </ul>
    `;
  }
}

export default Login;
