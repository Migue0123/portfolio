import "../ui/Card.js";
import "../ui/Chip.js";
import "../sections/projects/Project-list.js";
import "../sections/projects/UpcomingProjects.js";

class ProjectsPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
      .projects-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-bottom: 3rem;
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
        ${ProjectsPage.styles}
      </style>
      <div>
        <section class="projects-header">
          <h1>Proyectos</h1>
          <p class="mb-0">Aquí puedes ver algunos de mis proyectos más destacados.</p>
        </section>
        <project-list></project-list>
        <upcoming-projects></upcoming-projects>
      </div>
    `;
  }
}

customElements.define("projects-page", ProjectsPage);
