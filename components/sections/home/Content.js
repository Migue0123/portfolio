import "../../ui/Optimized-image.js";

class Content extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
      .bio-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 1fr;
        gap: 1rem;

        .card-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 1rem;
        }

        .card-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-main {
          grid-row: 1 / span 2;

          .icon-card {
            width: 1.125rem;
            height: 1.125rem;
            cursor: pointer;
            opacity: 0;
            transition: all 0.6s ease;
            color: rgb(var(--color-white));

            &:hover {
              transform: scale(1.2);
              color: rgb(var(--color-sky));
              -webkit-filter: var(--drop-shadow-small);
                      filter: var(--drop-shadow-small);
            }

            &:active {
              transform: scale(1.1);
            }
          }

          &:hover .icon-card {
            opacity: 1;
          }
        }

        .projects-card {
          display: grid;
          place-content: center;
          height: 100%;

          .card-image {
            width: 19rem;
            height: 12rem;
            transition: all 0.6s ease;

            &:hover {
              -webkit-filter: drop-shadow(0 0 1.5rem rgb(var(--color-white), 20%));
                      filter: drop-shadow(0 0 1.5rem rgb(var(--color-white), 20%));
            }
          }

          img {
            -o-object-fit: cover;
              object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
          }

          .card-image-1 {
            transform: rotate(4deg);
          }

          .card-image-2 {
            transform: rotate(-4deg);
          }
        }

        .experience {
          padding: 1rem;

          .experience-title {
            span {
              font-weight: bold;
            }
          }

          .download {
            display: flex;
            justify-content: end;

            a {
              display: flex;
              align-items: center;
              -moz-column-gap: 0.5rem;
                  column-gap: 0.5rem;
              width: -webkit-fit-content;
              width: -moz-fit-content;
              width: fit-content;
              font-size: 0.9em;
              padding: 0.5rem 1rem;
              border: 1px solid rgba(var(--color-white), 0.2);
              border-radius: 0.25rem;
              background-color: rgb(var(--color-gray));
              color: rgb(var(--color-white));
              text-decoration: none;
              cursor: pointer;
              transition: all 0.6s ease;

              .icon {
                transition: all 0.6s ease;
              }

              &:hover {
                -webkit-filter: var(--drop-shadow);
                        filter: var(--drop-shadow);
                border: 1px solid rgba(var(--color-white), 0.4);
                transform: scale(1.05);
                color: rgb(var(--color-sky));
                border-color: rgb(var(--color-sky));

                .icon {
                  color: rgb(var(--color-sky));
                }
              }

              &:active {
                transform: scale(1.01);
              }
            }
          }
        }

        .tools {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 100%;
          padding: 1rem;

          svg {
            width: 40px;
            height: 40px;
            transition: all 0.6s ease;

            &:hover {
              transform: scale(1.2);
              -webkit-filter: var(--drop-shadow);
                      filter: var(--drop-shadow);
            }
          }

          .tools-icons {
            display: flex;
            place-content: center;
            -moz-column-gap: 2rem;
                column-gap: 2rem;
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
        ${Content.styles}
      </style>
      <section class="bio-content">
        <div class="card-main">
          <card-component>
            <div class="card-content">
              <div class="card-title">
                <chip-component variant="title">
                  <span>Proyectos</span>
                </chip-component>
                <a href="#projects" aria-label="Ir a proyectos">
                  <svg class="icon-card">
                    <use href="/public/svg/sprite.svg#external-link"></use>
                  </svg>
                </a>
              </div>
              <div class="projects-card">
              <optimized-image class="card-image card-image-1" src="jhonvolt" alt="Jhonvolt"></optimized-image>
              <optimized-image class="card-image card-image-2" src="cotizador" alt="Cotizador CP"></optimized-image>
              </div>
            </div>
          </card-component>
        </div>
        <card-component>
          <div class="card-content">
            <div class="card-title">
              <chip-component variant="title">
                <span>Experiencia</span>
              </chip-component>
            </div>
            <div class="experience">
              <p class="experience-title mb-0">
                <span>CIDET (2021 - 2025)</span>
              </p>
              <p>Desarrollador Frontend</p>
              <p>Desarrollo de aplicaciones web para dar solución y agilizar procesos del sector eléctrico.</p>
              <div class="download">
                <a href="/public/downloads/cv.pdf" target="_blank">
                  <svg class="icon">
                    <use href="/public/svg/sprite.svg#download"></use>
                  </svg>
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </card-component>
        <card-component>
          <div class="card-content">
            <div class="card-title">
              <chip-component variant="title">
                <span>Tecnologías</span>
              </chip-component>  
            </div>
            <div class="tools">
              <div class="tools-icons">
                <svg>
                  <use href="/public/svg/sprite.svg#html"></use>
                </svg>
                <svg>
                  <use href="/public/svg/sprite.svg#css"></use>
                </svg>
                <svg>
                  <use href="/public/svg/sprite.svg#js"></use>
                </svg>
              </div>
              <div class="tools-icons">
                <svg viewBox="0 0 242 256" fill="none" stroke-linecap="round" stroke-linejoin="round" >
                  <g clip-path="url(#angular__a)"><mask id="angular__b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"/></mask><g mask="url(#angular__b)"><path fill="url(#angular__c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/><path fill="url(#angular__d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/></g></g><defs><linearGradient id="angular__c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"/><stop offset=".2" stop-color="#F60A48"/><stop offset=".4" stop-color="#F20755"/><stop offset=".5" stop-color="#DC087D"/><stop offset=".7" stop-color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/></linearGradient><linearGradient id="angular__d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"><stop stop-color="#FF31D9"/><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"/></linearGradient><clipPath id="angular__a"><path fill="#fff" d="M0 0h242v256H0z"/></clipPath></defs>
                </svg>
                <svg>
                  <use href="/public/svg/sprite.svg#react"></use>
                </svg>
                <svg>
                  <use href="/public/svg/sprite.svg#git"></use>
                </svg>
              </div>
            </div>
          </div>
        </card-component>
      </section>
    `;
  }
}

customElements.define("home-content", Content);
