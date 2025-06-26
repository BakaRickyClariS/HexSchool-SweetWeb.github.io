import ProductItem from "../components/ProductItem.js";
// 註冊插件
gsap.registerPlugin(ScrambleTextPlugin);
class Home extends HTMLElement {
  constructor() {
    super();
    const classifyInfo = [
      {
        title: "新品上市",
        img: "https://images.unsplash.com/photo-1499638472904-ea5c6178a300?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c27da96f7150c96a92ba8a53c8644761&auto=format&fit=crop&w=600&q=60",
        bgc: "home-title-g",
        link: "",
      },
      {
        title: "人氣推薦",
        img: "https://images.unsplash.com/photo-1504114133367-631ecd3db3ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b75e93d90cd88467ae5715becb431a26&auto=format&fit=crop&w=600&q=60",
        bgc: "home-title-g",
        link: "",
      },
      {
        title: "本日精選",
        img: "https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73ed228f25bdefd2291c242f6d390fca&auto=format&fit=crop&w=600&q=60",
        bgc: "home-title-y",
        link: "",
      },
    ];
    const vlText = [
      {
        lineA: "為什麼",
        lineB: "選擇了做甜點?",
        absolute: [
          "md:relative",
          'class="md:absolute md:top-[-240px] md:h-[400px] md:w-[400px]"',
        ],
      },
      {
        lineA: "為什麼",
        lineB: "一定要吃甜點?",
        absolute: [
          "md:relative",
          'class="md:absolute md:top-[-240px] md:h-[400px] md:w-[400px]"',
        ],
      },
      {
        lineA: "想吃甜點",
        lineB: "是不需要理由的。",
        absolute: ["", ""],
      },
    ];
    function vlTextHtml(textInfo, i) {
      return `<h1
              class="${textInfo[i].absolute[0]} vlText-md custom-title"
            >
              <span
                ${textInfo[i].absolute[1]}
              ><span class="poem-line">${textInfo[i].lineA}</span>
                <span class="pl-8 inline-flex md:pl-0 gap-2 md:gap-0">
                  <span class="custom-title-rotate">|</span>
                  <span class="custom-title-rotate"
                    >|</span
                  > </span
                ><br />&nbsp;<span class="poem-line">${textInfo[i].lineB}</span></span
              >
            </h1>`;
    }
    const articleContent = `
    青山依舊在，幾度夕陽紅。慣看秋月春風。<br />
              一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。<br />
              轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。<br />
              古今多少事，都付笑談中。<br />
              <br />
              是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。<br />
              樵江渚上，古今多少事，都付笑談中。
    `;
    const articleInfo = [
      {
        order: [3, 1, 2],
        img: "https://images.unsplash.com/photo-1519730722595-a5ff788dea4d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2712a33fe9b13532f0682ac4e1e749b8&auto=format&fit=crop&w=600&q=60",
      },
      {
        order: [2, 3, 1],
        img: "https://images.unsplash.com/photo-1501432781167-c0ccfd492297?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=621c4e9986fba1c4514dfdc30e095bd2&auto=format&fit=crop&w=600&q=60",
      },
    ];
    const shopInfo = [
      {
        name: "焦糖瑪卡龍",
        price: "450",
        img: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c376ffa487bcd258df29dc881b10703&auto=format&fit=crop&w=700&q=60",
      },
      {
        name: "焦糖瑪卡龍",
        price: "450",
        img: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c376ffa487bcd258df29dc881b10703&auto=format&fit=crop&w=700&q=60",
      },
      {
        name: "焦糖瑪卡龍",
        price: "450",
        img: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c376ffa487bcd258df29dc881b10703&auto=format&fit=crop&w=700&q=60",
      },
    ];
    this.innerHTML = `
    <main class="flex-colBox md:gap-[150px]">
      <section class="flex-colBox items-center md:pb-40">
        <div
          class="flex-colBox max-w-content md:px-10 relative flex-boxCenter"
        >
          <img
            src="https://images.unsplash.com/photo-1473256599800-b48c7c88cd7e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae0d68ab0db4ee79bdce92722b31112b&auto=format&fit=crop&w=2725&q=80"
            alt=""
          />
          <ul
            class="grid grid-rows-3 w-full vlText gap-[1px] min-h-[250px] md:gap-0 md:absolute md:bottom-[-250px] md:max-w-5xl text-4xl md:text-3xl md:min-h-[450px] font-bold md:p-10"
          >
          ${classifyInfo
            .map(
              (item) => `
            <li
              class="text-white flex flex-boxCenter"
              style="
                  background-image: url('${item.img}');
                  background-size: cover;
                  background-position: center;
                "
            >
              <a
                href="${item.link}"
                class="${item.bgc}"
              >
                ${item.title}
              </a>
            </li>
            `
            )
            .join("")}
          </ul>
        </div>
      </section>
      ${articleInfo
        .map(
          (item, i) => `<section class="bg-[#EAF0ED] md:max-h-[400px]">
        <ul
          class="flex-colBox md:flex-row flex-boxCenter max-w-content md:px-10 md:gap-0"
        >
          <li
            class="w-full py-10 md:py-0 md-order-${
              item.order[0]
            } text-center md:text-left md:flex md:justify-end md:mt-0 md:w-1/6 md:pl-5 bg-white"
          >
          ${vlTextHtml(vlText, i)}
          </li>
          <li class="w-full md-order-${item.order[1]} md:w-3/6">
            <img
              class="w-full md:max-w-[500px] aspect-square md:min-h-[400px]"
              src="${item.img}"
              alt=""
            />
          </li>
          <li class="md-order-${item.order[2]} w-full md:w-2/6">
            <p
              class="poem-line vlText-md md:leading-6 overflow-hidden md:ml-10 md:max-h-[400px] md:w-full md:max-w-[400px] text-[#8DA291] p-10 leading-15 md:leading-15 text-3xl md:text-lg"
            >
              ${articleContent}
            </p>
          </li>
        </ul>
      </section>`
        )
        .join("")}
      <section>
        <div
          class="w-full py-10 md:py-0 text-center md:text-left flex justify-center"
        >
          ${vlTextHtml(vlText, 2)}
        </div>
      </section>
      <section class="max-w-content">
        <product-item class="px-10 pb-20" itemInfo='${JSON.stringify(
          shopInfo
        )}'></product-item>
      </section>
    </main>
    `;

    this.textEffect();
  }
  textEffect() {
    // 對每行詩詞應用 scramble 效果
    gsap.to(".poem-line", {
      duration: 2,
      scrambleText: {
        text: "{original}", // 使用原始文字
        chars: "XO!@#$%^&*()_+-=[]{}|;':\",./<>?", // 自定義亂碼字符
        tweenLength: false,
      },
      stagger: 0.3, // 每行間隔 0.3 秒
      ease: "none",
    });

    // 先執行 scramble，再執行你的 Y 軸動畫
    gsap
      .timeline()
      .to(".poem-line", {
        duration: 1.5,
        scrambleText: { text: "{original}" },
        stagger: 0.2,
      })
      .from(
        ".poem-line",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=1"
      ); // 提前 1 秒開始 Y 軸動畫
  }
}

export default Home;
