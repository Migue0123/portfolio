import "../../layout/Social-buttons.js";
import "../../ui/Optimized-image.js";

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
      .bio-header {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: -webkit-fit-content;
        height: -moz-fit-content;
        height: fit-content;
        padding-bottom: 6rem;
        -moz-column-gap: 2rem;
        column-gap: 2rem;

        img {
          width: 11rem;
          height: 11rem;
        }

        .bio-image {
          -webkit-filter: var(--drop-shadow);
          filter: var(--drop-shadow);
          -webkit-mask-image: linear-gradient(
            rgb(var(--color-dark)) 60%,
            transparent
          );
          mask-image: linear-gradient(rgb(var(--color-dark)) 60%, transparent);
          border-radius: 100%;
          background-color: rgb(var(--color-sky));

          &[alt] {
            text-align: center;
          }
        }

        .bio-description {
          display: flex;
          flex-direction: column;
          place-content: center;
          max-width: 22rem;
          span {
            font-weight: bold;
          }
        }

        .available {
          display: flex;
          align-items: center;
          -moz-column-gap: 0.6rem;
          column-gap: 0.6rem;
          margin-top: 1rem;
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
          font-size: 0.75em;
          font-weight: 800;
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(var(--color-white), 0.2);
          background-color: transparent;
          .status-point {
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: rgb(var(--status-available));
          }
        }

        @media (width <= 768px) {
          flex-direction: column;
          text-align: center;
          align-items: center;
          padding: 0 1rem 6rem;

          .bio-card {
            display: contents;
          }
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>
        @import "/index.css";
        ${Header.styles}
      </style>
      <section class="bio-header">
        <optimized-image class="bio-image" src="miguel-higuita" alt="Miguel Higuita"></optimized-image>
        <div class="bio-card">
          <div class="bio-description">
            <h1>Miguel Higuita</h1>
            <p>Hola. Soy un <span>desarrollador web</span> de <span>Colombia.</span></p>
            <p class=mb-0>Aquí encontrarás mis proyectos destacados y habilidades técnicas en acción.</p>
          </div>
          <div class="bio-status">
            <p class="available">
              <span class="status-point"></span> Disponible para trabajar
            </p>
          </div>
          <social-buttons></social-buttons>
        </div>
      </section>
    `;
  }
}

customElements.define("home-header", Header);
