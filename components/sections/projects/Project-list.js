import "../../ui/Optimized-image.js";

class ProjectList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
      .projects-list {
        margin: 3rem 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }

      .project-card {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        border-radius: 1rem;
        row-gap: 0.5rem;
        padding: 1.2rem;
        transition: all 0.6s ease;

        &:hover {
          .card-info {
            opacity: 1;
          }
        }

        img {
          width: 100%;
          height: 12rem;
          padding: 0.5rem;
          border-radius: 1rem;
          -o-object-fit: cover;
            object-fit: cover;
          -webkit-filter: var(--drop-shadow-small);
                  filter: var(--drop-shadow-small);
        }

        .project-title {
          font-size: 1.2em;
          font-weight: 700;
          display: flex;
          justify-content: center;
        }

        .project-pill-container {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          margin-top: 0.5rem;
        }

        .card-info {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          padding: 1rem;
          border-radius: inherit;
          background-color: rgb(var(--color-dark), 94%);
          color: rgb(var(--color-white));
          opacity: 0;
          transition: all 0.6s ease;

          .project-description {
            display: grid;
            place-content: center;
            width: 100%;
            height: 100%;

            p {
              font-size: 1em;
              font-weight: 400;
            }

            .pill-container {
              display: flex;
              -moz-column-gap: 1rem;
                  column-gap: 1rem;
              margin-top: 1rem;
            }
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
        ${ProjectList.styles}
      </style>
      <section class="projects-list">
        <card-component>
          <div class="project-card">
            <h2 class="project-title">Jhonvolt</h2>
            <optimized-image src="jhonvolt" alt="Jhonvolt"></optimized-image>
            <div class="project-pill-container">
              <chip-component variant="private">Privado</chip-component>
            </div>
            <div class="card-info">
              <div class="project-description">
                <p>Aplicación web desarrollada para la certificación y comercialización de productos eléctricos certificados.</p>
                <div class="pill-container">
                  <chip-component variant="info">
                    <svg>
                      <use href="/public/svg/sprite.svg#react"></use>
                    </svg>
                    <span>React.js</span>
                  </chip-component>
                  <chip-component variant="info">
                    <svg>
                      <use href="/public/svg/sprite.svg#next"></use>
                    </svg>
                    <span>Next.js</span>
                  </chip-component>
                </div>
              </div>
            </div>
          </div>
        </card-component>
        <card-component>
          <div class="project-card">
            <h2 class="project-title">Cotizador CP</h2>
            <optimized-image src="cotizador" alt="Cotizador CP"></optimized-image>
            <div class="project-pill-container">
              <chip-component variant="private">Privado</chip-component>
            </div>
            <div class="card-info">
              <div class="project-description">
                <p>Aplicación web creada para realizar cotizaciones de certificación de productos eléctricos, simplificando el proceso y agilizando el trabajo en equipo.</p>
                <div class="pill-container">
                  <chip-component variant="info">
                    <svg>
                      <use href="/public/svg/sprite.svg#angular"></use>
                    </svg>
                    <span>Angular</span>
                  </chip-component>
                  <chip-component variant="info">
                    <svg>
                      <use href="/public/svg/sprite.svg#tailwind"></use>
                    </svg>
                    <span>Tailwind</span>
                  </chip-component>
                </div>
              </div>
            </div>
          </div>
        </card-component>
      </section>
    `;
  }
}

customElements.define("project-list", ProjectList);
