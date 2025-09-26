class ButtonIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["href", "tooltip", "target", "active", "aria"];
  }

  static get styles() {
    return /* css */ `
      .button-icon {
        display: flex;
        flex-wrap: wrap;
        place-content: center;
        background-color: rgb(var(--color-gray), 70%);
        -webkit-backdrop-filter: blur(10px);
                backdrop-filter: blur(10px);
        cursor: pointer;
        width: 3rem;
        height: 3rem;
        border: 1px solid rgba(var(--color-white), 0.2);
        border-radius: 100%;
        transition: all 0.6s ease;

        ::slotted(svg) {
          width: 1rem;
          height: 1rem;
          color: rgb(var(--color-white));
          stroke-width: 2px;
          transition: all 0.6s ease;
        }

        &:hover {
          -webkit-filter: var(--drop-shadow);
                  filter: var(--drop-shadow);
          border: 1px solid rgba(var(--color-white), 0.4);
          transform: scale(1.2);
          color: rgb(var(--color-sky));
          border-color: rgb(var(--color-sky));

          ::slotted(svg) {
            color: rgb(var(--color-sky));
          }
        }

        &:active {
          transform: scale(1.01);
        }

        &::after {
          content: attr(data-tooltip);
          position: absolute;
          top: -70%;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgb(var(--color-gray));
          color: rgb(var(--color-sky));
          padding: 0.25rem 0.5rem;
          border: 1px solid rgba(var(--color-white), 0.2);
          border-radius: 0.25rem;
          font-size: 0.75em;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        &:hover::after {
          opacity: 1;
        }

        &[data-tooltip=""]::after {
          display: none;
        }

        &[active] {
          background-color: rgb(var(--color-gray));
          border: 1px solid rgb(var(--color-sky));
          ::slotted(svg) {
            color: rgb(var(--color-sky));
          }
        }
      }
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const href = this.getAttribute("href") ?? "#";
    const tooltip = this.getAttribute("tooltip") ?? "";
    const target = this.getAttribute("target") ?? "";
    const aria = this.getAttribute("aria") ?? "";
    const active = this.hasAttribute("active");

    this.shadowRoot.innerHTML = /* html */ `
      <style>${ButtonIcon.styles}</style>
      <a
        class="button-icon"
        href="${href}"
        data-tooltip="${tooltip}"
        ${active ? "active" : ""}
        ${target ? `target=${target}` : ""}
        ${aria ? `aria-label='${aria}'` : ""}
      >
        <slot></slot>
      </a>
    `;
  }
}

customElements.define("button-icon", ButtonIcon);
