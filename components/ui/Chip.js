class Chip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  observedAttributes() {
    return ["variant"];
  }

  static get styles() {
    return /* css */ `
      .chip {
        --chip-bg: transparent;

        display: flex;
        align-items: center;
        -moz-column-gap: 0.5rem;
            column-gap: 0.5rem;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        border: 1px solid rgb(var(--color-white), 0.2);
        border-radius: 3rem;
        padding: 0.25rem 1rem;
        color: rgb(var(--color-white));
        font-size: 0.9em;
        background-color: var(--chip-bg);
      }

      .chip[variant="title"] {
        --chip-bg: rgb(var(--color-gray));
      }

      .chip[variant="info"] {
        --chip-bg: rgb(var(--color-dark));
      }

      .chip[variant="private"] {
        --chip-bg: rgb(var(--status-private));
      }

      ::slotted(svg) {
        width: 1rem;
        height: 1rem;
      }
    `;
  }

  updateStyles() {
    this.container = this.shadowRoot.querySelector(".chip");
    const variant = this.getAttribute("variant");

    variant
      ? this.container.setAttribute("variant", variant)
      : this.container.removeAttribute("variant");
  }

  attributeChangedCallback() {
    this.updateStyles();
  }

  connectedCallback() {
    this.render();
    this.updateStyles();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${Chip.styles}</style>
      <div class="chip">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("chip-component", Chip);
