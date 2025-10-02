import "../ui/Button-icon.js";

class MenuComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.currentPage = window.location.hash.slice(1) || "home";
  }

  static get styles() {
    return /* css */ `
      .menu {
        display: flex;
        justify-content: center;
        position: fixed;
        left: 50%;
        bottom: 4%;
        z-index: 1000;
        margin: 0;
        padding: 0.5rem 2rem;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: -webkit-max-content;
        width: -moz-max-content;
        width: max-content;
        border: 1.5px solid rgba(var(--color-white), 0.2);
        border-radius: 1rem;
        background-color: rgb(var(--color-white), 10%);
        transform: translateX(-50%);
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
        transition: all 0.6s ease;

        @media (hover: hover) and (pointer: fine) {
          &:hover {
            transform: translateX(-50%) scale(1.05);
          }
        }

        .social-links {
          display: flex;
          flex-wrap: wrap;
          place-content: center;
          -moz-column-gap: 1.25rem;
          column-gap: 1.25rem;
          position: relative;

          .option-menu {
            transition: all 0.6s ease;

            @media (hover: hover) and (pointer: fine) {
              &:hover {
                translate: 0px -12px;
              }
            }
          }
        }

        @media (width <= 425px) {
          width: 100%;
          bottom: 0;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.updateStyle();

    window.addEventListener("route-changed", (e) => {
      this.currentPage = e.detail.page;
      this.updateStyle();
    });
  }

  updateStyle() {
    this.shadowRoot.querySelectorAll("button-icon").forEach((link) => {
      const linkPage = link.getAttribute("href")?.replace("#", "") || "";
      link.removeAttribute("active");

      if (linkPage === this.currentPage) {
        link.setAttribute("active", "");
      }
    });
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${MenuComponent.styles}</style>
      <menu class="menu">
        <article class="social-links">
          <button-icon class="option-menu" href="#home" tooltip="Inicio" aria="Ir al Inicio">
            <svg>
              <use href="/public/svg/sprite.svg#home"></use>
            </svg>
          </button-icon>
          <button-icon class="option-menu" href="#projects" tooltip="Proyectos" aria="Ir a Proyectos">
            <svg>
              <use href="/public/svg/sprite.svg#projects"></use>
            </svg>
          </button-icon>
          <button-icon class="option-menu" href="#about" tooltip="About" aria="Ir a Sobre mí">
            <svg>
              <use href="/public/svg/sprite.svg#about"></use>
            </svg>
          </button-icon>
        </article>
      </menu>
    `;
  }
}

customElements.define("menu-component", MenuComponent);
