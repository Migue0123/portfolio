class UpcomingProjects extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
      .upcoming-projects {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        row-gap: 2.5rem;
        text-align: center;

        .description {
          display: contents;
          font-size: 0.9em;
          text-align: center;
          row-gap: 1rem;

          .icon {
            width: 4rem;
            height: 4rem;
            stroke-width: 2px;
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
        ${UpcomingProjects.styles}
      </style>
      <card-component>
        <div class="upcoming-projects">
          <h5>Próximos proyectos en construcción</h5>
          <div class="description">
            <svg class="icon">
              <use href="/public/svg/sprite.svg#building"></use>
            </svg>
            <p class="mb-0">Estoy trabajando en nuevos proyectos que pronto estarán disponibles aquí. ¡Mantente atento!</p>
          </div>
        </div>
      </card-component>
    `;
  }
}

customElements.define("upcoming-projects", UpcomingProjects);
