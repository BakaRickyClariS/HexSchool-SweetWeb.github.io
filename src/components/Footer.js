class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer class="flex bg-[#EAF0ED]">
      <div class="flex flex-col mx-auto w-full">
        <section class="bg-[#3F5D45] w-full">
          <div
            class="max-w-screen-xl flex flex-col md:flex-row md:justify-between items-center px-7 mx-auto md:px-10 w-full pb-7 md:py-3"
          >
            <div
              class="flex flex-row justify-center md:justify-start items-center w-full py-7"
            >
              <img
                class="w-[48px] pr-3"
                src="src/assets/images/logo-light.svg"
                alt=""
              />
              <h1 class="text-2xl text-white ">訂閱你我的甜蜜郵件</h1>
            </div>
            <div
              class="flex flex-row justify-between bg-white w-full max-w-[400px]"
            >
              <a class="p-5" href=""
                ><img
                  class="w-[24px]"
                  src="src/assets/images/mail-24px.png"
                  alt=""
              /></a>
              <a class="p-5 bg-[#FFE180]" href=""
                ><img
                  class="w-[24px] bg-[#FFE180]"
                  src="src/assets/images/arrow_forward-24px.png"
                  alt=""
              /></a>
            </div>
          </div>
        </section>
        <section
          class="flex flex-col text-[#3F5D45] max-w-screen-xl px-7 mx-auto md:px-10 w-full"
        >
          <div class="flex flex-row justify-between mx-auto w-full py-10">
            <div class="flex flex-col justify-between">
              <img
                class="w-[200px] pb-10"
                src="src/assets/images/logotype-sm-dark.svg"
                alt=""
              />
              <p>
                07-1234-5678 <br />sweetaste@email.com 800
                <br />高雄市新興區幸福路 520 號
              </p>
            </div>
            <div class="hidden md:flex">
              <h1
                class="[writing-mode:vertical-rl] [text-orientation:upright] font-bold text-2xl leading-[40px]"
                style="font-family: 'Noto Serif TC', serif"
              >
                <span class="">今天是個</span>||<br />
                &nbsp;<span class="">吃甜點的好日子</span>
              </h1>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:justify-between">
            <ul class="flex flex-row gap-3">
              <li>
                <a href=""
                  ><img
                    class="w-[36px]"
                    src="src/assets/images/ic-line@.svg"
                    alt=""
                /></a>
              </li>
              <li>
                <a href=""
                  ><img
                    class="w-[36px]"
                    src="src/assets/images/ic-facebook.svg"
                    alt=""
                /></a>
              </li>
            </ul>
            <div class="py-5 flex">
              <p class="flex text-base">
                © 2018 Sweetaste* All Rights Reserved
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
    `;
  }
}

export default Footer;
