import "../ui/Card.js";
import "../ui/Button-icon.js";
import "../ui/Chip.js";
import "../sections/home/Header.js";
import "../sections/home/Content.js";

class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <home-header></home-header>
      <home-content></home-content>
    `;
  }
}

customElements.define("home-page", HomePage);
