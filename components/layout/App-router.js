// components/app-router.js
class AppRouter extends HTMLElement {
  constructor() {
    super();
    this.currentPage = "home";
    this.routes = {
      home: "home-page",
      projects: "projects-page",
      about: "about-page",
    };
  }

  connectedCallback() {
    this.render();
    window.addEventListener("hashchange", () => this.updateRoute());
    window.addEventListener("load", () => this.updateRoute());

    // Navegación programática
    window.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(page) {
    window.location.hash = page;
  }

  updateRoute() {
    const hash = window.location.hash.slice(1) || "home";
    this.currentPage = hash;

    if (!this.routes[this.currentPage]) {
      this.currentPage = "home";
    }
    window.scrollTo(0, 0);
    this.render();

    window.dispatchEvent(
      new CustomEvent("route-changed", {
        detail: { page: this.currentPage },
      })
    );
  }

  render() {
    const pageElement = this.routes[this.currentPage];
    this.innerHTML = `<${pageElement}></${pageElement}>`;
  }
}

customElements.define("app-router", AppRouter);
