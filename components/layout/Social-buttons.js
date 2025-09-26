class SocialButtons extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
      .bio-links {
        margin-top: 1rem;
        display: flex;
        -moz-column-gap: 1.5rem;
            column-gap: 1.5rem;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${SocialButtons.styles}</style>
      <div class="bio-links">
        <button-icon
          href="https://www.linkedin.com/in/miguelhiguita/"
          target="_blank"
          aria="Ir a Linkedin"
        >
          <svg>
            <use href="/public/svg/sprite.svg#linkedin"></use>
          </svg>
        </button-icon>
        <button-icon
          href="https://github.com/Migue0123"
          target="_blank"
          aria="Ir a Github"
        >
          <svg>
            <use href="/public/svg/sprite.svg#github"></use>
          </svg>
        </button-icon>
        <button-icon
          href="mailto:higuita1900@gmail.com"
          target="_blank"
          aria="Enviar un Email"
        >
          <svg>
            <use href="/public/svg/sprite.svg#mail"></use>
          </svg>
        </button-icon>
      </div>
    `;
  }
}

customElements.define("social-buttons", SocialButtons);
