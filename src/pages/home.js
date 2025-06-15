class Home extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <home-main></home-main>
    <home-intro></home-intro>
    <home-classic></home-classic>
    <home-design></home-design>
    <home-recommend></home-recommend>
    <home-contact></home-contact>
    `;
  }
}

export default Home;
