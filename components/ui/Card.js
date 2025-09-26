class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
      .card {
        position: relative;
        border-radius: 1rem;
        border: 1.5px solid rgba(var(--color-white), 0.2);
        background-color: rgb(var(--color-white), 4%);
        -webkit-backdrop-filter: blur(10px);
                backdrop-filter: blur(10px);
        height: 100%;
        min-height: 14rem;
        transition: all 0.6s ease;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${Card.styles}</style>
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("card-component", Card);
