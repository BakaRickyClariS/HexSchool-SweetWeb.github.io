class Pagination extends HTMLElement {
  constructor() {
    super();
    this.currentPage = 1;
  }
  connectedCallback() {
    this.render();
    this.bindEvents();
    this.update(1);
  }
  render() {
    this.innerHTML = `
    <section class="flex">
      <div class="flex mx-auto w-full">
        <div class="flex w-full pb-10">
          <ul
            id="pagination"
            class="flex flex-row items-center justify-center md:justify-end w-full text-center text-xl py-10"
          >
            <li>
              <a
                class="hover:bg-[#3F5D45] hover:text-white active:bg-[#3F5D45] active:text-white"
                href="#prev"
                data-page="prev"
                ><img class="w-full py-5 px-6 border border-[#EAF0ED]" src="src/assets/images/arrow_left.png" alt=""></a
              >
            </li>
            ${Array.from({ length: 3 })
              .map(
                (_, index) => `
              <li>
                <a
                  class="border border-[#EAF0ED] py-5 px-6 hover:bg-[#3F5D45] hover:text-white focus:bg-[#3F5D45] focus:text-white"
                  id="page${index + 1}"
                  href="#${index + 1}"
                  data-page="${index + 1}"
                  >${index + 1}</a
                >
              </li>
            `
              )
              .join("")}
            <li>
              <a
                class="hover:bg-[#3F5D45] hover:text-white active:bg-[#3F5D45] active:text-white"
                href="#next"
                data-page="next"
                ><img class="w-full py-5 px-6 border border-[#EAF0ED]" src="src/assets/images/arrow_right.png" alt=""></a
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
    `;
  }
  bindEvents() {
    this.querySelectorAll("#pagination a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = link.getAttribute("data-page");
        this.update(isNaN(page) ? page : Number(page));
      });
    });
  }

  update(page) {
    if (page === "prev" && this.currentPage > 1) {
      this.currentPage--;
    } else if (page === "next" && this.currentPage < 5) {
      this.currentPage++;
    } else if (typeof page === "number") {
      this.currentPage = page;
    }

    const defaultPage = this.querySelector("#page1");
    if (page === 1) {
      defaultPage.classList.add("text-white", "bg-[#3F5D45]");
    } else {
      defaultPage.classList.remove("text-white", "bg-[#3F5D45]");
    }
    this.querySelectorAll("#pagination li a").forEach((link) => {
      link.classList.remove("bg-[#3F5D45]", "text-white");
      if (link.textContent.trim() == this.currentPage) {
        link.classList.add("bg-[#3F5D45]", "text-white");
      }
    });
  }
}

customElements.define("my-pagination", Pagination);

export default Pagination;
