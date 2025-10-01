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
          height: 100%;
          padding: 0.5rem;
          border-radius: 1rem;
          -o-object-fit: cover;
          object-fit: cover;
          -webkit-filter: var(--drop-shadow-small);
          filter: var(--drop-shadow-small);
        }

        .project-title {
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

      @media (width <= 768px) {
        .projects-list {
          grid-template-columns: repeat(1, 1fr);
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
            <h5 class="project-title">Jhonvolt</h5>
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
            <h5 class="project-title">Cotizador CP</h5>
            <optimized-image src="cotizador" alt="Cotizador CP"></optimized-image>
            <div class="project-pill-container">
              <chip-component variant="private">Privado</chip-component>
            </div>
            <div class="card-info">
              <div class="project-description">
                <p>Aplicación web creada para realizar cotizaciones de certificación de productos eléctricos, simplificando el proceso y agilizando el trabajo en equipo.</p>
                <div class="pill-container">
                  <chip-component variant="info">
                    <svg viewBox="0 0 242 256" fill="none" stroke-linecap="round" stroke-linejoin="round" >
                      <g clip-path="url(#angular__a)"><mask id="angular__b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"/></mask><g mask="url(#angular__b)"><path fill="url(#angular__c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/><path fill="url(#angular__d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/></g></g><defs><linearGradient id="angular__c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"/><stop offset=".2" stop-color="#F60A48"/><stop offset=".4" stop-color="#F20755"/><stop offset=".5" stop-color="#DC087D"/><stop offset=".7" stop-color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/></linearGradient><linearGradient id="angular__d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"><stop stop-color="#FF31D9"/><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"/></linearGradient><clipPath id="angular__a"><path fill="#fff" d="M0 0h242v256H0z"/></clipPath></defs>
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
