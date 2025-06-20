class Login extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <ul class="grid grid-cols-1 md:grid-cols-2 items-center max-w-content text-center">
      <li class="flex-colBox text-[#8DA291] flex-boxCenter bg-[#3F5D45]">
        <form class="space-y-6 w-full">
            <fieldset class="space-y-6 text-2xl p-10">
              <legend class="text-5xl font-bold block  w-full">會員登入</legend>
              <div class="flex-rowBox bg-[#EAF0ED] p-10">
                <label
                  for="email"
                  class="block"
                  ><img src="src/assets/images/ic-person.svg" alt="email"></label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-input w-full"
                  placeholder="電子信箱/手機號碼"
                  required
                />
              </div>
              <div class="flex-rowBox bg-[#EAF0ED] p-10">
                <label
                  for="password"
                  class="block"
                  ><img src="src/assets/images/ic-key.svg" alt="password"></label
                >
                <input
                  type="text"
                  id="password"
                  name="password"
                  class="form-input w-full"
                  placeholder="請輸入使用者密碼"
                  required
                />
              </div>

              <div class="flex items-center space-x-2 mt-6">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  class="form-checkbox h-5 w-5 text-blue-600 rounded"
                  required
                />
                <label for="checkbox" class="text-sm text-gray-600">
                  我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。
                </label>
              </div>
            </fieldset>
            <button
              type="submit"
              class="w-full bg-[#FFE180] hover:bg-blue-700 text-[#3F5D45] font-medium py-3 px-6 transition-colors"
            >
              確認送出
            </button>
          </form>
      </li>
      <li class="flex-colBox text-[#8DA291] flex-boxCenter bg-[#EAF0ED]">
        <h1 class="hidden md:block text-3xl">—— 連結社群帳號 ——</h1>
        <img src="src/assets/images/ic-facebook-logotype@2x.png" alt="" />
        <img src="src/assets/images/ic-google@2x.png" alt="" />
        <img src="src/assets/images/ic-yahoo@2x.png" alt="" />
      </li>
      
    </ul>
    `;
  }
}

export default Login;
